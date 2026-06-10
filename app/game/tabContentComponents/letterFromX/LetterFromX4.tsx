import TabContentBase from "../TabContentBase";
import styles from "./LetterFromX.module.css";

export default function LetterFromX4() {
  const evidence = (
    <div className={`${styles.letter}`}>
      <div className={styles.page1}>
        <div className={styles.line}>So you figured it all out. Bravo.</div>
        <div className={styles.line}>{`Chamomile and white buttercups look quite similar, don't they? An untrained eye would not have noticed if they had been secretly switched.`}</div>
        <div className={styles.line}>
          {`I'll be honest. I wasn't sure if you were going to go through with all of this.`}
        </div>
        <div
          className={styles.line}
        >{`But something told me that since it was related to Zach Cunningham, you wouldn't be able to resist.`}</div>
        <div className={styles.line}>
          Goodbye for now. I have no doubt our paths will cross again.
        </div>
        <div className={styles.line}>- X</div>
      </div>
    </div>
  );

  return <TabContentBase evidence={evidence} />;
}
