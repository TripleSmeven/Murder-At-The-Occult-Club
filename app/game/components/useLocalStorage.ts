import { useState } from "react";

export function useLocalStorage(key: string): [string, (newValue: string) => void] {
  const initialValue = window?.localStorage?.getItem(key) || "";
  const [value, setValueState] = useState(initialValue);

  const setValue = (newValue: string) => {
    setValueState(newValue);
    window?.localStorage?.setItem(key, newValue);
  };

  return [value, setValue];
}
