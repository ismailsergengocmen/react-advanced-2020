import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default behavior and lets us deal form data on our own
    if (firstName && email) {
      // const person = {firstName:firstName,email:email}
      // If key name matches variable that holds the value, above version can be written instead upper one
      const person = { id: new Date().getTime().toString(), firstName, email }
      setPeople((people) => {
        return [...people, person]
      })
      setFirstName('')
      setEmail('')
    } else {
      console.log('empty values')
    }
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor=''> Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              // Access event target's value
            />
          </div>
          <div className='form-control'>
            <label htmlFor=''> Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit'> add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
