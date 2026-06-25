"use client";

import { ReactNode } from "react";
import styles from "./NotesApp.module.css";

interface NotesAppProps {
  title?: string;
  date?: string;
  children: ReactNode;
}

export default function NotesApp({
  title = "Note",
  date = "Today",
  children,
}: NotesAppProps) {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={styles.left}>
          <div className={styles.backButton}>Back</div>
        </div>

        <div className={styles.center}>
          <div className={styles.headerTitle}>{title}</div>
          <div className={styles.headerDate}>{date}</div>
        </div>

        <div className={styles.right}>
          <div className={styles.iconButton}>☆</div>
          <div className={styles.iconButton}>⌧</div>
          <div className={styles.iconButton}>⋮</div>
        </div>
      </div>

      <div className={styles.noteArea}>
        <div className={styles.noteContent}>{children}</div>
      </div>
    </div>
  );
}
