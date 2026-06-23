import { useContext } from "react";
import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { CHAPTER1_NAMES, Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { primaryConversations } from "./ConversationJsons";
import { ProgressContext, ProgressKeys } from "../../components/ProgressContext";

export default function TextConversations() {
  const conversations = primaryConversations.map((conversation, index) => (
    <ConversationComponent key={index} {...conversation} index={index} />
  ));
  const objectives: ObjectivesJson = {
    heading: "Who are the unknown senders in these texts?",
    sections: [
      {
        title: "Text Message 2",
        questions: [
          {
            question: "Unknown A",
            answers: CHAPTER1_NAMES,
            answer: "Thomas Brooke",
            color: Color.RED,
          },
          {
            question: "Unknown B",
            answers: CHAPTER1_NAMES,
            answer: "Sarah Findley",
            color: Color.INDIGO,
          },
        ],
      },
      {
        title: "Text Message 3",
        questions: [
          {
            question: "Unknown A",
            answers: CHAPTER1_NAMES,
            answer: "Andrew Wolfe",
            color: Color.RED,
          },
          {
            question: "Unknown B",
            answers: CHAPTER1_NAMES,
            answer: "Carlos Sanchez",
            color: Color.INDIGO,
          },
        ],
      },
      {
        title: "Text Message 4",
        questions: [
          {
            question: "Unknown A",
            answers: CHAPTER1_NAMES,
            answer: "Candace Eng",
            color: Color.RED,
          },
        ],
      },
      {
        title: "Text Message 5",
        questions: [
          {
            question: "Unknown A",
            answers: CHAPTER1_NAMES,
            answer: "Sarah Findley",
            color: Color.RED,
          },
        ],
      },
      {
        title: "Text Message 7",
        questions: [
          {
            question: "Unknown A",
            answers: CHAPTER1_NAMES,
            answer: "Candace Eng",
            color: Color.RED,
          },
          {
            question: "Unknown B",
            answers: CHAPTER1_NAMES,
            answer: "Sarah Findley",
            color: Color.INDIGO,
          },
        ],
      },
    ],
  };

  const { isSolved, setSolved } = useContext(ProgressContext);
  const onCorrect = () => {
    if (!isSolved(ProgressKeys.TEXT_CONVERSATIONS)) {
      setSolved(ProgressKeys.TEXT_CONVERSATIONS, true);
    }
  };

  const evidence = (
    <CustomCarousel
      items={conversations}
      lockedTooltip="Unlock by completing the Objectives in Text Messages, Email Inboxes, and Online Orders."
    />
  );
  return <TabContentBase evidence={evidence} objectivesJson={objectives} onCorrect={onCorrect} />;
}
