import React from 'react';
import Result from './Result';
import CountryInfo from './CountryInfo';

const Results = ( {countries, showCountry, setShowCountry} ) => {
    if (countries.length === 1){
        return (
            <div><CountryInfo country={countries[0]} /></div>
        )
    }

    if (showCountry !== '') {
        console.log(showCountry);
        console.log('find', countries.find((country) => country.name === showCountry))
        
        return (
            <div><CountryInfo country={countries.find((country) => country.name === showCountry)}/> </div>
        )
    }
    
    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }

    if (countries.length === 0) {
        return (
            <div>No countries found with this filter</div>
        )
    }

    return (
        <div>
            {countries.map(country => <Result country={country} setShowCountry={setShowCountry}/>)}
        </div>
    )
};


export default Results;