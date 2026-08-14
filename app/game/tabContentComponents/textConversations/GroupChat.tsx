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

export default function GroupChat() {
  const { setSolved } = useContext(ProgressContext);

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
            question: "First name",
            answers: null,
            answer: "Matthew",
            color: Color.GRAY,
          },
          {
            question: "Last name",
            answers: null,
            answer: "Crocker",
            color: Color.GRAY,
          },
        ],
      },
      {
        title: nikki,
        questions: [
          {
            question: "First name",
            answers: null,
            answer: "Nikki",
            color: Color.GRAY,
          },
          {
            question: "Last name",
            answers: null,
            answer: "Yu",
            color: Color.GRAY,
          },
        ],
      },
      {
        title: daisy,
        questions: [
          {
            question: "First name",
            answers: null,
            answer: "Daisy",
            color: Color.GRAY,
          },
          {
            question: "Last name",
            answers: null,
            answer: "Verde",
            color: Color.GRAY,
          },
        ],
      },
      {
        title: martin,
        questions: [
          {
            question: "First name",
            answers: null,
            answer: "Martin",
            color: Color.GRAY,
          },
          {
            question: "Last name",
            answers: null,
            answer: "Larssen",
            color: Color.GRAY,
          },
        ],
      },
      {
        title: david,
        questions: [
          {
            question: "First name",
            answers: null,
            answer: "David",
            color: Color.GRAY,
          },
          {
            question: "Last name",
            answers: null,
            answer: "Kataria",
            color: Color.GRAY,
          },
        ],
      },
    ],
  };

  const onCorrect = () => {
    setSolved(ProgressKeys.GROUP_CHAT);
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
