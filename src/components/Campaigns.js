import React, { useState, useEffect } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Campaigns = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const [campaigns, setCampaigns] = useState([])

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
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

   const card1 = document.querySelector('.camps :nth-child(1)')
   card1.classList.add('col-lg-8')
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
            <div
               className="camps cards-container"
               style={{ paddingTop: '50px' }}
            >
               <div className="row g-4" style={{ marginBottom: '50px' }}>
                  {campaigns.map((campaign) => (
                     <div className="col-lg-4">
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
               </div>
            </div>
         </div>
      </div>
   )
}

export default Campaigns
