import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiFillCloseCircle } from 'react-icons/ai'

const Modaal = ({ show, handleClose, handleShow }) => {
   return (
      <>
         <Modal show={show} onHide={handleClose}>
            <Modal.Body>
               <div>
                  <div className="modal-head card-banner2">
                     <div
                        style={{
                           display: 'flex',
                           justifyContent: 'end',
                           padding: '20px'
                        }}
                     >
                        <AiFillCloseCircle
                           style={{
                              fontSize: '25px'
                           }}
                           onClick={handleClose}
                        />
                     </div>
                     <div
                        style={{
                           marginTop: '8%',
                           alignItems: 'center',
                           textAlign: 'center'
                        }}
                     >
                        <img src={require('../img/yipee.png')} />
                        <p>lorem ipsum dolor sit amet, consectetur</p>
                        <button className="my-camp">My Campaigns</button>
                        <h1
                           style={{
                              fontSize: '36px',
                              fontWeight: '700',
                              paddingTop: '20px'
                           }}
                        >
                           Streampala
                        </h1>
                        <span style={{ fontSize: '48px', fontWeight: '700' }}>
                           ₹ 20
                        </span>
                     </div>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </>
   )
}

export default Modaal
