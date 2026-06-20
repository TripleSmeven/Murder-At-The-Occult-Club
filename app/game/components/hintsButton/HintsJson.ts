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
          content: "There's only once choice here if you've identified the cause of death.",
        },
      ],
    },
  ],
  chapter2: [
    {
      heading: "Test",
      unlockedAtStage: 1,
      panels: [
        {
          title: "test",
          content: "test",
        },
      ],
    },
  ],
};
