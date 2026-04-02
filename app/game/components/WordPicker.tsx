import Form from "react-bootstrap/Form";
import styles from "./WordPicker.module.css";
import { useLocalStorage } from "./useLocalStorage";

interface CustomPickerProps {
  label?: string;
  labelPosition?: string;
  color?: Color;
  disabled?: boolean;
  words?: string[];
  storageKey: string;
  callback?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SUSPECTS = [
  "Sarah Findley",
  "Thomas Brooke",
  "Carlos Sanchez",
  "Daisy Verde",
  "Andrew Wolfe",
  "Candace Eng",
  "Zach Cunningham",
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
}

export function NamePicker({ label, color, disabled, storageKey, callback }: CustomPickerProps) {
  return (
    <CustomPicker
      label={label}
      color={color}
      disabled={disabled}
      words={SUSPECTS}
      storageKey={storageKey}
      callback={callback}
    />
  );
}

export function CustomPicker({
  label,
  color,
  disabled,
  words,
  storageKey,
  callback,
}: CustomPickerProps) {
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(storageKey);
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalStorageValue(e.target.value);
    callback?.(e);
  };
  return (
    <div className={`${styles.namePickerParent} ${color && styles[color]}`}>
      <div className={`${styles.label} ${color && styles[color]}`}>{label} :</div>
      <Form.Select
        onChange={onChange}
        size={"sm"}
        disabled={disabled}
        value={localStorageValue || ""}
      >
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
