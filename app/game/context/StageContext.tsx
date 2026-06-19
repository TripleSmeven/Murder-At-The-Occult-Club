"use client";

import { createContext, JSX, ReactNode } from "react";
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

export function StageProvider({ chapter, children }: StageProviderProps): JSX.Element {
  const [stageString, setStageSstring] = useLocalStorage(STAGE_STORAGE_KEY, chapter.toString());
  const currentStage = stageString ? parseInt(stageString, 10) : 0;

  const setStage = (newStage: number) => {
    setStageSstring(newStage.toString());
  };

  return (
    <StageContext.Provider value={{ currentStage, chapter, setStage }}>
      {children}
    </StageContext.Provider>
  );
}
