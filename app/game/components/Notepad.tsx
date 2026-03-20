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
                <MyToolTip text="test">
                  <Nav.Link eventKey="objectives">OBJECTIVES</Nav.Link>
                </MyToolTip>
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
  return (
    <div className={styles.objectivesParent}>
      <div className={styles.objectivesHeading}>{heading}</div>
      {sections?.map((section, index) => (
        <div className={styles.objectivesSection} key={index}>
          <div className={styles.objectivesSectionTitle}>{section.title}</div>
          {section.questions.map((question, questionIndex) => {
            const storageKey = `objective-${section.title}-${question.question}`;
            return (
              <div key={questionIndex}>
                <NamePicker
                  label={question.question}
                  color={question.color}
                  storageKey={storageKey}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

function MyToolTip({ children, text }: { children: JSX.Element; text: string }) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="top" delay={{ show: 250, hide: 300 }} overlay={renderTooltip}>
      {children}
    </OverlayTrigger>
  );
}
