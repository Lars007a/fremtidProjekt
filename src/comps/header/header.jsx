import styles from "./header.module.css";

export default function header({ btnText, btnHref }) {
  return (
    <>
      <header>
        <video autoPlay muted loop>
          <source src="/bc.mp4" type="video/mp4" />
        </video>
        <div class={styles.headerText}>
          <h1>AI genereret indhold på internettet</h1>
          <p>
            Kunstig intelligens skaber i dag tekster, billeder, videoer og endda
            musik. Hvordan påvirker det vores digitale verden – og hvad bringer
            fremtiden?
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
