import { useState, useEffect, useRef } from 'react';
import { BsSearch } from "react-icons/bs";
import { FaCloudSun } from "react-icons/fa";
import './weatherAppMain.css'
import React from "react";


function WeatherAppMain() {

    const [cityName, setCityName] = useState("Mumbai")
    const [searchText, setSearchText] = useState("Mumbai")
    const [apiData, setApiData] = useState({})
    const [loading, setLoading] = useState(true)

    const typingSearch = (e) => {
        setCityName(e.target.value)
    }

    const fetchData = () => {
        setSearchText(cityName)
    }


    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=08944be3d93b96381bb076f055633247&units=metric`
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could Not Fetch Data From The Resource")
                }
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setApiData(data)
                setLoading(false)
            }).catch((err) => {
                (
                    console.log(err)
                )
            })
    }, [searchText])

    return (
        <div id="weatherApp">
            <div className="weatherHeader">
                <input type="text" placeholder='Enter City Name' value={cityName} onChange={typingSearch} />
                <div className="searchCont"><BsSearch className='searchIcon' onClick={fetchData} /></div>
            </div>

            {(!loading ?
                <div className="dataCont">
                    <h2>{`${searchText}, ${apiData.sys.country}`}</h2>
                    <p className="temperature">{apiData.main.temp}</p>
                    <FaCloudSun className='cloudSunIcon' />
                    <p className="weatherDesc">Clear Sky</p>
                    <p className="humidity">Humidity: 58%</p>
                    <p className="windSpeed">Wind: 3.7 Km/hr</p>
                </div> :
                <h2 h2 className="loading">Loading...</h2>
            )}
        </div>
    )
}

export default WeatherAppMain