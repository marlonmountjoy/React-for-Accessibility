import React from "react";
import styles from "./TextBox.module.css";

export default function TextBox({
  id,
  value,
  onChange,
  placeholder,
  className = "",
}) {
  return (
    <input
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`${styles.textbox} ${className}`}
    />
  );
}
