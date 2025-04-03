import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/navbar";
import "./index.css";
import FooterPage from "./Components/footer";
import AppleStore from "./Components/store";
import ChatBot from "./Pages/ChatBot";
import MacProducts from "./Pages/macPage";
import IPadPage from "./Pages/iPadPage";
import IPhonePage from "./Pages/iPhonePage";
import WatchPage from "./Pages/watchPage";
import AirPodsPage from "./Pages/AirPodsPage";
import EntertainmentPage from "./Pages/EntertainmentPage";
import AccesseriesPage from "./Pages/AccesseriesPage";
import HomeTv from "./Pages/Home&Tv";
import LoginForm from "./Components/loginPage";
import RegistrationForm from "./Components/registrationFrom";
import ProdcutApi from "./Pages/prodcutApi";
import AdminPanel from "./admin/dashboard";
import AdminLoginForm from "./admin/adminLogin";

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

function MainApp() {
  const location = useLocation();
  const adminLogin = location.pathname === "/adminLogin";
  const isDashboardPage = location.pathname === "/adminDashboard";

  return (
    <div className="App">
      {location.pathname !== "/" && !adminLogin && !isDashboardPage && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<ChatBot />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/newuser" element={<RegistrationForm />} />
        <Route path="/store" element={<AppleStore />} />
        <Route path="/mac" element={<MacProducts />} />
        <Route path="/iPad" element={<IPadPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/iPhone" element={<IPhonePage />} />
        <Route path="/airPods" element={<AirPodsPage />} />
        <Route path="/home&tv" element={<HomeTv />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/Accessories" element={<AccesseriesPage />} />
        <Route path="/ApiProducts" element={<ProdcutApi />} />
        <Route path="/adminLogin" element={<AdminLoginForm />} />
        <Route path="/adminDashboard" element={<AdminPanel />} />
      </Routes>
      {!isDashboardPage && location.pathname !== "/" && <FooterPage />}
    </div>
  );
}

export default App;
