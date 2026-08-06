"use client";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import HintsModal from "./HintsModal";

export default function HintsButton({
  className,
  chapter,
}: {
  className?: string;
  chapter: number;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="warning"
        size="sm"
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        Hints
      </Button>
      <HintsModal chapter={chapter} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
