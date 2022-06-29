//import useState hook to create menu collapse state
import React, { useState } from 'react'

//import react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar'

//import icons from react icons

import { FiLogOut } from 'react-icons/fi'

import {
   AiOutlineHome,
   AiOutlineSetting,
   AiOutlineQuestionCircle
} from 'react-icons/ai'
import { MdInsertChartOutlined } from 'react-icons/md'
import { CgNotes } from 'react-icons/cg'
import { FaUsersCog } from 'react-icons/fa'
import 'react-pro-sidebar/dist/css/styles.css'
import './sidebar.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = ({ menuCollapse }) => {
   const navigate = useNavigate()
   return (
      <>
         <div id="header">
            <ProSidebar collapsed={menuCollapse}>
               <SidebarContent>
                  <Menu>
                     <MenuItem
                        className="menu-item"
                        icon={<AiOutlineHome className="sidebar-icon active" />}
                        onClick={() => {
                           navigate('/home')
                        }}
                     >
                        <span className="menu-item-title">Home</span>
                     </MenuItem>

                     <MenuItem
                        className="menu-item"
                        icon={
                           <MdInsertChartOutlined className="sidebar-icon" />
                        }
                        onClick={() => {
                           navigate('/analytics')
                        }}
                     >
                        <span className="menu-item-title">Analytics</span>
                     </MenuItem>

                     <MenuItem
                        className="menu-item"
                        icon={<CgNotes className="sidebar-icon" />}
                        onClick={() => {
                           navigate('/campaigns')
                        }}
                     >
                        <span className="menu-item-title">My Campaigns</span>
                     </MenuItem>

                     <MenuItem
                        className="menu-item"
                        icon={<FaUsersCog className="sidebar-icon" />}
                        onClick={() => {
                           navigate('/profile')
                        }}
                     >
                        <span className="menu-item-title">Profile</span>
                     </MenuItem>

                     <MenuItem
                        className="menu-item"
                        icon={<AiOutlineSetting className="sidebar-icon" />}
                     >
                        <span className="menu-item-title">Settings</span>
                     </MenuItem>
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
