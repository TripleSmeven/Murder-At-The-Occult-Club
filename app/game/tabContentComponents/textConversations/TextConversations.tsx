import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../components/ObjectivesJson";
import { Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { allConversations } from "./Conversations";

export default function TextConversations() {
  const conversations = allConversations.map((conversation, index) => (
    <ConversationComponent key={index} {...conversation} />
  ));
  const objectives: ObjectivesJson = {
    heading: "Who are the unknown persons?",
    sections: [
      {
        title: "Text Message 2",
        questions: [
          { question: "Unknown A", answer: "", color: Color.RED },
          { question: "Unknown B", answer: "", color: Color.INDIGO },
        ],
      },
      {
        title: "Text Message 3",
        questions: [
          { question: "Unknown A", answer: "", color: Color.RED },
          { question: "Unknown B", answer: "", color: Color.INDIGO },
        ],
      },
      {
        title: "Text Message 4",
        questions: [{ question: "Unknown A", answer: "", color: Color.RED }],
      },
      {
        title: "Text Message 5",
        questions: [{ question: "Unknown A", answer: "", color: Color.RED }],
      },
      {
        title: "Text Message 7",
        questions: [
          { question: "Unknown A", answer: "", color: Color.RED },
          { question: "Unknown B", answer: "", color: Color.INDIGO },
        ],
      },
    ],
  };

  const evidence = <CustomCarousel items={conversations} />;
  return <TabContentBase evidence={evidence} objectives={objectives} />;
}
