import styles from "./infoboxes.module.css";
import InfoboxItem from "../infoboxItem/infoboxItem.jsx";
import { Children } from "react";

export default function infoboxes({ children }) {
  return (
    <>
      <div className={styles.boxes}>
        <ul>{children}</ul>
      </div>
    </>
  );
}
