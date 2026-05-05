import React, { JSX, useCallback, useEffect, useRef, useState } from "react";
import { OverlayTrigger, Pagination, Tooltip } from "react-bootstrap";
import Carousel, { CarouselRef } from "react-bootstrap/Carousel";
import styles from "./CustomCarousel.module.css";

interface CustomCarouselProps {
  items: JSX.Element[];
  /* locked pages by index */
  lockedPages?: number[];
  lockedTooltip?: string;
  // onSelect is slow for some reason, so use onChange and useEffect instead
  onChange?: ((index: number) => void) | undefined;
}

const scrollToTop = (ref: React.RefObject<CarouselRef | null>) => {
  ref.current?.element?.scroll({
    top: 0,
    behavior: "smooth",
  });
};

export default function CustomCarousel({
  items,
  lockedPages = [],
  lockedTooltip,
  onChange,
}: CustomCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasCarouselFocus, setHasCarouselFocus] = useState(false);
  const carouselRef = useRef<CarouselRef | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const size = items.length;

  const isPageLocked = useCallback(
    (pageIndex: number) => lockedPages.includes(pageIndex),
    [lockedPages],
  );

  const changeActiveIndex = useCallback(
    (newIndex: number) => {
      setActiveIndex(newIndex);
      scrollToTop(carouselRef);
      if (onChange) {
        onChange(newIndex);
      }
    },
    [onChange],
  );

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!hasCarouselFocus) {
        return;
      }

      if (event.key === "ArrowLeft") {
        const newIndex = Math.max(activeIndex - 1, 0);
        if (!isPageLocked(newIndex)) {
          changeActiveIndex(newIndex);
        }
      } else if (event.key === "ArrowRight") {
        const newIndex = Math.min(activeIndex + 1, size - 1);
        if (!isPageLocked(newIndex)) {
          changeActiveIndex(newIndex);
        }
      }
    },
    [activeIndex, isPageLocked, size, hasCarouselFocus, changeActiveIndex],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div
      className={styles.carouselParent}
      ref={containerRef}
      tabIndex={0}
      onFocus={() => setHasCarouselFocus(true)}
      onBlur={() => setHasCarouselFocus(false)}
    >
      <Carousel
        slide={false}
        indicators={false}
        controls={false}
        wrap={false}
        keyboard={true}
        activeIndex={activeIndex}
        className={styles.carousel}
        ref={carouselRef}
      >
        {items.map((item, index) => (
          <Carousel.Item key={index} className={styles.carouselItem}>
            {item}
          </Carousel.Item>
        ))}
      </Carousel>

      <Pagination className={styles.pageButtonsParent}>
        {items.map((_, index) => {
          const tooltip = <Tooltip id={`tooltip-${activeIndex}`}>{lockedTooltip}</Tooltip>;
          const itemContent = isPageLocked(index) ? (
            <OverlayTrigger placement="top" overlay={tooltip}>
              <span>🔒</span>
            </OverlayTrigger>
          ) : (
            index + 1
          );
          return (
            <Pagination.Item
              key={index}
              className={`${styles.pageButton} ${isPageLocked(index) ? styles.lockedPageButton : ""}`}
              active={activeIndex === index}
              disabled={isPageLocked(index)}
              onClick={() => {
                if (!isPageLocked(index)) {
                  changeActiveIndex(index);
                }
              }}
            >
              {itemContent}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}
