"use client";

import { createContext, JSX, ReactNode } from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * Allows sharing of global notes across all notes
 */
export const GlobalNotesContext = createContext({
  globalNotes: "",
  setGlobalNotes: (newValue: string) => {},
});

interface GlobalNotesProviderProps {
  children: ReactNode;
}

export function GlobalNotesProvider({ children }: GlobalNotesProviderProps): JSX.Element {
  const [globalNotes, setGlobalNotes] = useLocalStorage("globalNotes");

  return (
    <GlobalNotesContext.Provider value={{ globalNotes, setGlobalNotes }}>
      {children}
    </GlobalNotesContext.Provider>
  );
}
