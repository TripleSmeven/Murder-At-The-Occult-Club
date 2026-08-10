export type HintPanel = {
  title: string;
  content: string;
};

export type HintSection = {
  heading: string;
  panels: HintPanel[];
  unlockedAtStage: number;
};

export type HintsJson = {
  [chapter: string]: HintSection[];
};

export const hintsJson: HintsJson = {
  chapter1: [
    {
      heading: "Police Report",
      unlockedAtStage: 1,
      panels: [
        {
          title: "What am I supposed to do?",
          content:
            "To unlock more evidence, you'll have to answer the questions on the Objectives tab of the Police Report. You should take a look at the all evidence you currently have.",
        },
      ],
    },
    {
      heading: "Text Messages, Email Inboxes, and Online Orders",
      unlockedAtStage: 2,
      panels: [
        {
          title: "Where do I start?",
          content:
            "Candace's email inbox (the first one) is already revealed, so it's a good place to start. What can you learn about her from there, and how can that help you make sense of the other evidence you have so far?",
        },
        {
          title: "Gentle nudge 1",
          content:
            "Some members of the club have particular texting habits. Maybe that can help you figure out who the senders of the texts are.",
        },
        {
          title: "Text Message 2 hint",
          content:
            "Who are ZC and MM? Why are they being brought up in conversation? What's with the initials?",
        },
        {
          title: "Text Message 3 hint",
          content:
            'In Text Message 3, "Unknown B" mentions knowing someone who knows about the Oblivion. Who could that be?',
        },
      ],
    },
    {
      heading: "Solve the Case",
      unlockedAtStage: 3,
      panels: [
        {
          title: "Cause of death hint",
          content:
            "The new evidence narrows down the cause of death to a few choices. Is there a way to narrow it further down to just one?",
        },
        {
          title: "Murderer hint",
          content:
            "Once you have the cause of death, find the person who is most connected to that cause. The new evidence is a starting point, but you'll need to dive back into previous evidence to confirm the connection.",
        },
        {
          title: "Murderer motive hint",
          content:
            "Try searching through all the evidence with the murderer's name on it. What other details can you uncover?",
        },
        {
          title: "Big motive & related person hint",
          content:
            "There is an email in the murderer's inbox that connects them to a person mentioned in a newspaper article. Also, a text message solidifies the motivation.",
        },
      ],
    },
    {
      heading: "Mysterious Recipe",
      unlockedAtStage: 4,
      panels: [
        {
          title: "Who brewed the Elixir?",
          content:
            "There is someone clearly hunting for the ingredients of the Elixir. Several emails point to who it is.",
        },
        {
          title: "Animal fur hint",
          content:
            "The animal fur wasn't purchased, but there is something in the online orders that points to what animal fur was used.",
        },
        {
          title: "Flower hint",
          content:
            "There's only once choice here if you've identified the cause of death.",
        },
      ],
    },
  ],
  chapter2: [
    {
      heading: "Group Chat",
      unlockedAtStage: 0,
      panels: [
        {
          title: "Getting started",
          content:
            "In the police transcripts, the parents of two of the students mention their names and their relationship with each other. Compare this information with the messages in the group chat, and you'll be able to identify their usernames.",
        },
        {
          title: "looprevil92 hint",
          content:
            "Their first name and last name appear in two different pieces of evidence. If you understand looprevil92's role in the group, you'll be able to deduce their name.",
        },
        {
          title: "meremere hint",
          content:
            "Have you unlocked The Kaiser Times evidence yet? One of the articles has a connection to meremere.",
        },
        {
          title: "justagreengremlin hint",
          content:
            "You learn quite a bit about this person and sam_slow_down from the 5th page of the group chat evidence. What you learn about them there connects with information found in the Trip Plan evidence and the police transcripts.",
        },
      ],
    },
    {
      heading: "Locked PDF",
      unlockedAtStage: 0,
      panels: [
        {
          title: "Where is the Locked PDF?",
          content:
            "The Locked PDF is hidden in the group chat. You'll have to click on something to unlock it.",
        },
        {
          title: "Do I need to solve the Locked PDF to solve the Group Chat?",
          content:
            "No, both can be solved independently. But solving the locked PDF might make solving the Group Chat easier.",
        },
        {
          title: "Gentle nudge",
          content:
            "The person who set the password offers a hint in the group chat. Are there any numbers associated with this person?",
        },
      ],
    },
    {
      heading: "Crocker Mansion Address",
      unlockedAtStage: 1,
      panels: [
        {
          title: "Where do I start?",
          content:
            "Use the Hamper Herald articles to get an understanding of how the Hamper Community is structured.",
        },
        {
          title: "Hint 1",
          content:
            "The group chat reveals some clues about what is near the mansion. Is anything near the mansion also mentioned in other pieces of evidence?",
        },
        {
          title: "Hint 2",
          content:
            "The group chat reveals there's a hill near the mansion. According to the Hamper Herald, Hamper is mostly flat except for a hill on the north side. What street is on the north side, and which house is the hill closest to?",
        },
      ],
    },
    {
      heading: "Solve the Case",
      unlockedAtStage: 2,
      panels: [
        {
          title: "Mantles hint 1",
          content:
            "If you read the Mantles of Inheritance document, you'll learn that a person's Mantle can be determined by that person's birth order compared to their siblings in their family. Look through previous evidence to see if you can learn more about each student's family.",
        },
        {
          title: "Mantles hint 2",
          content:
            "Matthew's can be determined from the Letter from Walter. For Nikki, refer to the news article on her sister. For Daisy, read Group Chat 2. For Martin and David, their parent's words make it clear.",
        },
        {
          title: "Intended Ritual",
          content:
            "Think of what Mantle each person believed themselves to be, and which constellation they were looking the night before. That should narrow it down to a few. Some clues in the Trip Plan and The Hamper Herald will help you narrow it down to just one. ",
        },
        {
          title: "Actual Ritual",
          content:
            "What Mantle did each person actually have, and what celestial construction might have gotten in the way? Take a closer look at the constellation photo.",
        },
      ],
    },
  ],
};
