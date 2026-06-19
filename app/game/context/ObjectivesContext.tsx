"use client";

import { createContext, JSX, ReactNode, useCallback } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Allows sharing of game answers from CustomPicker components across all game components
 */
export const ObjectivesContext = createContext<{
  answers: Record<string, string>;
  setAnswer: (key: string, value: string) => void;
}>({
  answers: {},
  setAnswer: (_key: string, _value: string) => {},
});

const ANSWERS_STORAGE_KEY = "game-answers";

interface ObjectivesProviderProps {
  chapter: number;
  children: ReactNode;
}

export function ObjectivesProvider({ chapter, children }: ObjectivesProviderProps): JSX.Element {
  const [answersState, setAnswersState] = useLocalStorage(ANSWERS_STORAGE_KEY, chapter.toString());

  const getAnswersAsJson = useCallback(() => {
    let answers = {};
    try {
      answers = JSON.parse(answersState);
    } catch {
      // no op;
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

  return (
    <ObjectivesContext.Provider
      value={{
        answers: getAnswersAsJson(),
        setAnswer,
      }}
    >
      {children}
    </ObjectivesContext.Provider>
  );
}
