import styles from "./header.module.css";
import vid from "/bc.mp4";

export default function header({ btnText, btnHref }) {
  return (
    <>
      <header>
        <video autoPlay muted loop>
          <source src="/bc.mp4" type="video/mp4" />
        </video>
        <div class={styles.headerText}>
          <h1>Fremtiden og AI genereret indhold på internettet</h1>
          <p>
            Kunstig intelligens skaber i dag tekster, billeder, videoer og endda
            musik. Hvordan ville det påvirke vores digitale verden?
          </p>
          <div className={styles.btnCon}>
            <a href={btnHref}>
              <button>{btnText}</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
