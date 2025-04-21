import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/navbar";
import HomePage from "./Components/HomePage";
import "./index.css";
import Register from "./Components/UserLogin/Register";
import Login from "./Components/UserLogin/Login";
import Dashboard from "./Components/UserLogin/dashboard";
import FooterPage from "./Components/footer";
import AppleStore from "./Components/store";
import MacProducts from "./Pages/macPage";
import IPadPage from "./Pages/iPadPage";
import IPhonePage from "./Pages/iPhonePage";
import WatchPage from "./Pages/watchPage";
import AirPodsPage from "./Pages/AirPodsPage";
import EntertainmentPage from "./Pages/EntertainmentPage";
import AccesseriesPage from "./Pages/AccesseriesPage";
import HomeTv from "./Pages/Home&Tv";
import Home from "./Components/UserLogin/Home";
function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  const location = useLocation();
  const hideHeaderFooter = ['/register', '/login', '/dashboard'].includes(location.pathname);

  return (
    <div className="App">
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/store" element={<AppleStore />} />
        <Route path="/mac" element={<MacProducts />} />
        <Route path="/iPad" element={<IPadPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/iPhone" element={<IPhonePage />} />
        <Route path="/airPods" element={<AirPodsPage />} />
        <Route path="/home&tv" element={<HomeTv />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/Accessories" element={<AccesseriesPage />} />
      </Routes>
      {!hideHeaderFooter && <FooterPage />}
    </div>
  );
}

export default App;