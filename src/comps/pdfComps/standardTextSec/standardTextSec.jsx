import styles from "./standardTextSec.module.css";
import { useRef, useEffect } from "react";
import ImgBcSec from "../imgBcSec/imgBcSec";
import Line from "../../line/line.jsx";

export default function standardTextSec({ obj, children }) {
  const box = useRef(null);

  useEffect(() => {
    switch (obj.color) {
      case 1:
        box.current.classList.add(styles.blue);
        break;

      case 2:
        box.current.classList.add(styles.dark);
        break;

      case 3:
        box.current.classList.add(styles.light);
        break;

      case 4:
        box.current.classList.add(styles.white);
        break;

      default:
        box.current.classList.add(styles.white);
        break;
    }
  }, [box.current]);

  return (
    <>
      <section className={styles.sec} ref={box}>
        {obj?.imgHeader == true ? (
          <ImgBcSec title={obj?.title} />
        ) : (
          <div className="container">
            <Line>{obj?.title}</Line>
          </div>
        )}
        <div className="container">
          <div
            className={`${styles.content} ${obj?.imgHeader ? "" : styles.alt}`}
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
