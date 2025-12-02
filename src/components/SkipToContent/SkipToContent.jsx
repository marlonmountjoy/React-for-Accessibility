import React from "react";
import styles from "./SkipToContent.module.css";

export default function SkipToContent({ targetId = "mainContent" }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.tabIndex = -1;
      el.focus({ preventScroll: false });
    }
  };
  return (
    <a href={`#${targetId}`} className={styles.skipLink} onClick={handleClick}>
      Skip to main content
    </a>
  );
}
