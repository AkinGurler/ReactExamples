import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useWeatherData } from '../context/WeatherContext'
import "./components.css"

const CitySelection = () => {
  const { city, setCity,setActive,active } = useWeatherData()
  
  return (
    <div className="city-input">
      <input type="text" name='city' value={city} placeholder={"Give Location"} onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => setActive(active===true? false:true)}>Weather</button>
    </div>
  )
}

export default CitySelection