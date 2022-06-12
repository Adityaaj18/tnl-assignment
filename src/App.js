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
import Analytics2 from './components/Analytics2'
import CampaignData from './components/CampaignData'
import Main2 from './components/Main2'
import CampaignSetup from './components/CampaignSetup'
import Login from './components/Login'
import { UserAuthContextProvider } from './UserAuthContext'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   return (
      <div className="App">
         <Router>
            <UserAuthContextProvider>
               <Routes>
                  <Route path="/" element={<Login />} />
                  <Route
                     path="/home"
                     element={
                        <ProtectedRoute>
                           <Home />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/register"
                     element={
                        <ProtectedRoute>
                           <Register />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/profile"
                     element={
                        <ProtectedRoute>
                           <Profile />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/campaigns"
                     element={
                        <ProtectedRoute>
                           <Campaigns />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/analytics"
                     element={
                        <ProtectedRoute>
                           <Analytics />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/main2"
                     element={
                        <ProtectedRoute>
                           <Main2 />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/setup"
                     element={
                        <ProtectedRoute>
                           <CampaignSetup />
                        </ProtectedRoute>
                     }
                  />
                  <Route
                     path="/analytics2"
                     element={
                        <ProtectedRoute>
                           <Analytics2 />
                        </ProtectedRoute>
                     }
                  />
               </Routes>
            </UserAuthContextProvider>
         </Router>
      </div>
   )
}

export default App
