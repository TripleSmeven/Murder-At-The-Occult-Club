import { ProgressKeys } from "../../components/ProgressContext";
import Pentagram from "../pentagram/Pentagram";
import TabContentBase from "../TabContentBase";
import LockedPdf from "./LockedPdf";

export default function LockedPentagram() {
  const evidence = (
    <LockedPdf password={"1892"} progressKey={ProgressKeys.LOCKED_PDF_UNLOCKED}>
      <Pentagram points={["Nikki", "Matt", "Daisy", "David", "Martin"]} />
    </LockedPdf>
  );

  return <TabContentBase evidence={evidence} />;
}
