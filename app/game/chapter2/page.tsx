"use client";

import { Tab, Row, Col, Nav } from "react-bootstrap";
import {
  NavItemWithLock,
  ChapterBaseComponent,
} from "../components/chapterBase/ChapterBaseComponent";
import { ProgressKeys } from "../components/ProgressContext";
import { GameContext } from "../context/GameContext";

import styles from "../components/chapterBase/ChapterBaseComponent.module.css";
import GroupChat from "../tabContentComponents/textConversations/GroupChat";
import LetterFromX2_1 from "../tabContentComponents/handwrittenLetter/LetterFromX2_1";
import PoliceTranscript from "../tabContentComponents/policeTranscript/PoliceTranscript";
import TripPlan from "../tabContentComponents/notesApp/TripPlan";

const CHAPTER = 2;

export default function Game2() {
  return (
    <GameContext chapter={CHAPTER}>
      <GameComponent />
    </GameContext>
  );
}

function GameComponent() {
  const tabsComponent = (
    <Tab.Container id="left-tabs-example" defaultActiveKey="LetterFromX">
      <Row className={styles.navRow}>
        <Col sm={2} className={`${styles.navCol}`}>
          <div
            className={`${styles.navSection} ${styles.orange} orange-nav-bootstrap`}
          >
            <Nav variant="pills">
              <NavItemWithLock eventKey="LetterFromX" title="Letter from X" />
              <NavItemWithLock
                eventKey="PoliceTranscript"
                title="Police Transcript"
              />
              <NavItemWithLock eventKey="GroupChat" title="Group Chat" />
              <NavItemWithLock eventKey="TripPlan" title="Trip Plan" />
            </Nav>
          </div>
          <div
            className={`${styles.navSection} ${styles.orange} orange-nav-bootstrap`}
          >
            <Nav variant="pills">
              <NavItemWithLock eventKey="test" title="test" />
            </Nav>
          </div>
        </Col>
        <Col sm={10} className={styles.col}>
          <Tab.Content className={styles.tabContent}>
            <Tab.Pane eventKey="LetterFromX">
              <LetterFromX2_1 />
            </Tab.Pane>
            <Tab.Pane eventKey="PoliceTranscript">
              <PoliceTranscript />
            </Tab.Pane>
            <Tab.Pane eventKey="GroupChat">
              <GroupChat />
            </Tab.Pane>
            <Tab.Pane eventKey="TripPlan">
              <TripPlan />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );

  return <ChapterBaseComponent chapter={CHAPTER} content={tabsComponent} />;
}
