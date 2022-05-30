import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/home/Header'
import Sidebar from './components/home/sidebar/Sidebar'
import Main from './components/home/Main'
import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'
import Campaigns from './components/Campaigns'
import Analytics from './components/Analytics'
import CampaignData from './components/CampaignData'

function App() {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/register" element={<Register />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/campaigns" element={<CampaignData />} />
               <Route path="/analytics" element={<Analytics />} />
            </Routes>
         </Router>
      </div>
   )
}

export default App
