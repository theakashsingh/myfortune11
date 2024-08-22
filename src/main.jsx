import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollProvider } from "./pages/scrollContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollProvider>
        <Routes>
          <Route path="/*" element={<App/>} />
        </Routes>
      </ScrollProvider>
    </BrowserRouter>
  </StrictMode>
);
