import styles from "./imgTextSec.module.css";

import { useRef, useEffect } from "react";

export default function imgTextSec({ obj }) {
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
        <div className="container">
          <div className={styles.content}>
            <h2>{obj?.title}</h2>
            <div className={styles.flexGrid}>
              <article>
                <p>{obj?.content}</p>
              </article>
              <div className={styles.imgBox}>
                <img src={obj?.img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
