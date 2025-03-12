import styles from "./footer.module.css";
import CopyrightInfo from "../copyrightInfo/copyrightInfo.jsx";
import { HashLink } from "react-router-hash-link";

export default function footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div className={styles.fotCon}>
            <div class={styles.footerLogo}>
              <h2>Fremtiden</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
              <ul>
                <li className={styles.linksTitle}>Hjemmeside</li>
                <li>
                  <HashLink to="/web#overblik">
                    Hvordan virker og bruges
                  </HashLink>
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
              </ul>
              <ul>
                <li className={styles.linksTitle}>Dokument</li>
                <li>
                  <HashLink to="/pdf#overblik">
                    Hvordan virker og bruges
                  </HashLink>
                </li>
                <li>
                  <HashLink to="/pdf#social">Sociale medier</HashLink>
                </li>
                <li>
                  <HashLink to="/pdf#udfordringer">Udfordringer</HashLink>
                </li>
                <li>
                  <HashLink to="/pdf#personalisering">Personalisering</HashLink>
                </li>
                <li>
                  <HashLink to="/pdf#soegemaskiner">Søgemaskiner</HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <CopyrightInfo />
      </footer>
    </>
  );
}
