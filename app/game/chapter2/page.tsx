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
import { ProgressContext, ProgressKeys } from "../context/ProgressContext";
import { useContext, memo } from "react";
import { TabContext } from "../context/TabContext";
import ConstellationPhoto from "../tabContentComponents/imageEvidence/ConstellationPhoto";
import LetterFromWalter from "../tabContentComponents/handwrittenLetter/LetterFromWalter";
import BookingConfirmations from "../tabContentComponents/email/BookingConfirmations";
import LockedRitualPlan from "../tabContentComponents/lockedPdf/LockedRitualPlan";
import { StageContext } from "../context/StageContext";
import PoliceVoicemails from "../tabContentComponents/voicemails/PoliceVoicemails";
import HamperHerald from "../tabContentComponents/newspaper/HamperHerald";
import PoliceNotes from "../tabContentComponents/diaryPages/PoliceNotes";
import MantlesOfInheritance from "../tabContentComponents/occultDocuments/MantlesOfInheritance";
import RitualsOfTiaccabode from "../tabContentComponents/occultDocuments/RitualsOfTiaccabode";
import LetterFromX2_2 from "../tabContentComponents/handwrittenLetter/LetterFromX2_2";

// Memo required because when we change tabs, setActiveTab is called, which causes the
// entire parent to rerender, and rerender all of these children. Memo prevents the rerending.
const MemoLetterFromX2_1 = memo(LetterFromX2_1);
const MemoPoliceTranscript = memo(PoliceTranscript);
const MemoGroupChat = memo(GroupChat);
const MemoTripPlan = memo(TripPlan);
const MemoBookingConfirmations = memo(BookingConfirmations);
const MemoLockedRitualPlan = memo(LockedRitualPlan);
const MemoConstellationPhoto = memo(ConstellationPhoto);
const MemoKaiserTimes = memo(KaiserTimes);
const MemoPoliceVoicemails = memo(PoliceVoicemails);
const MemoPoliceNotes = memo(PoliceNotes);
const MemoHamperHerald = memo(HamperHerald);
const MemoLetterFromWalter = memo(LetterFromWalter);
const MemoMantlesOfInheritance = memo(MantlesOfInheritance);
const MemoRitualsOfTiaccabode = memo(RitualsOfTiaccabode);
const MemoLetterFromX2_2 = memo(LetterFromX2_2);

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

  const stage2LockedTooltip =
    currentStage === 1
      ? "Unlock by completing the Objectives in the Police Notes."
      : "";
  const unlockableTooltop = "Unlock by finding this piece of evidence.";

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
                emoji={isSolved(ProgressKeys.GROUP_CHAT) ? "✅" : "🎯"}
              />
              <NavItemWithLock eventKey="TripPlan" title="Trip Plan" />
              <NavItemWithLock
                eventKey="Round10Emails"
                title="Round 10 Emails"
              />
              <NavItemWithLock
                eventKey="LockedPdf"
                title="Locked PDF"
                locked={!isSolved(ProgressKeys.LOCKED_PDF_UNLOCKED)}
                emoji={isSolved(ProgressKeys.LOCKED_PDF) ? "✅" : "🎯"}
                lockedTooltip={unlockableTooltop}
              />
              <NavItemWithLock
                eventKey="ConstellationPhoto"
                title="Constellation Photo"
                locked={!isSolved(ProgressKeys.CONSTELLATION_PHOTO_UNLOCKED)}
                lockedTooltip={unlockableTooltop}
              />
              <NavItemWithLock
                eventKey="KaiserTimes"
                title="The Kaiser Times"
                locked={!isSolved(ProgressKeys.KAISER_TIMES_UNLOCKED)}
                lockedTooltip={unlockableTooltop}
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
                locked={currentStage < 1}
                lockedTooltip="Unlock by completing the Objectives in the Group Chat."
              />
              <NavItemWithLock
                eventKey="PoliceNotes"
                title="Handwritten Notes"
                locked={currentStage < 1}
                lockedTooltip="Unlock by completing the Objectives in the Group Chat."
              />
              <NavItemWithLock
                eventKey="HamperHerald"
                title="The Hamper Herald"
                locked={currentStage < 1}
                lockedTooltip="Unlock by completing the Objectives in the Group Chat."
              />
              <NavItemWithLock
                eventKey="RitualsOfTiaccabode"
                title="Strange Document 1"
                locked={currentStage < 1}
                lockedTooltip="Unlock by completing the Objectives in the Group Chat."
              />
            </Nav>
          </div>

          <div
            className={`${styles.navSection} ${styles.orange} orange-nav-bootstrap`}
          >
            <Nav variant="pills">
              <NavItemWithLock
                eventKey="SolveTheCase"
                title="Solve The Case"
                locked={currentStage < 2}
                lockedTooltip={"Unlock by completing all previous objectives."}
                emoji={isSolved(ProgressKeys.SOLVE_THE_CASE) ? "✅" : "🎯"}
              />
              <NavItemWithLock
                eventKey="LetterFromWalter"
                title="Letter From Walter"
                locked={currentStage < 2}
                lockedTooltip={stage2LockedTooltip}
              />
              <NavItemWithLock
                eventKey="MantlesOfInheritance"
                title="Strange Document 2"
                locked={currentStage < 2}
                lockedTooltip={stage2LockedTooltip}
              />
            </Nav>
          </div>
        </Col>
        <Col sm={10} className={styles.col}>
          <Tab.Content className={styles.tabContent}>
            <Tab.Pane eventKey="LetterFromX">
              <MemoLetterFromX2_1 />
            </Tab.Pane>
            <Tab.Pane eventKey="PoliceTranscript">
              <MemoPoliceTranscript />
            </Tab.Pane>
            <Tab.Pane eventKey="GroupChat">
              <MemoGroupChat />
            </Tab.Pane>
            <Tab.Pane eventKey="TripPlan">
              <MemoTripPlan />
            </Tab.Pane>
            <Tab.Pane eventKey="Round10Emails">
              <MemoBookingConfirmations />
            </Tab.Pane>
            <Tab.Pane eventKey="LockedPdf">
              <MemoLockedRitualPlan />
            </Tab.Pane>
            <Tab.Pane eventKey="ConstellationPhoto">
              <MemoConstellationPhoto />
            </Tab.Pane>
            <Tab.Pane eventKey="KaiserTimes">
              <MemoKaiserTimes />
            </Tab.Pane>
            <Tab.Pane eventKey="Voicemails">
              <MemoPoliceVoicemails />
            </Tab.Pane>
            <Tab.Pane eventKey="PoliceNotes">
              <MemoPoliceNotes />
            </Tab.Pane>
            <Tab.Pane eventKey="HamperHerald">
              <MemoHamperHerald />
            </Tab.Pane>
            {/* <Tab.Pane eventKey="GroupChat2">
              <GroupChat2 />
            </Tab.Pane> */}
            <Tab.Pane eventKey="LetterFromWalter">
              <MemoLetterFromWalter />
            </Tab.Pane>
            <Tab.Pane eventKey="MantlesOfInheritance">
              <MemoMantlesOfInheritance />
            </Tab.Pane>
            <Tab.Pane eventKey="RitualsOfTiaccabode">
              <MemoRitualsOfTiaccabode />
            </Tab.Pane>
            <Tab.Pane eventKey="SolveTheCase">
              <MemoLetterFromX2_2 />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );

  return <ChapterBaseComponent chapter={CHAPTER} content={tabsComponent} />;
}
