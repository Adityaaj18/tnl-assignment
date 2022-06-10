import React, { useState } from 'react'
import Header from './home/Header'
import Main from './home/Main'
import Sidebar from './home/sidebar/Sidebar'
import { AiFillCaretDown, AiOutlineCalendar } from 'react-icons/ai'

const Analytics2 = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div className="container" style={{ marginTop: '100px' }}>
            <h4>
               Your last campaign generated{' '}
               <span style={{ fontWeight: '700' }}>35%</span> more clicks that
               the average StreamPala campaign!
            </h4>
            <br />
            <h5>Overall metrics</h5>
            <div
               className=""
               style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '10px'
               }}
            >
               <div className="">
                  All Campaigns <AiFillCaretDown style={{ fontSize: '20px' }} />
               </div>
               <div className="">
                  <AiOutlineCalendar style={{ fontSize: '30px' }} />
                  All Time
               </div>
            </div>
            <br />
            <div className="row gx-4 gy-4">
               <div className="col-lg-3 col-md-6">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>Views</h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 ">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>Streams</h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>Clicks</h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>Spends</h5>
                     </div>
                  </div>
               </div>
            </div>
            <br />
            <div className="row gx-4 gy-4">
               <div className="col-lg-3 col-md-6">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>Campaigns</h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 ">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>Avg CPC</h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>Creators</h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>CTR</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Analytics2
