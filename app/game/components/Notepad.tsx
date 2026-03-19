"use client";
import { useEffect, useState } from "react";

import styles from "./Notepad.module.css";
import { useLocalStorage } from "./useLocalStorage";
import { NamePicker } from "./WordPicker";
import { ObjectivesJson } from "./ObjectivesJson";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";

export default function Notepad({ heading, sections }: ObjectivesJson) {
  const startingKey = heading ? "objectives" : "freeform";
  const [globalNotes, setGlobalNotes] = useLocalStorage("globalNotes");

  const objectivesTab = heading ? (
    <Tab.Pane
      eventKey="objectives"
      title="Objectives"
      className={`${styles.tabContent} ${styles.objectivesContent}`}
    >
      <Objectives heading={heading} sections={sections} />
    </Tab.Pane>
  ) : null;

  const freeformTab = (
    <Tab.Pane
      eventKey="freeform"
      title="Freeform"
      className={`${styles.tabContent} ${styles.freeformContent}`}
    >
      <div>
        <textarea
          className={`${styles.notesTextarea}`}
          placeholder="Write anything here..."
          onChange={(event) => {
            setGlobalNotes(event.target.value);
          }}
          value={globalNotes}
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

const Objectives = ({ heading, sections }: ObjectivesJson) => {
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
