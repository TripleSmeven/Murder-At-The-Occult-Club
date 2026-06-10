import { useContext, useState, useEffect } from "react";
import { ObjectivesJson } from "../../components/ObjectivesJson";
import { StageContext } from "../../components/StageContext";
import { Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import styles from "./LetterFromX.module.css";
import { ObjectivesContext, ProgressKeys } from "../../components/ObjectivesContext";

const VictoryScreen = ({ onComplete }: { onComplete: () => void }) => {
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

export default function LetterFromX3() {
  const [showVictoryScreen, setShowVictoryScreen] = useState(false);
  const evidence = (
    <div className={`${styles.letter}`}>
      <div className={styles.page1}>
        <div className={styles.line}>{`So it was the new girl. A tricky one, isn't she?`}</div>
        <div className={styles.line}>
          {
            "One last thing to wrap this all up. Do what the police couldn't. Identity the exact ingredients used in the Elixir of Oblivion."
          }
        </div>
        <div className={styles.line}>{"- X"}</div>
      </div>
    </div>
  );

  const objectives: ObjectivesJson = {
    heading: "The Elixir of Oblivion",
    sections: [
      {
        title: "Who brewed the Elixir of Oblivion?",
        questions: [
          {
            question: "",
            answer: "Andrew Wolfe",
            color: Color.ORANGE,
          },
        ],
      },

      {
        title: "Identity each ingredient used in the Elixir of Oblivion:",
        questions: [
          {
            question: "Animal fur",
            answer: "Cat",
            answers: ["Cat", "Dog", "Gerbil", "Rabbit", "Fox", "Beaver"],
            color: Color.ORANGE,
          },
          {
            question: "Bird feather",
            answer: "Duck",
            answers: ["Goose", "Duck", "Pigeon", "Swan", "Parrot"],
            color: Color.ORANGE,
          },
          {
            question: "Sodium Compound",
            answer: "Chile Saltpeter",
            answers: ["Salt", "Fertilizer", "Baking Soda", "Bleach", "Chile Saltpeter"],
            color: Color.ORANGE,
          },
          {
            question: "Liquid energy",
            answer: "Energy Drink",
            answers: ["Tea", "Coffee", "Energy Drink"],
            color: Color.ORANGE,
          },
          {
            question: "Flower",
            answer: "Chamomile",
            answers: [
              "Sunflower",
              "Daisy",
              "Chamomile",
              "Purple Orchid",
              "White Buttercup",
              "Chrysanthemum",
            ],
            color: Color.ORANGE,
          },
        ],
      },
    ],
  };

  // move to stage 5 if user solves the case
  const { currentStage, setStage } = useContext(StageContext);
  const { setProgress } = useContext(ObjectivesContext);

  const onCorrect = () => {
    if (currentStage === 4) {
      setShowVictoryScreen(true);
    }
  };

  // triggers AFTER the victory overlay plays
  const handleVictoryComplete = () => {
    setStage(5); // unlocks final letter
    setProgress(ProgressKeys.SOLVE_THE_CASE_2, true);
    setShowVictoryScreen(false); // unmount the victory overlay after its done.
  };

  return (
    <>
      {showVictoryScreen && <VictoryScreen onComplete={handleVictoryComplete} />}
      <TabContentBase evidence={evidence} objectives={objectives} onCorrect={onCorrect} />
    </>
  );
}
