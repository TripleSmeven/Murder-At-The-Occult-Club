"use client";

import { createContext, JSX, ReactNode, useCallback, useEffect, useState } from "react";

/**
 * Allows sharing of game answers from CustomPicker components across all game components
 */
export const AnswersContext = createContext({
  answers: {} as Record<string, string>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAnswer: (_key: string, _value: string) => {},
});

const ANSWERS_STORAGE_KEY = "game-answers";

interface AnswersProviderProps {
  children: ReactNode;
}

export function AnswersProvider({ children }: AnswersProviderProps): JSX.Element {
  const [answers, setAnswersState] = useState<Record<string, string>>({});
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedAnswers = window?.localStorage?.getItem(ANSWERS_STORAGE_KEY);
    let initialAnswers: Record<string, string> = {};
    if (storedAnswers) {
      try {
        initialAnswers = JSON.parse(storedAnswers);
      } catch {
        initialAnswers = {};
      }
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAnswersState(initialAnswers);
    setIsHydrated(true);
  }, []);

  const setAnswer = useCallback((key: string, value: string) => {
    setAnswersState((prev) => {
      const updated = { ...prev, [key]: value };
      window?.localStorage?.setItem(ANSWERS_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  // Avoid hydration mismatch by not rendering children until hydrated (from AI)
  if (!isHydrated) {
    return <>{children}</>;
  }

  return (
    <AnswersContext.Provider value={{ answers, setAnswer }}>{children}</AnswersContext.Provider>
  );
}
