import styles from "./textsec.module.css";

export default function section({ children, contentObj }) {
  return (
    <>
      <section className={styles.sec}>
        <div className="container">
          <div className={styles.secContent}>
            <h2>{contentObj.title}</h2>
            <p>{contentObj.text}</p>
            {contentObj.sourceList ? contentObj.sourceList : ""}
            <div className={styles.childrenContainer}>{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
