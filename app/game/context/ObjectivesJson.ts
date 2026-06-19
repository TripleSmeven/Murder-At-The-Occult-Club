import { Color } from "../components/WordPicker";

export interface ObjectivesJson {
  heading?: string;
  sections?: ObjectiveSection[];
}

interface ObjectiveSection {
  title: string;
  questions: ObjectiveQuestion[];
}

interface ObjectiveQuestion {
  question: string;
  answers?: string[];
  answer?: string;
  color: Color;
}
