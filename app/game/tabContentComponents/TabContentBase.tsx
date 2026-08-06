import Notepad from "../components/Notepad";
import { ObjectivesJson } from "../context/ObjectivesJson";
import styles from "./TabContentBase.module.css";

interface TabContentBaseProps {
  evidence: React.ReactNode;
  objectivesJson?: ObjectivesJson;
  onCorrect?: () => void;
}

export default function TabContentBase({
  evidence,
  objectivesJson,
  onCorrect,
}: TabContentBaseProps) {
  return (
    <div className={styles.parent}>
      <div className={styles.evidence}>{evidence}</div>
      <div className={styles.notes}>
        <Notepad objectivesJson={objectivesJson} onCorrect={onCorrect} />
      </div>
    </div>
  );
}
