"use client";

import { JSX, ReactNode } from "react";
import { ObjectivesProvider } from "./ObjectivesContext";
import { ProgressProvider } from "../components/ProgressContext";
import { GlobalNotesProvider } from "./GlobalNotesContext";
import { StageProvider } from "./StageContext";

interface GameContextProps {
  chapter?: number;
  children: ReactNode;
}

export function GameContext({ chapter = 1, children }: GameContextProps): JSX.Element {
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
