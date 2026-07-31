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
          Every power begins with the Ring. The Ring composes of five bearers
          each channeling it with a 20-lined seashell. A bearer grants its
          currents to two others that it touches, no more and no less. To break
          this embrace is to fracture the current. Or worse, evoke a power
          unseen to the mind’s eye.
        </div>
        <div className={styles.section}>
          The final piece is the auras of specific celestial constructions. To
          harness the might of the void is to lay eyes upon them skyward as you
          bask in its attendance. But beware of Death’s Fog. Like a creature
          born under the cover of night, its mere presence is as overwhelming as
          its shadow is domineering. It blocks all beings of light and renders
          their authority inert.
        </div>
      </div>
    </div>
  );

  const page2 = (
    <div className={styles.parent}>
      <div className={styles.page}>
        <div className={styles.section}>
          Ritual of something
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
        <div className={styles.section}>
          Ritual of something
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
        <div className={styles.section}>
          Ritual of something
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
        <div className={styles.section}>
          Ritual of something
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the ring.</li>
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
          Ritual of something
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
        <div className={styles.section}>
          Ritual of something
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
        <div className={styles.section}>
          Ritual of something
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
        <div className={styles.section}>
          Ritual of something
          <ul>
            <li>A Torch and Bridge must join currents.</li>
            <li>As least two Crowns must embrace the ring.</li>
            <li>The Eye of Elo and the Umbral Cage must align in the sky.</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const evidence = <CustomCarousel items={[page1, page2, page3]} />;

  return <TabContentBase evidence={evidence} />;
}
