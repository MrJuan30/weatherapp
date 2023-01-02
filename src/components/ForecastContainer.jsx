import React from "react";
import "../styles1.css"
import DayCard from "./DayCard";



const ForecastContainer = ({ weather, temperature }) => {


    return (

        <article>
            <div className="container-fluid">
                <DayCard weather={weather} temperature={temperature} />
                <div className="Background_Gif"></div>
                <p className="Designer_Text">Created and Designed by Juan Sebastian Cantor</p>
            </div>
        </article>
    )
}


export default ForecastContainer;