import styles from "./cardssec.module.css";
import Card from "../card/card.jsx";

export default function cardssec() {
  return (
    <>
      <div className={styles.cardssec}>
        <div className="container">
          <div className={styles.title}>
            <h2>Title</h2>
          </div>
          <div className={styles.content}>
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
          </div>
        </div>
      </div>
    </>
  );
}
