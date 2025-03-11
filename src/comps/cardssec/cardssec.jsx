import styles from "./cardssec.module.css";
import Card from "../card/card.jsx";
import { scroll, motion } from "motion/react";
import Line from "../line/line.jsx";

export default function cardssec() {
  return (
    <>
      <div className={styles.cardssec}>
        <div className="container">
          <div className={styles.title}>
            <Line>Title</Line>
          </div>
          <motion.div
            className={styles.content}
            initial={{ x: "-1000px" }}
            whileInView={{ x: "0%" }}
            transition={{ type: "spring", duration: 2 }}
            viewport={{ once: true }}
          >
            <div className={styles.grid}>
              <Card
                content={{
                  title: "Hej",
                  text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla",
                }}
              />
              <Card
                content={{
                  title: "Hej",
                  text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla",
                }}
              />
              <Card
                content={{
                  title: "Hej",
                  text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla",
                }}
              />
              <Card
                content={{
                  title: "Hej",
                  text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla",
                }}
              />
            </div>
            <Card
              content={{
                title: "Hej",
                text: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla",
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
