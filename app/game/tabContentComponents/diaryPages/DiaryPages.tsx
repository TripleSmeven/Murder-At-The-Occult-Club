import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import DiaryPage from "./DiaryPage";

export default function DiaryPages() {
  const page1 = (
    <DiaryPage
      textBlocks={[
        "December 7th, 2016",
        "i hate u i hate u i hate u!!!",
        "he always looks down on me bc im a girl. i dont get it. yeah okay maybe i havent been in the club as long as him but i put in the work too. i actually spend my time reading and researching things online how many late nights i have spent on this!!! and for what!!!",
        "stupid. im gonna cast a curse on him. need to find that blog i saw one time on how to do it. i mean its meant for ex-lovers but im sure it will still work. just have to get some things. i need him to feel pain. need him to regret ever crossing me!!! i want him to suffer!!!",
        "oh yeah need to buy the baking stuff for sam too. do that tonight",
      ]}
    />
  );

  const page2 = (
    <DiaryPage
      textBlocks={[
        "December 11th, 2016",
        "it took a while but i finally did it. i invited him to talk and he gave the same bs as last time. that he recognizes my work and he will have me doing more next time. liar! little did he know he walked right onto my hidden ritual circle.",
        "and now i just wait for the next full moon for it to activate. its just a few days. cant wait to hear him scream in agony. he'll be begging for me.",
      ]}
    />
  );

  const page3 = (
    <DiaryPage textBlocks={["December 13th, 2016", "he's dead.", "did i", "i need to"]} />
  );

  const evidence = <CustomCarousel items={[page1, page2, page3]} />;
  return <TabContentBase evidence={evidence} />;
}
