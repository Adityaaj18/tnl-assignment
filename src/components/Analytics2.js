import React, { useState } from 'react'
import Header from './home/Header'
import Main from './home/Main'
import Sidebar from './home/sidebar/Sidebar'
import { AiFillCaretDown, AiOutlineCalendar } from 'react-icons/ai'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
import { RiTimerLine } from 'react-icons/ri'

const Analytics2 = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

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
               height: '100%'
            }}
         >
            <div>
               <div className="welcome">
                  <div className="col-lg-7">
                     <h1
                        style={{
                           marginBottom: '5px',
                           fontWeight: '600',
                           fontSize: '24px',
                           color: '#962E40'
                        }}
                     >
                        Your last campaign generated{' '}
                        <span style={{ fontWeight: '700' }}>35%</span> more
                        clicks that the average StreamPala campaign!
                     </h1>
                  </div>
                  <img
                     src={require('../img/welcome-img.png')}
                     alt=""
                     style={{ width: '65px', height: '65px' }}
                  />
               </div>
               <div style={{ margin: '50px 20px' }}>
                  <h5 style={{ fontWeight: '700' }}>Overall Metrics</h5>
                  <div className="row gx-5 gy-4">
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
                                    <HiOutlineSpeakerphone
                                       style={{
                                          marginTop: '5px',
                                          marginRight: '10px',
                                          fontSize: '25px'
                                       }}
                                    />
                                    <p style={{ margin: '0px' }}>
                                       All Campaigns
                                    </p>
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
                  <div className="row gx-4 gy-2" style={{ marginTop: '20px' }}>
                     <div className="col-lg-6">
                        <div style={{ display: 'flex' }}>
                           <div
                              style={{
                                 width: '80px',
                                 height: '80px',
                                 backgroundColor: '#9B51E0',
                                 borderRadius: '50%',
                                 marginRight: '-20px',
                                 marginTop: '10px',
                                 zIndex: '5'
                              }}
                           ></div>
                           <div
                              style={{
                                 backgroundColor: '#fff',
                                 borderRadius: '35px',
                                 padding: '20px',
                                 width: '90%',
                                 zIndex: '1'
                              }}
                           >
                              <div
                                 style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '10px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: '20px',
                                       fontWeight: '700',
                                       marginBottom: '0px',
                                       marginTop: '5px'
                                    }}
                                 >
                                    Campaigns
                                 </p>
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
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        {' '}
                        <div style={{ display: 'flex' }}>
                           <div
                              style={{
                                 width: '80px',
                                 height: '80px',
                                 backgroundColor: '#9B51E0',
                                 borderRadius: '50%',
                                 marginRight: '-20px',
                                 marginTop: '10px',
                                 zIndex: '5'
                              }}
                           ></div>
                           <div
                              style={{
                                 backgroundColor: '#fff',
                                 borderRadius: '35px',
                                 padding: '20px',
                                 width: '90%',
                                 zIndex: '1'
                              }}
                           >
                              <div
                                 style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '10px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: '20px',
                                       fontWeight: '700',
                                       marginBottom: '0px',
                                       marginTop: '5px'
                                    }}
                                 >
                                    Creators
                                 </p>
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
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        {' '}
                        <div style={{ display: 'flex' }}>
                           <div
                              style={{
                                 width: '80px',
                                 height: '80px',
                                 backgroundColor: '#56CCF2',
                                 borderRadius: '50%',
                                 marginRight: '-20px',
                                 marginTop: '10px',
                                 zIndex: '5'
                              }}
                           ></div>
                           <div
                              style={{
                                 backgroundColor: '#fff',
                                 borderRadius: '35px',
                                 padding: '20px',
                                 width: '90%',
                                 zIndex: '1'
                              }}
                           >
                              <div
                                 style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '10px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: '20px',
                                       fontWeight: '700',
                                       marginBottom: '0px',
                                       marginTop: '5px'
                                    }}
                                 >
                                    Avg.CPC
                                 </p>
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
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        {' '}
                        <div style={{ display: 'flex' }}>
                           <div
                              style={{
                                 width: '80px',
                                 height: '80px',
                                 backgroundColor: '#56CCF2',
                                 borderRadius: '50%',
                                 marginRight: '-20px',
                                 marginTop: '10px',
                                 zIndex: '5'
                              }}
                           ></div>
                           <div
                              style={{
                                 backgroundColor: '#fff',
                                 borderRadius: '35px',
                                 padding: '20px',
                                 width: '90%',
                                 zIndex: '1'
                              }}
                           >
                              <div
                                 style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    padding: '10px'
                                 }}
                              >
                                 <p
                                    style={{
                                       fontSize: '20px',
                                       fontWeight: '700',
                                       marginBottom: '0px',
                                       marginTop: '5px'
                                    }}
                                 >
                                    CTR
                                 </p>
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
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row gx-5 gy-4" style={{ marginTop: '50px' }}>
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
                                    <HiOutlineSpeakerphone
                                       style={{
                                          marginTop: '5px',
                                          marginRight: '10px',
                                          fontSize: '25px'
                                       }}
                                    />
                                    <p style={{ margin: '0px' }}>
                                       All Campaigns
                                    </p>
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
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Analytics2
