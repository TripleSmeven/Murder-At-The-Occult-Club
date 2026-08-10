"use client";

import Image, { StaticImageData } from "next/image";
import { useState, type MouseEvent, type CSSProperties } from "react";
import styles from "./ImageEvidence.module.css";

export default function ImageEvidence({ image }: { image: StaticImageData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [brightness, setBrightness] = useState(0);

  const closeModal = () => setIsOpen(false);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const brightnessStyle = {
    "--image-brightness": brightness,
  } as CSSProperties;

  return (
    <> 
      <button type="button" className={styles.wrapper} onClick={() => setIsOpen(true)}>
        <Image
          src={image}
          className={styles.image}
          alt={"An image of a constellation"}
        />
        <div className={styles.expandHint}>Click to expand</div>
      </button>

      {isOpen && (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close image"
            >
              ✕
            </button>
            <div className={styles.modalImageWrapper} style={brightnessStyle}>
              <img
                src={typeof image === 'string' ? image : image.src}
                className={styles.modalImage}
                alt={"An image of a constellation"}
              />
            </div>
          </div>

          <div className={styles.sliderPanel} onClick={(e) => e.stopPropagation()}>
            <label htmlFor="image-brightness" className={styles.sliderLabel}>
              Brightness
            </label>
            <input
              id="image-brightness"
              type="range"
              min={0}
              max={100}
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className={styles.brightnessSlider}
            />
            <span className={styles.brightnessValue}>{brightness}%</span>
          </div>
        </div>
      )}
    </>
  );
}
