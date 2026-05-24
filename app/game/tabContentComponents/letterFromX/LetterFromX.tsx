import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import styles from "./LetterFromX.module.css";

export default function LetterFromX() {
  const item1 = (
    <div className={`${styles.letter}`}>
      <div className={styles.page1}>
        <div className={styles.line}>Hello.</div>
        <div className={styles.line}>
          A fellow classmate of ours, Zach Cunningham, has died. The university president will soon
          release a statement claiming it was a suicide.
        </div>
        <div
          className={styles.line}
        >{`But that's a lie, and the president knows that. He's covering it up.`}</div>
        <div className={styles.line}>Zach Cunningham was murdered.</div>
        <div className={styles.line}>Help me prove it.</div>
        <div className={styles.line}>
          I have sent you the police report on the incident. Read it.
        </div>
        <div className={styles.line}>
          {"Once you've shown me you're up to the task, I'll send you more."}
        </div>
        <div className={styles.line}>{"Analyze the evidence. Solve the case. Good luck."}</div>
        <div className={styles.line}>{"- X"}</div>
      </div>
    </div>
  );

  const evidenceComponent = <CustomCarousel items={[item1]} />;

  return <TabContentBase evidence={evidenceComponent} />;
}
