import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { Color } from "../../components/ObjectiveBuilder";
import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import {
  daisy,
  david,
  GroupChatConversations2,
  martin,
  matt,
  nikki,
} from "./ConversationJsons2";
import { ProgressKeys } from "../../context/ProgressContext";
import { useContext } from "react";
import { ProgressContext } from "../../context/ProgressContext";

export default function GroupChat() {
  const { setSolved } = useContext(ProgressContext);

  const conversations = GroupChatConversations2.map((conversation, index) => (
    <ConversationComponent
      key={index}
      {...conversation}
      index={index}
      theme="discord"
    />
  ));

  const objectives: ObjectivesJson = {
    heading: "What happened to the college students?",
    sections: [
      {
        title: "What ritual were they planning on performing?",
        questions: [
          {
            question: "",
            answers: null,
            answer: "Matthew Crocker",
            color: Color.RED,
          },
        ],
      },
      {
        title: "What ritual did they actually perform?",
        questions: [
          {
            question: "",
            answers: null,
            answer: "Nikki Yu",
            color: Color.RED,
          },
        ],
      },
    ],
  };

  const onCorrect = () => {
    setSolved(ProgressKeys.GROUP_CHAT_2);
  };

  const evidence = <CustomCarousel items={conversations} />;
  return (
    <TabContentBase
      evidence={evidence}
      objectivesJson={objectives}
      onCorrect={onCorrect}
    />
  );
}
