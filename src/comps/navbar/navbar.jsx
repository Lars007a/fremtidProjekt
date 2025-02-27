import styles from "./navbar.module.css";
import { useRef, useState, useEffect } from "react";

export default function navbar() {
  const nav = useRef();
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scroll");

      if (window.scrollY >= 100) {
        setShowing(true);
      } else {
        setShowing(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav ref={nav} className={`${showing ? styles.showColors : ""}`}>
        <div className="container">
          <div className={styles.navCon}>
            <div class={styles.logo}>
              <h2>Logo</h2>
            </div>
            <ul>
              <li>
                <a href="#">sec1</a>
              </li>
              <li>
                <a href="#">sec2</a>
              </li>
              <li>
                <a href="#">sec3</a>
              </li>
              <li>
                <a href="#">sec4</a>
              </li>
              <li>
                <a href="#">sec5</a>
              </li>
              <li>
                <a href="#">
                  <button>Se PDF</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
