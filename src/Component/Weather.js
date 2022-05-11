import React, {useState,useEffect} from 'react'
import './Weather.css'
import WeatherCard from './WeatherCard';

const Weather = () => {

    const [searchValue, setSearchValue] = useState("Delhi");
    const [tempInfo, setTempInfo] = useState({});

    const weatherInfo = async()=>{
    try{ 
        let url = `
        https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ceeace260a37288e13894916cb8dcefa`

        let res = await fetch(url);
        let data = await res.json();

        const {temp, humidity, pressure} = data.main;
        const {main:weathermood} = data.weather[0];
        const {name} = data;
        const {speed} = data.wind;
        const {country, sunset} = data.sys; 

        const newWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        }
        console.log(newWeatherInfo)

        setTempInfo(newWeatherInfo);
        
    }catch (error){
        console.log(error);
    }
    }

    useEffect(() => {
        weatherInfo()
    }, [])

   const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setSearchValue(event.target.value)
        }
        return;
      }

  return (
    <>
    <div className='search-container'>
        <div className='container'>
            <input type="search" className='search'
             autoFocus placeholder='Search...' 
             value={searchValue} 
             onChange={(e)=>setSearchValue(e.target.value)}
             onKeyDown={handleKeyDown}
             >
             </input>
            <button type='button' className='btn' 
            onClick={weatherInfo}>Search</button>
        </div>
    </div>
 
    <WeatherCard tempInfo={tempInfo}/>
    
    </>
  )
}

export default Weather