import React from "react";
import { useEffect, useState } from 'react'
import 'boxicons'



const DayCard = ({ weather, temperature }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    const changeTemperature = () => setIsCelsius(!isCelsius)

    let today = new Date();
    let now = today.toLocaleTimeString();

    return (
        <div>
            <div className="card">
                <h2 className="CountryCity-text">
                    {`${weather?.name}`}
                </h2>
                <ul className='list-description'>
                    <li> <box-icon name='wind' color='#fff' size='2rem'></box-icon>: {weather?.wind.speed} m/s</li>
                    <br />
                    <li><box-icon name='shower' type='solid' color='#f7efef' size='2rem'></box-icon>: {weather?.main.humidity}%</li>
                </ul>
                <h2 className="Date_Text">{`${now}`}</h2>
                <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" className="weather-image" />
                <h3 className="Weather_Title">{`${weather?.weather[0].description}`}</h3>
                <div className="Temperature_Container">
                    <h4 className="text-temperature">
                        {isCelsius ? `${temperature?.celsius}°C` : `${temperature?.fahrenheit}°F`}
                    </h4>
                    <button className="btn-temperature" onClick={changeTemperature}>
                        {isCelsius ? '°F' : '°C'}
                    </button>
                </div>
            </div>
        </div>
    )

};


export default DayCard