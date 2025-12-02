import React from "react";
import styles from "./Button.module.css";

export default function Button({ label, onClick, type = "button", ariaLabel }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
}
