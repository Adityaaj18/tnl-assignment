import React, { useState, useEffect, useContext } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import axios from 'axios'
import { TokenContext } from '../context/TokenContext'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
import { RiTimerLine } from 'react-icons/ri'

import '../styles/wallet.css'

const Wallet = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
   const [isLoading, setIsLoading] = useState(true)
   var { token } = useContext(TokenContext)
   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div className="main-content">
            <div className="wallet-balance">
               <h1>₹35</h1>
               <p>Your StreamPala Account Balance </p>
            </div>
            <div className="your-earnings-summary">
               <div className="row gx-5 gy-4">
                  <div className="col-lg-6">
                     <div>
                        <div style={{ padding: '15px 0px' }}>
                           <div style={{ display: 'flex' }}>
                              <h5 style={{ fontWeight: '700' }}>
                                 Your Earnings Summary
                              </h5>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div style={{ borderBottom: '1px solid #9B51E0' }}>
                        <div
                           style={{
                              fontSize: '20px',
                              padding: '15px 30px',
                              display: 'flex',
                              color: '#9B51E0',
                              justifyContent: 'space-between'
                           }}
                        >
                           <div style={{ display: 'flex' }}>
                              <RiTimerLine
                                 style={{
                                    marginTop: '5px',
                                    marginRight: '10px',
                                    fontSize: '25px'
                                 }}
                              />
                              <p style={{ margin: '0px' }}>All Time</p>
                           </div>
                           <FiChevronDown
                              style={{
                                 fontSize: '25px',
                                 marginTop: '5px'
                              }}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="row gy-4">
                     <div className="col-lg-3">
                        <div className="earnings-summary-card">
                           <div
                              style={{
                                 textAlign: 'center'
                              }}
                           >
                              <p>####</p>
                              <p>Views</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3">
                        <div className="earnings-summary-card">
                           <div
                              style={{
                                 textAlign: 'center'
                              }}
                           >
                              <p>####</p>
                              <p>Streams</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3">
                        <div className="earnings-summary-card">
                           <div
                              style={{
                                 textAlign: 'center'
                              }}
                           >
                              <p>####</p>
                              <p>Clicks</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3">
                        <div className="earnings-summary-card">
                           <div
                              style={{
                                 textAlign: 'center'
                              }}
                           >
                              <p>####</p>
                              <p>Spends</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', padding: '40px ' }}>
                  <a href="#">Analyze your performance >> </a>
               </div>
               <div className="passbook-container">
                  <h5 style={{ fontWeight: '700' }}>
                     Your StramPala Wallet Passbook
                  </h5>
                  <div className="passbook-card">
                     <div>
                        <div style={{ display: 'flex' }}>
                           <img
                              src={require('../img/profile-bg.png')}
                              alt=""
                              className="passbook-pic"
                              style={{}}
                           />
                           <div>
                              {' '}
                              <h6
                                 style={{ fontSize: '16px', fontWeight: '700' }}
                              >
                                 Campaign name in long format
                              </h6>
                              <span>04.09.2021</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <h1 style={{ fontSize: '36px', fontWeight: '700' }}>
                           +₹20
                        </h1>
                        <p style={{ fontSize: '16px', marginBottom: '0px' }}>
                           Closing balance: ₹15
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Wallet
