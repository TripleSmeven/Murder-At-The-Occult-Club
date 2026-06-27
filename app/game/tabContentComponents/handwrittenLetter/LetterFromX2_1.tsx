import TabContentBase from "../TabContentBase";
import HandwrittenLetter from "./HandwrittenLetter";

export default function LetterFromX2_1() {
  const lines = [
    "Hello.",
    "It hasn't been long since our last encounter, but there is already a need for your skills again.",
    "Several students from KaiserU have gone missing.",
    "The police are on the case, but their progress is too slow.",
    "By the time they figure out what's going on, it'll be too late.",
    "So you know the drill. Put your skills to the test, learn as much as you can about the students, and find out where they are.",
    "- X",
  ];
  const evidence = <HandwrittenLetter lines={lines} />;
  return <TabContentBase evidence={evidence} />;
}
