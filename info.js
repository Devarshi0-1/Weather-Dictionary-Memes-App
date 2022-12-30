const url = 'https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=08944be3d93b96381bb076f055633247&units=metric'

const obj =
{
    "coord": {
        "lon": 80.35, "lat": 26.4667
    },
    "weather": [{
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
    }],
    "base": "stations",
    "main": {
        "temp": 285.93,
        "feels_like": 284.2,
        "temp_min": 285.93,
        "temp_max": 285.93,
        "pressure": 1019,
        "humidity": 36,
        "sea_level": 1019,
        "grnd_level": 1003
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.78,
        "deg": 34,
        "gust": 1.8
    },
    "clouds": {
        "all": 1
    },
    "dt": 1672339443,
    "sys": {
        "country": "IN",
        "sunrise": 1672363555,
        "sunset": 1672401340
    },
    "timezone": 19800,
    "id": 1267995,
    "name": "Kanpur",
    "cod": 200
}