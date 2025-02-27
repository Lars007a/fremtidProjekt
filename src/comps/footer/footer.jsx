import styles from "./footer.module.css";

export default function footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div className={styles.fotCon}>
            <div class={styles.footerLogo}>
              <h2>Logo</h2>
            </div>

            <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
              <ul>
                <li>
                  <a href="#">sec1</a>
                </li>
                <li>
                  <a href="#">sec2</a>
                </li>
                <li>
                  <a href="#">sec3</a>
                </li>
                <li>
                  <a href="#">sec4</a>
                </li>
                <li>
                  <a href="#">sec5</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">sec1</a>
                </li>
                <li>
                  <a href="#">sec2</a>
                </li>
                <li>
                  <a href="#">sec3</a>
                </li>
                <li>
                  <a href="#">sec4</a>
                </li>
                <li>
                  <a href="#">sec5</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
