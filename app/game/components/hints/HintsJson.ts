export interface HintPanel {
  title: string;
  content: string;
}

export interface HintSection {
  heading: string;
  panels: HintPanel[];
  unlockedAtStage: number;
}

export interface HintsJson {
  sections: HintSection[];
}

export const hintsJson: HintsJson = {
  sections: [
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
          title: "Gentle nudge 2",
          content:
            'In Text Message 3, "Unknown B" mentions knowing someone who knows about the Oblivion. Who could that be?',
        },
        {
          title: "Big text message hint",
          content: "Who are ZC, MM, and BB? Why are they being brought up in conversation?",
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
      ],
    },
    {
      heading: "Mysterious Recipe",
      unlockedAtStage: 4,
      panels: [
        {
          title: "Who brewed the Elixir?",
          content:
            "Information found in emails and texts points to who was chosen to brew the Elixir.",
        },
        {
          title: "Animal fur hint",
          content:
            "The animal fur wasn't purchased, but there is something in the online orders that points to what animal fur was used.",
        },
        {
          title: "Flower hint",
          content:
            'In the newly unlocked text message, "Unknown A" mentions they have the sun-like flower. What are they talking about?',
        },
      ],
    },
  ],
};
