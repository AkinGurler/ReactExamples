import React from 'react'
import { useWeatherData } from '../context/WeatherContext'
import WeatherCard from './WeatherCard'
import "./components.css"

const Weather = () => {
  const { weather, city } = useWeatherData()
  const weeklyData = []
  if (!weather) return "City Loading..."

  /* api return 3 hours response i need daily so 24/3 */
  for (let i = 0; i < 40; i = i + 8) {
    weeklyData.push(weather.list[i])
  }
  console.log("weeklyData", weeklyData)

  return (
    <div className='weather-container'>
      
      {weeklyData.map((dailyData,index) => (
          <div  key={index}>
            <WeatherCard dailyData={dailyData}/>
          </div>
      ))}
        </div>
  )
      }

      export default Weather