import React from 'react';

const Search = ({ setFilter, setShowCountry }) => {
    const countriesFilterHandler = ( event ) => {
        setFilter(event.target.value);
        setShowCountry('');        
    }

    return (
        <>
            <div>find countries</div>
            <input onChange={countriesFilterHandler} />
        </>
    )
}


export default Search