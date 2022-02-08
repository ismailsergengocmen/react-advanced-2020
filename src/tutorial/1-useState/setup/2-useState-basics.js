import React, { useState } from 'react'
// use
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  /* Uncomment to see useState mechanism. Usestate holds element that will be changed 
  in their first index and the method that will change the element in their second index*/

  /* console.log(useState('hello world'));
  const value = useState(1)[0]
  const handler = useState(1)[1]
  console.log(value,handler);  */

  const [text, setText] = useState('random title') //Array destructuring
  // Does the same job with the upper commented lines
  
  const handleClick = () => {
    if(text === 'random title')
      setText(109); //Changes text variable's value to given string
    else
      setText('random title') 
  };

  return (
    <React.Fragment>
      <h1> {text} </h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
