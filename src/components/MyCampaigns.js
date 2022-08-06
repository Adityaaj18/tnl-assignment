import React, { useState, useEffect } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { BsChevronDown } from 'react-icons/bs'
import Loading from './Loading'

const MyCampaigns = () => {
   const navigate = useNavigate()
   const [menuCollapse, setMenuCollapse] = useState(true)
   const [isLoading, setIsLoading] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   const [campaigns, setCampaigns] = useState([])
   const [myCampaigns, setMyCampaigns] = useState([])
   useEffect(() => {
      axios
         .get('http://127.0.0.1:8000/api/campaigns/', {
            headers: {
               // Authorization: `Token ${token}`
               Authorization: `Token ${process.env.REACT_APP_TOKEN}`
            }
         })
         .then((res) => {
            setCampaigns(res.data.slice(0, 2))
         })
   }, [])
   useEffect(() => {
      setIsLoading(true)
      const fetchData = async () => {
         try {
            const { data } = await axios.get(
               'http://127.0.0.1:8000/api/user-campaigns/3/',
               {
                  headers: {
                     Authorization: `Token f362e4e2c00387b6e6ec36fab14c175761644aa2`
                  }
               }
            )
            console.log(data)
            setMyCampaigns(data)
         } catch (err) {
            console.log(err)
         } finally {
            setIsLoading(false)
            // console.log(user)
         }
      }
      fetchData()
   }, [])
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
               borderTopLeftRadius: '50px'
            }}
         >
            {console.log(myCampaigns)}
            <div>
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
                           All Campaigns
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
                  </div>
               </div>
               {isLoading ? (
                  <Loading />
               ) : (
                  <div className="my-campaigns">
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between'
                        }}
                     >
                        <div>
                           <span
                              style={{
                                 fontSize: '24px',
                                 fontWeight: '700',

                                 marginBottom: '10px'
                              }}
                           >
                              My Campaigns
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
                              Sort By:New to Oldest
                              <BsChevronDown style={{ marginLeft: '10px' }} />
                           </span>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default MyCampaigns
