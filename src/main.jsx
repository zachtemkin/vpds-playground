import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./globalStyles.js";
import App from "./App.jsx";

// Import the styles:
import "@visa/nova-styles/styles.css";
// Import your desired theme:
import "@visa/nova-styles/themes/visa-light/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
