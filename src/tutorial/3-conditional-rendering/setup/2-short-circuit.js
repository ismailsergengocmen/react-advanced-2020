import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  const firstValue = text || 'hello world' //Or operation returns first true or last false
  const secondValue = text && 'hello world' //And operation returns last true or first false

  return (
    <>
      {/*<h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || 'john doe'}</h1>
      <button className='btn' OnClick={() => setIsError(!isError)}>
        {' '}
        toggle error
      </button>
      {!text && <h1>hello world</h1>}
      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error...</p> : <div> <h2> there is no error...</h2></div>
      /*If error is true paragraph will be displayed*/} 
    </>
  )
}

export default ShortCircuit
