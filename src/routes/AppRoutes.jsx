import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import SymptomChecker from "../pages/SymptomChecker";
import MedicineReminder from "../pages/MedicineReminder";
import ReportSummarizer from "../pages/ReportSummarizer";
import VoiceAssistant from "../pages/VoiceAssistant";
import Profile from "../pages/Profile";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/symptoms" element={<SymptomChecker />} />

      <Route path="/medicines" element={<MedicineReminder />} />

      <Route path="/reports" element={<ReportSummarizer />} />

      <Route path="/voice" element={<VoiceAssistant />} />

      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default AppRoutes;