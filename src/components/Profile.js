import React, { useState, useEffect } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import axios from 'axios'

const Profile = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)
   const [user, setUser] = useState()

   const [isEdit, setIsEdit] = useState(false)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   useEffect(() => {
      axios
         .get('http://127.0.0.1:8000/api/users/current/', {
            headers: {
               // Authorization: `Token ${token}`
               Authorization: `Token f362e4e2c00387b6e6ec36fab14c175761644aa2`
            }
         })
         .then((res) => {
            setUser(res.data)
            console.log(res.data)
         })
   }, [])

   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <div
            className=""
            style={{
               marginLeft: '60px',
               padding: '35px 25px',
               background: '#f2e9fa',
               marginTop: '68px',
               borderTopLeftRadius: '50px',
               height: '150vh'
            }}
         >
            {isEdit ? (
               <div className="profile-section">
                  <div>
                     <div className="profile-card-wrapper">
                        <div className=" ">
                           <div className="">
                              <div style={{ height: '170px' }}>
                                 <img
                                    src={require('../img/profile-bg.png')}
                                    alt=""
                                    style={{
                                       width: '100%',
                                       height: '100%',
                                       borderRadius: '35px'
                                    }}
                                 />
                              </div>
                              <div
                                 style={{
                                    backgroundColor: '#fff',
                                    marginTop: '-30px',
                                    borderBottomLeftRadius: '35px',
                                    borderBottomRightRadius: '35px',
                                    border: '1px solid #d9c0f0'
                                 }}
                              >
                                 <div
                                    style={{
                                       display: 'flex',
                                       justifyContent: 'space-between'
                                    }}
                                 >
                                    <div style={{ display: 'flex' }}>
                                       <div style={{ display: 'flex' }}>
                                          <img
                                             src={require('../img/johndoe.png')}
                                             alt=""
                                             style={{
                                                width: '182px',
                                                height: '182px',
                                                marginTop: '-40px',
                                                marginLeft: '80px'
                                             }}
                                          />
                                       </div>
                                       <div
                                          style={{
                                             display: 'flex',
                                             justifyContent: 'space-between',
                                             marginTop: '50px'
                                          }}
                                       >
                                          <div style={{ display: 'flex' }}>
                                             <h1
                                                style={{
                                                   fontSize: '36px',
                                                   fontWeight: '700',
                                                   padding: '30px',
                                                   color: '#9B51E0'
                                                }}
                                             >
                                                {user.name}
                                             </h1>
                                          </div>
                                       </div>
                                    </div>
                                    <div
                                       style={{
                                          margin: '80px 20px 20px 20px'
                                       }}
                                    >
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
                                 </div>
                              </div>
                           </div>
                           <div
                              className="profile-body"
                              style={{ paddingTop: '44px' }}
                           >
                              <div className="row data-row">
                                 <div className="col-lg-2 profile-data">
                                    Username
                                 </div>
                                 <div className="col-lg-9">
                                    <div
                                       style={{
                                          display: 'flex',
                                          width: '100%',
                                          backgroundColor: '#fff',
                                          borderRadius: '6px',
                                          border: '1px solid #d9c0f0'
                                       }}
                                    >
                                       <label
                                          style={{
                                             fontSize: '14px',
                                             padding: '5px 29px',
                                             borderRight: '1px solid #f2f2f2',
                                             color: '#6F6F6F'
                                          }}
                                       >
                                          streampala.com/
                                       </label>
                                       <input
                                          type="text"
                                          style={{
                                             border: 'none',
                                             padding: '5px',
                                             width: '100%',
                                             borderRadius: '6px'
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="row data-row gy-3">
                                 <div className="col-lg-2 profile-data">
                                    Website
                                 </div>
                                 <div className="col-lg-9">
                                    <div
                                       style={{
                                          display: 'flex',
                                          width: '100%',
                                          backgroundColor: '#fff',
                                          borderRadius: '6px',
                                          border: '1px solid #d9c0f0'
                                       }}
                                    >
                                       <div
                                          style={{
                                             padding: '2px 118px 2px 29px',
                                             borderRight: '1px solid #f2f2f2'
                                          }}
                                       >
                                          <img
                                             src={require('../img/yt-logo.png')}
                                             alt=""
                                             style={{
                                                width: '30px',
                                                height: '30px',
                                                fontWeight: '700'
                                             }}
                                          />
                                       </div>
                                       <input
                                          type="text"
                                          style={{
                                             border: 'none',
                                             padding: '5px',
                                             width: '100%',
                                             borderRadius: '6px'
                                          }}
                                       />
                                    </div>
                                 </div>

                                 <div
                                    className="col-lg-2 profile-data"
                                    style={{ color: '#f2e9fa' }}
                                 >
                                    .
                                 </div>
                                 <div className="col-lg-9">
                                    <div
                                       style={{
                                          display: 'flex',
                                          width: '100%',
                                          backgroundColor: '#fff',
                                          borderRadius: '6px',
                                          border: '1px solid #d9c0f0'
                                       }}
                                    >
                                       <div
                                          style={{
                                             padding: '2px 118px 2px 29px',
                                             borderRight: '1px solid #f2f2f2'
                                          }}
                                       >
                                          <img
                                             src={require('../img/dc-logo.png')}
                                             alt=""
                                             style={{
                                                width: '30px',
                                                height: '22px',
                                                fontWeight: '700'
                                             }}
                                          />
                                       </div>
                                       <input
                                          type="text"
                                          style={{
                                             border: 'none',
                                             padding: '5px',
                                             width: '100%',
                                             borderRadius: '6px'
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="row data-row">
                                 <div className="col-lg-2 profile-data">
                                    Bio
                                 </div>
                                 <div className="col-lg-9">
                                    <textarea
                                       type="text"
                                       style={{
                                          width: '100%',
                                          height: '150px',
                                          borderRadius: '6px',
                                          border: '1px solid #d9c0f0'
                                       }}
                                    />
                                 </div>
                              </div>
                              <div className="row data-row">
                                 <div className="col-lg-2 profile-data">
                                    Email
                                 </div>
                                 <div className="col-lg-9">
                                    <div
                                       style={{
                                          display: 'flex',
                                          width: '100%',
                                          backgroundColor: '#fff',
                                          borderRadius: '6px',
                                          border: '1px solid #d9c0f0'
                                       }}
                                    >
                                       <label
                                          style={{
                                             fontSize: '14px',
                                             padding: '5px 68px 5px 29px',
                                             borderRight: '1px solid #f2f2f2',
                                             color: '#6F6F6F'
                                          }}
                                       >
                                          gmail.com
                                       </label>
                                       <input
                                          type="text"
                                          style={{
                                             border: 'none',
                                             padding: '5px',
                                             width: '100%',
                                             borderRadius: '6px'
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="row data-row">
                                 <div className="col-lg-2 profile-data">
                                    Phone
                                 </div>
                                 <div className="col-lg-9">
                                    <div
                                       style={{
                                          display: 'flex',
                                          width: '100%',
                                          backgroundColor: '#fff',
                                          borderRadius: '6px',
                                          border: '1px solid #d9c0f0'
                                       }}
                                    >
                                       <label
                                          style={{
                                             fontSize: '14px',
                                             padding: '5px 120px 5px 29px',
                                             borderRight: '1px solid #f2f2f2',
                                             color: '#6F6F6F'
                                          }}
                                       >
                                          +91
                                       </label>
                                       <input
                                          type="text"
                                          style={{
                                             border: 'none',
                                             padding: '5px',
                                             width: '100%',
                                             borderRadius: '6px'
                                          }}
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="profile-section">
                  <div>
                     <div className="profile-card-wrapper  ">
                        <div className=" ">
                           <div className="">
                              <div style={{ height: '170px' }}>
                                 <img
                                    src={require('../img/profile-bg.png')}
                                    alt=""
                                    style={{
                                       width: '100%',
                                       height: '100%',
                                       borderRadius: '35px'
                                    }}
                                 />
                              </div>
                              <div
                                 style={{
                                    backgroundColor: '#fff',
                                    marginTop: '-30px',
                                    borderBottomLeftRadius: '35px',
                                    borderBottomRightRadius: '35px',
                                    border: '1px solid #9B51E0'
                                 }}
                              >
                                 <div
                                    style={{
                                       display: 'flex',
                                       justifyContent: 'space-between'
                                    }}
                                 >
                                    <div style={{ display: 'flex' }}>
                                       <div style={{ display: 'flex' }}>
                                          <img
                                             src={require('../img/johndoe.png')}
                                             alt=""
                                             style={{
                                                width: '182px',
                                                height: '182px',
                                                marginTop: '-40px',
                                                marginLeft: '80px'
                                             }}
                                          />
                                       </div>
                                       <div
                                          style={{
                                             display: 'flex',
                                             justifyContent: 'space-between',
                                             marginTop: '50px'
                                          }}
                                       >
                                          <div style={{ display: 'flex' }}>
                                             <h1
                                                style={{
                                                   fontSize: '36px',
                                                   fontWeight: '700',
                                                   borderRight:
                                                      '1px solid #56CCF2',
                                                   padding: '30px',
                                                   color: '#9B51E0'
                                                }}
                                             >
                                                {user.name}
                                             </h1>
                                             <ul
                                                style={{
                                                   listStyle: 'none',
                                                   padding: '20px'
                                                }}
                                             >
                                                <li>
                                                   <div>
                                                      <img
                                                         style={{
                                                            padding: '5px',
                                                            width: '36px'
                                                         }}
                                                         src={require('../img/yt-logo.png')}
                                                         alt=""
                                                      />
                                                      youtube
                                                   </div>
                                                </li>
                                                <li>
                                                   <div>
                                                      <img
                                                         style={{
                                                            width: '36px',
                                                            height: '30px',

                                                            padding: '6px'
                                                         }}
                                                         src={require('../img/dc-logo.png')}
                                                         alt=""
                                                      />
                                                      discord
                                                   </div>
                                                </li>
                                             </ul>
                                          </div>
                                       </div>
                                    </div>
                                    <div
                                       style={{
                                          margin: '80px 20px 20px 20px'
                                       }}
                                    >
                                       <button
                                          onClick={() => setIsEdit(!isEdit)}
                                          id="edit-profile"
                                       >
                                          Edit
                                       </button>
                                    </div>
                                 </div>
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
                              </div>

                              <div className="row data-row">
                                 <div className="col-lg-2 profile-data">
                                    Username
                                 </div>
                                 <div className="col-lg-10">{user.name}</div>
                              </div>
                              <div className="row data-row">
                                 <div className="col-lg-2 profile-data">
                                    Your bio
                                 </div>
                                 <div className="col-lg-10">hiuaohn jdqh</div>
                              </div>
                              <div className="row data-row">
                                 <div className="col-lg-2 profile-data">
                                    Email
                                 </div>
                                 <div className="col-lg-10">{user.email}</div>
                              </div>
                              <div className="row data-row">
                                 <div className="col-lg-2 profile-data">
                                    Phone
                                 </div>
                                 <div className="col-lg-10">+91948789441</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Profile
