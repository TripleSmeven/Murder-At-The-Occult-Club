"use client";

import React, { useRef, useState } from "react";
import styles from "./Voicemails.module.css";

type VoicemailProps = {
  title: string;
  date: string;
  audioSrc: string;
  transcript?: string;
};

function Voicemail({ title, date, audioSrc, transcript }: VoicemailProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className={styles.voicemailCard}>
      <div className={styles.titleRow}>
        <div>
          <div className={styles.titleLeft}>
            <span className={styles.smallDot} />
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>

      <div className={styles.audioWrapper}>
        {/* Native audio controls allow play/pause and seeking */}
        <audio
          ref={audioRef}
          controls
          src={audioSrc}
          className={styles.audioElement}
        >
          Your browser does not support the audio element.
        </audio>

        <div className={styles.actionsRow}>
          <button
            className={styles.transcriptButton}
            onClick={() => setShowTranscript((s) => !s)}
            aria-expanded={showTranscript}
          >
            Transcript {">"}
          </button>

          <div
            className={`${styles.fakeAction} ${styles.favorite}`}
            title="Favorite"
          >
            ★
          </div>

          <div
            className={`${styles.fakeAction} ${styles.delete}`}
            title="Delete"
          >
            🗑
          </div>
        </div>

        <div
          className={`${styles.transcriptDropdown} ${showTranscript ? styles.open : styles.closed}`}
          aria-hidden={!showTranscript}
        >
          <div>{transcript}</div>
        </div>
      </div>
    </div>
  );
}

export default function Voicemails({
  voicemailsData,
}: {
  voicemailsData: VoicemailProps[];
}) {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>&lt; Voicemails</div>

      <div className={styles.voicemailList}>
        {voicemailsData.map((v, i) => (
          <Voicemail
            key={i}
            title={v.title}
            date={v.date}
            audioSrc={v.audioSrc}
            transcript={v.transcript}
          />
        ))}
      </div>
    </div>
  );
}
