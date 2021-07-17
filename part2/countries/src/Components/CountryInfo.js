import React from 'react';

const CountryInfo = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>

            <h2>languages</h2>
            <ul>
            {country.languages.map((language) => <li key={country.name}>{language.name}</li>)}
            </ul>
            
            <div>
                <img 
                    src={country.flag}
                    alt={country.name}
                    width={240}
                />
            </div>
        </div>
    )
}


export default CountryInfo;