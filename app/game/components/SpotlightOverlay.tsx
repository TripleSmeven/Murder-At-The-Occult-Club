import styles from "./SpotlightOverlay.module.css";

interface SpotlightOverlayProps {
  variant?: "sideTabs" | "topTabs";
}

/**
 * Parent component MUST have this style:
  .navItemSpotlight {
    position: relative;
  }
 *
 *  Floating spotlight for “something new here” — overlay is out of flow (no layout shift).
 */
export default function SpotlightOverlay({ variant = "sideTabs" }: SpotlightOverlayProps) {
  if (variant === "topTabs") {
    return <span className={`${styles.navSpotlightOverlay} ${styles.topTabs}`} aria-hidden />;
  }
  return <span className={styles.navSpotlightOverlay} aria-hidden />;
}
