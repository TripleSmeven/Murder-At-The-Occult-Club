import { useContext } from "react";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { StageContext } from "../../context/StageContext";
import { CHAPTER1_NAMES, Color } from "../../components/WordPicker";
import LetterFromX from "./LetterFromX";
import { ObjectivesContext } from "../../context/ObjectivesContext";
import { ProgressContext, ProgressKeys } from "../../components/ProgressContext";
import TabContentBase from "../TabContentBase";

export default function LetterFromX2() {
  const lines = [
    "Hello.",
    `You've deduced much. You're almost there.`,
    "You now have everything you need to solve the case.",
    "Analyze the remaining clues, and answer the question: How did Zach Cunningham really die, and why did the murderer do it?",
    "- X",
  ];

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
            answers: CHAPTER1_NAMES,
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

  const evidence = <LetterFromX lines={lines} />;
  return <TabContentBase evidence={evidence} objectivesJson={objectives} onCorrect={onCorrect} />;
}
