import React, { useState,useEffect } from 'react'

const WeatherCard = ( { tempInfo }) => {

    const [weatherState, setWeatherState] = useState("");
    console.log(tempInfo);
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    useEffect(() => {
        if(weathermood){
            switch (weathermood) {
                case "Clouds": setWeatherState("wi-day-cloudy");
                    break;
                    case "Haze": setWeatherState("wi-fog");
                    break;
                    case "Clear": setWeatherState("wi-day-sunny");
                    break;
                    case "Mist": setWeatherState("wi-dust");
                    break;
                    case "Rain": setWeatherState("wi-rain");
                    break;
                    case "Hail": setWeatherState("wi-hail");
                    break;
                    case "ThunderStorm": setWeatherState("wi-thunderstorm");
                    break;
                    case "Rain wind": setWeatherState("wi-rain-wind");
                    break;
                    case "Smoke": setWeatherState("wi-smoke");
                    break;
            
                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood])
    
    
    

    let sec = sunset;
    let date = new Date(sec * 1000);
    let tempStr = `${date.getHours()}:${date.getMinutes()}`

  return (
    <>
    <div className='main-container'>
        <div className='img-container'>
        <i className={`wi ${weatherState}`}></i>
        </div>
        <div className='weather-info'>
            <div className='info'>
                <span>{temp}&deg;C</span>
            </div>
            <div className='about-weather'>
                <div className='sun'>{weathermood}</div>
                <div className='place'>{name}, {country}</div>
            </div>
            <div className='date'>{new Date().toLocaleString()}</div>
        </div>
        <div className='border'>
            <div className='first-box'>
                <div className='first-box-info'>
                    <p className='img1'>
                        <i className={"wi wi-sunset"}></i>
                    </p>
                    <p>{tempStr} PM
                        <br/>
                        Sunset
                    </p>
                </div>

                <div className='first-box-info'>
                    <p className='img1'>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p>{humidity}%
                        <br/>
                        Humidity
                    </p>
                </div>

                <div className='first-box-info'>
                    <p className='img1'>
                        <i className={"wi wi-rain"}></i>
                    </p>
                    <p>{pressure} mb
                        <br/>
                        Pressure
                    </p>
                </div>

                <div className='first-box-info'>
                    <p className='img1'>
                        <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p>{speed} Km/h
                        <br/>
                        Wind Speed
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default WeatherCard