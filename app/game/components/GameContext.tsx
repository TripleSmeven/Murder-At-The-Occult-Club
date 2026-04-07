"use client";

import { ReactNode } from "react";
import { GlobalNotesProvider } from "./GlobalNotesContext";
import { StageProvider } from "./StageContext";

interface GameContextProps {
  children: ReactNode;
}

export function GameContext({ children }: GameContextProps): JSX.Element {
  return (
    <StageProvider>
      <GlobalNotesProvider>
        {children}
      </GlobalNotesProvider>
    </StageProvider>
  );
}
