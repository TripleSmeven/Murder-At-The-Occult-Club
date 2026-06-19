"use client";

import { ReactNode } from "react";
import styles from "./Email.module.css";

interface EmailProps {
  title: string;
  senderName: string;
  timestamp: string;
  children: ReactNode;
}

export default function Email({ title, senderName, timestamp, children }: EmailProps) {
  return (
    <div className={styles.emailContainer}>
      <div className={styles.emailTitle}>{title}</div>

      <div className={styles.underTitle}>
        <div className={styles.leftSide}>
          <div className={styles.profilePicture}></div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.emailHeader}>
            <div className={styles.senderReceiverInfo}>
              <div className={styles.senderLabel}>{senderName}</div>
              <div className={styles.recipientLabel}>to me</div>
            </div>
            <div className={styles.timeAndActions}>
              <div className={styles.timestamp}>{timestamp}</div>
              <div className={styles.actionButtons}>
                <span className={styles.starButton}>★</span>
                <span className={styles.replyButton}>⟲</span>
              </div>
            </div>
          </div>

          <div className={styles.emailBody}>{children}</div>
        </div>
      </div>
    </div>
  );
}
