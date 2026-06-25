import styles from "./Newspaper.module.css";

type NewspaperProps = {
  title: string;
  author?: string;
  date?: string;
  paragraphs: string[];
};

function Subheader({ author, date }: { author?: string; date?: string }) {
  return (
    <div className={styles.subheader}>
      <div>{author}</div>
      <div>{date}</div>
    </div>
  );
}

export default function Newspaper({
  title,
  author,
  date,
  paragraphs,
}: NewspaperProps) {
  return (
    <div className={styles.newspaperParent}>
      <h3>{title}</h3>
      <Subheader author={author} date={date} />
      {paragraphs.map((p, i) => (
        <div key={i}>{p}</div>
      ))}
    </div>
  );
}
