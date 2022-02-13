import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object properties 

const ControlledInputs = () => {
  /* const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(''); */
  const [person,setPerson] = useState({firstName:'',email:'',age: ''});
  const [people, setPeople] = useState([]);

  const handleChange = (e) =>{
    const name = e.target.name // get the name attribıte of input
    const value = e.target.value
    setPerson({...person,[name]:value}) 
    //Square brackets lets us to select the attribute that will change
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age){ //Submit the form if all is entered
      const newPerson = {...person,id: new Date().getTime().toString()}
      setPeople([...people,newPerson])
      setPerson({firstName:"",email:"",age:""})
    }
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName' // handleChange get this value and add it to name attribute
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick = {handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
};

export default ControlledInputs;
