import React from "react";
import styles from "./Anchor.module.css";

export default function Anchor({
    href,
    label,
    ariaLabel,
    target = "_self",
    rel,
}) {
    const computedRel =
        target === "_blank" ? rel || "noopener noreferrer" : rel;

        return (
            <a
            href={href}
            target={target}
            rel={computedRel}
            className={styles.link}
            aria-label={ariaLabel || label}
            >
                {label}
            </a>
        );
}