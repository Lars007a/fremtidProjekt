import styles from "./navbar.module.css";
import { useRef, useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

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
              <h2>Fremtiden</h2>
            </div>
            <ul onClick={handleNavTurn}>
              <li>
                <HashLink to="/web#overblik">Hvordan virker og bruges</HashLink>
              </li>
              <li>
                <HashLink to="/web#social">Sociale medier</HashLink>
              </li>
              <li>
                <HashLink to="/web#udfordringer">Udfordringer</HashLink>
              </li>
              <li>
                <HashLink to="/web#personalisering">Personalisering</HashLink>
              </li>
              <li>
                <HashLink to="/web#soegemaskiner">Søgemaskiner</HashLink>
              </li>
              <li>
                <a href="#pdf">
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
