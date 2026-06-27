import TabContentBase from "../TabContentBase";
import Newspaper from "./Newspaper";

export default function KaiserTimes() {
  const page1 = {
    title: "test",
    author: "test",
    date: "test",
    paragraphs: ["asd"],
  };

  const evidence = <Newspaper {...page1} />;

  return <TabContentBase evidence={evidence} />;
}
