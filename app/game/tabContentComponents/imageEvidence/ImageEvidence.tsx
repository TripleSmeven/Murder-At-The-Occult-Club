import Image, { StaticImageData } from "next/image";
import styles from "./ImageEvidence.module.css";

export default function ImageEvidence({ image }: { image: StaticImageData }) {
  return (
    <a
      href={image.src}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
    >
      <Image
        src={image}
        className={styles.image}
        alt={"An image of a constellation"}
      />
      <div className={styles.expandHint}>Click to expand</div>
    </a>
  );
}
