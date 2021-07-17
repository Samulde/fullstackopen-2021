import React from 'react';


const Result = ({ country, setShowCountry }) => {

    const buttonClickHandler = (event) => {
        setShowCountry(country.name)
    }

    return (
        <div>
            {country.name}
            <button onClick={buttonClickHandler}>Show</button>
        </div>
    )
}

export default Result;