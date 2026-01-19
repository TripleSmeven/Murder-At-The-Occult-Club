'use client'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import styles from './game.module.css'

import LetterFromX from './evidenceComponents/letterFromX/LetterFromX';
import PoliceReport from './evidenceComponents/policeReport/PoliceReport';


export default function Game() {
  return (
    <div className={styles.gameParent}>
      <LeftTabs></LeftTabs>
    </div>
  );
}

// https://react-bootstrap.netlify.app/docs/components/tabs/#custom-tab-layout
function LeftTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Letter From X</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Police Report</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content className={styles.tabContent}>
            <Tab.Pane eventKey="first"><LetterFromX /></Tab.Pane>
            <Tab.Pane eventKey="second"><PoliceReport /></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
