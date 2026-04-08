"use client";

import { JSX, ReactNode } from "react";
import { AnswersProvider } from "./AnswersContext";
import { GlobalNotesProvider } from "./GlobalNotesContext";
import { StageProvider } from "./StageContext";

interface GameContextProps {
  children: ReactNode;
}

export function GameContext({ children }: GameContextProps): JSX.Element {
  return (
    <StageProvider>
      <GlobalNotesProvider>
        <AnswersProvider>
          {children}
        </AnswersProvider>
      </GlobalNotesProvider>
    </StageProvider>
  );
}
