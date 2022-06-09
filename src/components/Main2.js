import React, { useState } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import { BsPlusCircle, BsArrowRightCircle } from 'react-icons/bs'
import { AiFillCaretDown, AiOutlineCalendar } from 'react-icons/ai'

const Main2 = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div className="container" style={{ marginTop: '100px' }}>
            <div style={{ textAlign: 'center' }}>
               <BsPlusCircle
                  style={{
                     fontSize: '80px',
                     marginTop: '20px',
                     marginBottom: '20px'
                  }}
               />
               <h4>Start a New Campaign</h4>
               <h5>or continue where you left off</h5>
            </div>
            <h5>Your Campaign Summary</h5>
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
                  Calender
               </div>
            </div>
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
                        <h5>Views</h5>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6">
                  <div className="campaign-box">
                     <div>
                        <h4>####</h4>
                        <h5>Streamers</h5>
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
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
               <a href="#">
                  See all analytics <BsArrowRightCircle />
               </a>
            </div>
            <h5>Your Campaigns</h5>
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
                  Calender
               </div>
            </div>
            <div className="table">
               <table className="table table-striped">
                  <thead>
                     <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Spent</th>
                        <th scope="col">Views</th>
                        <th scope="col">Clicks</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <th scope="row">Campaign 1</th>
                        <td>
                           <span>Active</span>
                        </td>
                        <td>16.11.22-15.12.22</td>
                        <td>150,000</td>
                        <td>-</td>
                        <td>N/A</td>
                        <td>N/A</td>
                     </tr>
                     <tr>
                        <th scope="row">Campaign 1</th>
                        <td>
                           <span
                              style={{
                                 backgroundColor: 'green',
                                 color: '#fff',
                                 padding: '3px 5px',
                                 borderRadius: '6px'
                              }}
                           >
                              Active
                           </span>
                        </td>
                        <td>16.11.22-15.12.22</td>
                        <td>150,000</td>
                        <td>-</td>
                        <td>N/A</td>
                        <td>N/A</td>
                     </tr>
                     <tr>
                        <th scope="row">Campaign 1</th>
                        <td>
                           <span>Active</span>
                        </td>
                        <td>16.11.22-15.12.22</td>
                        <td>150,000</td>
                        <td>-</td>
                        <td>N/A</td>
                        <td>N/A</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

export default Main2
