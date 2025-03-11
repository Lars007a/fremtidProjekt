import styles from "./text.module.css";

export default function text({ children }) {
  return (
    <>
      <div className={styles.text}>
        <p>{children}</p>
      </div>
    </>
  );
}
