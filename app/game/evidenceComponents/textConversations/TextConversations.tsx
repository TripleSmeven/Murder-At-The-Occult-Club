import CustomCarousel from "../../components/CustomCarousel";
import { ConversationComponent } from "./ConversationComponent";
import { allConversations } from "./Conversations";

export default function TextConversations() {
  const conversations = allConversations.map((conversation, index) => (
    <ConversationComponent key={index} {...conversation} />
  ));
  return (
    <div>
      <CustomCarousel items={conversations} />
    </div>
  );
}
