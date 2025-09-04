import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PMInternshipLanding from "./components/PMInternshipLanding";
import AboutPage from "./components/AboutPage";
import EligibilityPage from "./components/EligibilityPage";
import ApplicationPage from "./components/ApplicationPage";
import ProgramsPage from "./components/ProgramsPage";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<PMInternshipLanding />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/eligibility" element={<EligibilityPage />} />
            <Route path="/application" element={<ApplicationPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;