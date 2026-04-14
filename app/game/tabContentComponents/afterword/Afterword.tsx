import styles from "./Afterword.module.css";

export default function Afterword() {
  return (
    <div className={styles.container}>
      <div>Thanks so much for playing my game! I hope you enjoyed it.</div>
      <div>
        It would mean so much to me if you left me some feedback on reddit or discord (or you
        wherever you found the game from).
      </div>
      <div>See you in my next game!</div>
    </div>
  );
}
