import { FaAngleDoubleDown } from "react-icons/fa";
import styles from "./scrollDownBtn.module.css";

export default function scrollDownBtn() {
  return (
    <>
      <a href="#">
        <button className={styles.btn}>
          Se mere <FaAngleDoubleDown color="#ffffff" size={20} />
        </button>
      </a>
    </>
  );
}
