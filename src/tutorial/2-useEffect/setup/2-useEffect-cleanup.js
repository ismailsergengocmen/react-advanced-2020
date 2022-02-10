import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => { //After every render first cleanup function works
    window.addEventListener('resize',checkSize)
    /* return () => { //cleanup function
       console.log('cleanup')
       window.removeEventListener('resize',checkSize)
    } */ 
  },[]) 
  /* Dependency list works like cleanup function for this particular example. Normally, without cleanup function,
    in every render there will be new event listener created cumulatitvely. Clean up function prevents that 
    by being called before. Dependecy list lets useeffect be called only in first render so they reach 
    to the same conclusion */
  
  return (
    <>
      <h1>wnidows</h1>
      <h2>{size} PX </h2>
    </>
  )
}

export default UseEffectCleanup
