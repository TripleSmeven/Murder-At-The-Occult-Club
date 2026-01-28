import { ConversationJson } from "./Conversations";
import styles from "./ConversationComponent.module.css";

interface TextMessageJson {
  sender: string;
  content: string;
  time: string;
}

const senderToProfileMap: { [key: string]: string } = {
  "Sebastian Walsh": "walsh",
  "Roy Samson": "samson",
  "Unknown A": "unknownA",
  "Unknown B": "unknownB",
};

const TextMessagePrimary = ({ sender, content, time }: TextMessageJson) => {
  return (
    <div className={styles.primaryParent}>
      <div className={`${styles.profile} ${styles[senderToProfileMap[sender]]}`}></div>
      <div className={styles.messageParent}>
        <div className={styles.messageHeader}>
          <div className={styles.messageSender}>{sender}</div>
          <div className={styles.messageTime}>{time}</div>
        </div>
        <div className={styles.messageContent}>{content}</div>
      </div>
    </div>
  );
};

const TextMessageSecondary = ({ content }: { content: string }) => {
  return (
    <div className={styles.secondaryParent}>
      <div className={styles.secondaryMessageParent}>
        <div className={styles.messageContent}>{content}</div>
      </div>
    </div>
  );
};

export const ConversationComponent = ({ date, messages }: ConversationJson) => {
  const dateFormat: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  let currentSender = "";
  const currentTimeStamp = new Date(date);

  const conversationContent = messages.map((message, index) => {
    // advance the timestamp by 1 second per character in the message,
    // to simulate the time it takes to type up that message
    currentTimeStamp.setTime(currentTimeStamp.getTime() + 1000 * message.content.length);

    if (message.sender === currentSender) {
      return <TextMessageSecondary key={index} content={message.content} />;
    } else {
      // eslint-disable-next-line react-hooks/immutability
      currentSender = message.sender;
      return (
        <TextMessagePrimary
          key={index}
          sender={message.sender}
          time={currentTimeStamp.toLocaleString(navigator.language, dateFormat)}
          content={message.content}
        />
      );
    }
  });

  return <div className={styles.conversationParent}>{conversationContent}</div>;
};
