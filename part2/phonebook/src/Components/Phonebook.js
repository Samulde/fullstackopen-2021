import React from 'react';
import Header from './Header';
import Person from './Person'

const Phonebook = ({ persons, setFilterName, setPersons }) => {
    const filterChangeHandler = (event) => {
      setFilterName(event.target.value)
    }

    return (
        <>
          <Header text="phonebook" />
          filter shown with 
          <input onChange={filterChangeHandler}/> 
          <Header text="numbers" />
          <ul>
            {persons.map(person => <Person person={person} persons={persons} setPersons={setPersons}/>)}
          </ul>
        </>
    )
}

export default Phonebook;

