import './App.css';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import Info from './Components/Info';
import Company from './Components/CompanyProfile';
import ReportBug from './Components/ReportBug';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="info" element={<Info />} />
        <Route path="company-profile" element={<Company />} />
        <Route path="report" element={<ReportBug />} />
      </Routes>
    </div>
  );
}

export default App;
