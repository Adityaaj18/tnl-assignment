//import useState hook to create menu collapse state
import React, { useEffect, useState } from 'react'

//import react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar'

//import icons from react icons

import { FiLogOut } from 'react-icons/fi'

import {
   AiOutlineHome,
   AiOutlineSetting,
   AiOutlineQuestionCircle,
   AiOutlineWallet,
   AiOutlinePlusCircle,
   AiOutlineProfile,
   AiOutlineUser
} from 'react-icons/ai'
import { MdInsertChartOutlined } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
import { FaUsersCog } from 'react-icons/fa'
import 'react-pro-sidebar/dist/css/styles.css'
import './sidebar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

console.log(window.location.pathname)

const baseURL = process.env.REACT_APP_URL;
const Sidebar = ({ menuCollapse }) => {
   const navigate = useNavigate()

   const [user, setUser] = useState();
   const token = JSON.parse(window.localStorage.getItem("token"));
   const config = {
      headers: { Authorization: `Token ${token}` },
   };
   useEffect(() => {
      async function fetchMyProfile() {
         const { data } = await axios.get(baseURL + "/users/user-info/", config);
         setUser(data);
         console.log(data, data.advertiser_type, "data in sidebar");
      }
      fetchMyProfile();
   }, []);

   return (
      <>
         <div id="header" className={menuCollapse ? 'zindex1 sidebar_' : 'zindex2 sidebar_'} >
            <ProSidebar collapsed={menuCollapse}>
               <SidebarContent >
                  <Menu>
                     <MenuItem
                        className="menu-item"
                        icon={<AiOutlineHome className="sidebar-icon" />}
                        onClick={() => {
                           navigate('/home')
                        }}
                        active={
                           window.location.pathname === '/home' ? true : false
                        }
                     >
                        <span className="menu-item-title">Home</span>
                     </MenuItem>

                     {
                        user && user.advertiser_type === 1 && (
                           <MenuItem
                              className="menu-item"
                              icon={<AiOutlinePlusCircle className="sidebar-icon" />}
                              onClick={() => {
                                 navigate('/create-ad-account')
                              }}
                              active={
                                 window.location.pathname === '/create-ad-account' ? true : false
                              }
                           >
                              <span className="menu-item-title">Ad Accounts</span>
                           </MenuItem>)

                     }

                     <MenuItem
                        className="menu-item"
                        icon={<CgNotes className="sidebar-icon" />}
                        onClick={() => {
                           navigate('/mycampaigns')
                        }}
                        active={
                           window.location.pathname === '/mycampaigns'
                              ? true
                              : false
                        }
                     >
                        <span className="menu-item-title">My Campaigns</span>
                     </MenuItem>

                     <MenuItem
                        className="menu-item"
                        icon={<AiOutlineWallet className="sidebar-icon" />}
                        onClick={() => {
                           navigate('/wallet')
                        }}
                        active={
                           window.location.pathname === '/wallet' ? true : false
                        }
                     >
                        <span className="menu-item-title">Wallet</span>
                     </MenuItem>

                     <MenuItem
                        className="menu-item"
                        icon={<AiOutlineUser className="sidebar-icon" />}
                        onClick={() => {
                           navigate('/profile')
                        }}
                        active={
                           window.location.pathname === '/profile'
                              ? true
                              : false
                        }
                     >
                        <span className="menu-item-title">Profile</span>
                     </MenuItem>







                     <MenuItem
                        className="menu-item"
                        icon={
                           <MdInsertChartOutlined className="sidebar-icon" />
                        }
                        onClick={() => {
                           navigate('/analytics')
                        }}
                        active={
                           window.location.pathname === '/analytics'
                              ? true
                              : false
                        }
                     >
                        <span className="menu-item-title">Analytics</span>
                     </MenuItem>







                     {/* <MenuItem
                        className="menu-item"
                        icon={<AiOutlineSetting className="sidebar-icon" />}
                     >
                        <span className="menu-item-title">Settings</span>
                     </MenuItem> */}
                     <MenuItem
                        className="menu-item"
                        icon={
                           <AiOutlineQuestionCircle className="sidebar-icon" />
                        }
                     >
                        <span className="menu-item-title">Help & Support</span>
                     </MenuItem>
                     <MenuItem
                        className="menu-item"
                        icon={<FiLogOut className="sidebar-icon" />}
                        onClick={() => {
                           window.localStorage.removeItem('authData')
                           window.localStorage.removeItem('token')
                           navigate('/')
                        }}
                     >
                        <span className="menu-item-title">Log Out</span>
                     </MenuItem>
                  </Menu>
               </SidebarContent>
            </ProSidebar>
         </div>
      </>
   )
}

export default Sidebar
