import Image from "next/image";
import badge from "../policeReport/police-badge.png";

import styles from "./PoliceTranscript.module.css";
import TabContentBase from "../TabContentBase";
import CustomCarousel from "../../components/CustomCarousel";
import { transcripts } from "./TranscriptJsons";

function TranscriptLine({ name, text }: { name: string; text: string }) {
  return (
    <div className={styles.line}>
      <strong>{name}: </strong>
      {text}
    </div>
  );
}

export default function PoliceTranscript() {
  const pages = transcripts.map((t, idx) => {
    const transcriptLines = t.lines.map((line, i) => (
      <TranscriptLine name={line.name} text={line.text} key={i} />
    ));

    return (
      <div className={styles.parentDiv} key={idx}>
        {t.firstPage ? (
          <>
            <div className={`${styles.header}`}>Interview Transcript</div>
            <div className={styles.subtitle}>Kaiser County Police Department</div>
            <div className={styles.subtitle}>
              <Image src={badge} width={45} height={50} alt={"police badge"} />
            </div>

            <div className={`${styles.borderSection} ${styles.details}`}>
              <div className={styles.col}>
                <div>
                  <strong>Date: </strong> {t.date}
                </div>
                <div>
                  <strong>Category: </strong>Missing Person
                </div>
                <div>
                  <strong>Location: </strong>
                  {t.location}
                </div>
              </div>
              <div className={styles.col}>
                <div>
                  <strong>Interviewer: </strong>
                  {t.interviewer}
                </div>
                <div>
                  <strong>Interviewee: </strong>
                  {t.interviewee}
                </div>
              </div>
            </div>
          </>
        ) : null}

        <div className={`${styles.borderSection}`}>{transcriptLines}</div>
      </div>
    );
  });

  const evidence = <CustomCarousel items={pages} />;

  return <TabContentBase evidence={evidence} />;
}
