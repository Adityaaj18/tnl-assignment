import React from 'react'
import Header from '../home/Header'

const signUp = () => {
   return (
      <>
         <Header />
         <div className="main-content">
            <div className="welcome">
               <div>
                  <h1>Welcome to StreamPala </h1>
                  <p>
                     Please share these details to set up your advertiser
                     account:
                  </p>
               </div>
               <img
                  src={require('../../img/welcome-img.png')}
                  alt=""
                  style={{ width: '60px', height: '60px' }}
               />
            </div>
            <div
               className="signup-form"
               style={{ display: 'flex', justifyContent: 'center' }}
            >
               <div className="col-lg-8" style={{ marginTop: '50px' }}>
                  <div className="form-group row">
                     <label
                        className="col-sm-3 col-form-label"
                        style={{ fontWeight: '700' }}
                     >
                        Name:
                     </label>
                     <div className="col-lg-8 col-sm-10">
                        <input className="form-control" type="text" />
                     </div>
                  </div>
                  <br />
                  <div className="form-group row" style={{ fontWeight: '700' }}>
                     <label className="col-sm-3 col-form-label">
                        Work Email:
                     </label>
                     <div className="col-lg-8 col-sm-10">
                        <input className="form-control" type="email" />
                     </div>
                  </div>
                  <br />
                  <div className="form-group row" style={{ fontWeight: '700' }}>
                     <label className="col-sm-3 col-form-label">
                        Phone No:
                     </label>
                     <div className="col-lg-8 col-sm-10">
                        <input className="form-control" type="number" />
                     </div>
                  </div>
                  <br />
                  <div className="form-group row" style={{ fontWeight: '700' }}>
                     <label className="col-sm-3 col-form-label">
                        Organization:
                     </label>
                     <div className="col-lg-8 col-sm-10">
                        <input className="form-control" type="text" />
                     </div>
                  </div>
                  <br />
                  <div className="form-group row" style={{ fontWeight: '700' }}>
                     <label className="col-sm-3 col-form-label">
                        Organization Type:
                     </label>
                     <div className="col-lg-8 col-sm-10">
                        <input className="form-control" type="text" />
                     </div>
                  </div>
                  <br />
                  <div className="form-group row" style={{ fontWeight: '700' }}>
                     <label className="col-sm-3 col-form-label">
                        Password:
                     </label>
                     <div className="col-lg-8 col-sm-10">
                        <input className="form-control" type="password" />
                     </div>
                  </div>
                  <br />
                  <div className="d-flex justify-content-center">
                     <div>
                        <div className="d-flex">
                           <input type="checkbox" />
                           <p
                              style={{
                                 color: '#9B51E0',
                                 marginBottom: '0px',
                                 paddingLeft: '5px'
                              }}
                           >
                              {' '}
                              Sign me up for the Live! Live Revolution
                              Newsletter
                           </p>
                        </div>
                        <div className="d-flex justify-content-center">
                           <button className="view-more">Sign Up</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default signUp
