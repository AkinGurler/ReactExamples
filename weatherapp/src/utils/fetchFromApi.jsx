import axios from "axios"

export const getWeatherFromApi=async(lan,lon)=>{
    
    console.log(process.env.WEATHER_API_KEY)
    const {data}=await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${lon}&appid=2073e8809a182e3af6853c1fd2fe955b`)
    const feels=data.main.feels_like;
    console.log("data",data)
    const {main:{feels_like,temp,temp_max,temp_min}}=data
   
    return data
}