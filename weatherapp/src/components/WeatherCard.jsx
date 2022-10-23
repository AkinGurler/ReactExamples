import React from 'react'
import Clear from "../assets/sun.png"
import Clouds from "../assets/cloudy.png"
import Rain from "../assets/rainy.png"


const WeatherCard = ({dailyData}) => {
    const images={
        Clear,
        Clouds,
        Rain,
}

    function getImageByKey(key) {
        return images[key]
      }

    const {weather:[{description,main}],main:{feels_like,temp_max,temp_min},dt_txt}=dailyData
  return (
    <div className='weather-card'>
        
        <h5>{dt_txt}</h5>
        <h5>{description}</h5>
        <img src={getImageByKey(main)} width="40px" height="40px" alt="" />
        <h5>Feels {feels_like}</h5>
        <h5>{(parseInt(temp_max)+parseInt(temp_min))/2}</h5>
    </div>
  )
}

export default WeatherCard