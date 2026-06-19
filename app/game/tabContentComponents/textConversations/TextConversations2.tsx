import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { Help } from "./ConversationJsons";

export default function TextConversations() {
  const evidence = <ConversationComponent date={Help.date} messages={Help.messages} index={0} />;
  return <TabContentBase evidence={evidence} />;
}
