import styles from "./quickBtn.module.css";

export default function quickBtn({ children, href }) {
  return (
    <>
      <a className={styles.a} href={href}>
        <button className={styles.btn}>{children}</button>
      </a>
    </>
  );
}
