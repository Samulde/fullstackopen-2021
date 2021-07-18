import React, { useEffect, useState } from 'react'
import Numbers from './Components/Numbers'
import Phonebook from './Components/Phonebook'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('a new name...')
  const [ newNumber, setNewNumber ] = useState('a new number...')
  const [ filterName, setFilterName ] = useState('')
  
  useEffect(() => {
    personService
      .getAll()
      .then(personsData => {
        setPersons(personsData)
      })
  }, []);


  const namesToShow = filterName === '' 
            ? persons
            : persons.filter(person => person.name.toUpperCase().startsWith(filterName.toUpperCase()))

  
  return (
    <div>
      <Numbers persons={persons} name={newName} number={newNumber} setPerson={setPersons} setName={setNewName} setNumber={setNewNumber}/>
      <Phonebook persons={namesToShow} setFilterName={setFilterName} />
    </div>
  )
}

export default App;
