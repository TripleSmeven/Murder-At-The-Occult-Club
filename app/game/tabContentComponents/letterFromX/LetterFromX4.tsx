import TabContentBase from "../TabContentBase";
import LetterFromX from "./LetterFromX";

export default function LetterFromX4() {
  const lines = [
    "So you figured it all out. Bravo.",
    `Chamomile and white buttercups look quite similar, don't they? An untrained eye would not have noticed if they had been secretly switched.`,
    `I'll be honest. I wasn't sure if you were going to go through with all of this.`,
    `But you've delivered a masterful performance. I was thoroughly entertained.`,
    "Goodbye for now. I have no doubt our paths will cross again.",
    "- X",
  ];

  const evidence = <LetterFromX lines={lines} />;

  return <TabContentBase evidence={evidence} />;
}
