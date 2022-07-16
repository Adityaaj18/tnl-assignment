import React from 'react'

const Loading = () => {
  return (
    <div  style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center', 
        marginTop: '12%'
       
     }}><img src={require('../img/loading.gif')} alt="" style={{ height: '50px', width: '50px' }} /></div>
  )
}

export default Loading