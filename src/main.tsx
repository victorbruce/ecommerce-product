import React from "react";
import ReactDOM from "react-dom/client";
import { CartContextProvider } from "./context/CartContext.tsx";
import { CountContextProvider } from "./context/CountContext.tsx";
import App from "./App.tsx";
import AppLayout from "./layout/AppLayout.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartContextProvider>
      <CountContextProvider>
      <AppLayout>
        <App />
      </AppLayout>
      </CountContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
