import styles from "./cardssec.module.css";
import Card from "../card/card.jsx";
import { scroll, motion } from "motion/react";
import Line from "../line/line.jsx";
import { href } from "react-router-dom";

export default function cardssec() {
  return (
    <>
      <div className={styles.cardssec} id="cards">
        <div className="container">
          <div className={styles.title}>
            <Line>Emner i dokumentet</Line>
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
                  title:
                    "Hvordan AI genereret indhold virker og bruges på internettet",
                  text: "AI bruger algoritmer og data til at generere indhold. Eksempler: ChatGPT til tekst, DALL-E til billeder, deepfakes til videoer.",
                  href: "/pdf#overblik",
                }}
              />
              <Card
                content={{
                  title: "AI-genereret indhold og sociale medier",
                  text: "AI styrer, hvad vi ser på sociale medier, hvilket skaber personlige oplevelser men også risiko for echo chambers og polarisering.",
                  href: "/pdf#social",
                }}
              />
              <Card
                content={{
                  title: "Udfordringer med AI-genereret indhold på internettet",
                  text: "AI genereret indhold kan være med til at sprede misinformation gennem deepfakes. Løsninger inkluderer regulering, software og kildekritik.",
                  href: "/pdf#udfordringer",
                }}
              />
              <Card
                content={{
                  title: "Personalisering af indhold",
                  text: "AI tilpasser indhold til brugerens præferencer, hvilket øger engagement men det er også udfordringer associeret med dette.",
                  href: "/pdf#personalisering",
                }}
              />
            </div>
            <Card
              content={{
                title: "AI genereret indhold og Søgemaskiner",
                text: "AI kan erstatte traditionelle søgninger og måder at lave research på med direkte svar, hvilket kan føre til bias og svække kritisk tænkning.",
                href: "/pdf#soegemaskiner",
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
