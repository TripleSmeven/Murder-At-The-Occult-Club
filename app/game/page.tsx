"use client";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";

import styles from "./game.module.css";

import LetterFromX from "./tabContentComponents/letterFromX/LetterFromX";
import PoliceReport from "./tabContentComponents/policeReport/PoliceReport";
import Recipe from "./tabContentComponents/recipe/Recipe";
import AmazingOrders from "./tabContentComponents/amazingOrders/AmazingOrders";
import TextConversations from "./tabContentComponents/textConversations/TextConversations";
import Emails from "./tabContentComponents/emails/Emails";
import Newspaper from "./tabContentComponents/newspaper/Newspaper";
import { useLocalStorage } from "./components/useLocalStorage";
import { GlobalNotesContext } from "./components/GlobalNotesContext";

export default function Game() {
  const [globalNotes, setGlobalNotes] = useLocalStorage("globalNotes");

  return (
    <div className={styles.gameParent}>
      {/* https://react-bootstrap.netlify.app/docs/components/tabs/#custom-tab-layout */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="1">
        <Row>
          <Col sm={2} className={`${styles.navCol}`}>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="1">Letter From X</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2">Police Report</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3">School Newspaper</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4">Mysterious Recipe</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="5">Text Messages</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="6">Email Inboxes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="7">AmazingOrders Orders</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} className={styles.col}>
            <GlobalNotesContext value={{ globalNotes, setGlobalNotes }}>
              <Tab.Content className={styles.tabContent}>
                <Tab.Pane eventKey="1">
                  <LetterFromX />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <PoliceReport />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <Newspaper />
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  <Recipe />
                </Tab.Pane>
                <Tab.Pane eventKey="5">
                  <TextConversations />
                </Tab.Pane>
                <Tab.Pane eventKey="6">
                  <Emails />
                </Tab.Pane>
                {/* need special width css for some reason */}
                <Tab.Pane eventKey="7" className={styles.amazingOrdersTab}>
                  <AmazingOrders />
                </Tab.Pane>
              </Tab.Content>
            </GlobalNotesContext>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
