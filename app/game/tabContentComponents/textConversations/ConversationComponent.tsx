import { ConversationJson } from "./ConversationJsons";
import styles from "./ConversationComponent.module.css";
import { ObjectivesContext } from "../../context/ObjectivesContext";
import {
  ProgressContext,
  ProgressKeys,
} from "../../components/ProgressContext";
import { useContext } from "react";

type Theme = "slack" | "discord";

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

interface TextMessageJson {
  sender: string;
  profile: string;
  content: string;
  time: string;
  theme: Theme;
}

const senderToProfileMap: { [key: string]: string } = {
  "Sebastian Waller": "waller",
  "Troy Samson": "samson",
  "Evelyn Samson": "esamson",
  "Heather Douglas": "heather",
  "Maria Sanchez": "flower",
  "Carlos Sanchez": "sanchez",
  "Sarah Findley": "sarah",
  "Unknown A": "unknownA",
  "Unknown B": "unknownB",

  justagreengirl: "justagreengirl",
  sam_slow_down: "sam_slow_down",
  looprevil99: "looprevil99",
  meremere: "meremere",
  playingWithMyHeart: "playingWithMyHeart",
};

const TextMessagePrimary = ({
  sender,
  profile,
  content,
  time,
  theme = "slack",
}: TextMessageJson) => {
  if (!senderToProfileMap[profile]) {
    profile = "Unknown A";
  }
  return (
    <div className={styles.primaryParent}>
      <div
        className={`${styles.profile} ${styles[senderToProfileMap[profile]]} ${theme === "discord" && styles.discordTheme}`}
      ></div>
      <div className={styles.messageParent}>
        <div className={styles.messageHeader}>
          <div className={styles.messageSender}>{sender}</div>
          <div className={styles.messageTime}>{time}</div>
        </div>
        <MessageContent content={content} />
      </div>
    </div>
  );
};

const TextMessageSecondary = ({ content }: { content: string }) => {
  return (
    <div className={styles.secondaryParent}>
      <div className={styles.secondaryMessageParent}>
        <MessageContent content={content} />
      </div>
    </div>
  );
};

interface TextMessageAttachmentProps {
  title: string;
  bytes: number;
}

export const TextMessageAttachment = ({
  title,
  bytes,
}: TextMessageAttachmentProps) => {
  return (
    <div className={styles.attachmentContainer}>
      <div className={styles.attachmentIcon}></div>
      <div>
        <div className={styles.attachmentTitle}>{title}</div>
        <div className={styles.attachmentSize}>{bytes + " KB"}</div>
      </div>
      <div>⬇️</div>
    </div>
  );
};

export const MessageContent = ({ content }: { content: string }) => {
  const parts = content.split(/(@\w+|https:\/\/\S+)/g);

  const processedContent = parts.map((part, index) => {
    if (part.startsWith("@")) {
      return (
        <span key={index} className={styles.usernameMention}>
          {part}
        </span>
      );
    }
    if (part.startsWith("https://")) {
      return (
        <span key={index} className={styles.hyperlink}>
          {part}
        </span>
      );
    }
    return part;
  });

  return <div className={styles.messageContent}>{processedContent}</div>;
};

interface ConversationComponentProps extends ConversationJson {
  theme?: Theme;
  index: number;
}

export const ConversationComponent = ({
  date,
  messages,
  index,
  theme = "slack",
  speed,
}: ConversationComponentProps) => {
  const { answers } = useContext(ObjectivesContext);

  let previousSender = "";
  const currentTimeStamp = new Date(date);

  const { isSolved } = useContext(ProgressContext);
  const completedObjective = isSolved(ProgressKeys.TEXT_CONVERSATIONS);

  const conversationContent = messages.map((message, index2) => {
    // advance the timestamp by 1 second per character in the message,
    // to simulate the time it takes to type up that message
    const msPerWord = speed === "fast" ? 100 : 1000;
    currentTimeStamp.setTime(
      currentTimeStamp.getTime() + msPerWord * message.content.length,
    );

    if (message.attachment) {
      return (
        <TextMessageAttachment
          title={message.attachment.title}
          bytes={message.attachment.bytes}
          key={index2}
        />
      );
    }

    // if the sender is the same as the previous message, render a secondary message (no profile or name)
    if (message.sender === previousSender) {
      return <TextMessageSecondary key={index2} content={message.content} />;
    } else {
      // eslint-disable-next-line react-hooks/immutability
      previousSender = message.sender;

      // by default the sender is what's in the json. But if the player has made a guess on the objectives, render the guessed name instead.
      const storageKey = `Text Message ${index + 1}-${message.sender}`;
      const guessedName = answers[storageKey];

      // if this section is all correct, don't render the question mark.
      let senderToDisplay;
      if (completedObjective) {
        senderToDisplay = guessedName ? `[${guessedName}]` : message.sender;
      } else {
        senderToDisplay = guessedName ? `[${guessedName}?]` : message.sender;
      }
      return (
        <TextMessagePrimary
          key={index2}
          sender={senderToDisplay}
          profile={message.sender}
          time={currentTimeStamp.toLocaleString(
            navigator.language,
            DATE_FORMAT,
          )}
          content={message.content}
          theme={theme}
        />
      );
    }
  });
  return (
    <div
      className={`${styles.conversationParent} ${theme === "discord" && styles.discordTheme}`}
    >
      {conversationContent}
    </div>
  );
};
