import './App.css'

import NavBar from './Components/NavBar/NavBar'
import WeatherOuterContainer from './Components/WeatherOuterContainer/WeatherOuterContainer'

function App() {

  return (
    <div className='bodyContainer'>
      <NavBar/>
      <WeatherOuterContainer />
    </div>
  )
}

export default App
