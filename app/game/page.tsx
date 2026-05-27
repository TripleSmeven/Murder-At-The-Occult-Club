"use client";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { use, useCallback, useEffect } from "react";

import styles from "./game.module.css";

import LetterFromX from "./tabContentComponents/letterFromX/LetterFromX";
import PoliceReport from "./tabContentComponents/policeReport/PoliceReport";
import Recipe from "./tabContentComponents/recipe/Recipe";
import AmazingOrders from "./tabContentComponents/amazingOrders/AmazingOrders";
import TextConversations from "./tabContentComponents/textConversations/TextConversations";
import Emails from "./tabContentComponents/emails/Emails";
import Newspaper from "./tabContentComponents/newspaper/Newspaper";
import { GameContext } from "./components/GameContext";
import { useContext } from "react";
import { StageContext } from "./components/StageContext";
import PotluckPlanner from "./tabContentComponents/potluckPlanner/PotluckPlanner";
import { ObjectivesContext, ProgressKeys } from "./components/ObjectivesContext";
import LetterFromX2 from "./tabContentComponents/letterFromX/LetterFromX2";
import Afterword from "./tabContentComponents/afterword/Afterword";
import HintsButton from "./components/hints/HintsButton";
import SpotlightOverlay from "./components/SpotlightOverlay";
import DiaryPages from "./tabContentComponents/diaryPages/DiaryPages";

export default function Game() {
  return (
    <GameContext>
      <GameComponent />
    </GameContext>
  );
}

function GameComponent() {
  const { currentStage, setStage } = useContext(StageContext);
  const { getProgress } = useContext(ObjectivesContext);

  const handleReset = useCallback(() => {
    const confirmed = window.confirm(
      "Are you sure you want to reset all game progress? You will restart from the beginning.",
    );
    if (confirmed) {
      localStorage.clear();
      window.location.reload();
    }
  }, []);

  const stage2LockedTooltip =
    currentStage >= 1 ? "Unlock by completing the Objectives in the Police Report." : "";

  // don't show this tooltip until stage 2 to avoid spoilers
  const stage3LockedTooltip =
    currentStage >= 2
      ? "Unlock by completing the Objectives in Text Messages, Email Inboxes, and Online Orders."
      : "";

  const solveTheCaseTooltip =
    currentStage >= 1 ? "Unlock by completing all previous objectives." : "";

  let policeReportEmoji;
  if (currentStage >= 1) {
    policeReportEmoji = getProgress(ProgressKeys.POLICE_REPORT) ? "✅" : "🎯";
  }

  let recipeEmoji;
  if (currentStage >= 3) {
    recipeEmoji = getProgress(ProgressKeys.RECIPE) ? "✅" : "🎯";
  }

  // make sure we are on stage 3 when texts, emails, and orders are completed
  useEffect(() => {
    if (currentStage < 3) {
      const textsCompleted = getProgress(ProgressKeys.TEXT_CONVERSATIONS);
      const emailsCompleted = getProgress(ProgressKeys.EMAILS);
      const ordersCompleted = getProgress(ProgressKeys.ONLINE_ORDERS);
      if (textsCompleted && emailsCompleted && ordersCompleted) {
        setStage(3);
      }
    }
  }, [currentStage, getProgress, setStage]);

  return (
    <div className={styles.gameParent}>
      <div className={styles.cornerButtons}>
        <HintsButton className={styles.hintsButton} />
        <Button variant="danger" size="sm" onClick={handleReset} className={styles.resetButton}>
          Reset
        </Button>
      </div>
      {/* https://react-bootstrap.netlify.app/docs/components/tabs/#custom-tab-layout */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="LetterFromX">
        <Row>
          <Col sm={2} className={`${styles.navCol}`}>
            <div className={`${styles.navSection}`}>
              <Nav variant="pills">
                <NavItemWithLock eventKey="LetterFromX" title="Letter from X" />
                <NavItemWithLock
                  eventKey="PoliceReport"
                  title="Police Report"
                  emoji={policeReportEmoji}
                />
                <NavItemWithLock
                  eventKey="Newspaper"
                  title="School Newspaper"
                  stageToUnlock={1}
                  currentStage={currentStage}
                />
                <NavItemWithLock
                  eventKey="Recipe"
                  title="Mysterious Recipe"
                  stageToUnlock={1}
                  currentStage={currentStage}
                  emoji={recipeEmoji}
                />
                <NavItemWithLock
                  eventKey="TextConversations"
                  title="Text Messages"
                  stageToUnlock={2}
                  currentStage={currentStage}
                  lockedTooltip={stage2LockedTooltip}
                  emoji={getProgress(ProgressKeys.TEXT_CONVERSATIONS) ? "✅" : "🎯"}
                />
                <NavItemWithLock
                  eventKey="Emails"
                  title="Email Inboxes"
                  stageToUnlock={2}
                  currentStage={currentStage}
                  lockedTooltip={stage2LockedTooltip}
                  emoji={getProgress(ProgressKeys.EMAILS) ? "✅" : "🎯"}
                />
                <NavItemWithLock
                  eventKey="AmazingOrders"
                  title="Online Orders"
                  stageToUnlock={2}
                  currentStage={currentStage}
                  lockedTooltip={stage2LockedTooltip}
                  emoji={getProgress(ProgressKeys.ONLINE_ORDERS) ? "✅" : "🎯"}
                />
              </Nav>
            </div>
            <div className={`${styles.navSection}`}>
              <Nav variant="pills">
                <NavItemWithLock
                  eventKey="PotluckPlanner"
                  title="Potluck Planner"
                  stageToUnlock={3}
                  currentStage={currentStage}
                  lockedTooltip={stage3LockedTooltip}
                />
                <NavItemWithLock
                  eventKey="DiaryPages"
                  title="Diary Pages"
                  stageToUnlock={3}
                  currentStage={currentStage}
                  lockedTooltip={stage3LockedTooltip}
                />
              </Nav>
            </div>
            <div className={`${styles.navSection}`}>
              <Nav variant="pills">
                <NavItemWithLock
                  eventKey="LetterFromX2"
                  title="Solve the Case"
                  stageToUnlock={4}
                  currentStage={currentStage}
                  lockedTooltip={solveTheCaseTooltip}
                  emoji={getProgress(ProgressKeys.SOLVE_THE_CASE) ? "✅" : "🎯"}
                />
                <NavItemWithLock
                  eventKey="Afterword"
                  title="🙏Afterword"
                  stageToUnlock={5}
                  currentStage={currentStage}
                  showSpotlight={true}
                />
              </Nav>
            </div>
          </Col>
          <Col sm={10} className={styles.col}>
            <Tab.Content className={styles.tabContent}>
              <Tab.Pane eventKey="LetterFromX">
                <LetterFromX />
              </Tab.Pane>
              <Tab.Pane eventKey="PoliceReport">
                <PoliceReport />
              </Tab.Pane>
              <Tab.Pane eventKey="Newspaper">
                <Newspaper />
              </Tab.Pane>
              <Tab.Pane eventKey="Recipe">
                <Recipe />
              </Tab.Pane>
              <Tab.Pane eventKey="TextConversations">
                <TextConversations />
              </Tab.Pane>
              <Tab.Pane eventKey="Emails">
                <Emails />
              </Tab.Pane>
              {/* need special width css for some reason */}
              <Tab.Pane eventKey="AmazingOrders" className={styles.amazingOrdersTab}>
                <AmazingOrders />
              </Tab.Pane>
              <Tab.Pane eventKey="PotluckPlanner">
                <PotluckPlanner />
              </Tab.Pane>
              <Tab.Pane eventKey="DiaryPages">
                <DiaryPages />
              </Tab.Pane>
              <Tab.Pane eventKey="LetterFromX2">
                <LetterFromX2 />
              </Tab.Pane>
              <Tab.Pane eventKey="Afterword">
                <Afterword />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function NavItemWithLock({
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
  const isLocked = currentStage < stageToUnlock;

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
