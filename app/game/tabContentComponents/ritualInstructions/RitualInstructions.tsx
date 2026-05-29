"use client";

import TabContentBase from "../TabContentBase";
import styles from "./RitualInstructions.module.css";

export default function RitualInstructions() {
  const emailContent = (
    <div className={styles.emailContainer}>
      <div className={styles.emailTitle}>Life Transferrence Ritual</div>

      <div className={styles.underTitle}>
        <div className={styles.leftSide}>
          <div className={styles.profilePicture}></div>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.emailHeader}>
            <div className={styles.senderReceiverInfo}>
              <div className={styles.senderLabel}>contact@masterthepractice.org</div>
              <div className={styles.recipientLabel}>to me</div>
            </div>
            <div className={styles.timeAndActions}>
              <div className={styles.timestamp}>December 8, 2016, 3:00 PM</div>
              <div className={styles.actionButtons}>
                <span className={styles.starButton}>★</span>
                <span className={styles.replyButton}>⟲</span>
              </div>
            </div>
          </div>

          <div className={styles.emailBody}>
            <p>Dear Practitioner,</p>
            <p>{`I'm sending this to your alternative email address, as you requested. Here are the instructions for performing a passive life transferrence ritual`}</p>
            <p>
              But be warned: by performing this ritual, you are knowingly causing harm to another
              human being. Ask yourself: are you willing to sacrifice one life for another? Can you
              live with the consequences of your actions? If taking a life (even partially) is of
              concern to your conscience, then do not proceed.
            </p>
            <p>
              <strong>Required Components:</strong>
            </p>
            <ol>
              <li>a weighty bag of charcoal</li>
              <li>several wax candles</li>
              <li>
                a palm-sized amount of carnelian or ocean jasper crystals and rope to hang them from
              </li>
              <li>four dreamcatchers made of willow rope</li>
            </ol>

            <p>
              <strong>Setup:</strong>
            </p>
            <ol>
              <li>create a Selonic circle using the charcoal and the wax candles.</li>
              <li>hang the crystals above the circle.</li>
              <li>hang the dreamcatchers above the circle as well, but below the crystals.</li>
            </ol>
            <p>
              <strong>Ritual:</strong>
            </p>
            <ol>
              <li>
                place a sleeping person in the center of the circle. Use a sleep spell to ensure
                they do not wake.
              </li>
              <li>simply wait. There is no encantation required.</li>
              <li>
                after about 4 hourglass turns your crystals will be charged. You maybe wake up the
                person now.
              </li>
              <li>
                leave the crystals in close proximity to the person you want to transfer the life
                essence to. It may take several days.
              </li>
            </ol>
            <p>
              How it works: When a person sleeps inside a Selonic circle, their spirit wanders more
              than usual. The dreamcatchers filter out dreamworld energies and leave only life
              essence, which the crystals absorb and store.
            </p>
            <p>
              Do not keep the person sleeping in the circle for more than the time it takes for the
              sun to set then rise. Doing so may cause their spirit to wander away permanently. And
              you cannot get life essence from a corpse.
            </p>
            <p>{`Best of luck. Keep the practice alive.`}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return <TabContentBase evidence={emailContent} />;
}
