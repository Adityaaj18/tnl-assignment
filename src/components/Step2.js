import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext'

const Step2 = () => {
   const { setStep, userData, setUserData } = useContext(multiStepContext)
   return (
      <div>
         <div>
            <form>
               <div class="form-group row">
                  <label class="col-sm-2 col-form-label">
                     Upload media file
                  </label>
                  <div class="col-lg-6 col-sm-10">
                     <input type="file" class="form-control" />
                  </div>
               </div>
               <br />
               <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Lading page URL</label>
                  <div class="col-lg-6 col-sm-10">
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
                  <label class="col-sm-2 col-form-label">Message copy</label>
                  <div class="col-lg-6 col-sm-10">
                     <input
                        type="textarea"
                        class="form-control"
                        value={userData['message']}
                        onChange={(e) =>
                           setUserData({ ...userData, message: e.target.value })
                        }
                     />
                  </div>
               </div>
               <br />

               <div class="form-check">
                  <input
                     class="form-check-input"
                     type="radio"
                     name="flexRadioDefault"
                     id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                     Default radio
                  </label>
               </div>
               <div class="form-check">
                  <input
                     class="form-check-input"
                     type="radio"
                     name="flexRadioDefault"
                     id="flexRadioDefault2"
                     checked
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                     Default checked radio
                  </label>
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
