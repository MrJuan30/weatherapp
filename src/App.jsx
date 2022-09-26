import './App.css'
import ForecastContainer from './components/ForecastContainer'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj);
  }
  navigator.geolocation.getCurrentPosition(success)
}, [])

// --------------peticion de clima --------------

useEffect(() => {
  if(coords){
    const APIKEY = '159adcb370a1e3fb53896bd1a410564b'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
      .then(res => { 
      const celsius = (res.data.main.temp - 273.15).toFixed(0)
      const fahrenheit = (celsius * 9 / 5 + 32).toFixed(0)
      setTemperature({celsius, fahrenheit})
      setWeather(res.data) })

      .catch(err => console.log(err))
  }
}, [coords])


  return (
    <ForecastContainer weather={weather} temperature={temperature} />
  )
}

export default App;
