import "./reset.css";
import "./global.css";
import { render } from "react-dom";
import { App } from "./App";
import * as styles from "./Box/Backgrounds.css";

const root = document.createElement("div");
document.body.appendChild(root);

render(
  <div style={{ display: "flex" }}>
    <div className={styles.defaultDark} style={{ flex: 1 }}>
      <App />
    </div>

    <div className={styles.defaultLight} style={{ flex: 1 }}>
      <App />
    </div>
  </div>,
  root
);
