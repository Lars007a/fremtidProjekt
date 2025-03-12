import styles from "./infoboxes.module.css";
import InfoboxItem from "../infoboxItem/infoboxItem.jsx";
import { Children } from "react";
import { motion } from "motion/react";

export default function infoboxes({ children }) {
  return (
    <>
      <motion.div
        className={styles.boxes}
        initial={{ x: "-1000px" }}
        whileInView={{ x: "0%" }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
      >
        <ul>{children}</ul>
      </motion.div>
    </>
  );
}
