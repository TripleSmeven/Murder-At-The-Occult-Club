"use client";

import { createContext, JSX, ReactNode, useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * Allows sharing of game answers from CustomPicker components across all game components
 */

interface ObjectivesContentProps {
  answers: Record<string, string>;
  setAnswer: (_key: string, _value: string) => void;
  getProgress: (_key: ProgressKeys) => boolean;
  setProgress: (_key: ProgressKeys, _value: boolean) => void;
}
export const ObjectivesContext = createContext<ObjectivesContentProps>({
  answers: {},
  setAnswer: (_key: string, _value: string) => {},
  getProgress: (_key: ProgressKeys) => false,
  setProgress: (_key: ProgressKeys, _value: boolean) => {},
});

const ANSWERS_STORAGE_KEY = "game-answers";
const PROGRESS_STORAGE_KEY = "game-progress";

export enum ProgressKeys {
  POLICE_REPORT = "policeReport",
  TEXT_CONVERSATIONS = "textConversations",
  EMAILS = "emails",
  ONLINE_ORDERS = "onlineOrders",
  SOLVE_THE_CASE = "solveTheCase",
  SOLVE_THE_CASE_2 = "solveTheCase2",
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

  const setAnswer = useCallback(
    (key: string, value: string) => {
      const answers = getAnswersAsJson();
      const updated = { ...answers, [key]: value };
      setAnswersState(JSON.stringify(updated));
    },
    [setAnswersState, getAnswersAsJson],
  );

  const getProgressAsJson = useCallback(() => {
    let progress = {} as Record<ProgressKeys, boolean>;
    try {
      progress = JSON.parse(progressState);
    } catch (e) {
      console.log("failed to parse progressState");
    }
    return progress;
  }, [progressState]);

  const getProgress = useCallback(
    (key: ProgressKeys) => {
      const progress = getProgressAsJson();
      return progress[key];
    },
    [getProgressAsJson],
  );

  const setProgress = useCallback(
    (key: ProgressKeys, value: boolean) => {
      const progress = getProgressAsJson();
      const updated = { ...progress, [key]: value };
      setProgressState(JSON.stringify(updated));
    },
    [setProgressState, getProgressAsJson],
  );

  return (
    <ObjectivesContext.Provider
      value={{ answers: getAnswersAsJson(), setAnswer, getProgress, setProgress }}
    >
      {children}
    </ObjectivesContext.Provider>
  );
}
