import styles from "./infoboxsec.module.css";
import Infoboxes from "../infoboxes/infoboxes.jsx";
import InfoboxItem from "../infoboxItem/infoboxItem.jsx";
import Line from "../line/line.jsx";

export default function infoboxsec({ title }) {
  return (
    <>
      <div className={styles.infoboxsec}>
        <div className="container">
          <div className={styles.content}>
            <Line>Titel</Line>
            <Infoboxes>
              <InfoboxItem
                obj={{
                  title: "Hej med dig",
                  content:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto eius atque, asperiores alias dignissimos odit animi facilis adipisci mollitia, tempora ab, odio expedita ducimus aliquid optio et voluptatibus ipsum quisquam ratione! Fugit accusamus omnis cupiditate aliquid dignissimos eveniet dolorem, dolorum autem voluptates corrupti laboriosam facilis, fuga deserunt, quibusdam quidem?",
                }}
              />
              <InfoboxItem
                obj={{
                  title: "Hej med dig",
                  content:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto eius atque, asperiores alias dignissimos odit animi facilis adipisci mollitia, tempora ab, odio expedita ducimus aliquid optio et voluptatibus ipsum quisquam ratione! Fugit accusamus omnis cupiditate aliquid dignissimos eveniet dolorem, dolorum autem voluptates corrupti laboriosam facilis, fuga deserunt, quibusdam quidem?",
                }}
              />
              <InfoboxItem
                obj={{
                  title: "Hej med dig",
                  content:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto eius atque, asperiores alias dignissimos odit animi facilis adipisci mollitia, tempora ab, odio expedita ducimus aliquid optio et voluptatibus ipsum quisquam ratione! Fugit accusamus omnis cupiditate aliquid dignissimos eveniet dolorem, dolorum autem voluptates corrupti laboriosam facilis, fuga deserunt, quibusdam quidem?",
                }}
              />
              <InfoboxItem
                obj={{
                  title: "Hej med dig",
                  content:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error architecto eius atque, asperiores alias dignissimos odit animi facilis adipisci mollitia, tempora ab, odio expedita ducimus aliquid optio et voluptatibus ipsum quisquam ratione! Fugit accusamus omnis cupiditate aliquid dignissimos eveniet dolorem, dolorum autem voluptates corrupti laboriosam facilis, fuga deserunt, quibusdam quidem?",
                }}
              />
            </Infoboxes>
          </div>
        </div>
      </div>
    </>
  );
}
