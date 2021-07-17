import React, { useEffect, useState } from 'react';
import axios from 'axios';


const CountryInfo = ({country}) => {

    const [weather, setWeather] = useState({
        "main" : {
            "temp" : -9999
        },

        "wind" : {
            "speed" : -9999
        }
    })
  
    console.log(weather);
    
    useEffect( () => {

        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${country.name}&appid=${process.env.REACT_APP_API_KEY}`)
            .then( (response) => setWeather(response.data)
            )
    }, [])

    return (
        <div>
            <h1>{country.name}</h1>
            <div>capital {country.capital}</div>
            <div>population {country.population}</div>

            <h2>languages</h2>
            <ul>
            {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
            </ul>
            
            <div>
                <img 
                    src={country.flag}
                    alt={country.name}
                    width={240}
                />
            </div>

            <h2>Weather in {country.capital}</h2>
            <div><b>temperature: </b> {weather.main.temp - 273} Celcius </div>
            <div><b>wind: </b> {weather.wind.speed} mph</div>
        </div>
    )
}


export default CountryInfo;