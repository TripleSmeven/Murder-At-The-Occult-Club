"use client";

import { createContext, JSX, ReactNode } from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * Allows sharing of player stage across all game components
 */
export const StageContext = createContext({
  currentStage: 0,
  setStage: (newStage: number) => {},
});

const STAGE_STORAGE_KEY = "player-stage";
const DEFAULT_STAGE = "0";

interface StageProviderProps {
  children: ReactNode;
}

export function StageProvider({ children }: StageProviderProps): JSX.Element {
  const [stageString, setStageSstring] = useLocalStorage(STAGE_STORAGE_KEY);
  const currentStage = stageString ? parseInt(stageString, 10) : parseInt(DEFAULT_STAGE, 10);

  const setStage = (newStage: number) => {
    setStageSstring(newStage.toString());
  };

  return (
    <StageContext.Provider value={{ currentStage, setStage }}>
      {children}
    </StageContext.Provider>
  );
}
