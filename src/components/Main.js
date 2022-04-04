import React, { useState } from 'react'

import Modal1 from './Modals/Modal1'
import Modal2 from './Modals/Modal2'

const Main = () => {
   const [show, setShow] = useState(false)
   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

   console.log(show)

   const [show1, setShow1] = useState(false)
   const handleClose1 = () => setShow1(false)
   const handleShow1 = () => setShow1(true)
   return (
      <div
         className=""
         style={{
            textAlign: 'center',
            marginTop: '40px',
            marginBottom: '28px',
            marginLeft: '80px',
            padding: '0px 25px'
         }}
      >
         <h1 style={{ marginBottom: '13px', fontWeight: '700' }}>
            Welcome Back! Lets's catch up to speed!
         </h1>
         <p
            style={{ color: '#828282', fontSize: '24px', marginBottom: '32px' }}
         >
            Tip: Did you know the support team is online 24/7 to help you out?
         </p>

         <div className="">
            <div className="campaign-wallet row g-4 ">
               <div className="col-lg-6 ">
                  <div className="campaign-wallet-card  ">
                     <div
                        className="campaign-wallet-card-wrapper"
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between'
                        }}
                     >
                        <div style={{ display: 'flex' }}>
                           <div
                              style={{
                                 width: '28px',
                                 height: '34px',
                                 backgroundColor: '#56ccf2'
                              }}
                           ></div>
                           <div
                              style={{
                                 padding: ' 5px 10px'
                              }}
                           >
                              <h4
                                 style={{
                                    fontWeight: '700',
                                    padding: ' 0px 10px'
                                 }}
                              >
                                 Campaigns
                              </h4>
                              <div
                                 style={{
                                    borderBottom: '3px solid #56ccf2',
                                    borderRadius: '10px'
                                 }}
                              ></div>
                           </div>
                        </div>
                        <div style={{ padding: '10px 20px 10px 10px' }}>
                           <a className="view-more">View More</a>
                        </div>
                     </div>
                     <div className="dots-wrapper">
                        <div className="dots">
                           <div style={{ display: 'flex', gap: '7px' }}>
                              <div
                                 className="dot"
                                 style={{ backgroundColor: '#27AE60' }}
                              ></div>
                              <span>Ongoing</span>
                           </div>
                           <span style={{ fontWeight: '700' }}>3</span>
                        </div>
                        <div className="dots">
                           <div style={{ display: 'flex', gap: '7px' }}>
                              <div
                                 className="dot"
                                 style={{ backgroundColor: '#2F80ED' }}
                              ></div>
                              <span>Available</span>
                           </div>
                           <span style={{ fontWeight: '700' }}>110</span>
                        </div>
                        <div className="dots">
                           <div style={{ display: 'flex', gap: '7px' }}>
                              <div
                                 className="dot"
                                 style={{ backgroundColor: '#F2C94C' }}
                              ></div>
                              <span>Participated</span>
                           </div>
                           <span style={{ fontWeight: '700' }}>17</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className=" col-lg-6">
                  <div className="campaign-wallet-card  ">
                     <div
                        className="campaign-wallet-card-wrapper"
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between'
                        }}
                     >
                        <div style={{ display: 'flex' }}>
                           <div
                              style={{
                                 width: '28px',
                                 height: '34px',
                                 backgroundColor: '#9B51E0'
                              }}
                           ></div>
                           <div
                              style={{
                                 padding: ' 5px 10px'
                              }}
                           >
                              <h4
                                 style={{
                                    fontWeight: '700',
                                    padding: ' 0px 10px'
                                 }}
                              >
                                 Wallets
                              </h4>
                              <div
                                 style={{
                                    borderBottom: '3px solid #9B51E0',
                                    borderRadius: '10px'
                                 }}
                              ></div>
                           </div>
                        </div>
                        <div style={{ padding: '10px 20px 10px 10px' }}>
                           <a className="view-more">View More</a>
                        </div>
                     </div>
                     <div className="dots-wrapper">
                        <div className="dots">
                           <div style={{ display: 'flex', gap: '7px' }}>
                              <div
                                 className="dot"
                                 style={{ backgroundColor: '#56CCF2' }}
                              ></div>
                              <span>Balance</span>
                           </div>
                           <span style={{ fontWeight: '700' }}>₹360.83</span>
                        </div>
                        <div className="dots">
                           <div style={{ display: 'flex', gap: '7px' }}>
                              <div
                                 className="dot"
                                 style={{ backgroundColor: '#BB6BD9' }}
                              ></div>
                              <span>Last Stream</span>
                           </div>
                           <span style={{ fontWeight: '700' }}>₹12.11</span>
                        </div>
                        <div className="dots">
                           <div style={{ display: 'flex', gap: '7px' }}>
                              <div
                                 className="dot"
                                 style={{ backgroundColor: '#333333' }}
                              ></div>
                              <span>Total Earned</span>
                           </div>
                           <span style={{ fontWeight: '700' }}>₹1198.55</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="cards">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <div style={{ marginBottom: '28px' }}>
                  <span
                     style={{
                        fontSize: '24px',
                        fontWeight: '700'
                     }}
                  >
                     Campaigns you might like
                     <div
                        style={{
                           borderBottom: '3px solid #962E40',
                           borderRadius: '10px',
                           paddingTop: '4px'
                        }}
                     ></div>
                  </span>
               </div>
               <div style={{ padding: '10px 0px 10px 10px' }}>
                  <a className="view-more">View More</a>
               </div>
            </div>
            <div className="cards-container ">
               <div className="row g-4" style={{ marginBottom: '50px' }}>
                  <div className="col-lg-8">
                     <div className="card-banner" onClick={handleShow}>
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
                                 style={{ fontSize: '36px', fontWeight: '700' }}
                              >
                                 ₹20
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="card-banner" onClick={handleShow1}>
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

               <Modal1
                  show={show}
                  handleClose={handleClose}
                  setShow1={setShow1}
               />
               <Modal2 show={show1} handleClose1={handleClose1} />

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
               </div>
            </div>
         </div>
      </div>
   )
}

export default Main
