import React from "react";
import "../styles1.css"
import DayCard from "./DayCard";



const ForecastContainer = ({weather, temperature}) => {

    
    return ( 

    <article className="opa">
        <div className="container-fluid">
            <h1 className="display-1">
                WEATHER APP
            </h1>

            <h5 className="CountryCity-text">
                Sebastian Cantor
            </h5>
        </div>

        <div className="row-card">

            <DayCard weather={weather} temperature={temperature}/>

        </div>  

    </article>
    )
}


export default ForecastContainer;