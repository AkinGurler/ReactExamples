import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState()
    const [city, setCity] = useState("")
    const [active, setActive] = useState(false)

    const cityToLocationAndWeather = async (city) => {
        const { data } = await axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=2073e8809a182e3af6853c1fd2fe955b`)
        const { lat, lon } = data[0]
        const weatherData = await axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2073e8809a182e3af6853c1fd2fe955b&units=metric`)
        setWeather(weatherData.data)

    }

    useEffect(() => {
        cityToLocationAndWeather(city)
    }, [active])
    const values={
        weather,
        setWeather,
        city,
        setCity,
        active,
        setActive
    }

    return (
         <WeatherContext.Provider value={values}>
    {children}
    </WeatherContext.Provider>
    )
}

export const useWeatherData = ()=>useContext(WeatherContext)