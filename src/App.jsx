import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

// Load Countries
const loadCountries = async () => { 
  const countries = await fetch('https://openapi.programming-hero.com/api/all')
  const response = await countries.json()
  return response;
}

function App() {
  const countriesPromise = loadCountries()

  return (
    <>
      <Suspense fallback={<h3>Countries are loading! Please wait...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
