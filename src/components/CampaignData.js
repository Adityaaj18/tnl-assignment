import React, { useState } from 'react'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'

const CampaignData = () => {
    const [menuCollapse, setMenuCollapse] = useState(true)

    const menuIconClick = () => {
       menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
    }
  return (
    <div>
    <Header menuIconClick={menuIconClick} />
    <Sidebar menuCollapse={menuCollapse} />
    <div className="container" style={{ marginTop: '100px' }}>
       <h4>Campaign Data</h4>
       <div class="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    All Campaigns
  </button>
  <br/>
  <br/>
  <div className="card">
  <div className="card-body">
    <div className="row" style={{textAlign: 'center'}}>
    <div className="col-lg-3">Campaign name in long format</div>
    <div className="col-lg-3">4.10.2021-11.10.21</div>
    <div className="col-lg-3">####</div>
    <div className="col-lg-3">####</div>
    
    <div className="col-lg-3">Campaign Name</div>
    <div className="col-lg-3">Dates</div>
    <div className="col-lg-3">Views</div>
    <div className="col-lg-3">Spend</div>
    </div>
  </div>
</div>
</div>
    </div>
 </div>
  )
}

export default CampaignData