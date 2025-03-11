import styles from "./infoboxItem.module.css";
import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function infoboxItem({ obj }) {
  const [showing, setShowing] = useState(false);

  const showFunc = () => {
    if (showing == false) {
      setShowing(true);
    } else {
      setShowing(false);
    }
  };

  return (
    <>
      <li className={styles.item}>
        <p className={styles.title}>{obj?.title}</p>
        {showing ? (
          <FaChevronUp onClick={showFunc} />
        ) : (
          <FaChevronDown onClick={showFunc} />
        )}
        <div className={`${styles.itemContent} ${showing ? styles.show : ""}`}>
          <p>{obj?.content}</p>
        </div>
      </li>
    </>
  );
}
