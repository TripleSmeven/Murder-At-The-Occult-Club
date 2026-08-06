"use client";

import { Nav, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useDevMode } from "../../hooks/useDevMode";
import HintsButton from "./hintsButton/HintsButton";
import ResetButton from "./resetButton";
import SpotlightOverlay from "../SpotlightOverlay";
import styles from "./ChapterBaseComponent.module.css";
import BackButton from "./backButton";

interface ChapterBaseComponentProps {
  chapter: number;
  content: React.ReactNode;
}

export function ChapterBaseComponent({
  chapter,
  content,
}: ChapterBaseComponentProps) {
  return (
    <>
      <div className={styles.gameParent}>
        <div className={styles.cornerButtons}>
          <BackButton className={styles.cornerButton} />
          <HintsButton className={styles.cornerButton} chapter={chapter} />
          <ResetButton className={styles.cornerButton} />
        </div>
        {content}
      </div>
    </>
  );
}

// titles that are revealed even if its locked
const EXEMPT_TITLES = ["solve the case"];

type NavItemWithLockProps = {
  eventKey: string;
  title: string;
  emoji?: string;
  locked?: boolean;
  lockedTooltip?: string;
  /** Pulsing glow around the tab; purely visual overlay (does not affect layout). */
  showSpotlight?: boolean;
};

export function NavItemWithLock({
  eventKey,
  title,
  emoji,
  locked = false,
  lockedTooltip,
  showSpotlight = false,
}: NavItemWithLockProps) {
  const devMode = useDevMode();
  if (devMode) {
    locked = false;
  }

  let textToShow;
  if (locked) {
    if (EXEMPT_TITLES.includes(title.toLowerCase())) {
      textToShow = "🔒" + title;
    } else {
      textToShow = `🔒???`;
    }
  } else {
    textToShow = `${emoji || ""}${title}`;
  }

  const navLink = (
    <Nav.Link eventKey={eventKey} disabled={locked} className={styles.navLink}>
      {textToShow}
    </Nav.Link>
  );

  const spotlightOverlay =
    showSpotlight && !locked ? <SpotlightOverlay /> : null;

  // wrap a tooltip over the navLink if its locked
  if (locked && lockedTooltip) {
    const tooltip = <Tooltip id={`tooltip-${title}`}>{lockedTooltip}</Tooltip>;
    return (
      <Nav.Item>
        <OverlayTrigger placement="auto" overlay={tooltip}>
          <div
            className={`${styles.lockedNavItem} ${showSpotlight ? `${styles.navItemSpotlight}` : undefined}`}
          >
            {spotlightOverlay}
            {navLink}
          </div>
        </OverlayTrigger>
      </Nav.Item>
    );
  }

  return (
    <Nav.Item className={showSpotlight ? styles.navItemSpotlight : undefined}>
      {spotlightOverlay}
      {navLink}
    </Nav.Item>
  );
}
