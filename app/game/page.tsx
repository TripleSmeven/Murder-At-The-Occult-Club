"use client";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";

import styles from "./game.module.css";

import LetterFromX from "./evidenceComponents/letterFromX/LetterFromX";
import PoliceReport from "./evidenceComponents/policeReport/PoliceReport";
import Recipe from "./evidenceComponents/recipe/Recipe";
import AmazingOrders from "./evidenceComponents/amazingOrders/AmazingOrders";
import TextConversations from "./evidenceComponents/textConversations/TextConversations";

export default function Game() {
  return (
    <div className={styles.gameParent}>
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
              <Nav.Item>
                <Nav.Link eventKey="3">Mysterious Recipe</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Text Messages</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">AmazingOrders Orders</Nav.Link>
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
              <Tab.Pane eventKey="3">
                <Recipe />
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <TextConversations />
              </Tab.Pane>
              <Tab.Pane eventKey="5">
                <AmazingOrders />
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={3}>
            <Notes />
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

function Notes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [yellowNotes, setYellowNotes] = useState("");
  const [blueNotes, setBlueNotes] = useState("");
  const [greenNotes, setGreenNotes] = useState("");

  useEffect(() => {
    const initialYellowNotes = window.localStorage.getItem("yellowNotes") || "";
    const initialBlueNotes = window.localStorage.getItem("blueNotes") || "";
    const initialGreenNotes = window.localStorage.getItem("greenNotes") || "";

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYellowNotes(initialYellowNotes);
    setBlueNotes(initialBlueNotes);
    setGreenNotes(initialGreenNotes);
  }, []); // make sure this dep array is empty to only run on mount

  return (
    <>
      <div className={styles.notesHeader}>
        <h2>Notes</h2>
        <div className={styles.notesButtons}>
          <div
            className={`${styles.notesButton} ${styles.yellowNotes}`}
            onClick={() => {
              setActiveIndex(0);
            }}
          ></div>
          <div
            className={`${styles.notesButton} ${styles.blueNotes}`}
            onClick={() => {
              setActiveIndex(1);
            }}
          ></div>
          <div
            className={`${styles.notesButton} ${styles.greenNotes}`}
            onClick={() => {
              setActiveIndex(2);
            }}
          ></div>
        </div>
      </div>
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
            onChange={(event) => {
              setYellowNotes(event.target.value);
              localStorage.setItem("yellowNotes", event.target.value);
            }}
            value={yellowNotes}
          />
        </Carousel.Item>
        <Carousel.Item key={2}>
          <textarea
            className={`${styles.notesTextarea} ${styles.blueNotes}`}
            placeholder="Enter your notes here..."
            onChange={(event) => {
              setBlueNotes(event.target.value);
              localStorage.setItem("blueNotes", event.target.value);
            }}
            value={blueNotes}
          />
        </Carousel.Item>
        <Carousel.Item key={3}>
          <textarea
            className={`${styles.notesTextarea} ${styles.greenNotes}`}
            placeholder="Enter your notes here..."
            onChange={(event) => {
              setGreenNotes(event.target.value);
              localStorage.setItem("greenNotes", event.target.value);
            }}
            value={greenNotes}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
