import React from 'react';
import personsServices from '../services/persons'

const Person = ({ person, persons, setPersons }) => {
    const deleteButtonHandler = (event) => {
        console.log(person.id)
        personsServices
            .remove(person.id)
            .then(() => console.log(person.id, ' removed.'))
            .catch( () => console.log(person.id, ' already removed.'));

        setPersons(persons.filter(x => x.id !== person.id ))
    }    

    return (
        <li key={person.id}>
            {person.name} {person.number} 
            <button onClick={deleteButtonHandler}>Delete</button>
        </li>
    )
}


export default Person;