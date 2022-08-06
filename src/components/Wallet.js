import React, { useState, useEffect, useContext } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import axios from 'axios'
import { TokenContext } from '../context/TokenContext'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
import { RiTimerLine } from 'react-icons/ri'

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
         <div
            style={{
               marginLeft: '60px',
               padding: '35px 25px',
               background: '#f2e9fa',
               marginTop: '68px',
               borderTopLeftRadius: '50px',
               height: '100vh'
            }}
         >
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
               <h1
                  style={{
                     fontSize: '60px',
                     fontWeight: '600',
                     color: '#9B51E0'
                  }}
               >
                  ₹35
               </h1>
               <p
                  style={{
                     color: '#962E40',
                     fontSize: '24px',
                     fontWeight: '600'
                  }}
               >
                  Your StreamPala Account Balance{' '}
               </p>
            </div>
            <div style={{ padding: '20px' }}>
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
                     <div
                        className="row gy-2 gx-4"
                        style={{ marginTop: '20px' }}
                     >
                        <div className="col-lg-6">
                           <div
                              style={{
                                 backgroundColor: '#fff',
                                 borderRadius: '35px',
                                 padding: '20px'
                              }}
                           >
                              <div
                                 style={{
                                    textAlign: 'center'
                                 }}
                              >
                                 <p
                                    style={{
                                       margin: '0px',
                                       fontSize: '30px',
                                       color: '#962E40',
                                       fontWeight: 'bold'
                                    }}
                                 >
                                    ####
                                 </p>
                                 <p
                                    style={{
                                       margin: '0px',
                                       fontSize: '18px',
                                       color: '#6F6F6F'
                                    }}
                                 >
                                    Views
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div
                              style={{
                                 backgroundColor: '#fff',
                                 borderRadius: '35px',
                                 padding: '20px'
                              }}
                           >
                              <div
                                 style={{
                                    textAlign: 'center'
                                 }}
                              >
                                 <p
                                    style={{
                                       margin: '0px',
                                       fontSize: '30px',
                                       color: '#962E40',
                                       fontWeight: 'bold'
                                    }}
                                 >
                                    ####
                                 </p>
                                 <p
                                    style={{
                                       margin: '0px',
                                       fontSize: '18px',
                                       color: '#6F6F6F'
                                    }}
                                 >
                                    Streams
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div>
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
                     <div
                        className="row gy-2 gx-4"
                        style={{ marginTop: '20px' }}
                     >
                        <div className="col-lg-6">
                           <div
                              style={{
                                 backgroundColor: '#fff',
                                 borderRadius: '35px',
                                 padding: '20px'
                              }}
                           >
                              <div
                                 style={{
                                    textAlign: 'center'
                                 }}
                              >
                                 <p
                                    style={{
                                       margin: '0px',
                                       fontSize: '30px',
                                       color: '#962E40',
                                       fontWeight: 'bold'
                                    }}
                                 >
                                    ####
                                 </p>
                                 <p
                                    style={{
                                       margin: '0px',
                                       fontSize: '18px',
                                       color: '#6F6F6F'
                                    }}
                                 >
                                    Clicks
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div
                              style={{
                                 backgroundColor: '#fff',
                                 borderRadius: '35px',
                                 padding: '20px'
                              }}
                           >
                              <div
                                 style={{
                                    textAlign: 'center'
                                 }}
                              >
                                 <p
                                    style={{
                                       margin: '0px',
                                       fontSize: '30px',
                                       color: '#962E40',
                                       fontWeight: 'bold'
                                    }}
                                 >
                                    ####
                                 </p>
                                 <p
                                    style={{
                                       margin: '0px',
                                       fontSize: '18px',
                                       color: '#6F6F6F'
                                    }}
                                 >
                                    Spends
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div style={{ textAlign: 'center', padding: '40px ' }}>
                  <a href="#">Analyze your performance >></a>
               </div>
               <div>
                  <h5 style={{ fontWeight: '700' }}>
                     Your StramPala Wallet Passbook
                  </h5>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Wallet
