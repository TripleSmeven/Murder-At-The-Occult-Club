import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.homeParent}>
      <h1>Murder At The Occult Club</h1>
      <div>A detective puzzle game by TripleSmeven</div>

      <a className={styles.playLink} href="/game">
        Click here to play!
      </a>

      <h2>About this game</h2>
      <div>
        In this puzzle game, you&apos;ll have to solve the mystery of who murdered Zach Cunningham,
        a fellow classmate of yours at the University of Kaiser County. Read through the evidence
        carefully and leave no stone unturned!
      </div>
      <br />
      <div>
        This game was inspired by murder mystery detective board games like the Hunt a Killer series
        or Unsolved Case Files. I also took many ideas from puzzle games like The Roottrees Are Dead
        and Case of the Golden Idol. I hope you enjoy the game!
      </div>
      <br />
      <div>
        This game is completely free, with no ads, signups, or payment required. I made it purely to
        express my creativity and for the enjoyment of designing my own game.
      </div>

      <h2>Feedback</h2>
      <div>If you have any feedback, please message me on discord or reddit @triplesmeven</div>
    </div>
  );
}
