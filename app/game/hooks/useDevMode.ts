import { useLocalStorage } from "./useLocalStorage";

export function useDevMode() {
  const [devMode] = useLocalStorage("devMode", null);

  return devMode;
}
