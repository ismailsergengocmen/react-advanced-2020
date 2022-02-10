import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  //Hooks can not be used in conditional code blocks. So condition added into the hook.
  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
  }, [value]) // The closed bracket reprensents dependency list. By adding this, when the element inside
  // closed bracket changes, use effect will be re-rendered. If it's empty, the use effect will only
  // initially rendered.

  useEffect(() => {
    console.log('hello world')
  }, [])

  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  )
}

export default UseEffectBasics
