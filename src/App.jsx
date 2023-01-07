import './App.css'

import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'
import AnimatedRoutes from './Components/AnimatedRoutes'

function App() {

  return (
    <BrowserRouter>
      <div className='bodyContainer'>
        <NavBar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
