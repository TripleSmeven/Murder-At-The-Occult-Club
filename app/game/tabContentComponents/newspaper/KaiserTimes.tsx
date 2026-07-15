import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import Newspaper from "./Newspaper";

export default function KaiserTimes() {
  const page1 = {
    title: "Zach Cunningham Case Reopened",
    author: "",
    date: "Jan 10th, 2026",
    paragraphs: [
      `The death of Zach Cunningham, a Kaiser University senior whose body was found on campus grounds last December, is once again under active investigation, police confirmed yesterday — only several weeks after the case was closed as a suicide.`,
      `Police spokesperson Christopher Meyer held a brief press conference outside the Kaiser County precinct, offering few concrete details. "New information has come to light that warrants a fresh look at the circumstances surrounding Cunningham's death," Meyer said. When pressed by reporters on what specifically prompted the reversal, Meyer declined to elaborate, stating only that "the investigation is ongoing and we won't be discussing evidence at this time."`,
      `The vague announcement has already fueled speculation and outrage across the community. Cunningham died on December 13, 2025, and police closed the case as a suicide just five days later, on December 18 — a timeline that has since raised serious questions about the thoroughness of the original investigation. The decision to reopen the case has only intensified public scrutiny, with many demanding answers about what, if anything, was overlooked the first time.`,
      `Eric Lark, the president of Kaiser University, refused to comment on the reopening of the case.`,
    ],
  };

  const page2 = {
    title: "Local Film Student Premieres New Piece",
    author: "",
    date: "Jan 3rd, 2026",
    paragraphs: [
      `What was expected to be a modest outdoor screening turned into one of the most talked-about campus events of the week, as senior film student Justin Holmes premiered his latest short film, Tendered, to a crowd of over 200 attendees at Founders Park last night.`,
      `Shot entirely in black and white and boasting a 40 minute runtime, Tendered follows a single chicken tender from the KaiserU dining hall freezer to its eventual disposal into a garbage bin, narrated only by ambient sound and long, static shots. Holmes has described his film as "an exploration of commodification, consumption, and the quiet tragedy of things made only to be consumed or forgotten."`,
      `The film's most striking sequence — a slow, single-take shot of the tender left out on a rooftop under a full moon, wreathed in a faint, lingering mist — has already become the subject of campus chatter. Holmes said the scene took "several attempts to get right" and credited an unnamed classmate for help with the visual effect, though he declined to elaborate further.`,
      `Audience reaction was enthusiastic, but divided. "I don't know if it's genius or ridiculous," said Alex Blanc, a student at KaiserU. "But I couldn't look away."`,
      `Holmes plans to submit Tendered to several regional student film festivals this spring. The screening was part of an ongoing cinema series funded by KaiserU's film department."`,
    ],
  };

  const page3 = {
    title: "Naomi Yu Wins Science Fair",
    author: "",
    date: "Dec 23rd, 2025",
    paragraphs: [
      `Kaiser University senior Naomi Yu claimed first place at the KaiserU Fall Science Fair on December 22nd, just barely eking out a win over fellow senior Clara Meyer, who took second place with his project on the cellular regeneration ability of jellyfish.`,
      `Yu, whose autonomous puzzle solving robot won over the hearts of the judges, was ecstatic as she accepted the trophy. Her family, seated in the front row throughout the event, joined her on stage. "I just want to thank my parents and my sister for taking the time to come out and support me tonight," Yu said in her acceptance speech. "This means everything to me. I couldn't have done this without them."`,
      `"I want to give a special thanks to my sister, Nikki, who has been my biggest supporter all my life", Yu went on. "Out of the four of us, she's always been the smartest one in our little family. I'm so lucky to have her as my sister."`,
      `University officials praised the strength of this year's competition overall, with other notable submissions including a planetary mapping system and an allergy detection device.`,
      `Yu, who is set to graduate next year, said she plans to pursue a career in robotics engineering after finishing her degree at KaiserU.`,
      `Congratulations to Naomi Yu and all who competed this semester.`,
    ],
  };

  const pages = [
    <Newspaper key={1} {...page1} />,
    <Newspaper key={2} {...page2} />,
    <Newspaper key={3} {...page3} />,
  ];
  const evidence = (
    <CustomCarousel
      items={pages}
      lockedPages={[]}
      lockedTooltip="Unlock by completing the Objectives in the Group Chat."
    />
  );

  return <TabContentBase evidence={evidence} />;
}
