import styles from "./text.module.css";

export default function text({ children, small }) {
  return (
    <>
      <div className={styles.text}>
        <p className={`${small ? styles.small : ""}`}>{children}</p>
      </div>
    </>
  );
}
