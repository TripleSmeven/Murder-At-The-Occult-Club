import CustomCarousel from "../../components/CustomCarousel";
import { allEmails, EmailJson } from "./EmailJsons";
import styles from "./Emails.module.css";

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

function EmailList({ emails }: { emails: EmailJson[] }) {
  const emailComponents = emails.map((emailJson, index) => {
    return <Email key={index} {...emailJson} />;
  });

  return <div className={styles.emailList}>{emailComponents}</div>;
}

export default function Emails() {
  const emailListComponents = allEmails.map((emails, index) => {
    return <EmailList key={index} emails={emails} />;
  });
  return <CustomCarousel items={emailListComponents} />;
}
