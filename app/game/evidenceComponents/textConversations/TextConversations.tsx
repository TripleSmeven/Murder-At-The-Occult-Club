import CustomCarousel from "../../components/CustomCarousel";
import { ConversationComponent } from "./ConversationComponent";
import { Police } from "./Conversations";

export default function TextConversations() {
  const policeText = <ConversationComponent {...Police} />;
  return (
    <div>
      <CustomCarousel size={1} items={[policeText]} />
    </div>
  );
}
