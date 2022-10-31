import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/home/Header";
import Sidebar from "./components/home/sidebar/Sidebar";
import Main from "./components/home/Main";
import Home from "./components/Home";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Campaigns from "./components/Campaigns";
import Analytics from "./components/Analytics";
import Analytics2 from "./components/advertiser/Analytics2";
import CampaignData from "./components/CampaignData";
import Main2 from "./components/advertiser/Main2";
import CampaignSetup from "./components/CampaignSetup";
import Login from "./components/Login";
import MyCampaigns from "./components/MyCampaigns";
import { TokenContext } from "./context/TokenContext";
import Wallet from "./components/Wallet";
import SignUp from "./components/advertiser/SignUp";
import AdvertiserLogin from "./components/advertiser/login";
import CreateAdAccount from "./components/advertiser/adAccount";
import LandingPage from "./landingPage/home";

function App() {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const [token, setToken] = useState("");

  const [user, setUser] = useState();

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="App">
      <TokenContext.Provider value={{ token, setToken }}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/st/login" element={<Login />} />
            <Route path="/ad/login" element={<AdvertiserLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/mycampaigns" element={<MyCampaigns />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/main2" element={<Main2 />} />
            <Route path="/setup" element={<CampaignSetup />} />
            <Route path="/analytics2" element={<Analytics2 />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/create-ad-account" element={<CreateAdAccount />} />
          </Routes>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
