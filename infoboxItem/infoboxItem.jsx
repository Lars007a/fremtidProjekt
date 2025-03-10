import styles from "./infoboxItem.module.css";
import { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function infoboxItem() {
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
        <p className={styles.title}>titel</p>
        {showing ? (
          <FaChevronUp onClick={showFunc} />
        ) : (
          <FaChevronDown onClick={showFunc} />
        )}
        <div className={`${styles.itemContent} ${showing ? styles.show : ""}`}>
          <p>
            Lorem ipsum dolor
            <br /> sit amet consectetur adipisicing elit. Accusantium nulla at
            ut optio doloribus quae
            <br /> nesciunt, recusandae laborum eligendi
            <br /> aut?
          </p>
        </div>
      </li>
    </>
  );
}
