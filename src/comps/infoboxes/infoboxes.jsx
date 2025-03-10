import styles from "./infoboxes.module.css";
import InfoboxItem from "../../../infoboxItem/infoboxItem.jsx";

export default function infoboxes() {
  return (
    <>
      <div className={styles.boxes}>
        <ul>
          <InfoboxItem />
          <InfoboxItem />
          <InfoboxItem />
          <InfoboxItem />
          <InfoboxItem />
          <InfoboxItem />
        </ul>
      </div>
    </>
  );
}
