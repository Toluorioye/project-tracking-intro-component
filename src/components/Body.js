import React from 'react'
import device from "../assets/illustration-devices.svg"
import "../styles/Body.css"

const Body = () => {
  return (
    <div className='body'> 
    
       <img src={device} alt="" className='bodyimg'/>
       <div className='bodytext'>
          <h5><span>New</span> Monograph Dashboard</h5>
          <h1>Powerful insights into your team</h1> 
          <h3>Project planning and time tracking <br/> for agile teams</h3> 
          <p><button className='demobtn'>SCHEDULE A DEMO</button>
          TO SEE A LIVE PREVIEW
          </p>
       </div>
        
      
      
         

    </div>
  )
}

export default Body