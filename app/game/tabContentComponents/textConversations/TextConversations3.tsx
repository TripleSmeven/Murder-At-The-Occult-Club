import TabContentBase from "../TabContentBase";
import { ConversationComponent } from "./ConversationComponent";
import { Realization } from "./Conversations";

export default function TextConversations() {
  const evidence = (
    <ConversationComponent date={Realization.date} messages={Realization.messages} index={0} />
  );
  return <TabContentBase evidence={evidence} />;
}
