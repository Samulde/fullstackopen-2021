import React from 'react';
import Header from './Header';


const Numbers = ({ persons, name, number, setPerson, setName, setNumber}) => {

    const addName = (event) => {
        event.preventDefault();

        if (name === '' | number === '') {
          alert('Please fill in all the required boxes')
          return
        }

        const newName = {
          name: name,
          number: number
        };

        const found = persons.find(person => person.name === name)
        
        if (typeof found === 'undefined') {
          setPerson(persons.concat(newName));
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
          <Header text="Numbers" />
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

