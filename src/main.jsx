import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollProvider } from "./pages/scrollContext.jsx";
import PrivacyPolicy from "./pages/privacyPolicy/index.jsx";
import TermsAndConditions from "./pages/terms&Conditions/index.jsx";
import Htp from "./pages/htp/index.jsx";
import Legality from "./pages/legality/index.jsx";
import FairPlay from "./pages/fairPlay/index.jsx";
import FantasyPointSystem from "./pages/fantasyPointSystem/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollProvider>
        <Routes>
          <Route path="/*" element={<App/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms&conditions" element={<TermsAndConditions/>} />
          <Route path="/how-to-play" element={<Htp/>} />
          <Route path="/legality" element={<Legality/>} />
          <Route path="/fair-play" element={<FairPlay/>} />
          <Route path="/fantasy-point-system" element={<FantasyPointSystem/>} />
        </Routes>
      </ScrollProvider>
    </BrowserRouter>
  </StrictMode>
);
