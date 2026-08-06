"use client";

import { useEffect, useState, useCallback } from "react";

type useLocalStorageReturn = [string, (newValue: string) => void];

/**
 *
 * @param key main identifier
 * @param prefix should be the chapter so that same keys dont clash across chapters
 * @returns
 */
export function useLocalStorage(key: string, prefix: string | null = "1"): useLocalStorageReturn {
  const [value, setValueState] = useState("");
  let fullKey = key;
  if (prefix) {
    fullKey = `${prefix}-${key}`;
  }

  const setValue = useCallback(
    (newValue: string) => {
      window?.localStorage?.setItem(fullKey, newValue);
      setValueState(newValue);
    },
    [fullKey],
  );

  const sync = useCallback(() => {
    const initialValue = window?.localStorage?.getItem(fullKey) || "";
    setValueState(initialValue);
  }, [fullKey, setValueState]);

  // must put this in a useEffect to avoid "window is not defined" error when deploying on vercel
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    sync();
  }, []);

  return [value, setValue];
}
