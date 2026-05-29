import { useContext } from "react";
import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../components/ObjectivesJson";
import { Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { primaryConversations } from "./Conversations";
import { ObjectivesContext, ProgressKeys } from "../../components/ObjectivesContext";

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
          { question: "Unknown A", answer: "Thomas Brooke", color: Color.RED },
          { question: "Unknown B", answer: "Sarah Findley", color: Color.INDIGO },
        ],
      },
      {
        title: "Text Message 3",
        questions: [
          { question: "Unknown A", answer: "Andrew Wolfe", color: Color.RED },
          { question: "Unknown B", answer: "Carlos Sanchez", color: Color.INDIGO },
        ],
      },
      {
        title: "Text Message 5",
        questions: [{ question: "Unknown A", answer: "Candace Eng", color: Color.RED }],
      },
      {
        title: "Text Message 6",
        questions: [{ question: "Unknown A", answer: "Sarah Findley", color: Color.RED }],
      },
      {
        title: "Text Message 8",
        questions: [
          { question: "Unknown A", answer: "Candace Eng", color: Color.RED },
          { question: "Unknown B", answer: "Sarah Findley", color: Color.INDIGO },
        ],
      },
    ],
  };

  const { getProgress, setProgress } = useContext(ObjectivesContext);
  const onCorrect = () => {
    if (!getProgress(ProgressKeys.TEXT_CONVERSATIONS)) {
      setProgress(ProgressKeys.TEXT_CONVERSATIONS, true);
    }
  };

  const evidence = (
    <CustomCarousel
      items={conversations}
      lockedTooltip="Unlock by completing the Objectives in Text Messages, Email Inboxes, and Online Orders."
    />
  );
  return <TabContentBase evidence={evidence} objectives={objectives} onCorrect={onCorrect} />;
}
