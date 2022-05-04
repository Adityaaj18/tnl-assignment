import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { AiFillCloseCircle } from 'react-icons/ai'

const Modal2 = ({ show, handleClose1 }) => {
   return (
      <div>
         <Modal show={show} onHide={handleClose1}>
            <Modal.Body>
               <div className="modal-head card-banner2">
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'end',
                        padding: '10px'
                     }}
                  >
                     <AiFillCloseCircle
                        style={{
                           fontSize: '22px'
                        }}
                        onClick={handleClose1}
                     />
                  </div>
                  <div
                     style={{
                        marginTop: '15%',
                        alignItems: 'center',
                        textAlign: 'center'
                     }}
                  >
                     <h1 style={{ fontSize: '48px', fontWeight: '700' }}>
                        Yipee!
                     </h1>
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
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default Modal2
