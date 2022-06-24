import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Modal1 from './Modals/Modal1'
import Modal2 from './Modals/Modal2'
import { NavLink, useNavigate } from 'react-router-dom'
import { GrGamepad } from 'react-icons/gr'
import { IoGameControllerOutline, IoWalletOutline } from 'react-icons/io5'

const baseURL = 'http://127.0.0.1:8000/api/users/'

const Main = ({ token }) => {
   const navigate = useNavigate()
   const [show, setShow] = useState(false)
   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

   const [users, setUsers] = useState()
   const [campaigns, setCampaigns] = useState([])

   console.log(show)

   const [show1, setShow1] = useState(false)
   const handleClose1 = () => setShow1(false)
   const handleShow1 = () => setShow1(true)

   // const data = {
   //    username: 'test@gmail.com',
   //    password: 12345
   // }

   const baseURL = process.env.REACT_APP_URL

   useEffect(() => {
      axios
         .get(baseURL, {
            headers: {
               // Authorization: `Token ${token}`
               Authorization: `Token ${process.env.REACT_APP_TOKEN}`
            }
         })
         .then((res) => {
            setUsers(res.data)
            // console.log(res.data)
         })
   }, [])

   useEffect(() => {
      axios
         .get('http://127.0.0.1:8000/api/campaigns/', {
            headers: {
               // Authorization: `Token ${token}`
               Authorization: `Token ${process.env.REACT_APP_TOKEN}`
            }
         })
         .then((res) => {
            setCampaigns(res.data)
            console.log(res.data)
         })
   }, [])

   return (
      <div
         className=""
         style={{
            marginLeft: '60px',
            padding: '35px 25px',
            background: '#f2e9fa',
            marginTop: '68px',
            borderTopLeftRadius: '50px'
         }}
      >
         <div className="welcome">
            <h1
               style={{
                  marginBottom: '5px',
                  fontWeight: '600',
                  fontSize: '24px',
                  color: '#962E40'
               }}
            >
               Welcome Back! Lets's catch up to speed!
            </h1>

            <p
               style={{
                  fontSize: '16px',

                  color: '#9B51E0'
               }}
            >
               Tip: Did you know the support team is online 24/7 to help you
               out?
            </p>
         </div>

         <div className="" style={{ marginTop: '60px' }}>
            <div className="campaign-wallet row gx-4 gy-5">
               <div className="col-lg-6 ">
                  <div className="campaign-wallet-card  ">
                     <div
                        className="campaign-wallet-card-wrapper"
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between'
                        }}
                     >
                        <div
                           style={{
                              padding: ' 5px 10px'
                           }}
                        >
                           <IoGameControllerOutline
                              className="icon"
                              style={{ backgroundColor: '#56CCF2' }}
                           />
                           <h4
                              style={{
                                 fontWeight: '700',
                                 padding: '10px 0px 0px 35px'
                              }}
                           >
                              Campaigns
                           </h4>
                        </div>

                        <div style={{ padding: '10px 20px 10px 10px' }}>
                           <a
                              onClick={() => {
                                 console.log('new')
                              }}
                              className="view-more"
                           >
                              View More
                           </a>
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
                           <span style={{ fontWeight: '700' }}>
                              {campaigns.length}
                           </span>
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

               <div className="col-lg-6">
                  <div className="campaign-wallet-card  ">
                     <div
                        className="campaign-wallet-card-wrapper"
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between'
                        }}
                     >
                        <div
                           style={{
                              padding: ' 5px 10px'
                           }}
                        >
                           <IoWalletOutline
                              className="icon"
                              style={{ backgroundColor: '#9B51E0' }}
                           />
                           <h4
                              style={{
                                 fontWeight: '700',
                                 padding: '10px 0px 0px 35px'
                              }}
                           >
                              Wallets
                           </h4>
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
            <div
               className="you-might-like"
               style={{ display: 'flex', justifyContent: 'space-between' }}
            >
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
                  {campaigns.map((campaign) => (
                     <div key={campaign.id} className="col-lg-6">
                        <Link to="/register" className="link">
                           <div className="card-banner">
                              <div className="streampala">
                                 <div className="streampala-wrapper">
                                    <div style={{ textAlign: 'left' }}>
                                       <span style={{ fontSize: '24px' }}>
                                          {campaign.name}
                                       </span>
                                       <p style={{ fontSize: '12px' }}>
                                          Ut enim ad minim veniam, quis nostrud
                                          exerctation ullameo rlbaoee lorem
                                          ipsum dolore magna aliqu lorem ipsum
                                          dolor{' '}
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
                  ))}

                  {/* <div className="col-lg-4">
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
               </div>*/}
               </div>

               <Modal1
                  show={show}
                  handleClose={handleClose}
                  setShow1={setShow1}
               />
               <Modal2 show={show1} handleClose1={handleClose1} />

               {/* <div className="row g-4">
               <div className="col-lg-4">
                  <div className="card-banner"></div>
               </div>
               <div className="col-lg-4">
                  <div className="card-banner"></div>
               </div>
               <div className="col-lg-4">
                  <div className="card-banner"></div>
               </div>
            </div>*/}
            </div>
         </div>
      </div>
   )
}

export default Main
