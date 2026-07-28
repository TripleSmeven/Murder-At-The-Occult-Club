"use client";

import styles from "./NotebookPage.module.css";

interface NotebookPageProps {
  textBlocks: string[];
  type?: "diary" | "notepad";
}

export default function NotebookPage({ textBlocks, type }: NotebookPageProps) {
  return (
    <div
      className={`${styles.notebookPage} ${type === "notepad" ? styles.notepadStyle : ""}`}
    >
      <div
        className={`${styles.textContent} ${type === "notepad" ? styles.notepadStyle : ""}`}
      >
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
