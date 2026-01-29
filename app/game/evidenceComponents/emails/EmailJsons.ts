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

export const allEmails = [Candace];
