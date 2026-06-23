import { useContext, useState } from "react";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { StageContext } from "../../context/StageContext";
import { CHAPTER1_NAMES, Color } from "../../components/WordPicker";
import LetterFromX from "./LetterFromX";
import { ProgressContext, ProgressKeys } from "../../components/ProgressContext";
import { VictoryScreen } from "../../components/VictoryScreen";
import TabContentBase from "../TabContentBase";

export default function LetterFromX3() {
  const [showVictoryScreen, setShowVictoryScreen] = useState(false);

  const lines = [
    `So it was the new girl. A tricky one, isn't she?`,
    "One last thing to wrap this all up. Do what the police couldn't. Identity the exact ingredients used in the Elixir of Oblivion.",
    "- X",
  ];

  const objectives: ObjectivesJson = {
    heading: "The Elixir of Oblivion",
    sections: [
      {
        title: "Who brewed the Elixir of Oblivion?",
        questions: [
          {
            question: "",
            answers: CHAPTER1_NAMES,
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
  const { setSolved } = useContext(ProgressContext);

  const onCorrect = () => {
    if (currentStage === 4) {
      setShowVictoryScreen(true);
    }
  };

  // triggers AFTER the victory overlay plays
  const handleVictoryComplete = () => {
    setStage(5); // unlocks final letter
    setSolved(ProgressKeys.SOLVE_THE_CASE_2, true);
    setShowVictoryScreen(false); // unmount the victory overlay after its done.
  };

  const evidence = <LetterFromX lines={lines} />;

  return (
    <>
      {showVictoryScreen && <VictoryScreen onComplete={handleVictoryComplete} />}
      <TabContentBase evidence={evidence} objectivesJson={objectives} onCorrect={onCorrect} />
    </>
  );
}
