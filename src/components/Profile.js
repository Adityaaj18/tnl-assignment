import React, { useState } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'

const Profile = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const [isEdit, setIsEdit] = useState(false)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }
   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         {isEdit ? (
            <div className="profile-section">
               <div className="container">
                  <p
                     style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        marginTop: '100px',
                        marginBottom: '10px'
                     }}
                  >
                     My Profile
                  </p>
                  <div
                     style={{
                        borderBottom: '3px solid #962E40',
                        borderRadius: '10px',
                        width: '150px'
                     }}
                  ></div>
               </div>
               <div>
                  <div className="profile-card-wrapper container ">
                     <div
                        className=" "
                        style={{
                           boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                           borderRadius: '8px'
                        }}
                     >
                        <div className="profile-header">
                           <h1 style={{ fontSize: '36px', fontWeight: '700' }}>
                              John Doe
                           </h1>
                           <div className="profile-buttons">
                              <button
                                 onClick={() => setIsEdit(!isEdit)}
                                 id="cancel"
                              >
                                 Cancel
                              </button>
                              <button
                                 onClick={() => setIsEdit(!isEdit)}
                                 id="edit-profile"
                              >
                                 Save
                              </button>
                           </div>
                        </div>
                        <div className="profile-body">
                           <div className="row">
                              <div
                                 style={{ color: '#fff' }}
                                 className="col-lg-2"
                              >
                                 .
                              </div>
                              <div className="col-lg-10">
                                 <p
                                    style={{
                                       fontSize: '18px',
                                       fontWeight: '700',
                                       marginBottom: '10px',
                                       marginTop: '40px'
                                    }}
                                 >
                                    Personal Information
                                 </p>
                                 <div
                                    style={{
                                       borderBottom: '3px solid #962E40',
                                       borderRadius: '10px',
                                       width: '150px'
                                    }}
                                 ></div>
                              </div>
                           </div>
                           <div
                              style={{
                                 marginTop: '30px',
                                 marginBottom: '30px'
                              }}
                              className="row"
                           >
                              <div
                                 style={{ color: '#fff' }}
                                 className="col-lg-2"
                              >
                                 .
                              </div>
                              <div className="col-lg-10">
                                 <div
                                    className="row"
                                    style={
                                       {
                                          // display: 'flex',
                                          // gap: '100px'
                                       }
                                    }
                                 >
                                    <div
                                       className="col-lg-6 col-md-12 col-sm-12"
                                       style={{ display: 'flex', gap: '5px' }}
                                    >
                                       <img
                                          style={{
                                             backgroundColor: '#c4c4c4',
                                             borderRadius: '50%',
                                             padding: '5px',
                                             width: '36px'
                                          }}
                                          src={require('../img/yt-logo.png')}
                                          alt=""
                                       />
                                       <input
                                          type="text"
                                          style={{ width: '80%' }}
                                       />
                                    </div>
                                    <div
                                       className="col-lg-6 col-md-12 col-sm-12"
                                       style={{ display: 'flex', gap: '5px' }}
                                    >
                                       <img
                                          style={{
                                             width: '36px',
                                             height: '36px',

                                             backgroundColor: '#c4c4c4',
                                             borderRadius: '50%',
                                             padding: '6px'
                                          }}
                                          src={require('../img/dc-logo.png')}
                                          alt=""
                                       />
                                       <input
                                          type="text"
                                          style={{ width: '80%' }}
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="row data-row">
                              <div className="col-lg-2 profile-data">
                                 Username
                              </div>
                              <div className="col-lg-10">
                                 <input type="text" style={{ width: '95%' }} />
                              </div>
                           </div>
                           <div className="row data-row">
                              <div className="col-lg-2 profile-data">
                                 Your bio
                              </div>
                              <div className="col-lg-10">
                                 <textarea
                                    type="text"
                                    style={{ width: '95%', height: '150px' }}
                                 />
                              </div>
                           </div>
                           <div className="row data-row">
                              <div className="col-lg-2 profile-data">Email</div>
                              <div className="col-lg-10">
                                 <input type="text" style={{ width: '95%' }} />
                              </div>
                           </div>
                           <div
                              className="row data-row"
                              style={{ paddingBottom: '48px' }}
                           >
                              <div className="col-lg-2 profile-data">Phone</div>
                              <div className="col-lg-10">
                                 <input type="text" style={{ width: '95%' }} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div className="profile-section">
               <div className="container">
                  <p
                     style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        marginTop: '100px',
                        marginBottom: '10px'
                     }}
                  >
                     My Profile
                  </p>
                  <div
                     style={{
                        borderBottom: '3px solid #962E40',
                        borderRadius: '10px',
                        width: '150px'
                     }}
                  ></div>
               </div>
               <div>
                  <div className="profile-card-wrapper container ">
                     <div
                        className=" "
                        style={{
                           boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                           borderRadius: '8px'
                        }}
                     >
                        <div className="profile-header">
                           <h1 style={{ fontSize: '36px', fontWeight: '700' }}>
                              John Doe
                           </h1>
                           <button
                              onClick={() => setIsEdit(!isEdit)}
                              id="edit-profile"
                           >
                              Edit Profile
                           </button>
                        </div>
                        <div className="profile-body">
                           <div className="row">
                              <div
                                 style={{ color: '#fff' }}
                                 className="col-lg-2"
                              >
                                 .
                              </div>
                              <div className="col-lg-10">
                                 <p
                                    style={{
                                       fontSize: '18px',
                                       fontWeight: '700',
                                       marginBottom: '10px',
                                       marginTop: '40px'
                                    }}
                                 >
                                    Personal Information
                                 </p>
                                 <div
                                    style={{
                                       borderBottom: '3px solid #962E40',
                                       borderRadius: '10px',
                                       width: '150px'
                                    }}
                                 ></div>
                              </div>
                           </div>
                           <div
                              style={{
                                 marginTop: '30px',
                                 marginBottom: '30px'
                              }}
                              className="row"
                           >
                              <div
                                 style={{ color: '#fff' }}
                                 className="col-lg-2"
                              >
                                 .
                              </div>
                              <div className="col-lg-10">
                                 <div
                                    style={{
                                       display: 'flex',
                                       gap: '100px'
                                    }}
                                 >
                                    <div>
                                       <img
                                          style={{
                                             backgroundColor: '#c4c4c4',
                                             borderRadius: '50%',
                                             padding: '5px',
                                             width: '36px'
                                          }}
                                          src={require('../img/yt-logo.png')}
                                          alt=""
                                       />
                                       youtube
                                    </div>
                                    <div>
                                       <img
                                          style={{
                                             width: '36px',
                                             height: '36px',

                                             backgroundColor: '#c4c4c4',
                                             borderRadius: '50%',
                                             padding: '6px'
                                          }}
                                          src={require('../img/dc-logo.png')}
                                          alt=""
                                       />
                                       discord
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="row data-row">
                              <div className="col-lg-2 profile-data">
                                 Username
                              </div>
                              <div className="col-lg-10">hiuaohn jdqh</div>
                           </div>
                           <div className="row data-row">
                              <div className="col-lg-2 profile-data">
                                 Your bio
                              </div>
                              <div className="col-lg-10">hiuaohn jdqh</div>
                           </div>
                           <div className="row data-row">
                              <div className="col-lg-2 profile-data">Email</div>
                              <div className="col-lg-10">hiuaohn@gmail.com</div>
                           </div>
                           <div
                              className="row data-row"
                              style={{ paddingBottom: '48px' }}
                           >
                              <div className="col-lg-2 profile-data">Phone</div>
                              <div className="col-lg-10">+91948789441</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default Profile
