import { ChangeEventHandler } from "react";
import Form from "react-bootstrap/Form";
import styles from "./WordPicker.module.css";

interface CustomPickerProps {
  label?: string;
  labelPosition?: string;
  color?: Color;
  value?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  words?: string[];
}

const SUSPECTS = [
  "Sarah Findley",
  "Thomas Brooks",
  "Carlos Sanchez",
  "Daisy Verde",
  "Andrew Wolfe",
  "Candace Eng",
  "Zach Cunningham",
];

export enum Color {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  INDIGO = "indigo",
  GREEN = "green",
  BLUE = "blue",
  CYAN = "cyan",
  PURPLE = "purple",
  BLACK = "black",
}

export function NamePicker({ label, color, value, disabled, onChange }: CustomPickerProps) {
  return (
    <CustomPicker
      label={label}
      color={color}
      value={value}
      disabled={disabled}
      onChange={onChange}
      words={SUSPECTS}
    />
  );
}

export function CustomPicker({
  label,
  color,
  value,
  disabled,
  onChange,
  words,
}: CustomPickerProps) {
  return (
    <div className={`${styles.namePickerParent} ${color ? styles[color] : ""}`}>
      <div className={styles.label}> {label}</div>
      <Form.Select onChange={onChange} size={"sm"} disabled={disabled} value={value}>
        <option>[Select a name]</option>
        {words?.map((word, index) => (
          <option key={index} value={word}>
            {word}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}
