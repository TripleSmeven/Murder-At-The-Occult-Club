import { Color } from "../components/ObjectiveBuilder";

export type ObjectivesJson = {
  heading: string;
  sections: ObjectiveSection[];
};

export type ObjectiveSection = {
  title: string;
  questions: ObjectiveQuestion[];
};

export type ObjectiveQuestion = {
  question: string;
  answers: string[] | null;
  answer: string;
  color: Color;
  size?: "sm" | "lg"; // size of input for freeform questions, default is sm
};
