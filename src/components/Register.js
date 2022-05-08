import React, { useState } from 'react'
import Modaal from './Modaal'

const Register = () => {
   const [check1, setCheck1] = useState(false)
   const [check2, setCheck2] = useState(false)
   const [check3, setCheck3] = useState(false)
   const [isDisabled, setIsDisabled] = useState(true)

   const [show, setShow] = useState(false)
   const handleClose = () => setShow(false)
   const handleShow = () => setShow(true)

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
         <div className="modal-head card-banner">
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'end',
                  padding: '10px'
               }}
            ></div>
         </div>
         <div className="container">
            <div className="row " style={{ padding: '20px 20px 40px 20px' }}>
               <div
                  className="col-lg-6"
                  style={{ borderRight: '1px solid #962E40' }}
               >
                  <h1 style={{ fontSize: '36px', fontWeight: '700' }}>
                     Streampala
                  </h1>
                  <p style={{ fontSize: '16px' }}>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, §
                     sed do eiusmod tempor incididunt ut labore et dolore magna.
                     aliqua. Ut enim ad minim veniam. Learn More i
                  </p>
                  <h1 style={{ fontSize: '48px', fontWeight: '700' }}>₹20</h1>
                  <p style={{ fontSize: '20px', fontWeight: '700' }}>
                     Platforms
                  </p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                     <img src={require('../img/yt-logo.png')} alt="" />
                     <img src={require('../img/yt-logo.png')} alt="" />
                  </div>
                  <p style={{ fontSize: '16px', fontWeight: '700' }}>
                     Sponsership Left:{' '}
                     <span style={{ fontSize: '16px', fontWeight: '400' }}>
                        13
                     </span>
                  </p>
               </div>
               <div className="col-lg-6 ">
                  <div style={{ padding: '20px' }}>
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'space-between'
                        }}
                     >
                        <span style={{ fontWeight: '700', fontSize: '20px' }}>
                           Lorem Ipsum
                        </span>

                        <button
                           className="start"
                           onClick={() => {
                              setShow(true)
                           }}
                        >
                           Start Campaign
                        </button>
                     </div>
                     <div
                        className="scroll-area"
                        style={{ paddingTop: '30px' }}
                     >
                        <ul>
                           <li>
                              {' '}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, § sed do eiusmod tempor
                           </li>

                           <li>
                              {' '}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, § sed do eiusmod tempor
                           </li>
                           <li>
                              {' '}
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, § sed do eiusmod tempor
                           </li>
                        </ul>
                        <div>
                           <span
                              style={{ fontWeight: '700', fontSize: '20px' }}
                           >
                              Lorem Ipsum
                           </span>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, § sed do eiusmod temporLorem ipsum dolor sit
                              amet, consectetur adipiscing elit, § sed do
                              eiusmod temporLorem ipsum dolor sit amet,
                              consectetur adipiscing elit, § sed do eiusmod
                              temporLorem ipsum dolor sit amet, consectetur
                              adipiscing elit, § sed do eiusmod tempor
                           </p>
                           <br />
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, § sed do eiusmod temporLorem ipsum dolor sit
                              amet, consectetur adipiscing elit, § sed do
                              eiusmod temporLorem ipsum dolor sit amet,
                              consectetur adipiscing elit, § sed do eiusmod
                              temporLorem ipsum dolor sit amet, consectetur
                              adipiscing elit, § sed do eiusmod tempor
                           </p>
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
   )
}

export default Register
