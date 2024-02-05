import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AppLayout from "./layout/AppLayout.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppLayout>
      <App />
    </AppLayout>
  </React.StrictMode>
);
