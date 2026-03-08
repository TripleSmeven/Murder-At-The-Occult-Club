import { ChangeEventHandler } from "react";
import Form from "react-bootstrap/Form";
import styles from "./NamePicker.module.css";

interface NamePickerProps {
  label?: string;
  labelPosition?: string;
  color?: string;
  value?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export default function NamePicker({
  label,
  labelPosition,
  color,
  value,
  disabled,
  onChange,
}: NamePickerProps) {
  return (
    <div className={`${styles.namePickerParent} ${styles[color || "red"]}`}>
      {labelPosition !== "back" ? (
        <div className={`${styles.label}`}>{label}</div>
      ) : null}
      <Form.Select onChange={onChange} size={"sm"} disabled={disabled} value={value}>
        <option>[Select a name]</option>
        <option value="Sarah Findley">Sarah Findley</option>
        <option value="Thomas Brooks">Thomas Brooks</option>
        <option value="Carlos Sanchez">Carlos Sanchez</option>
        <option value="Daisy Verde">Daisy Verde</option>
        <option value="Andrew Wolfe">Andrew Wolfe</option>
        <option value="Candace Eng">Candace Eng</option>
        <option value="Zach Cunningham">Zach Cunningham</option>
      </Form.Select>
      {labelPosition == "back" ? (
        <div className={`${styles.label} ${styles[color || "red"]}`}>{label}</div>
      ) : null}
    </div>
  );
}
