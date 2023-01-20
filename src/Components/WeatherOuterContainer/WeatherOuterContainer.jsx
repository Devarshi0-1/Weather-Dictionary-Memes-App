import './weatherOuterContainer.css'
import WeatherAppMain from "../WeatherAppMain/WeatherAppMain"
import favIcon from '../../../public/weatherPageIcon.png'
import { motion } from 'framer-motion'

function WeatherOuterContainer() {
    document.title = "Live Weather"
    const favicon = document.getElementById("favIcon");
    favicon.setAttribute('href', favIcon)
    return (
        <>
            <motion.main
                id='weatherOuterContainer'
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: "100%", opacity: 1 }}
                exit={{ x: -window.innerWidth, transition: { duration: 0.1 } }}
            >
                <WeatherAppMain />
            </motion.main>
        </>
    )
}

export default WeatherOuterContainer