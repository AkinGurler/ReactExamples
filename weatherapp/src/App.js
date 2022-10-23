import { getValue } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CitySelection from './components/CitySelection'
import Header from './components/Header'
import { useWeatherData, WeatherProvider } from './context/WeatherContext'
import { getWeatherFromApi } from './utils/fetchFromApi'
import "./App.css"
import Weather from './components/Weather'

const App = () => {

  return (
    <div className='app'>
       <WeatherProvider>
      <Header/>
      <CitySelection  />
      <Weather />
      </WeatherProvider>
    </div>
     
  )
}

export default App