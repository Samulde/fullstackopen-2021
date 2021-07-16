import React, { useState } from 'react'
import Numbers from './Components/Numbers'
import Phonebook from './Components/Phonebook'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('a new name...')
  const [ newNumber, setNewNumber ] = useState('a new number...')
  const [ filterName, setFilterName ] = useState('')
  
  
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
