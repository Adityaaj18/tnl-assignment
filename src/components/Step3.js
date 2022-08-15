import React, { useContext, useState, useEffect } from 'react'
import { multiStepContext } from '../StepContext'
import axios from 'axios'

const Step3 = () => {
   const { setStep, userData, setUserData, submitData } =
      useContext(multiStepContext)

   const [position, setPosition] = useState()
   const [currentRadioValue, setCurrentRadioValue] = useState('radio-1')
   //console.log(currentRadioValue)

   const handleRadioChange = (e) => {
      setCurrentRadioValue(e.target.value)
      setUserData({ ...userData, adPosition: e.target.value })
   }

   // useEffect(() => {
   //    axios
   //       .post('http://127.0.0.1:8000/api/campaigns', {
   //          owner: 'aj',
   //          name: 'hero',
   //          description: 'hero test',
   //          budget: 2147483647,
   //          start_date: '2022-08-07',
   //          end_date: '2022-08-07'
   //       })
   //       .then(function (response) {
   //          console.log(response)
   //       })
   //       .catch(function (error) {
   //          console.log(error)
   //       })
   // }, [])

   return (
      <div style={{ marginTop: '50px' }}>
         <div className="parent">
            <div className={`child-${currentRadioValue}`}></div>
         </div>
         <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-lg-3">Choose ad placement:</div>
            <div className="col-lg-9">
               <div className="row gy-3">
                  <div className="col-lg-6">
                     <div>
                        <input
                           id="radio-item-1"
                           name="radio-item-1"
                           type="radio"
                           value="radio-1"
                           onChange={handleRadioChange}
                           checked={currentRadioValue === 'radio-1'}
                        />
                        <label
                           htmlFor="radio-item-1"
                           style={{ paddingLeft: '10px' }}
                        >
                           High Left
                        </label>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div>
                        <input
                           id="radio-item-2"
                           name="radio-item-2"
                           type="radio"
                           value="radio-2"
                           onChange={handleRadioChange}
                           checked={currentRadioValue === 'radio-2'}
                        />
                        <label
                           htmlFor="radio-item-2"
                           style={{ paddingLeft: '10px' }}
                        >
                           High Right
                        </label>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div>
                        {' '}
                        <input
                           id="radio-item-3"
                           name="radio-item-3"
                           type="radio"
                           value="radio-3"
                           onChange={handleRadioChange}
                           checked={currentRadioValue === 'radio-3'}
                        />
                        <label
                           htmlFor="radio-item-3"
                           style={{ paddingLeft: '10px' }}
                        >
                           Low Left(Recommended.See Why)
                        </label>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div>
                        {' '}
                        <input
                           id="radio-item-4"
                           name="radio-item-4"
                           type="radio"
                           value="radio-4"
                           onChange={handleRadioChange}
                           checked={currentRadioValue === 'radio-4'}
                        />
                        <label
                           htmlFor="radio-item-4"
                           style={{ paddingLeft: '10px' }}
                        >
                           Low Right
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
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
