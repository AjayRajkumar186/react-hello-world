import React from 'react'
import './GreetComponent.css'



 function GreetComponent({userName}) {
  return (
    <div className='greet-container'>
      <h1>Hello {userName}!</h1>
    </div>
  )
}

export default GreetComponent;