import styles from "./quickBtn.module.css";
import { HashLink } from "react-router-hash-link";

export default function quickBtn({ children, href }) {
  return (
    <>
      <HashLink className={styles.a} to={href}>
        <button className={styles.btn}>{children}</button>
      </HashLink>
    </>
  );
}
