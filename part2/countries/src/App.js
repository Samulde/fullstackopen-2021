import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Components/Search'
import Results from './Components/Results'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [showCountry, setShowCountry] = useState('')

  useEffect( () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const countriesToShow = filter === ''
        ? countries
        : countries.filter(country => country.name.toUpperCase().startsWith(filter.toUpperCase()))
  
  console.log('Countries to show', countriesToShow);
  
  return (
    <div>
      <Search setFilter={setFilter} setShowCountry={setShowCountry} />
      <Results countries={countriesToShow} showCountry={showCountry} setShowCountry={setShowCountry}/>
    </div>
  );
}

export default App;
