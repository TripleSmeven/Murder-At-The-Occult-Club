import { useContext } from "react";
import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { GroupChatConversations } from "./ConversationJsons2";
import { ProgressContext, ProgressKeys } from "../../components/ProgressContext";

export default function GroupChat() {
  const conversations = GroupChatConversations.map((conversation, index) => (
    <ConversationComponent key={index} {...conversation} index={index} theme="discord" />
  ));

  const evidence = <CustomCarousel items={conversations} />;
  return <TabContentBase evidence={evidence} />;
}
