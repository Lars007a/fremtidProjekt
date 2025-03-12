import { FaAngleDoubleDown } from "react-icons/fa";
import styles from "./scrollDownBtn.module.css";
import { HashLink } from "react-router-hash-link";

export default function scrollDownBtn({ btnText, icon, href }) {
  return (
    <>
      <HashLink to={href}>
        <button className={styles.btn}>
          {btnText} {icon}
        </button>
      </HashLink>
    </>
  );
}
