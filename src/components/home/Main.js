import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Modal1 from './Modals/Modal1'
import Modal2 from './Modals/Modal2'
import { useNavigate } from 'react-router-dom'

import { IoGameControllerOutline, IoWalletOutline } from 'react-icons/io5'
import { TokenContext } from '../../context/TokenContext'

import Loading from '../Loading'

import '../../styles/main.css'

const baseURL = 'http://127.0.0.1:8000/api/users/'

const Main = () => {
   const navigate = useNavigate()
   const [show, setShow] = useState(false)
   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)
   const [isLoading, setIsLoading] = useState(true)

   const [user, setUser] = useState()
   const [campaigns, setCampaigns] = useState([])

   //console.log(show)

   const [show1, setShow1] = useState(false)
   const handleClose1 = () => setShow1(false)
   const handleShow1 = () => setShow1(true)

   //const { token } = useContext(TokenContext)
   //console.log(typeof token)

   const baseURL = 'http://127.0.0.1:8000/api'
   //f362e4e2c00387b6e6ec36fab14c175761644aa2

   const getToken = () =>
      localStorage.getItem('token')
         ? JSON.parse(localStorage.getItem('token'))
         : null

   const getAuthorizationHeader = () => `Token ${getToken()}`

   const axiosInstance = axios.create({
      baseURL,
      headers: { Authorization: getAuthorizationHeader() }
   })

   useEffect(() => {
      setIsLoading(true)

      const fetchData = async () => {
         try {
            const { data } = await axiosInstance.get('/users/current', {
               headers: {
                  Authorization: getAuthorizationHeader()
               }
            })
            console.log(data)
            setUser(data)
            // if (!data.role === 'Streamer') {
            //    navigate('/main2')
            // }
         } catch (err) {
            console.log(err)
         } finally {
            setIsLoading(false)

            // console.log(user)
         }
      }
      fetchData()
   }, [])

   // useEffect(() => {
   //    setIsLoading(true)

   //    const fetchData = async () => {
   //       try {
   //          const { data } = await axiosInstance.get(`/wallet/cf10cb3b`, {
   //             headers: {
   //                Authorization: getAuthorizationHeader()
   //             }
   //          })
   //          console.log(data)
   //          // setUser(data)
   //       } catch (err) {
   //          console.log(err)
   //       } finally {
   //          setIsLoading(false)

   //          // console.log(user)
   //       }
   //    }
   //    fetchData()
   // }, [])

   useEffect(() => {
      axiosInstance
         .get('/campaigns', {
            headers: {
               Authorization: getAuthorizationHeader()
            }
         })
         .then((response) => {
            console.log('camps', response.data)
            setCampaigns(response.data)
            // response.data.map((data) => {
            //    const a = new Date(data.start_date)
            //    const b = new Date(data.start_date)
            //    const diff = a.getTime() - b.getTime()
            //    console.log(diff)
            // })
         })
   }, [])

   return (
      <div className="main-content">
         {isLoading ? (
            <Loading />
         ) : (
            <div>
               <div className="welcome">
                  <div>
                     <h1>Welcome Back {user.name}!</h1>
                     <p>
                        Tip: Did you know the support team is online 24/7 to
                        help you out?
                     </p>
                  </div>
                  <img
                     src={require('../../img/welcome-img.png')}
                     alt=""
                     style={{ width: '60px', height: '60px' }}
                  />
               </div>

               <div className="" style={{ marginTop: '60px' }}>
                  <div className="campaign-wallet row gx-4 gy-5">
                     <div className="col-lg-6 ">
                        <div className="campaign-wallet-card  ">
                           <div className="campaign-wallet-card-wrapper">
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
                                       padding: '10px 0px 0px 20px',
                                       fontSize: '22px'
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
                                       padding: '10px 0px 0px 20px',
                                       fontSize: '22px'
                                    }}
                                 >
                                    Wallet
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
                                 <span style={{ fontWeight: '700' }}>
                                    ₹360.83
                                 </span>
                              </div>
                              <div className="dots">
                                 <div style={{ display: 'flex', gap: '7px' }}>
                                    <div
                                       className="dot"
                                       style={{ backgroundColor: '#BB6BD9' }}
                                    ></div>
                                    <span>Last Stream</span>
                                 </div>
                                 <span style={{ fontWeight: '700' }}>
                                    ₹12.11
                                 </span>
                              </div>
                              <div className="dots">
                                 <div style={{ display: 'flex', gap: '7px' }}>
                                    <div
                                       className="dot"
                                       style={{ backgroundColor: '#333333' }}
                                    ></div>
                                    <span>Total Earned</span>
                                 </div>
                                 <span style={{ fontWeight: '700' }}>
                                    ₹1198.55
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="cards">
                  <div
                     className="you-might-like"
                     style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                     }}
                  >
                     <div style={{ marginBottom: '28px' }}>
                        <span
                           style={{
                              fontSize: '24px',
                              fontWeight: '700'
                           }}
                        >
                           Campaigns Marketplace
                        </span>
                     </div>
                     <div style={{ padding: '10px 0px 10px 10px' }}>
                        <a
                           className="view-more"
                           onClick={() => navigate('/campaigns')}
                        >
                           View More
                        </a>
                     </div>
                  </div>
                  <div className="cards-container ">
                     <div className="row g-4" style={{ marginBottom: '50px' }}>
                        {campaigns.map((campaign) => (
                           <div key={campaign.id} className="col-lg-6">
                              <Link to="/register" className="link">
                                 <div className="card-banner">
                                    <div style={{ padding: '30px' }}>
                                       <span className="timer">
                                          Ends in: 45d 15h 12m
                                       </span>
                                    </div>
                                    <div style={{ paddingTop: '40px' }}>
                                       <div className="streampala">
                                          <div className="streampala-wrapper">
                                             <div style={{ textAlign: 'left' }}>
                                                <span
                                                   style={{ fontSize: '24px' }}
                                                >
                                                   {campaign.name}
                                                </span>
                                                <p style={{ fontSize: '12px' }}>
                                                   Ut enim ad minim veniam, quis
                                                   nostrud exerctation ullameo
                                                   rlbaoee lorem ipsum dolore
                                                   magna aliqu lorem ipsum dolor{' '}
                                                   <span
                                                      style={{
                                                         fontWeight: '700'
                                                      }}
                                                   >
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
                                 </div>
                              </Link>
                           </div>
                        ))}
                     </div>

                     <Modal1
                        show={show}
                        handleClose={handleClose}
                        setShow1={setShow1}
                     />
                     <Modal2 show={show1} handleClose1={handleClose1} />
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default Main
