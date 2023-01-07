import WeatherOuterContainer from './WeatherOuterContainer/WeatherOuterContainer'
import MemesAppOuterContainer from './MemesAppOuterContainer/MemesAppOuterContainer'

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<WeatherOuterContainer />} />
                <Route path='memesApp' element={<MemesAppOuterContainer />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes