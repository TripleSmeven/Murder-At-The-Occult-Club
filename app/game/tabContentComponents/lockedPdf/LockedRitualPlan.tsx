import { ProgressKeys } from "../../context/ProgressContext";
import Pentagram from "../pentagram/Pentagram";
import TabContentBase from "../TabContentBase";
import LockedPdf from "./LockedPdf";

import styles from "./LockedRitualPlan.module.css";

export default function LockedRitualPlan() {
  const evidence = (
    <LockedPdf password={"1892"} progressKey={ProgressKeys.LOCKED_PDF}>
      <div className={styles.container}>
        <h2>Ritual Plan</h2>
        <Pentagram points={["Nikki", "Matt", "Daisy", "David", "Martin"]} />
        <div className={styles.info}>
          <div>
            <strong>Time: </strong>11:00pm
          </div>
          <div>
            <strong>Location: </strong>Grand Study Hall, under skylight
          </div>
          <div>
            <strong>To Bring: </strong>
          </div>
          <ul>
            <li>Charcoal</li>
            <li>20-lined seashells</li>
            <li>Candles</li>
          </ul>
        </div>
      </div>
    </LockedPdf>
  );

  return <TabContentBase evidence={evidence} />;
}
