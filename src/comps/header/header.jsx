import styles from "./header.module.css";
import vid from "../../../public/bc.mp4";
import { HashLink } from "react-router-hash-link";

export default function header({ btnText, btnHref }) {
  return (
    <>
      <header>
        <video autoPlay muted loop>
          <source src={vid} type="video/mp4" />
        </video>
        <div class={styles.headerText}>
          <h1>Fremtiden og AI genereret indhold på internettet</h1>
          <p>
            Kunstig intelligens skaber i dag tekster, billeder, videoer og endda
            musik. Hvordan ville det påvirke vores digitale verden?
          </p>
          <div className={styles.btnCon}>
            <HashLink href={btnHref} to={btnHref}>
              <button>{btnText}</button>
            </HashLink>
          </div>
        </div>
      </header>
    </>
  );
}
