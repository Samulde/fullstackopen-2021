import React from 'react';
import Header from './Header';


const Phonebook = ({ persons, setFilterName }) => {
    const filterChangeHandler = (event) => {
      setFilterName(event.target.value)
    }

    return (
        <>
          <Header text="Phonebook" />
          filter shown with 
          <input onChange={filterChangeHandler}/> 
          <Header text="add a new" />
          <ul>
            {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
          </ul>
        </>
    )
}

export default Phonebook;

