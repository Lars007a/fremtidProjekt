import styles from "./Intro.module.css";

export default function section({ children, contentObj }) {
  return (
    <>
      <section className={styles.sec}>
        <div className="container">
          <div className={styles.secContent}>
            <h2>{contentObj.title}</h2>
            <p>{contentObj.text}</p>
            <div className={styles.childrenContainer}>{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
