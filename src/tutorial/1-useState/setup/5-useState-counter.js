import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const reset = () =>{
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // When only the under line used, value can only be updated once even 
      // there are many consecutive clicks because it tries to get old value, not the current one
      // setValue(value + 1);

      //With this combination prevState can be updated multiple times because it gets current value
      setValue((prevState) => {
        return prevState + 1; 
      })
    }, 2000)
  }

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={reset}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
