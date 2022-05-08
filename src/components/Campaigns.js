import React, { useState } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import { Link } from 'react-router-dom'

const Campaigns = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div className="container">
            <p
               style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginTop: '100px',
                  marginBottom: '10px'
               }}
            >
               All Campaigns
            </p>
            <div
               style={{
                  borderBottom: '3px solid #962E40',
                  borderRadius: '10px',
                  width: '150px'
               }}
            ></div>
         </div>
         <div className="campaigns-container">
            <div className="cards-container" style={{ paddingTop: '50px' }}>
               <div className="row g-4" style={{ marginBottom: '50px' }}>
                  <div className="col-lg-8">
                     <Link to="/register" className="link">
                        <div className="card-banner">
                           <div className="streampala">
                              <div className="streampala-wrapper">
                                 <div style={{ textAlign: 'left' }}>
                                    <span style={{ fontSize: '24px' }}>
                                       Streampala
                                    </span>
                                    <p style={{ fontSize: '12px' }}>
                                       Ut enim ad minim veniam, quis nostrud
                                       exerctation ullameo rlbaoee lorem ipsum
                                       dolore magna aliqu lorem ipsum dolor{' '}
                                       <span style={{ fontWeight: '700' }}>
                                          Learn more
                                       </span>
                                    </p>
                                 </div>
                                 <span
                                    style={{
                                       fontSize: '36px',
                                       fontWeight: '700'
                                    }}
                                 >
                                    ₹20
                                 </span>
                              </div>
                           </div>
                        </div>
                     </Link>
                  </div>
                  <div className="col-lg-4">
                     <div className="card-banner">
                        <div className="streampala">
                           <div className="streampala-wrapper">
                              <div style={{ textAlign: 'left' }}>
                                 <span style={{ fontSize: '18px' }}>
                                    Streampala
                                 </span>
                                 <p style={{ fontSize: '12px' }}>
                                    Ut enim ad minim veniam, quis nostrud
                                    exerctation ullameo rlbaoee{' '}
                                    <span style={{ fontWeight: '700' }}>
                                       Learn more
                                    </span>
                                 </p>
                              </div>
                              <span
                                 style={{ fontSize: '36px', fontWeight: '700' }}
                              >
                                 ₹20
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="row g-4">
                  <div className="col-lg-4">
                     <div className="card-banner"></div>
                  </div>
                  <div className="col-lg-4">
                     <div className="card-banner"></div>
                  </div>
                  <div className="col-lg-4">
                     <div className="card-banner"></div>
                  </div>
                  <div className="col-lg-4">
                     <div className="card-banner"></div>
                  </div>
                  <div className="col-lg-4">
                     <div className="card-banner"></div>
                  </div>
                  <div className="col-lg-4">
                     <div className="card-banner"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Campaigns
