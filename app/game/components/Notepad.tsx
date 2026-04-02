"use client";
import { JSX, useContext, useEffect, useCallback, useState, useRef } from "react";

import styles from "./Notepad.module.css";
import { NamePicker } from "./WordPicker";
import { ObjectivesJson } from "./ObjectivesJson";
import { Button, Col, Nav, OverlayTrigger, Row, Tab, Tooltip } from "react-bootstrap";
import { GlobalNotesContext } from "./GlobalNotesContext";

export default function Notepad({ heading, sections }: ObjectivesJson) {
  const startingKey = heading ? "objectives" : "freeform";
  const { globalNotes, setGlobalNotes } = useContext(GlobalNotesContext);
  const [localNotes, setLocalNotes] = useState(globalNotes);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Sync local state when global context changes
  useEffect(() => {
    setLocalNotes(globalNotes);
  }, [globalNotes]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      setLocalNotes(newValue);

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        // debounce global notes, because update global context on every keystroke causes lag
        setGlobalNotes(newValue);
      }, 500);
    },
    [setGlobalNotes],
  );

  const objectivesTab = heading ? (
    <Tab.Pane eventKey="objectives" className={`${styles.tabContent} ${styles.objectivesContent}`}>
      <ObjectivesContent heading={heading} sections={sections} />
    </Tab.Pane>
  ) : null;

  const freeformTab = (
    <Tab.Pane eventKey="freeform" className={`${styles.tabContent} ${styles.freeformContent}`}>
      <div className={`${styles.notesTextareaParent}`}>
        <textarea
          className={`${styles.notesTextarea}`}
          placeholder="This is your notepad. Use it to take notes!"
          onChange={handleChange}
          value={localNotes}
        />
      </div>
    </Tab.Pane>
  );

  const tabs = (
    <Tab.Container id="top-tabs" defaultActiveKey={startingKey} transition={false}>
      <Col className={styles.tabCol}>
        <Row sm={1}>
          <Nav variant="tabs" className="flex-row">
            {objectivesTab && (
              <Nav.Item className={styles.tabs}>
                <Nav.Link eventKey="objectives">OBJECTIVES</Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item className={styles.tabs}>
              <Nav.Link eventKey="freeform">NOTES</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row sm={9} className={styles.tabContentRow}>
          <Tab.Content>
            {objectivesTab}
            {freeformTab}
          </Tab.Content>
        </Row>
      </Col>
    </Tab.Container>
  );

  return <div className={styles.notepadParent}>{tabs}</div>;
}

const ObjectivesContent = ({ heading, sections }: ObjectivesJson) => {
  const [clearTrigger, setClearTrigger] = useState(0);

  const checkCorrect = () => {
    const isCorrect = sections?.every((section) =>
      section.questions.every((question) => {
        const storageKey = `objective-${section.title}-${question.question}`;
        const storedValue = localStorage?.getItem?.(storageKey);
        console.log(
          `Checking ${storageKey}: storedValue=${storedValue}, expected=${question.answer}`,
        );
        return storedValue === question.answer;
      }),
    );
    return isCorrect ?? false;
  };

  const [correct, setCorrect] = useState(checkCorrect());

  const storageKeys =
    sections?.flatMap((section) =>
      section.questions.map((question) => `objective-${section.title}-${question.question}`),
    ) ?? [];

  const handleClear = () => {
    storageKeys.forEach((key) => {
      localStorage.removeItem(key);
    });
    // triggers a rerender of the NamePicker components by changing the clearTrigger state
    setClearTrigger((prev) => prev + 1);
    setCorrect(false);
  };

  return (
    <div className={styles.objectivesParent}>
      <div className={styles.objectivesHeading}>{heading}</div>
      {correct ? <CorrectStatus /> : <IncorrectStatus />}
      {sections?.map((section, index) => (
        <div className={styles.objectivesSection} key={index}>
          <div className={styles.objectivesSectionTitle}>{section.title}</div>
          {section.questions.map((question, questionIndex) => {
            const storageKey = `objective-${section.title}-${question.question}`;
            return (
              <div key={`${questionIndex}-${clearTrigger}`}>
                <NamePicker
                  label={question.question}
                  color={question.color}
                  storageKey={storageKey}
                  callback={() => setCorrect(checkCorrect())}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const CorrectStatus = () => {
  const renderTooltip = (
    <Tooltip id="objectives-status-tooltip">
      All your answers are correct! This objective is complete.
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="top" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
      <div className={styles.objectivesStatus}>
        <span className={`${styles.statusText} ${styles.correctStatus}`}>
          Status: All Correct ✓
        </span>
      </div>
    </OverlayTrigger>
  );
};

const IncorrectStatus = () => {
  const renderTooltip = (
    <Tooltip id="objectives-status-tooltip">
      Select the correct answer for each question to complete this objective.
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="top" delay={{ show: 250, hide: 100 }} overlay={renderTooltip}>
      <div className={styles.objectivesStatus}>
        <span className={`${styles.statusText} ${styles.incorrectStatus}`}>
          Status: Incorrect ✗
        </span>
      </div>
    </OverlayTrigger>
  );
};
