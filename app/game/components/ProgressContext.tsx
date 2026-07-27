"use client";

import { createContext, JSX, ReactNode, useCallback } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Handles game progress tracking (solved sections)
 */
export const ProgressContext = createContext<{
  isSolved: (key: ProgressKeys) => boolean;
  setSolved: (key: ProgressKeys, value: boolean) => void;
}>({
  isSolved: (_key: ProgressKeys) => false,
  setSolved: (_key: ProgressKeys, _value: boolean) => {},
});

const PROGRESS_STORAGE_KEY = "game-progress";

export enum ProgressKeys {
  POLICE_REPORT = "policeReport",
  TEXT_CONVERSATIONS = "textConversations",
  EMAILS = "emails",
  ONLINE_ORDERS = "onlineOrders",
  SOLVE_THE_CASE = "solveTheCase",
  SOLVE_THE_CASE_2 = "solveTheCase2",

  GROUP_CHAT = "groupChat",
  VOICEMAIL = "voicemail",
  KAISER_TIMES_UNLOCKED = "kaiserTimesUnlocked",
  CONSTELLATION_PHOTO_UNLOCKED = "constellationPhotoUnlocked",
  // if the player solved the locked PDF puzzle, not if they unlocked the PDF tab itself
  LOCKED_PDF_UNLOCKED = "lockedPdfUnlocked",
}

interface ProgressProviderProps {
  chapter: number;
  children: ReactNode;
}

export function ProgressProvider({
  chapter,
  children,
}: ProgressProviderProps): JSX.Element {
  const [progressState, setProgressState] = useLocalStorage(
    PROGRESS_STORAGE_KEY,
    chapter.toString(),
  );

  const getProgressAsJson = useCallback(() => {
    let progress = {} as Record<ProgressKeys, boolean>;
    try {
      progress = JSON.parse(progressState);
    } catch {
      // no op;
    }
    return progress;
  }, [progressState]);

  const isSolved = useCallback(
    (key: ProgressKeys) => {
      const progress = getProgressAsJson();
      return progress[key];
    },
    [getProgressAsJson],
  );

  const setSolved = useCallback(
    (key: ProgressKeys, value: boolean) => {
      const progress = getProgressAsJson();
      const updated = { ...progress, [key]: value };
      setProgressState(JSON.stringify(updated));
    },
    [setProgressState, getProgressAsJson],
  );

  return (
    <ProgressContext.Provider
      value={{
        isSolved,
        setSolved,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}
