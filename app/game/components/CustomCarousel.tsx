import React, { JSX, useCallback, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from './CustomCarousel.module.css';

interface CustomCarouselProps {
  size: number;
  items: JSX.Element[];
}

export default function CustomCarousel({ size, items }: CustomCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setActiveIndex(Math.max(activeIndex - 1, 0));
    } else if (event.key === 'ArrowRight') {
      setActiveIndex(Math.min(activeIndex + 1, size - 1));
    }
  }, [activeIndex, size]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
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
      >
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            {item}
          </Carousel.Item>
        ))}
      </Carousel >

      <Pagination className={styles.arrowParent}>
        {items.map((_, index) => (
          <Pagination.Item
            key={index}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >{index + 1}</Pagination.Item>
        ))}
      </Pagination>
    </>
  )
}
