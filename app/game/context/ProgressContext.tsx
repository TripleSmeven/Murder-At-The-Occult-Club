"use client";

import { createContext, JSX, ReactNode, useCallback, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Handles game progress tracking (solved sections)
 */
export const ProgressContext = createContext<{
  isSolved: (key: ProgressKeys) => boolean;
  setSolved: (key: ProgressKeys, value?: boolean) => void;
}>({
  isSolved: (_key: ProgressKeys) => false,
  setSolved: (_key: ProgressKeys, _value?: boolean) => {},
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
  GROUP_CHAT_2 = "groupChat2",
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

  const progressStateJson = useMemo(() => {
    try {
      return JSON.parse(progressState) as Record<ProgressKeys, boolean>;
    } catch {
      return {} as Record<ProgressKeys, boolean>;
    }
  }, [progressState]);

  const isSolved = useCallback(
    (key: ProgressKeys) => {
      const progress = progressStateJson;
      return progress[key];
    },
    [progressStateJson],
  );

  const setSolved = useCallback(
    (key: ProgressKeys, value: boolean = true) => {
      const progress = progressStateJson;
      const updated = { ...progress, [key]: value };
      setProgressState(JSON.stringify(updated));
    },
    [setProgressState, progressStateJson],
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
