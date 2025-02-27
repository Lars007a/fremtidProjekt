import styles from "./header.module.css";

export default function header() {
  return (
    <>
      <header>
        <div class={styles.headerText}>
          <h1>Overskrift</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            aperiam.
          </p>
          <div className={styles.btnCon}>
            <button>Se mere!</button>
          </div>
        </div>
      </header>
    </>
  );
}
