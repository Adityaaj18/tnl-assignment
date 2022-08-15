import React, { useContext, useState } from 'react'
import { multiStepContext } from '../StepContext'

const Step2 = () => {
   const { setStep, userData, setUserData } = useContext(multiStepContext)
   const [currentRadioValue, setCurrentRadioValue] = useState('radio-1')

   console.log(userData)
   const handleRadioChange = (e) => {
      setCurrentRadioValue(e.target.value)
      setUserData({ ...userData, adPosition: e.target.value })
   }
   return (
      <div>
         <div className="step2">
            <form>
               <div class="form-group row">
                  <label class="col-sm-3 col-form-label">
                     Upload media file
                  </label>
                  <div class="col-lg-7 col-sm-10">
                     <input type="file" class="form-control" />
                  </div>
               </div>
               <br />
               <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Lading page URL</label>
                  <div class="col-lg-7 col-sm-10">
                     <input
                        class="form-control"
                        value={userData['url']}
                        onChange={(e) =>
                           setUserData({ ...userData, url: e.target.value })
                        }
                     />
                  </div>
               </div>
               <br />
               <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Message copy</label>
                  <div class="col-lg-7 col-sm-10">
                     <textarea
                        class="form-control"
                        value={userData['message']}
                        onChange={(e) =>
                           setUserData({ ...userData, message: e.target.value })
                        }
                        rows="4"
                     ></textarea>
                  </div>
               </div>
               <br />
               <div class="form-group row">
                  <label class="col-sm-3 col-form-label">
                     Ad Terms & Conditions
                  </label>
                  <div class="col-lg-7 col-sm-10">
                     <div className="" style={{ paddingTop: '5px' }}>
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
                                 StreamPala Standard T&C
                              </label>
                           </div>
                        </div>
                        <p></p>
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
                                 I want to add my own T&C
                              </label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div style={{ display: 'flex', justifyContent: 'right' }}>
                  <div style={{ display: 'flex' }}></div>

                  <button
                     className="cancel"
                     style={{ marginRight: '13px' }}
                     onClick={() => setStep(1)}
                  >
                     Back
                  </button>
                  <button
                     className="view-more"
                     style={{}}
                     onClick={() => setStep(3)}
                  >
                     Next
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Step2
