"use client";

import { JSX, ReactNode } from "react";
import { ObjectivesProvider } from "../context/ObjectivesContext";
import { ProgressProvider } from "../context/ProgressContext";
import { GlobalNotesProvider } from "../context/GlobalNotesContext";
import { StageProvider } from "../context/StageContext";

interface GameContextProps {
  chapter?: number;
  children: ReactNode;
}

export function GameContext({
  chapter = 1,
  children,
}: GameContextProps): JSX.Element {
  return (
    <StageProvider chapter={chapter}>
      <GlobalNotesProvider chapter={chapter}>
        <ProgressProvider chapter={chapter}>
          <ObjectivesProvider chapter={chapter}>{children}</ObjectivesProvider>
        </ProgressProvider>
      </GlobalNotesProvider>
    </StageProvider>
  );
}
