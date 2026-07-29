import TabContentBase from "../TabContentBase";
import styles from "./MantlesOfInheritance.module.css";

export default function MantlesOfInheritance() {
  const evidence = (
    <div className={styles.parent}>
      <div className={styles.page}>
        <h2>THE MANTLES OF INHERITANCE</h2>
        <div className={styles.section}>
          Let no practitioner confuse this inheritance with succession of
          property. Gold, land, and titles pass only when a life has ended. The
          Mantles pass only when another has begun.
        </div>
        <div className={styles.section}>
          When you enter the world as your house’s first, you bear the Crown.
          Fate and destiny is woven by none other than its bearer. You have no
          peers to prove yourself against, but claim neither mentor nor protégé.
          Your portion is your prize.
        </div>
        <div className={styles.section}>
          When in your line emerges the second, surrender the crown and bear the
          Torch. Your kindle illuminates the front path, yet casts a dark shadow
          behind. Those who trail you try to match their footprints in yours,
          whether they fit or not. Will they be ready when your fire burns out?
        </div>
        <div className={styles.section}>
          As the second vessel, you bear the Door. It opens not to a single room
          but a myriad of weaving paths, like a desert with no sun or stars.
          Choice haunts you. Walk blind and deaf and you may yet find the oasis.
        </div>
        <div className={styles.section}>
          When your line lengthens once more, pass down the Door and bear the
          Bridge. You make near what otherwise is far. You join what would
          otherwise be divided. On your rocky surface pass burdens, afflictions,
          and aspirations. Only upon crumbling does the town realize the Bridge
          was there at all.
        </div>
      </div>
    </div>
  );

  return <TabContentBase evidence={evidence} />;
}
