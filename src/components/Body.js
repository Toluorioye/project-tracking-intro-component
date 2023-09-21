import React from 'react'
import device from "../assets/illustration-devices.svg"
import "../styles/Body.css"

const Body = () => {
  return (
    <main className='body'> 
    
       <img src={device} alt="" className='bodyimg'/>
       <section className='bodytext'>
          <h5><span>New</span> Monograph Dashboard</h5>
          <h1><bold>Powerful insights into your team</bold></h1> 
          <h3>Project planning and time tracking <br/> for agile teams</h3> 
          <p><button className='demobtn'>SCHEDULE A DEMO</button>
          TO SEE A LIVE PREVIEW
          </p>
       </section>
        
      
      
         

    </main>
  )
}

export default Body