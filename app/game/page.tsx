"use client";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";

import styles from "./game.module.css";

import LetterFromX from "./evidenceComponents/letterFromX/LetterFromX";
import PoliceReport from "./evidenceComponents/policeReport/PoliceReport";

export default function Game() {
  const [notesActiveIndex, setNotesActiveIndex] = useState(0);
  return (
    <div className={styles.gameParent}>
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col sm={7}></Col>
          <Col sm={3}>
            <NotesController
              setNotesActiveIndex={setNotesActiveIndex}
              notesActiveIndex={notesActiveIndex}
            />
          </Col>
        </Row>
      </Container>

      {/* https://react-bootstrap.netlify.app/docs/components/tabs/#custom-tab-layout */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="1">Letter From X</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Police Report</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={7}>
            <Tab.Content className={styles.tabContent}>
              <Tab.Pane eventKey="1">
                <LetterFromX />
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <PoliceReport />
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={3}>
            <Notes activeIndex={notesActiveIndex} />
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function NotesController({
  setNotesActiveIndex,
  notesActiveIndex,
}: {
  setNotesActiveIndex: (index: number) => void;
  notesActiveIndex: number;
}) {
  return (
    <div className={styles.notesHeader}>
      <h2>Notes</h2>
      <Pagination className={styles.pageButtonsParent}>
        <Pagination.Item
          linkClassName={styles.yellowNotes}
          key={0}
          active={notesActiveIndex === 0}
          onClick={() => {
            setNotesActiveIndex(0);
          }}
        >
          1
        </Pagination.Item>
        <Pagination.Item
          linkClassName={styles.blueNotes}
          key={1}
          active={notesActiveIndex === 1}
          onClick={() => {
            setNotesActiveIndex(1);
          }}
        >
          2
        </Pagination.Item>
        <Pagination.Item
          linkClassName={styles.greenNotes}
          key={2}
          active={notesActiveIndex === 2}
          onClick={() => {
            setNotesActiveIndex(2);
          }}
        >
          3
        </Pagination.Item>
      </Pagination>
    </div>
  );
}

function Notes({ activeIndex = 0 }: { activeIndex?: number }) {
  return (
    <Carousel
      slide={false}
      indicators={false}
      controls={false}
      wrap={false}
      keyboard={true}
      activeIndex={activeIndex}
      className={styles.carousel}
    >
      <Carousel.Item key={1}>
        <textarea
          className={`${styles.notesTextarea} ${styles.yellowNotes}`}
          placeholder="Enter your notes here..."
        />
      </Carousel.Item>
      <Carousel.Item key={2}>
        <textarea
          className={`${styles.notesTextarea} ${styles.blueNotes}`}
          placeholder="Enter your notes here..."
        />
      </Carousel.Item>
      <Carousel.Item key={3}>
        <textarea
          className={`${styles.notesTextarea} ${styles.greenNotes}`}
          placeholder="Enter your notes here..."
        />
      </Carousel.Item>
    </Carousel>
  );
}
