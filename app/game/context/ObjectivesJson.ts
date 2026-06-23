import { Color } from "../components/WordPicker";

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
  answers: string[];
  answer: string;
  color: Color;
};
