import React, { useState } from 'react'
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)
// prop drilling => When same data is being sent from parent to every child level
// For example, if there are 3 lineage and last one needs a method that first one access
// this method will be transferred by every child to the last one which is hard to control

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} />
    </section>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}
export default PropDrilling
