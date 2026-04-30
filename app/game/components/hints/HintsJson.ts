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
        {
          title: "Who ordered the police to stop investigating?",
          content:
            '"X" mentions someone deliberately lied about the circumstances of Zach\'s death. Is there something that suggests this person also can influence the police?',
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
            "The online orders tell you a lot about the suspects. See if you can find any connection between what people are buying and the other pieces of evidence.",
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
      heading: "Mysterious Recipe",
      unlockedAtStage: 3,
      panels: [
        {
          title: "Gentle nudge",
          content: "Make sure you've checked the new Text Message that unlocked.",
        },
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
    {
      heading: "Solve the Case",
      unlockedAtStage: 4,
      panels: [
        {
          title: "Cause of death hint",
          content:
            "You can use the police report and text messages to rule a few causes out. Is there evidence pointing to one of the remaining causes?",
        },
        {
          title: "Perpetrator hint",
          content: "Is the person who brewed the elixir the same person who killed Zach?",
        },
        {
          title: "Perpetrator motive hint",
          content:
            "How is the perpetrator connected to Zach? Look at all the evidence that has the perpretrator's name on it.",
        },
      ],
    },
  ],
};
