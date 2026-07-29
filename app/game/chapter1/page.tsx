"use client";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { useEffect } from "react";

import styles from "../components/chapterBase/ChapterBaseComponent.module.css";

import LetterFromX1 from "../tabContentComponents/handwrittenLetter/LetterFromX1";
import PoliceReport from "../tabContentComponents/policeReport/PoliceReport";
import ElixirRecipe from "../tabContentComponents/occultDocuments/ElixirRecipe";
import AmazingOrders from "../tabContentComponents/amazingOrders/AmazingOrders";
import TextConversations from "../tabContentComponents/textConversations/TextConversations";
import EmailInboxes from "../tabContentComponents/emailInboxes/EmailInboxes";
import Newspaper from "../tabContentComponents/newspaper/Newspaper";
import { GameContext } from "../context/GameContext";
import { useContext } from "react";
import { StageContext } from "../context/StageContext";
import PotluckPlanner from "../tabContentComponents/potluckPlanner/PotluckPlanner";
import { ProgressContext, ProgressKeys } from "../context/ProgressContext";
import LetterFromX2 from "../tabContentComponents/handwrittenLetter/LetterFromX2";
import DiaryPages from "../tabContentComponents/diaryPages/DiaryPages";
import MeetingSummary from "../tabContentComponents/meetingSummary/MeetingSummary";
import RitualInstructions from "../tabContentComponents/email/RitualInstructions";
import TextConversations2 from "../tabContentComponents/textConversations/TextConversations2";
import LetterFromX3 from "../tabContentComponents/handwrittenLetter/LetterFromX3";
import LetterFromX4 from "../tabContentComponents/handwrittenLetter/LetterFromX4";
import {
  ChapterBaseComponent,
  NavItemWithLock,
} from "../components/chapterBase/ChapterBaseComponent";
import SchoolNewspaper from "../tabContentComponents/newspaper/SchoolNewspaper";

const CHAPTER = 1;

export default function Game() {
  return (
    <GameContext chapter={CHAPTER} defaultTab="LetterFromX">
      <GameComponent />
    </GameContext>
  );
}

function GameComponent() {
  const { currentStage, setStage } = useContext(StageContext);
  const { isSolved } = useContext(ProgressContext);

  const stage2LockedTooltip =
    currentStage >= 1
      ? "Unlock by completing the Objectives in the Police Report."
      : "";

  // don't show this tooltip until stage 2 to avoid spoilers
  const stage3LockedTooltip =
    currentStage >= 2
      ? "Unlock by completing the Objectives in Text Messages, Email Inboxes, and Online Orders."
      : "";

  const solveTheCaseTooltip =
    currentStage >= 1 ? "Unlock by completing all previous objectives." : "";

  let policeReportEmoji;
  if (currentStage >= 1) {
    policeReportEmoji = isSolved(ProgressKeys.POLICE_REPORT) ? "✅" : "🎯";
  }

  // make sure we are on stage 3 when texts, emails, and orders are completed
  useEffect(() => {
    if (currentStage < 3) {
      const textsCompleted = isSolved(ProgressKeys.TEXT_CONVERSATIONS);
      const emailsCompleted = isSolved(ProgressKeys.EMAILS);
      const ordersCompleted = isSolved(ProgressKeys.ONLINE_ORDERS);
      if (textsCompleted && emailsCompleted && ordersCompleted) {
        setStage(3);
      }
    }
  }, [currentStage, isSolved, setStage]);

  /* https://react-bootstrap.netlify.app/docs/components/tabs/#custom-tab-layout */
  const tabsComponent = (
    <Tab.Container id="left-tabs-example" defaultActiveKey="LetterFromX">
      <Row className={styles.navRow}>
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
                locked={currentStage < 1}
              />
              <NavItemWithLock
                eventKey="MysteriousRecipe"
                title="Mysterious Recipe"
                locked={currentStage < 1}
              />
              <NavItemWithLock
                eventKey="TextConversations"
                title="Text Messages"
                locked={currentStage < 2}
                lockedTooltip={stage2LockedTooltip}
                emoji={isSolved(ProgressKeys.TEXT_CONVERSATIONS) ? "✅" : "🎯"}
              />
              <NavItemWithLock
                eventKey="Emails"
                title="Email Inboxes"
                locked={currentStage < 2}
                lockedTooltip={stage2LockedTooltip}
                emoji={isSolved(ProgressKeys.EMAILS) ? "✅" : "🎯"}
              />
              <NavItemWithLock
                eventKey="AmazingOrders"
                title="Online Orders"
                locked={currentStage < 2}
                lockedTooltip={stage2LockedTooltip}
                emoji={isSolved(ProgressKeys.ONLINE_ORDERS) ? "✅" : "🎯"}
              />
            </Nav>
          </div>
          <div className={`${styles.navSection}`}>
            <Nav variant="pills">
              <NavItemWithLock
                eventKey="DiaryPages"
                title="Diary Pages"
                locked={currentStage < 3}
                lockedTooltip={stage3LockedTooltip}
              />
              <NavItemWithLock
                eventKey="MeetingSummary"
                title="Meeting Summary"
                locked={currentStage < 3}
                lockedTooltip={stage3LockedTooltip}
              />
              <NavItemWithLock
                eventKey="PotluckPlanner"
                title="Potluck Planner"
                locked={currentStage < 3}
                lockedTooltip={stage3LockedTooltip}
              />
              <NavItemWithLock
                eventKey="RitualInstructions"
                title="Ritual Instructions"
                locked={currentStage < 3}
                lockedTooltip={stage3LockedTooltip}
              />
              <NavItemWithLock
                eventKey="NewTextMessage"
                title="New Text Message"
                locked={currentStage < 3}
                lockedTooltip={stage3LockedTooltip}
              />
            </Nav>
          </div>
          <div className={`${styles.navSection}`}>
            <Nav variant="pills">
              <NavItemWithLock
                eventKey="LetterFromX2"
                title="Solve the Case"
                locked={currentStage < 3}
                lockedTooltip={solveTheCaseTooltip}
                emoji={isSolved(ProgressKeys.SOLVE_THE_CASE) ? "✅" : "🎯"}
              />
              <NavItemWithLock
                eventKey="LetterFromX3"
                title="Solve the Case 2"
                locked={currentStage < 4}
                emoji={isSolved(ProgressKeys.SOLVE_THE_CASE_2) ? "✅" : "🎯"}
              />
              <NavItemWithLock
                eventKey="FarewellLetter"
                title="Farewell Letter"
                locked={currentStage < 5}
              />
            </Nav>
          </div>
        </Col>
        <Col sm={10} className={styles.col}>
          <Tab.Content className={styles.tabContent}>
            <Tab.Pane eventKey="LetterFromX">
              <LetterFromX1 />
            </Tab.Pane>
            <Tab.Pane eventKey="PoliceReport">
              <PoliceReport />
            </Tab.Pane>
            <Tab.Pane eventKey="Newspaper">
              <SchoolNewspaper />
            </Tab.Pane>
            <Tab.Pane eventKey="MysteriousRecipe">
              <ElixirRecipe />
            </Tab.Pane>
            <Tab.Pane eventKey="TextConversations">
              <TextConversations />
            </Tab.Pane>
            <Tab.Pane eventKey="Emails">
              <EmailInboxes />
            </Tab.Pane>
            {/* need special width css for some reason */}
            <Tab.Pane
              eventKey="AmazingOrders"
              className={styles.amazingOrdersTab}
            >
              <AmazingOrders />
            </Tab.Pane>
            <Tab.Pane eventKey="DiaryPages">
              <DiaryPages />
            </Tab.Pane>
            <Tab.Pane eventKey="MeetingSummary">
              <MeetingSummary />
            </Tab.Pane>
            <Tab.Pane eventKey="PotluckPlanner">
              <PotluckPlanner />
            </Tab.Pane>
            <Tab.Pane eventKey="RitualInstructions">
              <RitualInstructions />
            </Tab.Pane>
            <Tab.Pane eventKey="NewTextMessage">
              <TextConversations2 />
            </Tab.Pane>
            <Tab.Pane eventKey="LetterFromX2">
              <LetterFromX2 />
            </Tab.Pane>
            <Tab.Pane eventKey="LetterFromX3">
              <LetterFromX3 />
            </Tab.Pane>
            <Tab.Pane eventKey="FarewellLetter">
              <LetterFromX4 />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );

  return <ChapterBaseComponent chapter={CHAPTER} content={tabsComponent} />;
}
