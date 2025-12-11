import React from "react";
import styles from "./TopNav.module.css";

export default function TopNav() {
  const navItems = [
    { id: "about", label: "About us" },
    { id: "contact", label: "Contact us" },
    { id: "faqs", label: "FAQs" },
  ];

  const handleNavClick = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.focus?.();
    }
  };

  return (
    <nav className={styles.topNav} aria-label="Primary navigation">
      {/* Hidden visually, announced by screen readers */}
      <h2 className="sr-only">Main navigation</h2>

      <div className={styles.topNavInner}>
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li key={item.id} className={styles.item}>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
