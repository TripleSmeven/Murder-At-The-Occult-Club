import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import Newspaper from "./Newspaper";

export default function HamperHerald() {
  const page1 = {
    title: "Dense Fog Blankets Hamper",
    author: "",
    date: "Jan 7th, 2026",
    paragraphs: [
      `Residents of Hamper Community are contending with an unusually stretch of dense fog this week, with visibility dropping to under fifty feet along several roadways during early morning and late evening hours.`,

      `The fog has been linked to at least three minor traffic collisions along Birch Lane since January 4th, according to local authorities, though no serious injuries have been reported. Town officials have urged drivers to reduce speed and use low-beam headlights when navigating affected areas.`,

      `"This fog is deadly," said Winston Hall, who lives at 1 Birch Lane. "It's like a void where you can't see anything, not even my porch lights. We should all just take the day off today."`,

      `"It's not too bad," said another resident. "The flood last year was worse. Thankfully everyone's homes are brick now."`,

      `The Hamper town council has discussed installing additional fog lights for visibility, likely starting with the area's only hill on the northern border.`,

      `The National Weather Service has not issued any formal advisory, but continues to monitor conditions closely.`,
    ],
  };

  const page2 = {
    title: "Voting on New Street Name Begins",
    author: "",
    date: "Jan 6th, 2026",
    paragraphs: [
      `The Hamper Community Council will hold a public vote next week to determine the name of the town's newest street, part of the ongoing project to expand the town southward.`,

      `The unnamed street will connect to the southbound extension built last year, and like the streets before it, will contain eight new residential homes. Council members have narrowed the naming options down to three finalists: Glade Street, Grove Way, and Gaelbrook Parkway.`,

      `"We take these naming decisions seriously," said council secretary Damien Hort. "Hamper residents have always taken pride in the character of our streets, and we want this one to feel like it belongs."`,

      `Longtime residents will recognize the community's familiar pattern of quiet, tree-lined streets — from Apple Avenue to Fern Road — and the council confirmed the new street will continue in that same spirit. The winning name is expected to be announced at the next town hall meeting.`,

      `Construction crews have already begun preliminary groundwork on the site, with the project moving quickly due to Hamper's relatively flat geography. The council thanked residents in advance for their continued patience during the expansion.`,
    ],
  };

  const pages = [page1, page2].map((page, i) => (
    <Newspaper key={i} {...page} />
  ));
  const evidence = (
    <CustomCarousel items={pages} lockedPages={[]} lockedTooltip="" />
  );

  return <TabContentBase evidence={evidence} />;
}
