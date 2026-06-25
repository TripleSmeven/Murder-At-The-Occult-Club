import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import Newspaper from "./Newspaper";
import styles from "./Newspaper.module.css";
import { StageContext } from "../../context/StageContext";
import { useContext } from "react";
import { useDevMode } from "../../hooks/useDevMode";

export default function SchoolNewspaper() {
  const articles = [
    {
      title: "Vigil For Zach Cunningham to be Held Dec 20th",
      author: "Justin Holmes",
      date: "December 18, 2025",
      paragraphs: [
        "The KaiserU Department of Student Affairs has announced a candlelight vigil will be held in the remembrance of Zach Cunningham on December 20th, in the east wing garden.",
        'Zach Cunningham took his own life on December 13. Cunningham was a senior majoring in biochemistry. His friends describe him as a "bright person" with a "serious enthusiasm for science and the natural world".',
        '"It was not uncommon for Zach to swing by my office with his latest theories," says Greg Carlson, the head advisor of the biochemistry department. "His thirst for the pursuit of knowledge will be sorely missed".',
        "President Eric Lark released a statement today regarding the passing of Cunningham:",
        '"I speak on behalf of all staff and faculty, we are deeply saddened by the news regarding the loss of one of our students. Our heartfelt condolences go out to the friends and family affected by this tragedy.',
        "The well-being of our students is always our top priority. We are committed to ensuring our mental health and counseling services are available for all.",
        "Out of respect for the family, we will not be releasing any further details. I ask that we approach this situation with compassion and integrity.",
        'And finally, I want to thank the KCPD for their cooperation and sensitivity during this difficult time. Their dedication to the county is what makes me proud of our community."',
        "KaiserU Mental Health Facilities have extended their hours to accommodate students during this time.",
      ],
    },
    {
      title: "Mothers Against Occult Clubs Head Coordinator Speaks Out",
      author: "Justin Holmes",
      date: "December 16, 2025",
      paragraphs: [
        'Miranda Meadows, Head Coordinator of the non profit "Mothers Against Occult Clubs", released a message to the Kaiser County Community Board at yesterday\'s meeting.',
        '"The rise of occult activity in public schools and universities is greatly underestimated," Meadows said in an impassioned speech. "Parents should be concerned that their children may very well be experimenting with dark magic."',
        "Three days ago marks the 3-year anniversary of the death of Scott Wagner, a high school senior who was killed in a deadly ritual conducted by an underground occult club at his high school.",
        '"Kaiser County is facing a crisis," Meadows continues. "With unpoliced social media and internet access, it\'s now more than ever a breeding ground for bad influences to spread to young minds, and the occult epidemic is one of them."',
        "Mothers Against Occult Clubs will be holding a community booth at KaiserU on Club Day to raise awareness of the dangers of occult clubs.",
      ],
    },
    {
      title: "Tea Club To Remain Closed Until Next Semester",
      author: "Vivian Park",
      date: "December 16, 2025",
      paragraphs: [
        "Nearly two weeks ago, Kyle Singh, a second-year electrical engineering major, was admitted to the hospital after suffering a severe allergic reaction to one of the teas served at the KaiserU tea club. Since the incident, the club has officially decided to remain closed and will not open again until next semester.",
        'The tea club was founded by club president Evelyn Samson, whose self-proclaimed mission is to "show the world that tea is not just black and green".',
        'Unfortunately for Kyle, this recent incident only showed that drinking tea can be as deadly as drinking poison. Many students were shocked to hear that there was even such a thing as being allergic to tea. "I thought you can, like, only be allergic to peanuts and gluten," said one student. "Now I might have to think twice about drinking tea."',
        "The KaiserU Department of Health advises all students to get their allergies tested to prevent future cases such as these.",
        "Evelyn Samson declined to comment on Kyle Singh's near-fatal allergic reaction. However, she did want to thank everyone who is taking the club's leftover tea after the club was forced to close, saying, \"I'm glad at least the tea won't go to waste.\"",
      ],
    },
    {
      title: "New Chemistry Lab Opens on 6th Floor",
      author: "Justin Holmes",
      date: "December 11, 2025",
      paragraphs: [
        "Professor Greg Carlson announced the opening of a new chemistry lab on the 6th floor earlier today. The lab was bathed in controversy over budget concerns, as Carlson advocated for expensive, high security storage units to be installed.",
        '"There will be dangerous chemicals in there, some that could be fatal if ingested," said Carlson in a statement. "I need to ensure they are secured for the sake of our students\' safety.".',
        "Carlson did not elaborate on the exact chemicals that are kept in the storage units.",
        'The statement quickly circulated among KaiserU social media, with the hashtag "#whatsinthebox" quickly gaining over a thousand uses among KaiserU-related posts.',
        "The lab will be open to Biology and Chemistry majors for limited use. A few students have expressed interest in signing up for the lab, but many are still skeptical about the chemicals that are being stored in the lab.",
        '"I don\'t know if I want to be anywhere near that," said one student. "What if there\'s a leak or something?" Another student said, "We should be thinking about what exciting things we can learn there. Aren\'t we a science-minded community?"',
      ],
    },
    {
      title: "Banned From Video Game Tournament. Justified?",
      author: "Vivian Park",
      date: "December 7, 2025",
      paragraphs: [
        "Freshman Evan Worth was allegedly suspended from KaiserU's weekly Counter Attack 2 tournament for the rest of the semester. Worth claims it was because he was seen drinking energy drinks before a match.",
        '"Is drinking Ace of Spades before a match considered cheating?" Said Worth in an interview. "What about a coffee? Can I not get a good 8 hours of sleep beforehand either?"',
        "Tournament organizer faculty Daniel Katz claims the suspension has nothing to do with any pre-match behavior.",
        '"It was purely based on his conduct during the most recent match," says Katz. "At Kaiser, we value integrity and sportsmanship above all else."',
        "The tournament is still looking for signups. If you're interested in the next Counter Attack 2 tournament, reach out to Daniel Katz for details.",
      ],
    },
    {
      title: "Duck Migration in Full Force Month",
      author: "Miriam Nwani",
      date: "December 6, 2025",
      paragraphs: [
        "KaiserU's yearly duck migration is in full swing these past 2 weeks, with the American White-Breasted duck being the most common breed to be seen on campus. Although most students associate the returning of the ducks with the droppings that litter the sidewalk, others take this opportunity to hunt for something a little more auspicious: a feather with an intact quill.",
        "As any longstanding KaiserU student or faculty will tell you, finding a feather with an intact quill on campus might as well be a sign from the gods themselves. Find one and keep it in your room, and you're sure to ace your next test, have your crush text you back, or maybe even win the lottery.",
        'When asked if they needed any luck for this week, volleyball team captain Gina Moore replied "Oh absolutely. We have an important match coming up. I take anything I can get."',
        "Although it is unknown exactly when or how the superstition started, some professors claim it has been around as early as the 80's.",
        "Happy hunting, and if you do stumble upon some good fortune, don't forget brag about it on social media and tag #KaiserU on your posts.",
      ],
    },
  ];

  const pages = articles.map((a, i) => (
    <Newspaper
      key={i}
      title={a.title}
      author={a.author}
      date={a.date}
      paragraphs={a.paragraphs}
    />
  ));

  const { currentStage } = useContext(StageContext);
  const devMode = useDevMode();
  // lock pages until stage 2
  const lockedPages = currentStage < 2 && !devMode ? [2, 3, 4, 5] : [];

  const evidence = (
    <CustomCarousel
      items={pages}
      lockedPages={lockedPages}
      lockedTooltip="Unlock by completing the Objectives in the Police Report."
    />
  );

  return <TabContentBase evidence={evidence} />;
}
