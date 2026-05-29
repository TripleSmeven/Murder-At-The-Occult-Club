import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { newConversation } from "./Conversations";

export default function TextConversations() {
  const conversation = newConversation.map((conversation, index) => (
    <ConversationComponent key={index} {...conversation} index={index} />
  ));

  return <TabContentBase evidence={conversation} />;
}
