import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false)
   
    const handleVisit = () => { 
        // 1
        // if(visited) {
        //     setVisited(false)
        // }

        // else {
        //     setVisited(true)
        // }

        // 2. Ternary
        // setVisited(visited? false: true)

        // 3 Not Equal
        setVisited(!visited)
        handleVisitedCountries(country)
        
    }
    return (
        // <div className={`country ${visited && 'country-visited'}`}>
        <div className={`country ${visited ? 'country-visited' : 'country-not visited'}`}>
            <img className='img-size' src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h5>Name: {country.name.common}</h5>
            <p>Region: {country.region.region}</p>
            <p>Capital: {country.capital.capital}</p>
            <p>Total Population: {country.population.population}</p>
            <button onClick={handleVisit}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>Visited Flags</button>
            
        </div>
    );
};

export default Country;