"use client";

import Link from "next/link";

import styles from "./page.module.css";

interface ChapterCardProps {
  title: string;
  link: string;
  image: string;
}

function ChapterCard({ title, link, image }: ChapterCardProps) {
  return (
    <div className={styles.cardParent}>
      <Link href={link}>
        <div className={`${styles.cardImage} ${styles[image]}`}></div>
        <div className={styles.cardTitle}>{title}</div>
      </Link>
    </div>
  );
}

export default function GameTitle() {
  return (
    <div className={styles.parent}>
      <h1 className={styles.title}>Murder at the Occult Club</h1>
      <h2 className={styles.subtitle}>Select a chapter</h2>
      <div className={styles.chapterList}>
        <ChapterCard
          title="1. Murder at the Occult Club"
          link="/game/chapter1"
          image="chapter1"
        />
        <ChapterCard title="2. (Coming soon!)" link="#" image="chapter2" />
      </div>
    </div>
  );
}
