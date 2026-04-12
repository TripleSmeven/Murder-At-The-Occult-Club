"use client";

import { JSX, ReactNode } from "react";
import { ObjectivesProvider } from "./ObjectivesContext";
import { GlobalNotesProvider } from "./GlobalNotesContext";
import { StageProvider } from "./StageContext";

interface GameContextProps {
  children: ReactNode;
}

export function GameContext({ children }: GameContextProps): JSX.Element {
  return (
    <StageProvider>
      <GlobalNotesProvider>
        <ObjectivesProvider>{children}</ObjectivesProvider>
      </GlobalNotesProvider>
    </StageProvider>
  );
}
