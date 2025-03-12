import styles from "./card.module.css";
import { HashLink } from "react-router-hash-link";

export default function card({ content }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardCon}>
          <h3>{content?.title}</h3>

          <p>{content?.text}</p>
        </div>

        <div className={styles.btnCon}>
          <HashLink to={content?.href}>
            <button>Læs mere</button>
          </HashLink>
        </div>
      </div>
    </>
  );
}
