import styles from "./HandwrittenLetter.module.css";

interface LetterFromXProps {
  lines: string[];
  style?: "fromX" | "fromWalter";
}

export default function HandwrittenLetter({
  lines,
  style = "fromX",
}: LetterFromXProps) {
  const lineElements = lines.map((line, index) => {
    return (
      <div className={styles.line} key={index}>
        {line}
      </div>
    );
  });
  const evidence = (
    <div
      className={`${styles.letter} ${style === "fromWalter" && styles.fromWalter}`}
    >
      <div className={styles.page}>{lineElements}</div>
    </div>
  );

  return evidence;
}
