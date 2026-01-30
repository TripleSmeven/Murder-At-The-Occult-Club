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

export const allEmails = [Candace, Thomas];
