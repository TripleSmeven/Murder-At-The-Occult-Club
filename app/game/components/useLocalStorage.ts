import { useEffect, useState } from "react";

export function useLocalStorage(key: string): [string, (newValue: string) => void] {
  const [value, setValueState] = useState("");

  const setValue = (newValue: string) => {
    setValueState(newValue);
    window?.localStorage?.setItem(key, newValue);
  };

  // must put this in a useEffect to avoid "window is not defined" error when deploying on vercel
  useEffect(() => {
    const initialValue = window?.localStorage?.getItem(key) || "";
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValueState(initialValue);
  }, []); // run once

  return [value, setValue];
}
