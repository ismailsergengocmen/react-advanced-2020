import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        {' '}
        show/hide{' '}
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [size,setSize] = useState(window.innerWidth)
  
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize',checkSize)
    return () => {
      // Cleanup function
      window.removeEventListener('resize', checkSize)
    } 
  },[]) // Dependecy list did not prevent multiple event listener creation because every time
  // toggle occurs a new event listener created. That's why clean up function needed.

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1> 
      <h2>size: {size} px</h2>
    </div>
  )
}

export default ShowHide
