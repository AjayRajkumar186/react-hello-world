import React, { useState } from 'react'
import './CounterComponents.css'

const CounterComponents = () => {

    const [countvariable, setCountvariable] = useState(0); 

    function decreaseByOne() {
     setCountvariable(countvariable - 1)
   }
 
   function increaseByOne() {
     setCountvariable(countvariable + 1)
   } 


  /* its work in console not in ui like web page 
   let countvariable = 0
 
   function decreaseByOne() {
     countvariable -= 1
     console.log(countvariable)
   }
 
   function increaseByOne() {
     countvariable += 1
     console.log(countvariable)
   } */

/*   const [countvariable, setCountvariable] = useState(0);

  const increase = () => {
    setCountvariable(countvariable + 1)

  };
  const decrease = () => {
    setCountvariable(countvariable - 1)
  }; */

  const reset = () => {
    setCountvariable(0)
  };

  return (
    <div className='count'>
      <h2>Counter</h2>
      <div className='count-container'>
        <button onClick={decreaseByOne}>-1</button>
        <p>{countvariable}</p>
        <button onClick={increaseByOne}>+1</button>
         <button className='rest-btn' onClick={reset}>rest</button>
      </div>
     
    </div>
  )
}

export default CounterComponents