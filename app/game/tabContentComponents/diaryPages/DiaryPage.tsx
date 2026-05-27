"use client";

import styles from "./DiaryPage.module.css";

interface DiaryPageProps {
  textBlocks: string[];
}

export default function DiaryPage({ textBlocks }: DiaryPageProps) {
  return (
    <div className={styles.diaryPage}>
      <div className={styles.textContent}>
        {textBlocks.map((text, index) => (
          <div key={index}>
            <div key={index}>{text}</div>

            {/* Non-breaking space to preserve formatting */}
            <div>&nbsp;</div>
          </div>
        ))}
      </div>
    </div>
  );
}
