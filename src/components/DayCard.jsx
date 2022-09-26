import React from "react";
import { useEffect, useState } from 'react'


const DayCard = ({weather, temperature}) => {

    const [isCelsius, setIsCelsius] = useState(true)
    const changeTemperature = () => setIsCelsius(!isCelsius)

    return (
        <div className="col">
            <div className="card">

                <h3 className="card-title">Today´s Weather</h3>
                <br />

                <h2 className="text-date">
                        {`${weather?.name}, ${weather?.sys.country}`}
                </h2>

                <ul className='list-description'>
                    <li><i className='bx-tada-hover bx bx-wind'></i><span>Wind Speed</span> {weather?.wind.speed} m/s</li>
                    <li><i className='bx-tada-hover bx bxs-cloud' ></i><span>Clouds</span> {weather?.clouds.all}%</li>
                    <li><i className='bx-tada-hover bx bxs-thermometer'></i><span>Pressure</span> {weather?.main.pressure} hPa</li>
                </ul>

                <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" className="weather-image"/>


                <h4 className="text-temperature">
                {isCelsius?`${temperature?.celsius}°C` : `${temperature?.fahrenheit}°F`}
                </h4>


                <button className="btn-temperature" onClick={changeTemperature}>
                    {isCelsius ? 'Change to °F' : 'Change to °C'} 
                </button>

            </div>
        </div>
    )

};


export default DayCard