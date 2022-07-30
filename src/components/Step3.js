import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext'

const Step3 = () => {
   const { setStep, userData, setUserData, submitData } =
      useContext(multiStepContext)
   return (
      <div>
         choose ad placement
         <div style={{ display: 'flex', justifyContent: 'right' }}>
            <div style={{ display: 'flex' }}>
               <button
                  className="cancel"
                  style={{ marginRight: '13px' }}
                  onClick={() => setStep(2)}
               >
                  Back
               </button>
               <button className="view-more" onClick={submitData}>
                  Finish
               </button>
            </div>
         </div>
      </div>
   )
}

export default Step3
