import { createContext } from "react";

/**
 * Allows sharing of global notes across all notes
 */
export const GlobalNotesContext = createContext({
  globalNotes: "",
  setGlobalNotes: (newValue: string) => {},
});
