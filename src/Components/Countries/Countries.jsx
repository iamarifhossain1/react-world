import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }         

    const handleVisitedFlags = (flag) => { 
       const newVisitedFlags = [...visitedFlags, flag]
       setVisitedFlags(newVisitedFlags)
        
    }
    
    return (
        <div>
            <h2>React World on The Go...: {countries.length}</h2>
            <h3>Total Visited Countries {visitedCountries.length}</h3>
            <h3>Total Visited Flags: {visitedFlags.length}</h3>
            <ol>
               {
                visitedCountries.map(country => <li>{country.name.common}</li>)
               }
            </ol>

               <div className='flag-container'>
                    {
                    visitedFlags.map((flag, index) =><img key={index} src={flag}></img>)
                }
               </div>

            <div className='countries'>
                {
                    countries.map(country => <Country 
                        key={country.ccn3.ccn3} 
                        country={country} 
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;