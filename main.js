import "./style.css";
import hello from "./some-ts.js";

document.querySelector("#app").innerHTML = `
  <h1>${hello} Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
