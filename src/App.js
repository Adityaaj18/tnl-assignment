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
import AdvertiserManagement from "./components/advertiser/advertiserManagement";
import AdvertiserProfile from "./components/advertiser/profile";
import TermsOfUse from "./legal/termsOfUse";
import PrivacyPolicy from "./legal/privacyPolicy";
import AdvertisingPolicy from "./legal/advertisingPolicy";
import DirectAdvertiserTerms from "./legal/directAdvertiserTerms";
import PlatformTerms from "./legal/platformTerms";

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
            <Route path="/ad/profile" element={<AdvertiserProfile />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/mycampaigns" element={<MyCampaigns />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/main2" element={<Main2 />} />
            <Route path="/setup" element={<CampaignSetup />} />
            <Route path="/analytics2" element={<Analytics2 />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route
              path="/adAccount-management"
              element={<AdvertiserManagement />}
            />
            <Route path="/create-ad-account" element={<CreateAdAccount />} />

            {/* legal pages */}

            <Route path="/legal/terms-of-use" element={<TermsOfUse />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/legal/advertising-policy"
              element={<AdvertisingPolicy />}
            />
            <Route
              path="/legal/direct-advertiser-terms"
              element={<DirectAdvertiserTerms />}
            />
            <Route path="/legal/platform-terms" element={<PlatformTerms />} />
          </Routes>
        </Router>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
