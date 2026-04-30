export interface HintPanel {
  title: string;
  content: string;
  unlockedAtStage: number;
}

export interface HintSection {
  heading: string;
  panels: HintPanel[];
}

export interface HintsJson {
  sections: HintSection[];
}

export const hintsJson: HintsJson = {
  sections: [
    {
      heading: "Police Report",
      panels: [
        {
          title: "What am I supposed to do?",
          content:
            "To unlock more evidence, you'll have to answer the questions on the Objectives tab of the Police Report. You should take a look at the evidence you currently have.",
          unlockedAtStage: 1,
        },
        {
          title: "Who ordered the police to stop investigating?",
          content:
            '"X" mentions someone deliberately lied about the circumstances of Zach\'s death. Is there something that suggests this person also can influence the police?',
          unlockedAtStage: 1,
        },
      ],
    },
    {
      heading: "Text Messages, Email Inboxes, and Online Orders",
      panels: [
        {
          title: "Where do I start?",
          content:
            "The online orders tell you a lot about the suspects. See if you can find any connection between what people are buying and the other pieces of evidence.",
          unlockedAtStage: 2,
        },
        {
          title: "Gentle Nudge 1",
          content: "Who are ZC, BB, and MM?",
          unlockedAtStage: 2,
        },
        {
          title: "Gentle Nudge 2",
          content: "In Text Message 2, \"Unknown B\" mentions knowing someone who knows about the Oblivion. Who could that be?",
          unlockedAtStage: 2,
        },
      ],
    },
    {
      heading: "Mysterious Recipe",
      panels: [
        {
          title: "Hint 1",
          content: "Add your hint content here",
          unlockedAtStage: 3,
        },
      ],
    },
    {
      heading: "Solve the Case",
      panels: [
        {
          title: "Hint 1",
          content: "Add your hint content here",
          unlockedAtStage: 3,
        },
      ],
    },
  ],
};
