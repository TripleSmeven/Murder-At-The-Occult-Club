import CustomCarousel from "../../components/CustomCarousel";
import TabContentBase from "../TabContentBase";
import styles from "./RitualsOfTiaccabode.module.css";

export default function RitualsOfTiaccabode() {
  const page1 = (
    <div className={styles.parent}>
      <div className={styles.page}>
        <div className={styles.section}>
          I write this in haste that one day it may see light in the hands of a
          faithful practitioner. My master, Tiaccabode, has met his end by the
          steel of his captors, and I soon follow.
        </div>
        <div className={styles.section}>
          My master believed the Mantles to be a fraction of an accord, many a
          power to be constructed when harmonies align. I have recorded the
          rubrics for such powers, as researched by my master and imparted to
          me.
        </div>
        <div className={styles.section}>
          Every ritual begins with the Ring. The Ring composes of five bearers
          each channeling it with a 20-lined seashell in palm. A bearer grants
          its currents to two others on each side, no more and no less.
        </div>
        <div className={styles.section}>
          Each bearer must then focus on the currents and the needed energies in
          the room. Ensure no mind is wandering, as concentration waxes and
          wanes like the waves. Hold fast, lest the wrong powers be envoked.
        </div>
        <div className={styles.section}>
          The final piece is the auras of specific celestial constructions. To
          harness the might of the void is to lay eyes upon them skyward as you
          bask in its attendance, which you may do once a moon.
        </div>
        <div className={styles.section}>
          But beware of one such construction, Death's Fog. Like a creature born
          under the cover of night, its mere presence in the void is as
          overwhelming as its shadow is domineering. It blocks all beings of
          light and renders their authority inert.
        </div>
      </div>
    </div>
  );

  const page2 = (
    <div className={styles.parent}>
      <div className={`${styles.page} ${styles.xFlip}`}>
        <div className={styles.section}>
          <h3>Ritual of the Mystic Step</h3>
          <div className={styles.description}>
            Each bearer must hold fast a far away place like a painting in their
            mind. When the all paintings are one, the Ring travels as one. After
            that moment, no step shall lie between the bearers and the painting.
          </div>
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the Ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Ritual of the Whispered Voice</h3>
          <div className={styles.description}>
            Hone your minds on the spiritual energies latent in the air. If one
            destined to cross the River Styx lingers still, their hushed,
            whispered words may be heard by those with willing ears.
          </div>
          <ul>
            <li>A Torch and Door must join currents.</li>
            <li>As least two Doors must embrace the Ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Ritual of the Single Choir</h3>
          <div className={styles.description}>
            Focus on the currents of one bearer and allow the Ring to hum in
            harmony. So then no thought among that bearer is possessed by them,
            instead what is thought by them is thought by all.
          </div>
          <ul>
            <li>A Crown must receive the currents of a Door and Bridge.</li>
            <li>A Torch must receive the currents of a Crown and Bridge.</li>
            <li>The Arm of the Nine must be present in the night.</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Ritual of the Invisible Thread</h3>
          <div className={styles.description}>
            Sharpen your minds to the presence of each bearer's soul. When it is
            so, though mountains or valleys should divide them, each bearer of
            the Ring shall know the direction of every other, as surely as the
            lowly pigeon knows the direction of its home.
          </div>
          <ul>
            <li>A Door must receive the currents of two Crowns. </li>
            <li>A Torch must receive the currents of a Bridge.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const page3 = (
    <div className={styles.parent}>
      <div className={styles.page}>
        <div className={styles.section}>
          <h3>Ritual of the Migrant Tree</h3>
          <div className={styles.description}>
            The bearer of the Bridge must hold fast a far away place like a
            painting in their mind. The house that shelters the Ring shall
            loosen its roots of this realm and travel to that place, so long as
            the Bridge maintains their mind's brush. The house must be made of
            once living forest.
          </div>
          <ul>
            <li>
              A Torch and Door must embrace the Ring, but cannot join currents.
            </li>
            <li>A Door and Crown must join currents.</li>
            <li>Death's Fog must cast its shadow on the heavens.</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Ritual of the Humble Kingdom</h3>
          <div className={styles.description}>
            Channel your inner strength to the living Earth, tap into the soul
            of a field mouse, and assume its humble form. Memory and speech
            remain, though its tongue carries only squeaks.
          </div>
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>A Door and Bridge must join currents.</li>
            <li>Death's Fog must cast its shadow on the heavens.</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Ritual of the Pale Crossing</h3>
          <div className={styles.description}>
            Release the chains that bind you to this realm. When each bearer
            does so, their flesh dissolve as their spirits cross over the Pale.
            As colorless and weightless as mist, the Earth is yours to roam.
          </div>
          <ul>
            <li>Two Doors must join currents.</li>
            <li>A Crown and Torch must join currents.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const evidence = <CustomCarousel items={[page1, page2, page3]} />;

  return <TabContentBase evidence={evidence} />;
}
