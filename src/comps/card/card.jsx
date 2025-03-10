import styles from "./card.module.css";
import { Link } from "react-router-dom";

export default function card({ content }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardCon}>
          <h3>{content?.title}</h3>

          <p>{content?.text}</p>
        </div>

        <div className={styles.btnCon}>
          <Link
            to={{
              pathname: "/pdf",
            }}
          >
            <button>Ting</button>
          </Link>
        </div>
      </div>
    </>
  );
}
