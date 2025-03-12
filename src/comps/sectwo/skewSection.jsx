import styles from "./skewedSection.module.css";

export default function sectwo({ children }) {
  return (
    <>
      <section className={styles.box}>
        <div className="container">
          <div className={styles.contentBox}>{children}</div>
        </div>
      </section>
    </>
  );
}
