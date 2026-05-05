"use client";
import { useContext, useEffect, useCallback, useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";

import styles from "./Notepad.module.css";
import { CustomPicker, NamePicker } from "./WordPicker";
import { ObjectivesJson } from "./ObjectivesJson";
import { Col, Nav, OverlayTrigger, Row, Tab, Tooltip } from "react-bootstrap";
import { GlobalNotesContext } from "./GlobalNotesContext";
import { useLocalStorage } from "./useLocalStorage";
import { ObjectivesContext } from "./ObjectivesContext";
import { MDXEditorMethods } from "@mdxeditor/editor";

const MarkdownEditor = dynamic(() => import("./MarkdownEditor"), { ssr: false });

export default function Notepad({ heading, sections, onCorrect }: ObjectivesContentProps) {
  const startingKey = heading ? "objectives" : "freeform";
  const { globalNotes, setGlobalNotes } = useContext(GlobalNotesContext);
  const [localNotes, setLocalNotes] = useState(globalNotes);
  const [objectivesVisited, setObjectivesVisited] = useLocalStorage("objectivesVisited");

  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const editorRef = useRef<MDXEditorMethods | null>(null);

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

  // handler for typing in the notes textrea.
  const handleChange = useCallback(
    (markdown: string) => {
      setLocalNotes(markdown);

      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        // debounce global notes, because update global context on every keystroke causes lag
        setGlobalNotes(markdown);
      }, 500);
    },
    [setGlobalNotes],
  );

  const handleTabSelect = useCallback(
    (eventKey: string | null) => {
      if (eventKey === "objectives" && objectivesVisited !== "true") {
        setObjectivesVisited("true");
      }
    },
    [objectivesVisited, setObjectivesVisited],
  );

  const objectivesTab = heading ? (
    <Tab.Pane eventKey="objectives" className={`${styles.tabContent} ${styles.objectivesContent}`}>
      <ObjectivesContent heading={heading} sections={sections} onCorrect={onCorrect} />
    </Tab.Pane>
  ) : null;

  const freeformTab = (
    <Tab.Pane eventKey="freeform" className={`${styles.tabContent} ${styles.freeformContent}`}>
      <div className={`${styles.notesTextareaParent}`}>
        <MarkdownEditor markdown={localNotes} onChange={handleChange} editorRef={editorRef} />
      </div>
    </Tab.Pane>
  );

  const tabs = (
    <Tab.Container
      id="top-tabs"
      defaultActiveKey={startingKey}
      transition={false}
      onSelect={handleTabSelect}
    >
      <Col className={styles.tabCol}>
        <Row sm={1}>
          <Nav variant="tabs" className="flex-row">
            {objectivesTab && (
              <Nav.Item className={styles.tabs}>
                <Nav.Link eventKey="objectives">
                  {objectivesVisited === "true" ? "" : "❗"}🎯OBJECTIVES
                </Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item className={styles.tabs}>
              <Nav.Link eventKey="freeform">📝NOTES</Nav.Link>
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

export interface ObjectivesContentProps extends ObjectivesJson {
  onCorrect?: () => void;
}

const getStorageKey = (sectionTitle: string, question: string) => {
  return `${sectionTitle.substring(0, 16)}-${question}`;
};

const ObjectivesContent = ({ heading, sections, onCorrect }: ObjectivesContentProps) => {
  const { answers } = useContext(ObjectivesContext);
  const hasTriggeredCorrectRef = useRef(false);

  // status does not need to be saved in state, since its
  // already derived from existing state
  const status = useMemo((): "correct" | "incorrect" | "incomplete" => {
    // Check if all questions have been filled out
    const allQuestionsAnswered = sections?.every((section) =>
      section.questions.every((question) => {
        const storageKey = getStorageKey(section.title, question.question);
        const storedValue = answers[storageKey];
        return storedValue && storedValue !== "";
      }),
    );

    if (!allQuestionsAnswered) {
      return "incomplete";
    }

    // Check if all answers are correct
    const allAnswersCorrect = sections?.every((section) =>
      section.questions.every((question) => {
        const storageKey = getStorageKey(section.title, question.question);
        const storedValue = answers[storageKey];
        return storedValue === question.answer;
      }),
    );

    if (allAnswersCorrect) {
      return "correct";
    }

    return "incorrect";
  }, [answers, sections]);

  // trigger the onCorrect afterwards, then mark that we have triggered it, so we dont trigger it again
  useEffect(() => {
    if (status === "correct" && onCorrect && !hasTriggeredCorrectRef.current) {
      hasTriggeredCorrectRef.current = true;
      onCorrect();
      return;
    }

    if (status !== "correct") {
      hasTriggeredCorrectRef.current = false;
    }
  }, [status, onCorrect]);

  return (
    <div className={styles.objectivesParent}>
      <div className={styles.objectivesHeading}>{heading}</div>
      {status === "correct" && <CorrectStatus />}
      {status === "incorrect" && <IncorrectStatus />}
      {status === "incomplete" && <IncompleteStatus />}
      {sections?.map((section, index) => (
        <div className={styles.objectivesSection} key={index}>
          <div className={styles.objectivesSectionTitle}>{section.title}</div>
          {section.questions.map((question, questionIndex) => {
            const storageKey = getStorageKey(section.title, question.question);
            if (question.answers && question.answers.length > 0) {
              return (
                <div key={`${questionIndex}`}>
                  <CustomPicker
                    label={question.question}
                    color={question.color}
                    words={question.answers}
                    storageKey={storageKey}
                    disabled={status === "correct"}
                  />
                </div>
              );
            }
            return (
              <div key={`${questionIndex}`}>
                <NamePicker
                  label={question.question}
                  color={question.color}
                  storageKey={storageKey}
                  disabled={status === "correct"}
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
    <OverlayTrigger placement="top" overlay={renderTooltip}>
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
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <div className={styles.objectivesStatus}>
        <span className={`${styles.statusText} ${styles.incorrectStatus}`}>
          Status: Incorrect ✗
        </span>
      </div>
    </OverlayTrigger>
  );
};

const IncompleteStatus = () => {
  const renderTooltip = (
    <Tooltip id="objectives-status-tooltip">
      Select the correct answer for each question to complete this objective.
    </Tooltip>
  );
  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <div className={styles.objectivesStatus}>
        <span className={`${styles.statusText} ${styles.incompleteStatus}`}>
          Status: Incomplete ⚠
        </span>
      </div>
    </OverlayTrigger>
  );
};
