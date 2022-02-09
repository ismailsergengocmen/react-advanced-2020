import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'hey',
  })

  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('hey')

  const changeMessage = () => {
    // This notation enables us to change only message attribute of the person
    // setPerson({ ...person, message: 'hello world' })

    setMessage('hi')
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{message}</h3>
      {/*notice that person.message does not change */}
      <h3>{person.message}</h3> 
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  )
}

export default UseStateObject


