import styles from "./Pentagram.module.css";

interface PentagramProps {
  points: [string, string, string, string, string];
}

export default function Pentagram({ points }: PentagramProps) {
  return (
    <div className={styles.pentagramContainer}>
      <div className={styles.starFrame}>
        <svg
          className={styles.starSvg}
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <circle className={styles.circle} cx="100" cy="100" r="92" />
          <path
            className={styles.line}
            d="M100 8 L154.1 174.5 L12.5 71.6 L187.5 71.6 L45.9 174.5 Z"
          />
        </svg>

        <div className={`${styles.pointLabel} ${styles.point1}`}>
          <span>{points[0]}</span>
        </div>
        <div className={`${styles.pointLabel} ${styles.point2}`}>
          <span>{points[1]}</span>
        </div>
        <div className={`${styles.pointLabel} ${styles.point3}`}>
          <span>{points[2]}</span>
        </div>
        <div className={`${styles.pointLabel} ${styles.point4}`}>
          <span>{points[3]}</span>
        </div>
        <div className={`${styles.pointLabel} ${styles.point5}`}>
          <span>{points[4]}</span>
        </div>
      </div>
    </div>
  );
}
