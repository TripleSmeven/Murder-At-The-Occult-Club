"use client";

import { createContext, JSX, ReactNode } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * Allows sharing of global notes across all notes
 */
export const GlobalNotesContext = createContext({
  globalNotes: "",
  setGlobalNotes: (newValue: string) => {},
});

interface GlobalNotesProviderProps {
  chapter: number;
  children: ReactNode;
}

export function GlobalNotesProvider({ chapter, children }: GlobalNotesProviderProps): JSX.Element {
  const [globalNotes, setGlobalNotes] = useLocalStorage(`globalNotes`, chapter.toString());

  return (
    <GlobalNotesContext.Provider value={{ globalNotes, setGlobalNotes }}>
      {children}
    </GlobalNotesContext.Provider>
  );
}
