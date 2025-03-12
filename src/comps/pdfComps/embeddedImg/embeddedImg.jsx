import styles from "./embeddedImg.module.css";

export default function embeddedImg({ img, children }) {
  return (
    <div className={styles.box}>
      <div className={styles.text}>{children}</div>
      <div className={styles.img}>
        <img src={img} alt="img" />
      </div>
    </div>
  );
}
