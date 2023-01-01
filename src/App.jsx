import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import WeatherOuterContainer from './Components/WeatherOuterContainer/WeatherOuterContainer'
import DictionaryOuterContainer from './Components/DictionaryOuterContainer/DictionaryOuterContainer'
import MemesAppOuterContainer from './Components/MemesAppOuterContainer/MemesAppOuterContainer'

function App() {

  return (
    <BrowserRouter>
      <div className='bodyContainer'>
        <NavBar />
        <Routes>
          <Route path='/' element={<WeatherOuterContainer />} />
          <Route path='dictionary' element={<DictionaryOuterContainer />} />
          <Route path='memesApp' element={<MemesAppOuterContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
