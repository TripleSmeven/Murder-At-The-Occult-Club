import CustomCarousel from "../../components/CustomCarousel";

import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { GroupChatConversations2 } from "./ConversationJsons2";

export default function GroupChat2() {
  const conversations = GroupChatConversations2.map((conversation, index) => (
    <ConversationComponent
      key={index}
      {...conversation}
      index={index}
      theme="discord"
    />
  ));

  const evidence = <CustomCarousel items={conversations} />;
  return <TabContentBase evidence={evidence} />;
}
