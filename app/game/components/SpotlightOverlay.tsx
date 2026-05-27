import styles from "./SpotlightOverlay.module.css";

/**
 * Parent component MUST have this style:
 * 
 *  Floating spotlight for “something new here” — overlay is out of flow (no layout shift). 
 *  .navItemSpotlight {
 *    position: relative;
 *  }
 * 
 */

export default function SpotlightOverlay() {
  return <span className={styles.navSpotlightOverlay} aria-hidden />;
}
