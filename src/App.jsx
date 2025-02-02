import { Route, Routes } from "react-router-dom";
import Index from "./components/layout/index.jsx";
import AIauditor from "./components/ComingSoon/AIauditor.jsx";
import PrivacyMixer from "./components/ComingSoon/PrivacyMixer.jsx";
import PitchDeck from "./components/ComingSoon/PitchDeck.jsx";
import AntiRugAI from "./components/ComingSoon/Anti-Rug-AI.jsx";
import AIDeveloperHub from "./components/ComingSoon/AI Developer-Hub.jsx";
import Knowlagebase from "./components/ComingSoon/Knowlage-base.jsx";
import Events from "./components/ComingSoon/Events.jsx";
import LeaderBoard from "./components/ComingSoon/LeaderBoard.jsx";
import Blog from "./components/ComingSoon/Blog.jsx";
import Documentation from "./components/ComingSoon/Documentation.jsx";
import MediaKit from "./components/ComingSoon/Media-Kit.jsx";
import AboutUs from "./components/ComingSoon/About-Us.jsx";
import Ecosystem from "./components/ComingSoon/Ecosystem.jsx";
import AiAuditorToken from "./components/ComingSoon/AiAuditor-Token.jsx";
import Dashboard from "./components/ComingSoon/Dashboard.jsx";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Auditor" element={<AIauditor />} />
        <Route path="/Privacy" element={<PrivacyMixer />} />
        {/* <Route path="/DEX" element={<PitchDeck />} /> */}
        <Route path="/Anti-Rug" element={<AntiRugAI />} />
        <Route path="/AI-Developer-Hub" element={<AIDeveloperHub />} />
        <Route path="/Knowlage" element={<Knowlagebase />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/LeaderBoard" element={<LeaderBoard />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Pitch-Deck" element={<PitchDeck />} />
        <Route path="/Media-Kit" element={<MediaKit />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Ecosystem" element={<Ecosystem />} />
        <Route path="/AiAuditor-Token" element={<AiAuditorToken />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
