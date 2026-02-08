export interface EmailJson {
  sender: string;
  title: string;
  content: string;
  date: string;
}

const zachEmail: EmailJson = {
  sender: "Zach Cunningham",
  title: "Final Ritual of the Year",
  content:
    "Dear practicioners, it's almost time! We've spent years researching the Oblivion. It's time for us finally witness it ourselves. The Elixir of Oblivion will be the gateway...",
  date: "Dec 6",
};

const Candace: EmailJson[] = [
  {
    sender: "Dinterest",
    title: "17 popular Din's for you",
    content: "Here's what's trending on Dinterest: ",
    date: "Dec 11",
  },
  {
    sender: "Neptune",
    title: "New reminder",
    content:
      "Reminder that you have homework due for MUSC 134: Introduction to Music History in 2 day(s). To view your dashboard, click here",
    date: "Dec 10",
  },
  {
    sender: "Baking Monthly",
    title: "Weekly Digest",
    content: "Click here to view your weekly digest",
    date: "Dec 10",
  },
  {
    sender: "Neptune",
    title: "Submission confirmation",
    content:
      "You have submitted homework for SART 244: Digital Composition. To view your dashboard, click here.",
    date: "Dec 8",
  },
  {
    sender: "Bruce Hall, me (3)",
    title: "Essay Feedback",
    content:
      "I just added one more piece of feedback: please don't use emojis in formal writing. As for your paragraph structure...",
    date: "Dec 7",
  },
  zachEmail,
  {
    sender: "Neptune",
    title: "New reminder",
    content:
      "Reminder that you have homework due for SART 244: Digital Composition in 2 day(s). To view your dashboard, click here",
    date: "Dec 6",
  },
  {
    sender: "Samantha Li, me (4)",
    title: "Cookie plan!",
    content: "Sounds great! Can you buy the ingredients tomorrow then?",
    date: "Dec 6",
  },
  {
    sender: "Bisney+",
    title: "We're updating our privacy agreement",
    content:
      "These terms will apply as of January 27, 2017 for new subscribers. For prior and existing subscribers, like you, these terms will be effective beginning...",
    date: "Dec 4",
  },
  {
    sender: "PetGo",
    title: "Re: Inquiry",
    content:
      "Thanks for reaching out! We do in fact have a selection of frogs and toads for you to take a look at! If you'd like, we can schedule...",
    date: "Dec 1",
  },
];

const Thomas: EmailJson[] = [
  {
    sender: "Neptune",
    title: "New reminder",
    content:
      "Reminder that you have homework due for ME 225: Intro to Fluid Dynamics in 2 day(s). To view your dashboard, click here",
    date: "Dec 12",
  },
  {
    sender: "Neptune",
    title: "New reminder",
    content:
      "Reminder that you have homework due for MATH 364: Multidimensional Calculus in 2 day(s). To view your dashboard, click here",
    date: "Dec 11",
  },
  {
    sender: "Miranda Meadows",
    title: "RE: taking matters into your own hands",
    content:
      "This is Miranda. The MAOC does NOT authorize your operation as it goes against our code of conduct. I've setup another Zoop meeting...",
    date: "Dec 10",
  },
  {
    sender: "Evelyn Samson, me (2)",
    title: "Contact Information",
    content: "Sure! You can DM me at @evelyn_samson. Looking forward to hearing from you!",
    date: "Dec 10",
  },

  {
    sender: "Daniel Katz",
    title: "Counter Attack 2 Tournament",
    content:
      "Thanks for signing up! You'll know your place in the bracket in the announcement next week.",
    date: "Dec 9",
  },
  {
    sender: "Vapor",
    title: "Thank you for your purchase!",
    content:
      "Hello, Thank you for your recent transaction on Vapor. The items below have been added to your Vapor Library. To view your Vapor library, go to...",
    date: "Dec 8",
  },
  {
    sender: "Zoop",
    title: "Meeting Recording",
    content:
      "Your virtual meeting with Miranda Meadows has ended. To view the meeting recording, click here.",
    date: "Dec 7",
  },
  zachEmail,
  {
    sender: "KaiserU Student Affairs, me (3)",
    title: "Re: Inquiry",
    content:
      "As long as you keep your registration updated, your gerbil is within our guidelines to raise in the dorms. Please note that larger pets like cats or dogs are prohibited...",
    date: "Dec 4",
  },
];

const Sarah: EmailJson[] = [
  {
    sender: "Neptune",
    title: "New reminder",
    content:
      "Reminder that you have homework due for PSYC 218: Research Methods in Psychology in 2 day(s). To view your dashboard, click here",
    date: "Dec 12",
  },
  {
    sender: "KaiserU Student Affairs",
    title: "Left Hand Accommodation",
    content:
      "Starting January 12, you can request left hand accommodation in the testing center. This includes tablet arm chairs, computer peripherals…",
    date: "Dec 11",
  },
  {
    sender: "Gina Moore",
    title: "Potluck allergies",
    content:
      "Hi all! For the volleyball team dinner, please inform us of any food allergies you might have in this form, and to bring you assigned items. Thanks!",
    date: "Dec 9",
  },
  zachEmail,
  {
    sender: "KaiserU Financial Aid, me (3)",
    title: "Status update",
    content:
      "Apologies for the delay. We had you under your previous surname “Wagner” in our records. We have since updated our records…",
    date: "Dec 5",
  },
  {
    sender: "KaiserU Tutoring Center",
    title: "New Time Slots Available",
    content:
      "Please click the link below to sign up for one of our available slots. We hope to see you soon!",
    date: "Dec 4",
  },
  {
    sender: "Greg Clark, me (2)",
    title: "Re: Question",
    content:
      'Typically the field of natural science doesn\'t consider "necromancy" to be legitimate field of study, but certain jelly fish and starfish can regenerate...',
    date: "Dec 2",
  },
  {
    sender: "Benjamin Broome",
    title: "Are you serious?",
    content:
      "I can't believe you blocked me. Can we just talk like normal people? Just pick up my call.",
    date: "Nov 30",
  },
];

const Carlos: EmailJson[] = [
  {
    sender: "Red Circle Warehouses",
    title: "Application status",
    content:
      "After careful consideration, we've decided not to move forward with your application at this time in favor of other candidates that align...",
    date: "Dec 11",
  },
  {
    sender: "Neptune",
    title: "New reminder",
    content:
      "Reminder that you have homework due for CSC 282: Design and Analytics of Efficient Algorithms in 2 day(s). To view your dashboard, click here",
    date: "Dec 10",
  },
  {
    sender: "Neptune",
    title: "Submission confirmation",
    content:
      "You have submitted homework for CSC 222: Database Design. To view your dashboard, click here.",
    date: "Dec 9",
  },
  {
    sender: "contact@masterthepractice.org, me (5)",
    title: "Re: I need help",
    content:
      "I'm impressed, child. You have done your research. It's true, the lifeforce transference ritual can cure a sickly person. But make no mistake, the ritual requires a sacrifice…",
    date: "Dec 8",
  },
  zachEmail,
  {
    sender: "DoorSprint",
    title: "Your Paystub is Available",
    content:
      "Your pay stub has arrived! To view your digital pay stub and other work related documents, click the link below.",
    date: "Dec 4",
  },
  {
    sender: "KaiserU Financial Aid",
    title: "We've received your application!",
    content:
      "Hi, thank you for submitting your financial aid application. At KaiserU, we believe that every student should have the opportunity to thrive and excel...",
    date: "Dec 3",
  },
  {
    sender: "Phillipe Sanchez, me (9)",
    title: "About mom",
    content:
      "I'm gonna be honest, it's not looking good, kid. Doc says if she can't get treatment soon, she's looking at 6 to 12 months…",
    date: "Dec 2",
  },
];

const Daisy: EmailJson[] = [
  {
    sender: "Greg Clark, me (2)",
    title: "6th floor lab access",
    content:
      "The new lab has not been officially announced yet, nor am I ready to share the equipment and inventory at this time. I can put you on the waitlist for when it is...",
    date: "Dec 9",
  },
  {
    sender: "Neptune",
    title: "Submission confirmation",
    content:
      "You have submitted homework for CHEM 208: Organic Chemistry II with Lab. To view your dashboard, click here.",
    date: "Dec 7",
  },
  zachEmail,
  {
    sender: "Neptune",
    title: "New reminder",
    content:
      "Reminder that you have homework due for CHEM 208: Organic Chemistry II with Lab in 2 day(s). To view your dashboard, click here",
    date: "Dec 5",
  },
  {
    sender: "Bisney+",
    title: "We're updating our privacy agreement",
    content:
      "These terms will apply as of January 27, 2017 for new subscribers. For prior and existing subscribers, like you, these terms will be effective beginning...",
    date: "Dec 4",
  },
  {
    sender: "Zach Cunningham",
    title: "Welcome to our club",
    content:
      "I wanted to personally welcome you again to our club. Re-iterating what we spoke of previously, our pursuit of knowledge and understanding of natural world is a bit unorthodox, and thus not officially sactioned by KaiserU. I would ask that you...",
    date: "Nov 30",
  },
];

const Andrew: EmailJson[] = [
  {
    sender: "Evelyn Samson, me (4)",
    title: "Flowers",
    content:
      "What a coincidence, as those are the only ones we have left! I'm glad they'll have a new home. I'll leave them in the Office of Club Affairs with...",
    date: "Dec 11",
  },
  {
    sender: "Greg Klark, me (2)",
    title: "Question for Project",
    content:
      "Interesting project you have there! Turacaffinate extraction is definitely possible. Technically I'm not supposed to, but I can show you the equipment in the new lab which should have what you need...",
    date: "Dec 10",
  },
  {
    sender: "Neptune",
    title: "New reminder",
    content:
      "Reminder that you have homework due for CHEM 461: Spectroscopy Techniques Applied to Biological Systems in 2 day(s). To view your dashboard, click here",
    date: "Dec 10",
  },
  zachEmail,
  {
    sender: "KaiserU Cloud",
    title: "Your storage is getting full",
    content:
      "You've used 11.85 GB of the 15 GB of KaiserU Cloud storage. Click here to manage your cloud storage space.",
    date: "Dec 6",
  },
  {
    sender: "KaiserU Student Affairs",
    title: "Housing of illegal pet",
    content:
      "We've received an anonymous report that you may be housing an illegal pet. At KaiserU, we take our safety policies seriously, and only certain pets are allowed in the dorms. We will be coming for an...",
    date: "Dec 4",
  },
];

export const allEmails = [Candace, Thomas, Sarah, Carlos];
