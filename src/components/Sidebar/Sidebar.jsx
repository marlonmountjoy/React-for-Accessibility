import React, { useState, useRef, useEffect } from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar({
  title = "Page sections",
  ariaLabel,
  items = [],
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const label = ariaLabel || title || "Sidebar";
  const sidebarId = "page-sidebar";

  // First focusable link inside the sidebar
  const firstLinkRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // When the sidebar opens, move focus to the first link
  useEffect(() => {
    if (isOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Toggle button fixed on left side of viewport */}
      <button
        type="button"
        className={styles.toggleButton}
        aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
        aria-expanded={isOpen}
        aria-controls={sidebarId}
        onClick={toggleSidebar}
      >
        <span aria-hidden="true">{isOpen ? "⟨" : "⟩"}</span>
      </button>

      {/* Slide-out sidebar panel */}
      <aside
        id={sidebarId}
        className={`${styles.sidebar} ${
          isOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
        aria-label={label}
        aria-hidden={!isOpen}
      >
        {isOpen && (
          <>
            {title && <h2 className={styles.title}>{title}</h2>}

            {items.length > 0 && (
              <nav
                className={styles.nav}
                aria-label={`${label} navigation`}
              >
                <ul className={styles.list}>
                  {items.map((item, index) => (
                    <li
                      key={item.id || item.href || item.label}
                      className={styles.item}
                    >
                      <a
                        href={item.href}
                        className={styles.link}
                        target={item.target || "_self"}
                        rel={
                          item.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={closeSidebar}
                        ref={index === 0 ? firstLinkRef : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {children && (
              <div className={styles.extraContent}>{children}</div>
            )}
          </>
        )}
      </aside>
    </>
  );
}
