import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.homeParent}>
      <h1>Murder At The Occult Club</h1>
      <div>A detective puzzle game by TripleSmeven</div>

      <h2>About this game</h2>
      <div>
        In this puzzle game, you&apos;ll have to solve the mystery of who murdered Zach Cunningham. Read through the evidence carefully and leave no stone unturned!
      </div>
      <br />
      <div>
        This game was inspired by murder mystery detective board games like the Hunt a Killer series or Unsolved Case Files. I also took many ideas from puzzle games like The Roottrees Are Dead and Case of the Golden Idol. I hope you enjoy the game!
      </div>
      <br />
      <div>
        This game is completely free, with no ads, signups, or payment required. I made it purely to express my creativity and for the enjoyment of designing my own game.
      </div>

      <h2>How to play</h2>
      <div>
        The goal of the game is to find out who killed Zach Cunningham, how they did it, and why. First, read the opening letter and the police report to familiarize yourself with the situation.
      </div>
      <br />
      <div>
        Then, start reading over the evidence. Use the tabs on the left side and the arrows to scroll through different types of evidence.
      </div>
      <br />
      <div>
        Use your deduction skills to name the owner of each piece of evidence. You can also use the notepad on the right hand side to jot down notes. The notepad is saved between sessions (just don&apos;t clear your localstorage).
      </div>
      <br />
      <div>
        Finally, you must name the killer as well as their motivation and method. You win if you deduce correctly. Good luck!
      </div>

      <h2>Feedback</h2>
      <div>If you have any feedback, please message me on discord or reddit @triplesmeven</div>
    </div>
  );
}
