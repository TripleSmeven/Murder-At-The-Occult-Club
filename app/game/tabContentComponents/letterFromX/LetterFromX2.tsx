import { useContext } from "react";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { StageContext } from "../../context/StageContext";
import { Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import styles from "./LetterFromX.module.css";
import { ObjectivesContext } from "../../context/ObjectivesContext";
import { ProgressContext, ProgressKeys } from "../../components/ProgressContext";

export default function LetterFromX2() {
  const evidence = (
    <div className={`${styles.letter}`}>
      <div className={styles.page1}>
        <div className={styles.line}>Hello.</div>
        <div className={styles.line}>{`You've deduced much. You're almost there.`}</div>
        <div className={styles.line}>{"You now have everything you need to solve the case."}</div>
        <div className={styles.line}>
          {
            "Analyze the remaining clues, and answer the question: How did Zach Cunningham really die, and why did the murderer do it?"
          }
        </div>
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
              "Sleeping Medication",
              "The Oblivion",
              "A Curse",
              "A Ritual",
            ],
            color: Color.BLUE,
          },
        ],
      },
      {
        title: "Who is the murderer?",
        questions: [
          {
            question: "",
            answer: "Sarah Findley",
            color: Color.BLUE,
          },
        ],
      },
      {
        title: "Why did the murderer do it?",
        questions: [
          {
            question: "Reason",
            answer: "Revenge",
            answers: [
              "Fame",
              "Revenge",
              "Ascension",
              "Knowledge",
              "Financial Gain",
              "Moral Justice",
              "Sacrifice",
              "Accident",
            ],
            color: Color.BLUE,
          },
          {
            question: "Related person",
            answer: "Scott Wagner",
            answers: [
              "Miranda Meadows",
              "Kyle Singh",
              "Gina Moore",
              "Evelyn Samson",
              "Scott Wagner",
              "Greg Carlson",
              "Maria Sanchez",
              "Andrew Wolfe",
            ],
            color: Color.BLUE,
          },
        ],
      },
    ],
  };

  // move to stage 5 if user solves the case
  const { currentStage, setStage } = useContext(StageContext);
  const { setSolved } = useContext(ProgressContext);

  const onCorrect = () => {
    if (currentStage === 3) {
      setStage(4);
      setSolved(ProgressKeys.SOLVE_THE_CASE, true);
    }
  };

  return <TabContentBase evidence={evidence} objectivesJson={objectives} onCorrect={onCorrect} />;
}
