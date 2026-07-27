"use client";

import { Tab, Row, Col, Nav } from "react-bootstrap";
import {
  NavItemWithLock,
  ChapterBaseComponent,
} from "../components/chapterBase/ChapterBaseComponent";
import { GameContext } from "../context/GameContext";

import styles from "../components/chapterBase/ChapterBaseComponent.module.css";
import GroupChat from "../tabContentComponents/textConversations/GroupChat";
import LetterFromX2_1 from "../tabContentComponents/handwrittenLetter/LetterFromX2_1";
import PoliceTranscript from "../tabContentComponents/policeTranscript/PoliceTranscript";
import TripPlan from "../tabContentComponents/notesApp/TripPlan";
import KaiserTimes from "../tabContentComponents/newspaper/KaiserTimes";
import { ProgressContext, ProgressKeys } from "../components/ProgressContext";
import { useContext } from "react";
import { TabContext } from "../context/TabContext";
import ConstellationPhoto from "../tabContentComponents/imageEvidence/ConstellationPhoto";
import LetterFromWalter from "../tabContentComponents/handwrittenLetter/LetterFromWalter";
import BookingConfirmations from "../tabContentComponents/email/BookingConfirmations";
import LockedPentagram from "../tabContentComponents/lockedPdf/LockedPentagram";
import { StageContext } from "../context/StageContext";
import PoliceVoicemails from "../tabContentComponents/voicemails/PoliceVoicemails";
import HamperHerald from "../tabContentComponents/newspaper/HamperHerald";

const CHAPTER = 2;

export default function Game2() {
  return (
    <GameContext chapter={CHAPTER} defaultTab="LetterFromX">
      <GameComponent />
    </GameContext>
  );
}

function GameComponent() {
  const { activeTab, setActiveTab } = useContext(TabContext);
  const { isSolved } = useContext(ProgressContext);

  /**
   * 0: solve the group chat
   * 1: solve the mansion address
   * 2: solve the rituals
   */
  const { currentStage } = useContext(StageContext);
  const tabsComponent = (
    <Tab.Container
      id="left-tabs-example"
      activeKey={activeTab}
      onSelect={(k) => setActiveTab(k || "LetterFromX")}
    >
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
              <NavItemWithLock
                eventKey="GroupChat"
                title="Group Chat"
                emoji={isSolved(ProgressKeys.LOCKED_PDF_UNLOCKED) ? "✅" : "🎯"}
              />
              <NavItemWithLock eventKey="TripPlan" title="Trip Plan" />
              <NavItemWithLock
                eventKey="Round10Emails"
                title="Round 10 Emails"
              />
            </Nav>
          </div>

          <div
            className={`${styles.navSection} ${styles.orange} orange-nav-bootstrap`}
          >
            <Nav variant="pills">
              <NavItemWithLock
                eventKey="KaiserTimes"
                title="The Kaiser Times"
                locked={!isSolved(ProgressKeys.KAISER_TIMES_UNLOCKED)}
              />
              <NavItemWithLock
                eventKey="ConstellationPhoto"
                title="Constellation Photo"
                locked={!isSolved(ProgressKeys.CONSTELLATION_PHOTO_UNLOCKED)}
              />
            </Nav>
          </div>

          <div
            className={`${styles.navSection} ${styles.orange} orange-nav-bootstrap`}
          >
            <Nav variant="pills">
              <NavItemWithLock
                eventKey="Voicemails"
                title="Voicemail"
                emoji={isSolved(ProgressKeys.VOICEMAIL) ? "✅" : "🎯"}
                locked={false} // stage 1 prob
                lockedTooltip="Unlocked by completing the Objectives in the Group Chat"
              />
              <NavItemWithLock
                eventKey="HamperHerald"
                title="The Hamper Herald"
              />
            </Nav>
          </div>

          <div
            className={`${styles.navSection} ${styles.orange} orange-nav-bootstrap`}
          >
            <Nav variant="pills">
              <NavItemWithLock
                eventKey="HandwrittenLetter"
                title="Handwritten Letter"
              />
              <NavItemWithLock
                eventKey="LockedPDF"
                title="Locked PDF"
                emoji={isSolved(ProgressKeys.LOCKED_PDF_UNLOCKED) ? "✅" : "🎯"}
              />
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
            <Tab.Pane eventKey="Round10Emails">
              <BookingConfirmations />
            </Tab.Pane>
            <Tab.Pane eventKey="KaiserTimes">
              <KaiserTimes />
            </Tab.Pane>
            <Tab.Pane eventKey="ConstellationPhoto">
              <ConstellationPhoto />
            </Tab.Pane>
            <Tab.Pane eventKey="Voicemails">
              <PoliceVoicemails />
            </Tab.Pane>
            <Tab.Pane eventKey="HamperHerald">
              <HamperHerald />
            </Tab.Pane>
            <Tab.Pane eventKey="HandwrittenLetter">
              <LetterFromWalter />
            </Tab.Pane>
            <Tab.Pane eventKey="LockedPDF">
              <LockedPentagram />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );

  return <ChapterBaseComponent chapter={CHAPTER} content={tabsComponent} />;
}
