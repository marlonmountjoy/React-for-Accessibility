import React from "react";
import styles from "./Table.module.css";

export default function Table({
  caption,
  columns,
  data,
  emptyMessage = "No data available.",
}) {
  const hasData = Array.isArray(data) && data.length > 0;

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        {caption && <caption className={styles.caption}>{caption}</caption>}

        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" className={styles.headerCell}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {hasData ? (
            data.map((row, rowIndex) => (
              <tr key={row.id || rowIndex} className={styles.row}>
                {columns.map((col) => (
                  <td key={col.key} className={styles.cell}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td className={styles.emptyCell} colSpan={columns.length}>
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
