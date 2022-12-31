import { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import useFetch from '../useFetch';
import './weatherAppMain.css'


function WeatherAppMain() {

    const [cityName, setCityName] = useState("Mumbai")
    const [searchText, setSearchText] = useState("Mumbai")
    const { error, loading, apiData } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=08944be3d93b96381bb076f055633247&units=metric`)

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
                        <h2>{`${apiData.name}, ${apiData.sys.country}`}</h2>
                        <p className="temperature">{apiData.main.temp}</p>
                        <img src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`} alt="" />
                        <p className="weatherDesc">{(apiData.weather[0].description).toUpperCase()}</p>
                        <p className="humidity">Humidity: {apiData.main.humidity}%</p>
                        <p className="windSpeed">Wind: {apiData.wind.speed} Km/hr</p>
                    </div> :
                    <h2 className="loading">Loading...</h2>
                )
            )}
        </div>
    )
}

export default WeatherAppMain