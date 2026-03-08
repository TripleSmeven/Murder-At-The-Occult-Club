import CustomCarousel from "../../components/CustomCarousel";
import NamePicker from "../../components/NamePicker";
import { allInboxes, type EmailJson, type Inbox } from "./EmailJsons";
import styles from "./Emails.module.css";

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

// an inbox (1 page)
function Inbox({ inbox }: { inbox: Inbox }) {
  const emailList = inbox.emails.map((email, index) => {
    return <Email key={index} {...email} />;
  });

  let picker;

  if (inbox.owner !== "Candace Eng") {
    picker = <NamePicker label={"Whose emails are these?"} color={"blue"} />;
  }

  return (
    <div className={styles.inboxParent}>
      {picker}
      <div className={styles.emailList}>
        <div className={styles.loggedIn}>
          You are logged in as: {picker ? "Unknown" : "Candace Eng"}
        </div>
        <div>.</div> {/** invisible top padding */}
        {emailList}
      </div>
    </div>
  );
}

// the component with all the pages
export default function Emails() {
  const emailListComponents = allInboxes.map((inbox, index) => {
    return <Inbox key={index} inbox={inbox} />;
  });
  return <CustomCarousel items={emailListComponents} />;
}
