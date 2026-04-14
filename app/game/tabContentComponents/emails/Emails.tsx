import { useContext } from "react";
import CustomCarousel from "../../components/CustomCarousel";
import { ObjectivesJson } from "../../components/ObjectivesJson";
import { Color } from "../../components/WordPicker";
import TabContentBase from "../TabContentBase";
import { allInboxes, type EmailJson, type Inbox } from "./EmailJsons";
import styles from "./Emails.module.css";
import { ObjectivesContext, ProgressKeys } from "../../components/ObjectivesContext";

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
  const ownerToDisplay = guessedName ? `[${guessedName}?]` : inbox.owner;

  return (
    <div className={styles.inboxParent}>
      <div className={styles.emailList}>
        <div className={styles.loggedIn}>You are logged in as: {ownerToDisplay}</div>
        <div>.</div> {/** invisible top padding */}
        {emailList}
      </div>
    </div>
  );
}

// the component with all the pages
export default function Emails() {
  const emailListComponents = allInboxes.map((inbox, index) => {
    return <Inbox key={index} inbox={inbox} index={index} />;
  });

  const objectives: ObjectivesJson = {
    heading: "Who is the owner of each email inbox?",
    sections: [
      {
        title: "Inbox 2",
        questions: [{ question: "Unknown", answer: "Thomas Brooke", color: Color.GREEN }],
      },
      {
        title: "Inbox 3",
        questions: [{ question: "Unknown", answer: "Sarah Findley", color: Color.GREEN }],
      },
      {
        title: "Inbox 4",
        questions: [{ question: "Unknown", answer: "Carlos Sanchez", color: Color.GREEN }],
      },
      {
        title: "Inbox 5",
        questions: [{ question: "Unknown", answer: "Andrew Wolfe", color: Color.GREEN }],
      },
    ],
  };

  const evidence = <CustomCarousel items={emailListComponents} />;
  const { progress, setProgress } = useContext(ObjectivesContext);
  const onCorrect = () => {
    if (progress?.[ProgressKeys.EMAILS] !== "true") {
      setProgress(ProgressKeys.EMAILS, "true");
    }
  };
  return <TabContentBase evidence={evidence} objectives={objectives} onCorrect={onCorrect} />;
}
