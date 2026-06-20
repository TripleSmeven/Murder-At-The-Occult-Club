import TabContentBase from "../TabContentBase";
import LetterFromX from "./LetterFromX";

export default function LetterFromX1() {
  const lines = [
    "Hello.",
    "A fellow classmate of yours, Zach Cunningham, has died. The university president will soon release a statement claiming it was a suicide.",
    `But that's a lie, and the president knows that. He's covering it up.`,
    "Zach Cunningham was murdered.",
    "Help me prove it.",
    "I have sent you the police report on the incident. Read it.",
    `Once you've shown me you're up to the task, I'll send you more.`,
    "Analyze the evidence. Solve the case. Good luck.",
    "- X",
  ];
  const evidence = <LetterFromX lines={lines} />;
  return <TabContentBase evidence={evidence} />;
}
