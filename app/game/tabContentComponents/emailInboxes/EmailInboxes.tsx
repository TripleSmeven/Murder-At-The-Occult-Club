import { useContext } from "react";
import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../context/ObjectivesJson";
import { CHAPTER1_NAMES, Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import { allInboxes, type EmailJson, type Inbox } from "./EmailInboxJsons";
import styles from "./EmailInboxes.module.css";
import { ObjectivesContext } from "../../context/ObjectivesContext";
import { ProgressContext, ProgressKeys } from "../../components/ProgressContext";

// a single email in the inbox
function Email({ sender, title, content, date }: EmailJson) {
  return (
    <div className={styles.emailParent}>
      <div className={styles.sender}>{sender}</div>
      <div className={styles.titleDateParent}>
        <div className={styles.title}>{title}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

interface InboxProps {
  inbox: Inbox;
  index: number;
}

// an inbox (1 page)
function Inbox({ inbox, index }: InboxProps) {
  const { answers } = useContext(ObjectivesContext);
  const emailList = inbox.emails.map((email, index) => {
    return <Email key={index} {...email} />;
  });

  // if the player has guessed the owner, display the guess. Otherwise show what's in the json.
  const storageKey = `Inbox ${index + 1}-Unknown`;
  const guessedName = answers[storageKey];

  const { isSolved } = useContext(ProgressContext);
  const completedObjective = isSolved(ProgressKeys.EMAILS);
  let ownerToDisplay;
  if (completedObjective) {
    ownerToDisplay = guessedName ? `[${guessedName}]` : inbox.owner;
  } else {
    ownerToDisplay = guessedName ? `[${guessedName}?]` : inbox.owner;
  }

  return (
    <div className={styles.inboxParent}>
      <div className={styles.emailList}>
        <div className={styles.loggedIn}>You are logged in as: {ownerToDisplay}</div>
        <div>.</div> {/* invisible top padding */}
        {emailList}
      </div>
    </div>
  );
}

// the component with all the pages
export default function EmailInboxes() {
  const emailListComponents = allInboxes.map((inbox, index) => {
    return <Inbox key={index} inbox={inbox} index={index} />;
  });

  const objectives: ObjectivesJson = {
    heading: "Who is the owner of each email inbox?",
    sections: [
      {
        title: "Inbox 2",
        questions: [
          {
            question: "Unknown",
            answers: CHAPTER1_NAMES,
            answer: "Thomas Brooke",
            color: Color.GREEN,
          },
        ],
      },
      {
        title: "Inbox 3",
        questions: [
          {
            question: "Unknown",
            answers: CHAPTER1_NAMES,
            answer: "Sarah Findley",
            color: Color.GREEN,
          },
        ],
      },
      {
        title: "Inbox 4",
        questions: [
          {
            question: "Unknown",
            answers: CHAPTER1_NAMES,
            answer: "Carlos Sanchez",
            color: Color.GREEN,
          },
        ],
      },
      {
        title: "Inbox 5",
        questions: [
          {
            question: "Unknown",
            answers: CHAPTER1_NAMES,
            answer: "Andrew Wolfe",
            color: Color.GREEN,
          },
        ],
      },
    ],
  };

  const evidence = <CustomCarousel items={emailListComponents} />;
  const { isSolved, setSolved } = useContext(ProgressContext);
  const onCorrect = () => {
    if (!isSolved(ProgressKeys.EMAILS)) {
      setSolved(ProgressKeys.EMAILS, true);
    }
  };
  return <TabContentBase evidence={evidence} objectivesJson={objectives} onCorrect={onCorrect} />;
}
