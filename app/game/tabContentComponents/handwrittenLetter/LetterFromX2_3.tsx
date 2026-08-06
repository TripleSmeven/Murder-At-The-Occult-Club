import TabContentBase from "../TabContentBase";
import HandwrittenLetter from "./HandwrittenLetter";

export default function LetterFromX2_3() {
  const lines = [
    "Hello.",
    "Bravo. You've done it again.",
    "I think Officer Samson will be finding them quite soon, after he gets a nudge in the right direction. He really does have a good heart, doesn't he?",
    "But there is one question still left unanswered. How did these children obtain such a rare artifact? A mystery to be solved another day, I suppose.",
    "Goodbye for now. Expect contact soon.",
    "- X",
  ];
  const evidence = <HandwrittenLetter lines={lines} />;
  return <TabContentBase evidence={evidence} />;
}
