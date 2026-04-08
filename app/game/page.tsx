"use client";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useCallback } from "react";

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

export default function Game() {
  return (
    <GameContext>
      <GameComponent />
    </GameContext>
  );
}

function GameComponent() {
  const { currentStage } = useContext(StageContext);

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
    currentStage > 0 ? "Unlock by completing the Objectives in the Police Report." : "";

  const stage3LockedTooltip =
    "Unlock by completing the Objectives in Text Messages, Email Inboxes, and Online Orders.";

  return (
    <div className={styles.gameParent}>
      <Button variant="danger" size="sm" onClick={handleReset} className={styles.resetButton}>
        Reset
      </Button>
      {/* https://react-bootstrap.netlify.app/docs/components/tabs/#custom-tab-layout */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Row>
          <Col sm={2} className={`${styles.navCol}`}>
            <div className={`${styles.navSection}`}>
              <Nav variant="pills">
                <NavItemWithLock eventKey="1" title="Letter from X" />
                <NavItemWithLock
                  eventKey="2"
                  title="Police Report"
                  emoji={currentStage >= 1 ? "🎯" : undefined}
                />
                <NavItemWithLock
                  eventKey="3"
                  title="School Newspaper"
                  stageToUnlock={1}
                  currentStage={currentStage}
                />
                <NavItemWithLock
                  eventKey="4"
                  title="Mysterious Recipe"
                  stageToUnlock={1}
                  currentStage={currentStage}
                />
                <NavItemWithLock
                  eventKey="5"
                  title="Text Messages"
                  stageToUnlock={2}
                  currentStage={currentStage}
                  lockedTooltip={stage2LockedTooltip}
                  emoji="🎯"
                />
                <NavItemWithLock
                  eventKey="6"
                  title="Email Inboxes"
                  stageToUnlock={2}
                  currentStage={currentStage}
                  lockedTooltip={stage2LockedTooltip}
                  emoji="🎯"
                />
                <NavItemWithLock
                  eventKey="7"
                  title="Online Orders"
                  stageToUnlock={2}
                  currentStage={currentStage}
                  lockedTooltip={stage2LockedTooltip}
                  emoji="🎯"
                />
                <NavItemWithLock
                  eventKey="8"
                  title="List of Allergies"
                  stageToUnlock={3}
                  currentStage={currentStage}
                  lockedTooltip={stage3LockedTooltip}
                />
              </Nav>
            </div>
            <div className={`${styles.navSection}`}>
              <Nav variant="pills">
                <NavItemWithLock
                  eventKey="9"
                  title="Solve the Case"
                  stageToUnlock={3}
                  currentStage={currentStage}
                  lockedTooltip={stage3LockedTooltip}
                />
              </Nav>
            </div>
          </Col>
          <Col sm={10} className={styles.col}>
            <Tab.Content className={styles.tabContent}>
              <Tab.Pane eventKey="1">
                <LetterFromX />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <PoliceReport />
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <Newspaper />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <Recipe />
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <TextConversations />
              </Tab.Pane>
              <Tab.Pane eventKey="6">
                <Emails />
              </Tab.Pane>
              {/* need special width css for some reason */}
              <Tab.Pane eventKey="7" className={styles.amazingOrdersTab}>
                <AmazingOrders />
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
}: {
  eventKey: string;
  title: string;
  emoji?: string;
  stageToUnlock?: number;
  currentStage?: number;
  lockedTooltip?: string;
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

  // wrap a tooltip over the navLink if its locked
  if (isLocked && lockedTooltip) {
    const tooltip = <Tooltip id={`tooltip-${title}`}>{lockedTooltip}</Tooltip>;
    return (
      <Nav.Item>
        <OverlayTrigger placement="auto" overlay={tooltip}>
          <div className={styles.lockedNavItem}>{navLink}</div>
        </OverlayTrigger>
      </Nav.Item>
    );
  }

  return <Nav.Item>{navLink}</Nav.Item>;
}
