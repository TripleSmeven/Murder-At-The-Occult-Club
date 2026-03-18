"use client";
import { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import styles from "./Notepad.module.css";
import { useLocalStorage } from "./useLocalStorage";
import { NamePicker } from "./WordPicker";
import { ObjectivesJson } from "./ObjectivesJson";

export default function Notepad({ heading, sections }: ObjectivesJson) {
  const startingIndex = heading ? 0 : 1;
  const [activeIndex, setActiveIndex] = useState(startingIndex);
  const [globalNotes, setGlobalNotes] = useLocalStorage("globalNotes");

  let objectivesComponent;

  if (heading) {
    objectivesComponent = <Objectives heading={heading} sections={sections} />;
  }

  return (
    <div className={styles.notepadParent}>
      <div className={styles.notesHeader}>
        <h2>Notepad</h2>
        <div className={styles.tabs}>
          {objectivesComponent && (
            <div
              className={`${styles.notesButton}`}
              onClick={() => {
                setActiveIndex(0);
              }}
            >
              Objectives
            </div>
          )}
          <div
            className={`${styles.notesButton}`}
            onClick={() => {
              setActiveIndex(1);
            }}
          >
            Freeform
          </div>
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
        <Carousel.Item
          key={1}
          className={`${styles.carouselItem} ${styles.objectivesCarouselItem}`}
        >
          {objectivesComponent}
        </Carousel.Item>
        <Carousel.Item key={2} className={`${styles.carouselItem} ${styles.notesCarouselItem}`}>
          <textarea
            className={`${styles.notesTextarea}`}
            placeholder="Write anything here..."
            onChange={(event) => {
              setGlobalNotes(event.target.value);
            }}
            value={globalNotes}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

const Objectives = ({ heading, sections }: ObjectivesJson) => {
  return (
    <div className={styles.objectivesParent}>
      <div className={styles.objectivesHeading}>{heading}</div>
      {sections?.map((section, index) => (
        <div className={styles.objectivesSection} key={index}>
          <div className={styles.objectivesSectionTitle}>{section.title}</div>
          {section.questions.map((question, questionIndex) => (
            <div key={questionIndex}>
              <NamePicker label={question.question} color={question.color} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
