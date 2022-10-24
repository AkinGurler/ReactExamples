import React from 'react'
import { useWeatherData } from '../context/WeatherContext'
import WeatherCard from './WeatherCard'
import "./components.css"
import Loader from './Loader'

const Weather = () => {
  const { weather, city } = useWeatherData()
  const weeklyData = []
  if (!weather) return (<Loader/>)

  /* api return 3 hours response i need daily so 24/3 */
  for (let i = 0; i < 40; i = i + 8) {
    weeklyData.push(weather.list[i])
  }
  console.log("weeklyData", weeklyData)

  return (
    <div className='weather-container'>
      <h1>{city}</h1>
      <div className='weather-card-container'>
        {weeklyData.map((dailyData,index) => (
          <div  key={index}>
            <WeatherCard dailyData={dailyData}/>
          </div>
      ))}
      </div>
        </div>
  )
      }

      export default Weather