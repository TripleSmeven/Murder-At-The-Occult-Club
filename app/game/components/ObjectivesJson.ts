import { Color } from "./WordPicker";

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
  answer?: string;
  type?: "text" | "namePicker";
  color: Color;
}
