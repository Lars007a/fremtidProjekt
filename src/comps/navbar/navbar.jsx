import styles from "./navbar.module.css";
import { useRef, useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

export default function navbar() {
  const nav = useRef();
  const [showing, setShowing] = useState(false);

  const [showMobile, setShowMobile] = useState(false);

  const handleNavTurn = () => {
    if (showMobile) {
      setShowMobile(false);
    } else {
      setShowMobile(true);
    }
  };

  useEffect(() => {
    setShowMobile(false);

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
      <nav
        ref={nav}
        className={`${showing ? styles.showColors : ""} ${
          showMobile ? styles.mobile : ""
        }`}
      >
        <div className="container">
          <div className={styles.navCon}>
            <div class={styles.logo}>
              <h2>Logo</h2>
            </div>
            <ul onClick={handleNavTurn}>
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
            <div className={styles.hamburgerCon} onClick={handleNavTurn}>
              {showMobile ? <GrClose /> : <GiHamburgerMenu />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
