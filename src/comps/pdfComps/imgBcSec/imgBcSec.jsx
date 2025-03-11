import styles from "./imgBcSec.module.css";

export default function imgBcSec({ title }) {
  return (
    <>
      <section className={styles.sec}>
        <h2>{title}</h2>
      </section>
    </>
  );
}
