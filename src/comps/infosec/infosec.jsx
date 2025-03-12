import styles from "./infosec.module.css";
import Line from "../line/line.jsx";
import { useRef, useEffect } from "react";
import ImgBcSec from "../pdfComps/imgBcSec/imgBcSec.jsx";
import SkewedSec from "../sectwo/skewSection.jsx";

export default function infosec({
  title,
  skewed,
  imgHeader,
  bcColor,
  children,
}) {
  const box = useRef(null);

  useEffect(() => {
    if (skewed == true) {
      box.current.classList.add(styles.skewed);
    }

    if (imgHeader == true) {
      box.current.classList.add(styles.imgHeader);
    }

    switch (bcColor) {
      case 1:
        box.current.classList.add(styles.white);
        break;
      case 2:
        box.current.classList.add(styles.second);
        break;
      case 3:
        box.current.classList.add(styles.third);
        break;
      case 4:
        box.current.classList.add(styles.fourth);
        break;
      default:
        box.current.classList.add(styles.fifth);
        break;
    }
  }, [box.current]);

  return (
    <>
      <div className={`${styles.box}`} ref={box}>
        {imgHeader == true ? (
          <ImgBcSec title={title} />
        ) : (
          <div className="container">
            <Line>{title}</Line>
          </div>
        )}
        {skewed ? (
          <div className={styles.content}>
            <SkewedSec>{children}</SkewedSec>
          </div>
        ) : (
          <div className={styles.content}>{children}</div>
        )}
      </div>
    </>
  );
}
