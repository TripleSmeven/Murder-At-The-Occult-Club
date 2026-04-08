import { ConversationJson } from "./Conversations";
import styles from "./ConversationComponent.module.css";
import { AnswersContext } from "../../components/AnswersContext";
import { useContext } from "react";

interface TextMessageJson {
  sender: string;
  profile: string;
  content: string;
  time: string;
}

const senderToProfileMap: { [key: string]: string } = {
  "Sebastian Waller": "waller",
  "Troy Samson": "samson",
  "Evelyn Samson": "esamson",
  "Heather Douglas": "heather",
  "Maria Sanchez": "flower",
  "Carlos Sanchez": "sanchez",
  "Unknown A": "unknownA",
  "Unknown B": "unknownB",
};

const TextMessagePrimary = ({ sender, profile, content, time }: TextMessageJson) => {
  return (
    <div className={styles.primaryParent}>
      <div className={`${styles.profile} ${styles[senderToProfileMap[profile]]}`}></div>
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

interface ConversationComponentProps extends ConversationJson {
  index: number;
}

export const ConversationComponent = ({ date, messages, index }: ConversationComponentProps) => {
  const { answers } = useContext(AnswersContext);
  const dateFormat: Intl.DateTimeFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  let previousSender = "";
  const currentTimeStamp = new Date(date);

  const conversationContent = messages.map((message, index2) => {
    // advance the timestamp by 1 second per character in the message,
    // to simulate the time it takes to type up that message
    currentTimeStamp.setTime(currentTimeStamp.getTime() + 1000 * message.content.length);

    // if the sender is the same as the previous message, render a secondary message (no profile or name)
    if (message.sender === previousSender) {
      return <TextMessageSecondary key={index2} content={message.content} />;
    } else {
      // eslint-disable-next-line react-hooks/immutability
      previousSender = message.sender;

      // by default the sender is what's in the json. But if the player has made a guess on the objectives, render the guessed name instead.
      const storageKey = `Text Message ${index + 1}-${message.sender}`;
      const guessedName = answers[storageKey];
      const senderToDisplay = guessedName ? `[${guessedName}?]` : message.sender;
      return (
        <TextMessagePrimary
          key={index2}
          sender={senderToDisplay}
          profile={message.sender}
          time={currentTimeStamp.toLocaleString(navigator.language, dateFormat)}
          content={message.content}
        />
      );
    }
  });

  return <div className={styles.conversationParent}>{conversationContent}</div>;
};
