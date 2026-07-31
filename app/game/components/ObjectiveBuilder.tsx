import Form from "react-bootstrap/Form";
import { useContext } from "react";
import styles from "./ObjectiveBuilder.module.css";
import { ObjectivesContext } from "../context/ObjectivesContext";

interface CustomPickerProps {
  label?: string;
  labelPosition?: string;
  color?: Color;
  size?: "sm" | "lg";
  disabled?: boolean;
  words?: string[];
  storageKey: string;
  callback?: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => void;
}

export const CHAPTER1_NAMES = [
  "Sarah Findley",
  "Thomas Brooke",
  "Carlos Sanchez",
  "Andrew Wolfe",
  "Candace Eng",
  "Zach Cunningham",
];

export const CHAPTER2_NAMES = [
  "Matt Crocker",
  "Daisy Verde",
  "Nikki Yu",
  "David Kataria",
  "Martin Larssen",
];

export enum Color {
  WHITE = "white",
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  INDIGO = "indigo",
  GREEN = "green",
  BLUE = "blue",
  CYAN = "cyan",
  PURPLE = "purple",
  BLACK = "black",
  GRAY = "gray",
}

export function CustomPicker({
  label,
  color,
  disabled,
  words,
  storageKey,
  callback,
}: CustomPickerProps) {
  const { answers, setAnswer } = useContext(ObjectivesContext);
  const currentValue = answers[storageKey] || "";

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswer(storageKey, e.target.value);
    callback?.(e);
  };

  return (
    <div className={`${styles.namePickerParent} ${color && styles[color]}`}>
      <div className={`${styles.label} ${color && styles[color]}`}>
        {label?.length ? label + ":" : null}
      </div>
      <Form.Select onChange={onChange} disabled={disabled} value={currentValue}>
        <option key={0} value={""}>
          [Select an option]
        </option>
        {words?.map((word, index) => (
          <option key={index + 1} value={word}>
            {word}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export function FreeformInput({
  label,
  color,
  size,
  disabled,
  storageKey,
  callback,
}: CustomPickerProps) {
  const { answers, setAnswer } = useContext(ObjectivesContext);
  const currentValue = answers[storageKey] || "";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(storageKey, e.target.value);
    callback?.(e);
  };

  return (
    <div className={`${styles.namePickerParent} ${color && styles[color]}`}>
      <div className={`${styles.label} ${color && styles[color]}`}>
        {label?.length ? label + ":" : null}
      </div>
      <Form.Control
        name={label}
        value={currentValue}
        placeholder="Type your answer"
        onChange={onChange}
        disabled={disabled}
        maxLength={32}
        className={size === "lg" ? styles.largeInput : ""}
      ></Form.Control>
    </div>
  );
}
