import { useState, useRef } from 'react';
import { BsSearch } from "react-icons/bs";
import useFetch from '../useFetch';
import './weatherAppMain.css'


function WeatherAppMain() {

    const [cityName, setCityName] = useState("Mumbai")
    const [searchText, setSearchText] = useState("Mumbai")
    const { error, loading, apiData } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=08944be3d93b96381bb076f055633247&units=metric`)
    const secondaryDataCont = useRef()

    const typingSearch = (e) => {
        setCityName(e.target.value)
    }

    return (
        <div id="weatherApp">
            <div className="weatherHeader">
                <input type="text" placeholder='Enter City Name' value={cityName} onChange={typingSearch} />
                <div className="searchCont"><BsSearch className='searchIcon' onClick={() => setSearchText(cityName)} /></div>
            </div>
            {(error ? <h2>{error}</h2> :
                (!loading ?
                    <div className="dataCont">
                        <div className="primaryDataCont">
                            <h1 className="cityName">{apiData.name}</h1>
                            <p className="temp">{apiData.main.temp}°C</p>
                            <p className="weatherDesc">{apiData.weather[0].main}</p>
                        </div>
                        <div className="secondaryDataCont" ref={secondaryDataCont}>
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
                    </div> :
                    <h2 className="loading">Loading...</h2>
                )
            )}
        </div>
    )
}

export default WeatherAppMain