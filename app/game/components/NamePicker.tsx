import { ChangeEventHandler } from "react";
import Form from "react-bootstrap/Form";
import styles from "./NamePicker.module.css";

interface NamePickerProps {
  label: string;
  color: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

export default function NamePicker({ label, color, onChange }: NamePickerProps) {
  return (
    <div className={styles.namePickerParent}>
      <div className={`${styles.label} ${styles[color]}`}>{label}:</div>
      <Form.Select onChange={onChange} size={"sm"}>
        <option>---</option>
        <option value="Sarah Findley">Sarah Findley</option>
        <option value="Thomas Brooks">Thomas Brooks</option>
        <option value="Carlos Sanchez">Carlos Sanchez</option>
        <option value="Daisy Verde">Daisy Verde</option>
        <option value="Andrew Wolfe">Andrew Wolfe</option>
        <option value="Candace Eng">Candace Eng</option>
        <option value="Zach Cunningham">Zach Cunningham</option>
      </Form.Select>
    </div>
  );
}
