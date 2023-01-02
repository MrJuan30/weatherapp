import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import "../styles1.css"

const LoadingScreen = () => {
  return (
    <div className='LoadingScreen'>
        <HashLoader color="#fcf3ec" />
        <h1>Waiting Info...</h1>
    </div>
  )
}

export default LoadingScreen