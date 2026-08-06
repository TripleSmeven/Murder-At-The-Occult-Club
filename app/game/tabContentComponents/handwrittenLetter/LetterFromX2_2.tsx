import { useContext, useState } from "react";
import { Color } from "../../components/ObjectiveBuilder";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import TabContentBase from "../TabContentBase";
import HandwrittenLetter from "./HandwrittenLetter";
import { ProgressContext, ProgressKeys } from "../../context/ProgressContext";
import { StageContext } from "../../context/StageContext";
import { VictoryScreen } from "../../components/VictoryScreen";

const MANTLES = ["Crown", "Torch", "Bridge", "Door"];

const RITUALS = [
  "The Mystic Step",
  "The Whispered Voice",
  "The Single Choir",
  "The Invisible Thread",
  "The Migrant Tree",
  "The Humble Kingdom",
  "The Pale Crossing",
];

export default function LetterFromX2_2() {
  const [showVictoryScreen, setShowVictoryScreen] = useState(false);
  const lines = [
    "Hello.",
    "Children are really something, aren't they? They go off on their own, chase their wildest dreams, and what do they have to show for?",
    "But I digress. I think you're starting to understand what happened here.",
    "So once again, show me why I've chosen you for this task. Tell me, what were the students trying to do, and what did they actually do?",
    "Good luck.",
    "- X",
  ];
  const evidence = <HandwrittenLetter lines={lines} />;

  const objectives: ObjectivesJson = {
    heading: "Solve the Case",
    sections: [
      {
        title: "What is each student's Mantle?",
        questions: [
          {
            question: "Matthew",
            answer: "Door",
            answers: MANTLES,
            color: Color.RED,
          },
          {
            question: "Nikki",
            answer: "Door",
            answers: MANTLES,
            color: Color.RED,
          },
          {
            question: "Daisy",
            answer: "Bridge",
            answers: MANTLES,
            color: Color.RED,
          },
          {
            question: "Martin",
            answer: "Crown",
            answers: MANTLES,
            color: Color.RED,
          },
          {
            question: "David",
            answer: "Torch",
            answers: MANTLES,
            color: Color.RED,
          },
        ],
      },
      {
        title: "Which ritual were the students trying to do?",
        questions: [
          {
            question: "",
            answer: "The Invisible Thread",
            answers: RITUALS,
            color: Color.RED,
            size: "lg",
          },
        ],
      },
      {
        title: "What ritual did the students actually do?",
        questions: [
          {
            question: "",
            answer: "The Humble Kingdom",
            answers: RITUALS,
            color: Color.RED,
            size: "lg",
          },
        ],
      },
    ],
  };

  // move to stage 5 if user solves the case
  const { currentStage, setStage } = useContext(StageContext);
  const { setSolved } = useContext(ProgressContext);

  const onCorrect = () => {
    if (currentStage === 2) {
      setShowVictoryScreen(true);
    }
  };

  // triggers AFTER the victory overlay plays
  const handleVictoryComplete = () => {
    setStage(3); // unlocks final letter
    setSolved(ProgressKeys.CHAPTER_2_SOLVE_THE_CASE, true);
    setShowVictoryScreen(false); // unmount the victory overlay after its done.
  };

  return (
    <>
      {showVictoryScreen && (
        <VictoryScreen onComplete={handleVictoryComplete} />
      )}
      <TabContentBase
        evidence={evidence}
        objectivesJson={objectives}
        onCorrect={onCorrect}
      />
    </>
  );
}
