export interface EmailJson {
  sender: string;
  title: string;
  content: string;
  date: string;
}

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
    date: "Dec 2",
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
  {
    sender: "Neptune",
    title: "Submission confirmation",
    content:
      "You have submitted homework for ME 280: Intro to Material Science. To view your dashboard, click here.",
    date: "Dec 6",
  },
  {
    sender: "KaiserU Student Affairs",
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
  {
    sender: "Neptune",
    title: "Submission confirmation",
    content:
      "You have submitted homework for PSYC 210: Neural Foundations of Behavior. To view your dashboard, click here.",
    date: "Dec 6",
  },
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
    sender: "contact@masterthepractice.org, me (5)",
    title: "Re: I need help",
    content:
      "I'm impressed, child. You have done your research. It's true, the lifeforce transference ritual can cure a sickly person. But make no mistake, the ritual requires a sacrifice…",
    date: "Dec 8",
  },
  {
    sender: "Neptune",
    title: "Submission confirmation",
    content:
      "You have submitted homework for CSC 222: Database Design. To view your dashboard, click here.",
    date: "Dec 6",
  },
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

export const allEmails = [Candace, Thomas, Sarah, Carlos];
