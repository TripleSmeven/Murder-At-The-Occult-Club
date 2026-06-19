import { useState, useEffect } from "react";

import styles from "./VictoryScreen.module.css";

export const VictoryScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // screen renders, then triggers 1st text after 2 seconds. Then 3 seconds after second texts comes in. Finally after 5 more seconds, overlay fades out.
  useEffect(() => {
    const timer = setTimeout(() => setShowFirstText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showFirstText) {
      const timer = setTimeout(() => setShowSecondText(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [showFirstText]);

  useEffect(() => {
    if (showSecondText) {
      const timer = setTimeout(() => setFadeOut(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSecondText]);

  useEffect(() => {
    if (fadeOut) {
      onComplete();
    }
  }, [fadeOut, onComplete]);

  return (
    <div
      className={styles.victoryOverlay}
      style={{
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <div
        className={styles.victoryTitle}
        style={{
          opacity: showFirstText ? 1 : 0,
        }}
      >
        Congratulations
      </div>
      <div
        className={styles.victorySubtitle}
        style={{
          opacity: showSecondText ? 1 : 0,
        }}
      >
        You solved the case!
      </div>
    </div>
  );
};
