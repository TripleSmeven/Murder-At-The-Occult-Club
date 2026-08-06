import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";

export default function BackButton({ className }: { className: string }) {
  return (
    <Button variant="primary" size="sm" href={"/game"} className={className}>
      {"Main Menu"}
    </Button>
  );
}
