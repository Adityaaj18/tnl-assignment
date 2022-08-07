import React, { useState, useContext } from 'react'
import { multiStepContext } from '../StepContext'

const Step1 = () => {
   const { setStep, userData, setUserData } = useContext(multiStepContext)
   console.log(userData)

   return (
      <div>
         <form>
            <div className="form-group row">
               <label className="col-sm-2 col-form-label">Brand Name</label>
               <div className="col-lg-7 col-sm-10">
                  <input
                     type="text"
                     value={userData['brandname']}
                     className="form-control"
                     onChange={(e) =>
                        setUserData({ ...userData, brandname: e.target.value })
                     }
                  />
               </div>
            </div>
            <br />
            <div className="form-group row">
               <label className="col-sm-2 col-form-label">Campaign Name</label>
               <div className="col-lg-7 col-sm-10">
                  <input
                     type="text"
                     value={userData['campaignname']}
                     className="form-control"
                     onChange={(e) =>
                        setUserData({
                           ...userData,
                           campaignname: e.target.value
                        })
                     }
                  />
               </div>
            </div>
            <br />
            <div className="form-group row">
               <label className="col-sm-2 col-form-label">
                  Campaign start date
               </label>
               <div className="col-lg-7 col-sm-10">
                  <input className="form-control" />
               </div>
            </div>
            <br />
            <div className="form-group row">
               <label className="col-sm-2 col-form-label">
                  Campaign end date
               </label>
               <div className="col-lg-7 col-sm-10">
                  <input className="form-control" />
               </div>
            </div>
            <br />
            <div className="form-group row">
               <label className="col-sm-2 col-form-label">
                  Setup campaign budget
               </label>
               <div className="col-lg-3 col-sm-10" style={{ display: 'flex' }}>
                  <div>
                     <input
                        className="form-control"
                        value={userData['budget']}
                        onChange={(e) =>
                           setUserData({ ...userData, budget: e.target.value })
                        }
                     />
                  </div>
                  <span
                     style={{ margin: '10px 0px 0px 5px', color: '#9B51E0' }}
                  >
                     INR
                  </span>
               </div>
            </div>
            <div className="form-group row">
               <label className="col-sm-2 col-form-label">
                  Estimated Result
               </label>

               <div className="col-lg-3 col-sm-10" style={{ display: 'flex' }}>
                  <div>
                     <input
                        className="form-control"
                        value={userData['budget']}
                     />
                  </div>
                  <span
                     style={{ margin: '10px 0px 0px 5px', color: '#9B51E0' }}
                  >
                     Views
                  </span>
               </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'right' }}>
               <button
                  onClick={() => {
                     setStep(2)
                  }}
                  className="view-more"
                  style={{ display: 'flex', justifyContent: 'center' }}
               >
                  Next
               </button>
            </div>
         </form>
      </div>
   )
}

export default Step1
