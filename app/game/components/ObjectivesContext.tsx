"use client";

import { createContext, JSX, ReactNode, useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * Allows sharing of game answers from CustomPicker components across all game components
 */
export const ObjectivesContext = createContext({
  answers: {} as Record<string, string>,
  progress: {} as Record<string, string>,
  setAnswer: (_key: string, _value: string) => {},
  setProgress: (_key: ProgressKeys, _value: string) => {},
});

const ANSWERS_STORAGE_KEY = "game-answers";
const PROGRESS_STORAGE_KEY = "game-progress";

export enum ProgressKeys {
  POLICE_REPORT = "policeReport",
  TEXT_CONVERSATIONS = "textConversations",
  EMAILS = "emails",
  ONLINE_ORDERS = "onlineOrders",
  SOLVE_THE_CASE = "solveTheCase",
}

interface ObjectivesProviderProps {
  children: ReactNode;
}

export function ObjectivesProvider({ children }: ObjectivesProviderProps): JSX.Element {
  const [answersState, setAnswersState] = useLocalStorage(ANSWERS_STORAGE_KEY);
  const [progressState, setProgressState] = useLocalStorage(PROGRESS_STORAGE_KEY);

  const getAnswersAsJson = useCallback(() => {
    let answers = {};
    try {
      answers = JSON.parse(answersState);
    } catch (e) {
      console.log("failed to parse answersState");
    }
    return answers;
  }, [answersState]);

  const getProgressAsJson = useCallback(() => {
    let progress = {};
    try {
      progress = JSON.parse(progressState);
    } catch (e) {
      console.log("failed to parse progressState");
    }
    return progress;
  }, [progressState]);

  const setAnswer = useCallback(
    (key: string, value: string) => {
      const answers = getAnswersAsJson();
      const updated = { ...answers, [key]: value };
      setAnswersState(JSON.stringify(updated));
    },
    [setAnswersState, getAnswersAsJson],
  );

  const setProgress = useCallback(
    (key: ProgressKeys, value: string) => {
      const progress = getProgressAsJson();
      const updated = { ...progress, [key]: value };
      setProgressState(JSON.stringify(updated));
    },
    [setProgressState, getProgressAsJson],
  );

  return (
    <ObjectivesContext.Provider
      value={{ answers: getAnswersAsJson(), setAnswer, progress: getProgressAsJson(), setProgress }}
    >
      {children}
    </ObjectivesContext.Provider>
  );
}
