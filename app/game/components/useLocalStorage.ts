"use client";

import { useEffect, useState, useCallback } from "react";

export function useLocalStorage(key: string): [string, (newValue: string) => void] {
  const [value, setValueState] = useState("");

  const setValue = useCallback(
    (newValue: string) => {
      window?.localStorage?.setItem(key, newValue);
      setValueState(newValue);
    },
    [key],
  );

  const sync = useCallback(() => {
    const initialValue = window?.localStorage?.getItem(key) || "";
    setValueState(initialValue);
  }, [key, setValueState]);

  // must put this in a useEffect to avoid "window is not defined" error when deploying on vercel
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    sync();
  }, []);

  return [value, setValue];
}
