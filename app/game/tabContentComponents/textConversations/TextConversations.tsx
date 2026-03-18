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
        title: "Text 2",
        questions: [
          { question: "Unknown A", answer: "", color: Color.RED },
          { question: "Unknown A", answer: "", color: Color.INDIGO },
        ],
      },
      {
        title: "Text 3",
        questions: [
          { question: "Unknown A", answer: "", color: Color.RED },
          { question: "Unknown A", answer: "", color: Color.INDIGO },
        ],
      },
      {
        title: "Text 4",
        questions: [{ question: "Unknown A", answer: "", color: Color.RED }],
      },
      {
        title: "Text 5",
        questions: [{ question: "Unknown A", answer: "", color: Color.RED }],
      },
      {
        title: "Text 7",
        questions: [
          { question: "Unknown A", answer: "", color: Color.RED },
          { question: "Unknown A", answer: "", color: Color.INDIGO },
        ],
      },
    ],
  };

  const evidence = <CustomCarousel items={conversations} />;
  return <TabContentBase evidence={evidence} objectives={objectives} />;
}
