import TabContentBase from "../TabContentBase";
import HandwrittenLetter from "./HandwrittenLetter";

export default function LetterFromX2_3() {
  const lines = [
    "Hello.",
    "Bravo. You've done it again.",
    "Officer Samson really does have a good heart, doesn't he? Without his help, the students may have never been found.",
    "But there is one question still left unanswered. How did these children obtain such a rare artifact? A mystery to be solved another day, I suppose.",
    "As for the students, don't worry too much about them. You've done your part. Now, I do mine.",
    "Goodbye for now. Expect contact soon.",
    "- X",
  ];
  const evidence = <HandwrittenLetter lines={lines} />;
  return <TabContentBase evidence={evidence} />;
}
