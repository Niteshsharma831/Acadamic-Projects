import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import HomePage from "./Components/HomePage";
import "./index.css";
import FooterPage from "./Components/footer";
import AppleStore from "./Components/store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="store" element={<AppleStore />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
