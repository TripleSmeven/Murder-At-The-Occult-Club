"use client";

import { createContext, JSX, ReactNode, useCallback, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Allows sharing of player stage and chapter across all game components
 */
export const StageContext = createContext({
  currentStage: 0,
  chapter: 1,
  setStage: (newStage: number) => {},
});

const STAGE_STORAGE_KEY = "player-stage";

interface StageProviderProps {
  chapter: number;
  children: ReactNode;
}

export function StageProvider({
  chapter,
  children,
}: StageProviderProps): JSX.Element {
  const [stageString, setStageString] = useLocalStorage(
    STAGE_STORAGE_KEY,
    chapter.toString(),
  );
  const currentStage = stageString ? parseInt(stageString, 10) : 0;

  const setStage = useCallback(
    (newStage: number) => {
      setStageString(newStage.toString());
    },
    [setStageString],
  );

  const providerValue = useMemo(
    () => ({ currentStage, chapter, setStage }),
    [currentStage, chapter, setStage],
  );

  return (
    <StageContext.Provider value={providerValue}>
      {children}
    </StageContext.Provider>
  );
}
