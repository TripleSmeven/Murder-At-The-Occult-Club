"use client";

import {
  FormEvent,
  ReactNode,
  useContext,
  useId,
  useState,
} from "react";
import {
  ProgressContext,
  ProgressKeys,
} from "../../components/ProgressContext";
import styles from "./LockedPdf.module.css";

interface LockedPdfProps {
  children: ReactNode;
  password: string;
  progressKey: ProgressKeys;
}

/**
 * Displays a blurred PDF preview until the supplied password is entered.
 * Unlocking is persisted in the game progress under `progressKey`.
 */
export default function LockedPdf({
  children,
  password,
  progressKey,
}: LockedPdfProps) {
  const { isSolved, setSolved } = useContext(ProgressContext);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [hasIncorrectPassword, setHasIncorrectPassword] = useState(false);
  const passwordInputId = useId();
  const isUnlocked = isSolved(progressKey);

  function unlockPdf(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (enteredPassword === password) {
      setSolved(progressKey, true);
      setHasIncorrectPassword(false);
      return;
    }

    setHasIncorrectPassword(true);
  }

  return (
    <div className={styles.lockedPdf}>
      <div className={isUnlocked ? undefined : styles.blurredContent}>
        {children}
      </div>

      {!isUnlocked && (
        <div className={styles.lockOverlay}>
          <form className={styles.passwordForm} onSubmit={unlockPdf}>
            <label htmlFor={passwordInputId}>Enter password to unlock PDF</label>
            <input
              autoComplete="off"
              id={passwordInputId}
              onChange={(event) => {
                setEnteredPassword(event.target.value);
                setHasIncorrectPassword(false);
              }}
              type="password"
              value={enteredPassword}
            />
            <button type="submit">Unlock</button>
            {hasIncorrectPassword && (
              <p className={styles.error} role="alert">
                Incorrect password.
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
