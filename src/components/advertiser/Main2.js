import React, { useState } from 'react'
import Header from '../home/Header'
import Sidebar from '../home/sidebar/Sidebar'
import { BsPlusCircle, BsArrowRightCircle } from 'react-icons/bs'
import { AiFillCaretDown, AiOutlineCalendar } from 'react-icons/ai'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
import { RiTimerLine } from 'react-icons/ri'

const Main2 = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div className="main-content">
            <div className="" style={{}}>
               <div style={{ textAlign: 'center' }}>
                  <BsPlusCircle
                     style={{
                        fontSize: '90px',
                        marginTop: '20px',
                        marginBottom: '20px',
                        fontWeight: '700',
                        color: '#9B51E0'
                     }}
                  />
                  <h4
                     style={{
                        color: '#962E40',
                        fontSize: '24px',
                        marginBottom: '5px'
                     }}
                  >
                     Start a New Campaign
                  </h4>
                  <h5 style={{ color: '#9B51E0', fontSize: '16px' }}>
                     or continue where you left off
                  </h5>
               </div>
               <div style={{ padding: '0px 20px', marginTop: '90px' }}>
                  <h5 style={{ fontWeight: '700', fontSize: '20px' }}>
                     Your Campaign Summary:
                  </h5>
                  <div className="row gx-5 gy-4">
                     <div className="col-lg-6 col-md-12">
                        <div
                           style={{
                              backgroundColor: '#fff',
                              borderRadius: '35px'
                           }}
                        >
                           <div style={{ borderBottom: '3px solid #f2f2f2' }}>
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

                           <div className="row">
                              <div
                                 className="col-lg-6"
                                 style={{ padding: '30px 20px 20px 20px' }}
                              >
                                 <div
                                    style={{
                                       borderRight: '3px solid #f2f2f2',
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
                                       Campaigns
                                    </p>
                                 </div>
                              </div>
                              <div
                                 className="col-lg-6"
                                 style={{ padding: '30px 20px 20px 20px' }}
                              >
                                 <div
                                    style={{
                                       textAlign: 'center'
                                    }}
                                 >
                                    <p
                                       style={{
                                          fontSize: '30px',
                                          margin: '0px',
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
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div
                           style={{
                              backgroundColor: '#fff',
                              borderRadius: '35px'
                           }}
                        >
                           <div style={{ borderBottom: '3px solid #f2f2f2' }}>
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

                           <div className="row">
                              <div
                                 className="col-lg-6"
                                 style={{ padding: '30px 20px 20px 20px' }}
                              >
                                 <div
                                    style={{
                                       borderRight: '3px solid #f2f2f2',
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
                                       Streamers
                                    </p>
                                 </div>
                              </div>
                              <div
                                 className="col-lg-6"
                                 style={{ padding: '30px 20px 20px 20px' }}
                              >
                                 <div
                                    style={{
                                       textAlign: 'center'
                                    }}
                                 >
                                    <p
                                       style={{
                                          fontSize: '30px',
                                          margin: '0px',
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
                        </div>
                     </div>
                  </div>
                  <div style={{ textAlign: 'center', marginTop: '40px' }}>
                     <a href="#">
                        See all analytics <BsArrowRightCircle />
                     </a>
                  </div>
                  <h5 style={{ fontWeight: '700' }}>Your Campaigns</h5>
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
                  <div className="table " style={{ marginTop: '40px' }}>
                     <table className="table ">
                        <thead
                           style={{
                              background: '#9B51E0',
                              color: '#fff',
                              borderRadius: '35px',
                              padding: '10px',
                              fontSize: '18px'
                           }}
                        >
                           <tr style={{ padding: '10px', border: 'none' }}>
                              <th className="table-head" scope="col">
                                 Campaign Name
                              </th>
                              <th className="table-head" scope="col">
                                 Status
                              </th>
                              <th className="table-head" scope="col">
                                 Date
                              </th>
                              <th className="table-head" scope="col">
                                 Budget
                              </th>
                              <th className="table-head" scope="col">
                                 Spent
                              </th>
                              <th className="table-head" scope="col">
                                 Views
                              </th>
                              <th className="table-head" scope="col">
                                 Clicks
                              </th>
                           </tr>
                        </thead>
                        <br />
                        <tbody
                           style={{
                              border: 'none'
                           }}
                        >
                           <tr className="table-row">
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
                           <div className="break"></div>
                           <tr className="table-row">
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
                           <div className="break"></div>
                           <tr className="table-row">
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
                           <div className="break"></div>
                           <tr className="table-row">
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
         </div>
      </div>
   )
}

export default Main2
