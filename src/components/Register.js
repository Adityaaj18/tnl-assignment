import React, { useState } from 'react'
import Modaal from './Modaal'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'

const Register = () => {
   const [check1, setCheck1] = useState(false)
   const [check2, setCheck2] = useState(false)
   const [check3, setCheck3] = useState(false)
   const [isDisabled, setIsDisabled] = useState(true)

   const [show, setShow] = useState(false)
   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   // const handleChange1 = () => {
   //    setCheck1(!check1)
   // }
   // const handleChange2 = () => {
   //    setCheck2(!check2)
   // }
   // const handleChange3 = () => {
   //    setCheck3(!check3)
   // }
   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />

         <div className="main-content">
            <div className="modal-head card-banner">
               <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
               >
                  <div style={{ margin: '20px' }}>
                     <span className="timer">Ends in: 45d 15h 12m</span>
                  </div>
                  <h1
                     style={{
                        fontSize: '48px',
                        fontWeight: '700',
                        paddingTop: '20px',
                        paddingRight: '20px'
                        // textAlign: 'right'
                     }}
                  >
                     ₹20
                  </h1>
               </div>
            </div>
            <div
               className=""
               style={{
                  backgroundColor: '#fff',
                  borderRadius: '35px',
                  marginTop: '20px',
                  border: ' 1px solid #9B51E0'
               }}
            >
               <div className="row " style={{ padding: '43px 10px 40px 33px' }}>
                  <div className="row">
                     <div className="col-lg-10">
                        <h1 style={{ fontSize: '36px', fontWeight: '700' }}>
                           Streampala
                        </h1>
                        <p
                           className="col-lg-10"
                           style={{ fontSize: '16px', paddingTop: '20px' }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, § sed do eiusmod tempor incididunt ut labore et
                           dolore magna. aliqua. Ut enim ad minim veniam. Learn
                           More i
                        </p>
                     </div>
                     <div className="col-lg-2">
                        <button
                           className="start"
                           onClick={() => {
                              setShow(true)
                           }}
                        >
                           Register
                        </button>
                        <h1
                           style={{
                              fontSize: '48px',
                              fontWeight: '700',
                              paddingTop: '20px',
                              fontWeight: '700',
                              color: '#2D9CDB',
                              textAlign: 'center'
                           }}
                        >
                           ₹20
                        </h1>
                     </div>
                  </div>
                  <div
                     className="col-lg-6"
                     style={{ borderRight: '1px solid #962E40' }}
                  >
                     <div className="row">
                        <div className="col-lg-7">
                           <p style={{ fontSize: '16px', fontWeight: '700' }}>
                              Streamers Participated
                           </p>
                           <div style={{ display: 'flex' }}>
                              <img
                                 src={require('../img/streamer1.png')}
                                 alt=""
                                 style={{
                                    zIndex: '10',
                                    width: '60px',
                                    height: '60px'
                                 }}
                              />
                              <img
                                 src={require('../img/streamer2.png')}
                                 alt=""
                                 style={{
                                    marginLeft: '-15px',
                                    zIndex: '5',
                                    width: '60px',
                                    height: '60px'
                                 }}
                              />
                              <img
                                 src={require('../img/streamer3.png')}
                                 alt=""
                                 style={{
                                    marginLeft: '-15px',
                                    zIndex: '1',
                                    width: '60px',
                                    height: '60px'
                                 }}
                              />
                              <a
                                 href="#"
                                 style={{
                                    marginTop: 'auto',
                                    marginBottom: 'auto',
                                    marginLeft: '17px'
                                 }}
                              >
                                 30+ streamers
                              </a>
                           </div>
                        </div>
                        <div className="col-lg-5">
                           <p style={{ fontSize: '16px', fontWeight: '700' }}>
                              Total Watch Time
                           </p>
                           <div style={{ marginTop: '30px' }}>
                              <span
                                 style={{
                                    padding: '10px 44px',
                                    border: '1px solid #9B51E0',
                                    borderRadius: '29px'
                                 }}
                              >
                                 --------
                              </span>
                           </div>
                        </div>
                     </div>

                     <p
                        style={{
                           fontSize: '16px',
                           fontWeight: '700',
                           paddingTop: '35px'
                        }}
                     >
                        Media Preview
                     </p>
                     <div className="row gx-2">
                        <div className="col-lg-4">
                           <img
                              src={require('../img/banner.png')}
                              alt=""
                              style={{
                                 width: '100%',
                                 height: '160px',
                                 borderRadius: '35px'
                              }}
                           />
                        </div>
                        <div className="col-lg-4">
                           <img
                              src={require('../img/banner.png')}
                              alt=""
                              style={{
                                 width: '100%',
                                 height: '160px',
                                 borderRadius: '35px'
                              }}
                           />
                        </div>
                        <div className="col-lg-4">
                           <img
                              src={require('../img/banner.png')}
                              alt=""
                              style={{
                                 width: '100%',
                                 height: '160px',
                                 borderRadius: '35px'
                              }}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 ">
                     <div style={{ padding: '20px 10px' }}>
                        <div
                           style={{
                              display: 'flex',
                              justifyContent: 'space-between'
                           }}
                        >
                           <span
                              style={{ fontWeight: '700', fontSize: '20px' }}
                           >
                              Lorem Ipsum
                           </span>
                        </div>
                        <div
                           className="scroll-area"
                           style={{ paddingTop: '30px' }}
                        >
                           <div style={{ padding: '10px' }}>
                              <ul>
                                 <li>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, § sed do eiusmod tempor
                                 </li>

                                 <li>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, § sed do eiusmod tempor
                                 </li>
                                 <li>
                                    {' '}
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, § sed do eiusmod tempor
                                 </li>
                              </ul>
                              <div>
                                 <span
                                    style={{
                                       fontWeight: '700',
                                       fontSize: '20px'
                                    }}
                                 >
                                    Lorem Ipsum
                                 </span>
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, § sed do eiusmod
                                    temporLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, § sed do
                                    eiusmod temporLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, § sed do
                                    eiusmod temporLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, § sed do
                                    eiusmod tempor
                                 </p>
                                 <br />
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, § sed do eiusmod
                                    temporLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, § sed do
                                    eiusmod temporLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, § sed do
                                    eiusmod temporLorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, § sed do
                                    eiusmod tempor
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <Modaal
                        handleClose={handleClose}
                        handleShow={handleShow}
                        show={show}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Register
