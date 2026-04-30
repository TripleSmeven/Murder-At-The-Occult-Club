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
          title: "Gentle Nudge 1",
          content: "Who are ZC, BB, and MM?",
        },
        {
          title: "Gentle Nudge 2",
          content:
            'In Text Message 2, "Unknown B" mentions knowing someone who knows about the Oblivion. Who could that be?',
        },
      ],
    },
    {
      heading: "Mysterious Recipe",
      unlockedAtStage: 3,
      panels: [
        {
          title: "Gentle Nudge",
          content: "Make sure you've checked the new Text Message that unlocked.",
        },
        {
          title: "Who brewed the Elixir?",
          content: "There's an email or text that reveals who was chosen to brew the Elixir.",
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
      ],
    },
  ],
};
