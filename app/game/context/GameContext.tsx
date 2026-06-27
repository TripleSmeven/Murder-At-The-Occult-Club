"use client";

import { JSX, ReactNode } from "react";
import { ObjectivesProvider } from "./ObjectivesContext";
import { ProgressProvider } from "../components/ProgressContext";
import { GlobalNotesProvider } from "./GlobalNotesContext";
import { StageProvider } from "./StageContext";
import { TabContextProvider } from "./TabContext";

type GameContextProps = {
  chapter?: number;
  defaultTab: string;
  children: ReactNode;
};

export function GameContext({
  chapter = 1,
  defaultTab,
  children,
}: GameContextProps): JSX.Element {
  return (
    <StageProvider chapter={chapter}>
      <GlobalNotesProvider chapter={chapter}>
        <ProgressProvider chapter={chapter}>
          <ObjectivesProvider chapter={chapter}>
            <TabContextProvider defaultTab={defaultTab}>
              {children}
            </TabContextProvider>
          </ObjectivesProvider>
        </ProgressProvider>
      </GlobalNotesProvider>
    </StageProvider>
  );
}
