import styles from "./line.module.css";

export default function line({ children }) {
  return (
    <div className={styles.line}>
      <h2>{children}</h2>
    </div>
  );
}
