import { useContext } from "react";
import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { CHAPTER2_NAMES, Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { daisy, david, GroupChatConversations, martin, matt, nikki } from "./ConversationJsons2";
import { ProgressContext, ProgressKeys } from "../../components/ProgressContext";

export default function GroupChat() {
  const conversations = GroupChatConversations.map((conversation, index) => (
    <ConversationComponent key={index} {...conversation} index={index} theme="discord" />
  ));

  const objectives: ObjectivesJson = {
    heading: "Identify each person in the group chat",
    sections: [
      {
        title: matt,
        questions: [
          {
            question: "",
            answers: CHAPTER2_NAMES,
            answer: "Matthew Crocker",
            color: Color.GRAY,
          },
        ],
      },
      {
        title: nikki,
        questions: [
          {
            question: "",
            answers: CHAPTER2_NAMES,
            answer: "Nikki Yu",
            color: Color.GRAY,
          },
        ],
      },
      {
        title: daisy,
        questions: [
          {
            question: "",
            answers: CHAPTER2_NAMES,
            answer: "Daisy Verde",
            color: Color.GRAY,
          },
        ],
      },
      {
        title: martin,
        questions: [
          {
            question: "",
            answers: CHAPTER2_NAMES,
            answer: "Martin Larssen",
            color: Color.GRAY,
          },
        ],
      },
      {
        title: david,
        questions: [
          {
            question: "",
            answers: CHAPTER2_NAMES,
            answer: "David Kataria",
            color: Color.GRAY,
          },
        ],
      },
    ],
  };

  const evidence = <CustomCarousel items={conversations} />;
  return <TabContentBase evidence={evidence} objectivesJson={objectives} />;
}
