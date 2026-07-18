import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import Newspaper from "./Newspaper";

export default function HamperHerald() {
  const page1 = {
    title: "Dense Fog Blankets Hamper",
    author: "",
    date: "Jan 7th, 2026",
    paragraphs: [
      `Residents of Hamper are contending with an unusually stretch of dense fog this week, with visibility dropping to under fifty feet along several roadways during early morning and late evening hours.`,
      `The fog has been linked to at least three minor traffic collisions along Apple Lane and Birch Drive since January 5th, according to local authorities, though no serious injuries have been reported. Town officials have urged drivers to reduce speed and use low-beam headlights when navigating affected areas.`,
      `"This fog is deadly," said one resident, who witnessed one of the collisions on Birchwood Drive. "It's like a void where you can't see anything, not even my porch lights. We should all just take the day off today."`,
      `Meteorologists attribute the phenomenon to a combination of unseasonably warm days followed by sharp overnight temperature drops, a pattern expected to continue through tomorrow. The Hamper town council has discussed installing additional fog lights along Cherry Avenue.`,
      `The National Weather Service has not issued any formal advisory, but continues to monitor conditions closely.`,
    ],
  };

  const pages = [<Newspaper key={1} {...page1} />];
  const evidence = (
    <CustomCarousel items={pages} lockedPages={[]} lockedTooltip="" />
  );

  return <TabContentBase evidence={evidence} />;
}
