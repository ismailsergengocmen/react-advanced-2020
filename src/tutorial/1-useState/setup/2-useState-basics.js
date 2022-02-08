import React, { useState } from 'react'

const UseStateBasics = () => {
  /* Uncomment to see useState mechanism. Usestate holds element that will be changed 
  in their first index and the method that will change the element in their second index*/

  /* console.log(useState('hello world'));
  const value = useState(1)[0]
  const handler = useState(1)[1]
  console.log(value,handler);  */


  const [text, setText] = useState('random title')
  
  const handleClick = () => {
    setText(109); //Changes text variable's value to given string 
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
