import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { Color } from "../../components/ObjectiveBuilder";
import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import {
  daisy,
  david,
  GroupChatConversations,
  martin,
  matt,
  nikki,
} from "./ConversationJsons2";
import { ProgressKeys } from "../../context/ProgressContext";
import { useContext } from "react";
import { ProgressContext } from "../../context/ProgressContext";
import { StageContext } from "../../context/StageContext";

export default function GroupChat() {
  const { setSolved } = useContext(ProgressContext);
  const { setStage } = useContext(StageContext);

  const conversations = GroupChatConversations.map((conversation, index) => (
    <ConversationComponent
      key={index}
      {...conversation}
      index={index}
      theme="discord"
    />
  ));

  const objectives: ObjectivesJson = {
    heading: "Identify each person in the group chat",
    sections: [
      {
        title: matt,
        questions: [
          {
            question: "",
            answers: null,
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
            answers: null,
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
            answers: null,
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
            answers: null,
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
            answers: null,
            answer: "David Kataria",
            color: Color.GRAY,
          },
        ],
      },
    ],
  };

  const onCorrect = () => {
    setSolved(ProgressKeys.GROUP_CHAT);
    setStage(1);
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
