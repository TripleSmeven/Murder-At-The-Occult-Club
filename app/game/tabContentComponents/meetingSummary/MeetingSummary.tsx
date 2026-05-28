"use client";

import TabContentBase from "../TabContentBase";
import styles from "./MeetingSummary.module.css";

export default function MeetingSummary() {
  const quickRecap =
    "Miranda Meadows met with Thomas Brooke to discuss Thomas's new plan to combat occult club activity. Thomas proposed a highly proactive strategy involving a permanently irreversible personnel transition for a problematic actor. Miranda expressed strong opposition to the plan, citing that the company handbook, HR policies, and most legal systems strongly discourage solving alignment challenges through terminal human-resource reductions. She restated that pursuing this would require leadership to separate Thomas from the organization. Thomas rebutted by stating his proposal aligned perfectly with the organization's long term goals and that he may enact the plan through indepedent channels.";
  const summaryContent = (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <span className={styles.breadcrumbLink}>My Summaries &gt; </span>Meeting with Miranda
        Meadows Summary
      </div>
      <h1 className={styles.mainTitle}>Meeting with Miranda Meadows Summary</h1>
      <div className={styles.dateSubtitle}>
        December 10, 2016, 9:36 AM Eastern Time (US and Canada)
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Quick recap</h2>
        <p className={styles.sectionContent}>{quickRecap}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Next steps</h2>
        <div>
          <ul>
            <li>
              Leadership to evaluate whether Thomas remains a cultural fit for the organization.
            </li>
            <li>
              Legal team to prepare for damage control in the event of a public relations crisis.
            </li>
            <li>Thomas to explore alternative approaches to addressing the situation.</li>
          </ul>
        </div>
      </section>
    </div>
  );

  return <TabContentBase evidence={summaryContent} />;
}
