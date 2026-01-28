import React, { JSX, useCallback, useEffect, useRef, useState } from "react";
import { Pagination } from "react-bootstrap";
import Carousel, { CarouselRef } from "react-bootstrap/Carousel";
import styles from "./CustomCarousel.module.css";

interface CustomCarouselProps {
  items: JSX.Element[];
}

const scrollToTop = (ref: React.RefObject<CarouselRef | null>) => {
  ref.current?.element?.scroll({
    top: 0,
    behavior: "smooth",
  });
};

export default function CustomCarousel({ items }: CustomCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<CarouselRef | null>(null);
  const size = items.length;

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        console.log("arrow left", Math.max(activeIndex - 1, 0));
        setActiveIndex(Math.max(activeIndex - 1, 0));
        scrollToTop(carouselRef);
      } else if (event.key === "ArrowRight") {
        console.log("arrow right", Math.min(activeIndex + 1, size - 1));
        setActiveIndex(Math.min(activeIndex + 1, size - 1));
        scrollToTop(carouselRef);
      }
    },
    [activeIndex, size],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
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
          <Carousel.Item key={index}>{item}</Carousel.Item>
        ))}
      </Carousel>

      <Pagination className={styles.pageButtonsParent}>
        {items.map((_, index) => (
          <Pagination.Item
            key={index}
            className={styles.pageButton}
            active={activeIndex === index}
            onClick={() => {
              setActiveIndex(index);
              scrollToTop(carouselRef);
            }}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
}
