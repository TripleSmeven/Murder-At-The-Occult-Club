import TabContentBase from "../TabContentBase";
import LetterFromX from "./LetterFromX";

export default function LetterFromX2_1() {
  const lines = [
    "Hello.",
    "It hasn't been long since our last encounter, but there is already a need for your skills again.",
    "Several students from your university have gone missing.",
    "The authorities think it's a classic case of kids having a bit too much fun, and that they'll turn up soon enough",
    "But I have a feeling they won't.",
    "So you know the drill. Put your skills to the test and find out where these students are.",
    "- X",
  ];
  const evidence = <LetterFromX lines={lines} />;
  return <TabContentBase evidence={evidence} />;
}
