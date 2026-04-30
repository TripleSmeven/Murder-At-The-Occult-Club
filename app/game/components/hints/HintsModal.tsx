"use client";

import React, { useState } from "react";
import styles from "./Hints.module.css";
import { HintSection, hintsJson } from "./HintsJson";

interface HintsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HintsModal({ isOpen, onClose }: HintsModalProps) {
  const [expandedPanels, setExpandedPanels] = useState<Set<string>>(new Set());

  if (!isOpen) return null;

  const togglePanel = (panelKey: string) => {
    const newExpanded = new Set(expandedPanels);
    if (newExpanded.has(panelKey)) {
      newExpanded.delete(panelKey);
    } else {
      newExpanded.add(panelKey);
    }
    setExpandedPanels(newExpanded);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const { sections } = hintsJson;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close hints">
          ✕
        </button>
        <h2 className={styles.modalTitle}>Hints</h2>

        <div className={styles.sectionsContainer}>
          {sections.map((section) => (
            <div key={section.heading} className={styles.section}>
              <h3 className={styles.sectionHeading}>{section.heading}</h3>
              <div className={styles.panelsContainer}>
                {section.panels.map((panel) => {
                  const panelKey = `${section.heading}-${panel.title}`;
                  const isExpanded = expandedPanels.has(panelKey);

                  return (
                    <div key={panelKey} className={styles.panelWrapper}>
                      <button
                        className={`${styles.panelTitle} ${isExpanded ? styles.expanded : ""}`}
                        onClick={() => togglePanel(panelKey)}
                      >
                        <span className={styles.panelTitleText}>{panel.title}</span>
                        <span className={styles.toggleIcon}>{isExpanded ? "▼" : "▶"}</span>
                      </button>
                      {isExpanded && <div className={styles.panelContent}>{panel.content}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {sections.every((section) => section.panels.length === 0) && (
          <p className={styles.noHints}>
            No hints unlocked yet. Progress through the game to unlock hints!
          </p>
        )}
      </div>
    </div>
  );
}
