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

export function ChapterBaseComponent({ chapter, content }: ChapterBaseComponentProps) {
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

export function NavItemWithLock({
  eventKey,
  title,
  emoji,
  stageToUnlock = 0,
  currentStage = 0,
  lockedTooltip,
  showSpotlight = false,
}: {
  eventKey: string;
  title: string;
  emoji?: string;
  stageToUnlock?: number;
  currentStage?: number;
  lockedTooltip?: string;
  /** Pulsing glow around the tab; purely visual overlay (does not affect layout). */
  showSpotlight?: boolean;
}) {
  const devMode = useDevMode();
  let isLocked = currentStage < stageToUnlock;
  if (devMode) {
    isLocked = false;
  }

  let textToShow;
  if (isLocked) {
    if (title === "Solve the Case") {
      textToShow = "🔒" + title;
    } else {
      textToShow = `🔒???`;
    }
  } else {
    textToShow = `${emoji || ""}${title}`;
  }

  const navLink = (
    <Nav.Link eventKey={eventKey} disabled={isLocked}>
      {textToShow}
    </Nav.Link>
  );

  const spotlightOverlay = showSpotlight && !isLocked ? <SpotlightOverlay /> : null;

  // wrap a tooltip over the navLink if its locked
  if (isLocked && lockedTooltip) {
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
