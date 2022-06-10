import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext'

const Step3 = () => {
   const { setStep, userData, setUserData, submitData } =
      useContext(multiStepContext)
   return (
      <div>
         choose ad placement
         <a
            className="view-more"
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={() => setStep(2)}
         >
            Back
         </a>
         <a
            className="view-more"
            style={{ display: 'flex', justifyContent: 'center' }}
            onClick={submitData}
         >
            Finish
         </a>
      </div>
   )
}

export default Step3
