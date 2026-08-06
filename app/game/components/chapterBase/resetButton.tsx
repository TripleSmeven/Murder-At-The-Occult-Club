import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";

export default function ResetButton({ className }: { className: string }) {
  const handleReset = useCallback(() => {
    const confirmed = window.confirm(
      "Are you sure you want to reset all game progress? You will restart from the beginning.",
    );
    if (confirmed) {
      localStorage.clear();
      window.location.reload();
    }
  }, []);

  return (
    <Button variant="danger" size="sm" onClick={handleReset} className={className}>
      Reset
    </Button>
  );
}
