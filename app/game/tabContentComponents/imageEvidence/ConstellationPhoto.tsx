import TabContentBase from "../TabContentBase";
import ImageEvidence from "./ImageEvidence";
import constellation from "./images/constellations.png";

export default function ConstellationPhoto() {
  const evidence = <ImageEvidence image={constellation} />;
  return <TabContentBase evidence={evidence} />;
}
