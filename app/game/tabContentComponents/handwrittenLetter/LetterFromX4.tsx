import TabContentBase from "../TabContentBase";
import HandwrittenLetter from "./HandwrittenLetter";

export default function LetterFromX4() {
  const lines = [
    `Chamomile and white buttercups look quite similar, don't they? An untrained eye would not have noticed if they had been secretly switched.`,
    `But I digress. Thanks to you, the truth has been revealed. Bravo.`,
    `Leave the rest to me. I'll make sure justice is served in due time.`,
    "Goodbye for now. I have no doubt our paths will cross again.",
    "- X",
  ];

  const evidence = <HandwrittenLetter lines={lines} />;

  return <TabContentBase evidence={evidence} />;
}
