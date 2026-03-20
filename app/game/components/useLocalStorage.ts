import { useEffect, useState, useRef, useCallback } from "react";

export function useLocalStorage(
  key: string,
  debounceMs: number = 500,
): [string, (newValue: string) => void] {
  const [value, setValueState] = useState("");
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const setValue = useCallback(
    (newValue: string) => {
      setValueState(newValue);

      // Clear previous timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      // Set new debounced write to localStorage
      debounceTimer.current = setTimeout(() => {
        window?.localStorage?.setItem(key, newValue);
      }, debounceMs);
    },
    [key, debounceMs],
  );

  const sync = () => {
    const initialValue = window?.localStorage?.getItem(key) || "";
    setValueState(initialValue);
  };

  // must put this in a useEffect to avoid "window is not defined" error when deploying on vercel
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    sync();
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return [value, setValue];
}
