import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiFillCloseCircle } from 'react-icons/ai'
import Modal2 from './Modal2'

const Modal1 = ({ show, handleClose, setShow1 }) => {
   const [check1, setCheck1] = useState(false)
   const [check2, setCheck2] = useState(false)
   const [check3, setCheck3] = useState(false)
   const [isDisabled, setIsDisabled] = useState(true)

   const handleClose1 = () => setShow1(false)
   const handleShow1 = () => setShow1(true)

   const handleChange1 = () => {
      setCheck1(!check1)
   }
   const handleChange2 = () => {
      setCheck2(!check2)
   }
   const handleChange3 = () => {
      setCheck3(!check3)
   }

   return (
      <div>
         <Modal show={show} onHide={handleClose}>
            <Modal.Body closeButton>
               <div className="modal-head card-banner">
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'end',
                        padding: '10px'
                     }}
                  >
                     <AiFillCloseCircle
                        style={{ fontSize: '22px' }}
                        onClick={handleClose}
                     />
                  </div>
               </div>
               <div className="row" style={{ padding: '20px 20px 40px 20px' }}>
                  <div
                     className="col-lg-6"
                     style={{ borderRight: '1px solid #962E40' }}
                  >
                     <h1 style={{ fontSize: '36px', fontWeight: '700' }}>
                        Streampala
                     </h1>
                     <p style={{ fontSize: '16px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        § sed do eiusmod tempor incididunt ut labore et dolore
                        magna. aliqua. Ut enim ad minim veniam. Learn More i
                     </p>
                     <h1 style={{ fontSize: '48px', fontWeight: '700' }}>
                        ₹20
                     </h1>
                     <p style={{ fontSize: '20px', fontWeight: '700' }}>
                        Platforms
                     </p>
                     <div style={{ display: 'flex', gap: '10px' }}>
                        <img src={require('../../img/yt-logo.png')} alt="" />
                        <img src={require('../../img/yt-logo.png')} alt="" />
                     </div>
                     <p style={{ fontSize: '16px', fontWeight: '700' }}>
                        Sponsership Left:{' '}
                        <span style={{ fontSize: '16px', fontWeight: '400' }}>
                           13
                        </span>
                     </p>
                  </div>
                  <div className="col-lg-6">
                     <div>
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
                           {(check1 && check2 && check3) === true ? (
                              <button
                                 className="start"
                                 onClick={() => {
                                    handleClose()
                                    setShow1(true)
                                 }}
                              >
                                 Start Campaign
                              </button>
                           ) : (
                              <button className="disabled">
                                 Start Campaign
                              </button>
                           )}
                        </div>

                        <p>
                           <input
                              type="checkbox"
                              onChange={handleChange1}
                              style={{ height: '24px', width: '24px' }}
                           />
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, § sed do eiusmod tempor
                        </p>

                        <p>
                           <input
                              type="checkbox"
                              onChange={handleChange2}
                              style={{ height: '24px', width: '24px' }}
                           />
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, § sed do eiusmod tempor
                        </p>
                        <p>
                           <input
                              type="checkbox"
                              onChange={handleChange3}
                              style={{ height: '24px', width: '24px' }}
                           />
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit, § sed do eiusmod tempor
                        </p>
                     </div>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default Modal1
