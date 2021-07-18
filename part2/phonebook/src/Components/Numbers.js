import React from 'react';
import Header from './Header';
import personsServices from '../services/persons.js'

const Numbers = ({ persons, name, number, setPerson, setName, setNumber}) => {

    const addName = (event) => {
        event.preventDefault();

        if (name === '' | number === '') {
          alert('Please fill in all the required boxes')
          return
        }

        const newPerson = { name, number };

        const found = persons.find(person => person.name === name)
        
        if (typeof found === 'undefined') {
          personsServices
            .create(newPerson)
            .then(data => console.log(data)
            )

          setPerson(persons.concat(newPerson));
          
          setName('');
          setNumber('');
        } else {
          alert(`${name} is already added to phonebook`)
        }

    };

    const inputChangeHandler = (event) => {
        setName(event.target.value)
    };

    const numberInputChangeHandler = (event) => {
      setNumber(event.target.value)
    }



    return (
        <>
          <Header text="add a new" />
          <form onSubmit={addName}>
            <div>
              name: 
              <input 
                value={name} 
                onChange={inputChangeHandler}
              />
            </div>

            <div>
              number:
              <input 
              value={number} 
              onChange={numberInputChangeHandler}
              />
            </div>
            <button type="submit">add</button>

          </form>
        </>
    )
}

export default Numbers;

