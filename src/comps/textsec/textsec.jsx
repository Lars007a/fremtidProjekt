import styles from "./textsec.module.css";
import { motion } from "motion/react";

export default function section({ children, contentObj }) {
  return (
    <>
      <motion.section className={styles.sec}>
        <motion.div
          className="container"
          initial={{ x: "-1000px" }}
          whileInView={{ x: "0%" }}
          transition={{ type: "spring", duration: 2 }}
          viewport={{ once: true }}
        >
          <div className={styles.secContent}>
            <h2>{contentObj.title}</h2>
            <p>{contentObj.text}</p>
            {contentObj.sourceList ? contentObj.sourceList : ""}
            <div className={styles.childrenContainer}>{children}</div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
