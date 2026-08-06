import { Color } from "../../components/ObjectiveBuilder";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import TabContentBase from "../TabContentBase";
import HandwrittenLetter from "./HandwrittenLetter";

const MANTLES = ["Crown", "Torch", "Bridge", "Door"];

export default function LetterFromX2_2() {
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
        title: "What were the students trying to do?",
        questions: [
          {
            question: "",
            answer: "asd",
            answers: null,
            color: Color.RED,
            size: "lg",
          },
        ],
      },
      {
        title: "What did the students actually do?",
        questions: [
          {
            question: "",
            answer: "asd",
            answers: null,
            color: Color.RED,
            size: "lg",
          },
        ],
      },
    ],
  };
  return <TabContentBase evidence={evidence} objectivesJson={objectives} />;
}
