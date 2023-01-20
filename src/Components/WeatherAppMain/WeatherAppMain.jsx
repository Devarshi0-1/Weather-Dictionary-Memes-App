import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import useFetch from '../useFetch';
import './weatherAppMain.css'


function WeatherAppMain() {

    const [cityName, setCityName] = useState("London")
    const [searchText, setSearchText] = useState("London")
    const apiKey = '08944be3d93b96381bb076f055633247'
    const [ error, loading, apiData ] = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=metric`)

    const typingSearch = (e) => {
        setCityName(e.target.value)
    }

    const enterPressed = (e) => {
        if (e.key === 'Enter') {
            setSearchText(e.target.value)
        }
    }

    return (
        <div id="weatherApp">
            <div className="weatherHeader">
                <input type="text" placeholder='Enter City Name' value={cityName} onChange={typingSearch} onKeyDown={enterPressed} />
                <div className="searchCont"><BsSearch className='searchIcon' onClick={() => setSearchText(cityName)} /></div>
            </div>
            {(error ? <h2 className='loadingOrErr'>{error}</h2> :
                (!loading ?
                    <div className="dataCont">
                        <div className="primaryDataCont">
                            <h1 className="cityName">{apiData.name}</h1>
                            <p className="temp">{apiData.main.temp}°C</p>
                            <p className="weatherDesc">{apiData.weather[0].main}</p>
                            <div className='weatherIconCont'>
                                <img src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@4x.png`} alt="Weather Icon" className='weatherIcon' />
                            </div>
                        </div>
                        <div className="secondaryDataCont">
                            <div className='minTemp'>
                                <p>{apiData.main.temp_min}°C</p>
                                <p>Min Temp</p>
                            </div>
                            <div className='maxTemp'>
                                <p>{apiData.main.temp_max}°C</p>
                                <p>Max Temp</p>
                            </div>
                            <div className='feelsLike'>
                                <p>{apiData.main.feels_like}°C</p>
                                <p>Feels Like</p>
                            </div>
                            <div className='humidity'>
                                <p>{apiData.main.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                            <div className='windSpeed'>
                                <p>{apiData.wind.speed}KPH</p>
                                <p>Wind Speed</p>
                            </div>
                            <div className='pressure'>
                                <p>{apiData.main.pressure}mm</p>
                                <p>Pressure</p>
                            </div>
                        </div>
                    </div>
                    : <h2 className='loadingOrErr'>Fetching Data...</h2>
                )
            )}
        </div>
    )
}

export default WeatherAppMain