import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/app/App.jsx";
import "../src/style/style.css";

createRoot(document.getElementById("root")).render(<App />);
