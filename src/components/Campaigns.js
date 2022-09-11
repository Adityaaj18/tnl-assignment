import React, { useState, useEffect } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaArrowLeft } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'

const Campaigns = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const [campaigns, setCampaigns] = useState([])

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   const baseURL = 'http://127.0.0.1:8000/api'

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
      axiosInstance
         .get('/campaigns', {
            headers: {
               Authorization: getAuthorizationHeader()
            }
         })
         .then((response) => {
            setCampaigns(response.data)
            console.log(response.data)
         })
   }, [])

   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div className="main-content">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               <div>
                  <FaArrowLeft
                     style={{
                        fontSize: '22px',
                        marginBottom: '10px',
                        marginRight: '15px'
                     }}
                  />
                  <span
                     style={{
                        fontSize: '24px',
                        fontWeight: '700',

                        marginBottom: '10px'
                     }}
                  >
                     All Campaigns
                  </span>
               </div>
               <div
                  style={{
                     padding: '10px 15px',
                     border: '1px solid #962E40',
                     fontSize: '16px',
                     borderRadius: '35px',
                     color: ' #962E40'
                  }}
               >
                  <span style={{ fontWeight: '600' }}>
                     Sort By:Recent Campaigns
                     <BsChevronDown style={{ marginLeft: '10px' }} />
                  </span>
               </div>
            </div>
            <div className="campaigns-container">
               <div
                  className="camps cards-container"
                  style={{ paddingTop: '20px' }}
               >
                  <div className="row g-4" style={{ marginBottom: '50px' }}>
                     {campaigns.map((campaign) => (
                        <div className="col-lg-6">
                           <Link to="/register" className="link">
                              <div className="card-banner">
                                 <div style={{ padding: '20px 30px' }}>
                                    <span className="timer">
                                       Ends in: 45d 15h 12m
                                    </span>
                                 </div>
                                 <div style={{ paddingTop: '40px' }}>
                                    <div className="streampala">
                                       <div className="streampala-wrapper">
                                          <div style={{ textAlign: 'left' }}>
                                             <span style={{ fontSize: '24px' }}>
                                                {campaign.name}
                                             </span>
                                             <p style={{ fontSize: '12px' }}>
                                                Ut enim ad minim veniam, quis
                                                nostrud exerctation ullameo
                                                rlbaoee lorem ipsum dolore magna
                                                aliqu lorem ipsum dolor{' '}
                                                <span
                                                   style={{ fontWeight: '700' }}
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
               </div>
            </div>
         </div>
      </div>
   )
}

export default Campaigns
