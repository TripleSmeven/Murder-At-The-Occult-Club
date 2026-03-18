import Notepad from "../components/Notepad";
import { ObjectivesJson } from "../components/ObjectivesJson";
import styles from "./TabContentBase.module.css";

interface TabContentBaseProps {
  evidence: React.ReactNode;
  objectives?: ObjectivesJson;
}

export default function TabContentBase({ evidence, objectives }: TabContentBaseProps) {
  return (
    <div className={styles.parent}>
      <div className={styles.evidence}>{evidence}</div>
      <div className={styles.notes}>
        <Notepad {...objectives} />
      </div>
    </div>
  );
}
