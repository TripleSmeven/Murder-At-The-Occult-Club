import { useContext, useState, useEffect } from "react";
import CustomCarousel from "../../components/CustomCarousel";
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

export default function LetterFromX2() {
  const [showVictoryScreen, setShowVictoryScreen] = useState(false);
  const item1 = (
    <div className={`${styles.letter}`}>
      <div className={styles.page1}>
        <div className={styles.line}>Hello.</div>
        <div className={styles.line}>{`You've deduced much. You're almost there.`}</div>
        <div
          className={styles.line}
        >{`I've sent you one last piece of evidence. It ties it all together.`}</div>
        <div
          className={styles.line}
        >{`And once you've figured it out, it's time to finally put this case to rest.`}</div>
        <div className={styles.line}>Who killed Zach Cunningham? How did they do it? And why?</div>
        <div className={styles.line}>{"You have everything you need to solve the case."}</div>
        <div className={styles.line}>{"- X"}</div>
      </div>
    </div>
  );

  const objectives: ObjectivesJson = {
    heading: "Solve the case",
    sections: [
      {
        title: "What caused Zach Cunningham's death?",
        questions: [
          {
            question: "",
            answer: "Allergic Reaction",
            answers: [
              "Poisoning",
              "Manual Strangulation",
              "Allergic Reaction",
              "The Oblivion",
              "Sleeping Medication",
              "Other",
            ],
            color: Color.BLUE,
          },
        ],
      },
      {
        title: "Why did perpetrator do it?",
        questions: [
          {
            question: "Reason",
            answer: "Revenge",
            answers: [
              "Fame",
              "Revenge",
              "Ascension",
              "Science",
              "Financial Gain",
              "Sacrifice",
              "Accident",
            ],
            color: Color.BLUE,
          },
          {
            question: "Related Person",
            answer: "Scott Wagner",
            answers: [
              "Miranda Meadows",
              "Kyle Singh",
              "Gina Moore",
              "Evelyn Samson",
              "Scott Wagner",
              "Greg Carlson",
              "Maria Sanchez",
            ],
            color: Color.BLUE,
          },
        ],
      },
    ],
  };

  const evidenceComponent = <CustomCarousel items={[item1]} />;

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
    setStage(5); // unlocks afterword
    setProgress(ProgressKeys.SOLVE_THE_CASE, true);
    setShowVictoryScreen(false); // unmount the victory overlay after its done.
  };

  return (
    <>
      {showVictoryScreen && <VictoryScreen onComplete={handleVictoryComplete} />}
      <TabContentBase evidence={evidenceComponent} objectives={objectives} onCorrect={onCorrect} />
    </>
  );
}
