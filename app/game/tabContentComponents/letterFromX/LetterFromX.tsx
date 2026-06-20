import styles from "./LetterFromX.module.css";

interface LetterFromXProps {
  lines: string[];
}

export default function LetterFromX({ lines }: LetterFromXProps) {
  const lineElements = lines.map((line, index) => {
    return (
      <div className={styles.line} key={index}>
        {line}
      </div>
    );
  });
  const evidence = (
    <div className={`${styles.letter}`}>
      <div className={styles.page}>{lineElements}</div>
    </div>
  );

  return evidence;
}
