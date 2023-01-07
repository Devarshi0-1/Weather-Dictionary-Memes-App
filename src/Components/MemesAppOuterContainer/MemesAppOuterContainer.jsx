import './memesAppOuterContainer.css'
import MemesAppMain from '../MemesAppMain/MemesAppMain'
import { motion } from 'framer-motion'

function MemesAppOuterContainer() {
    return (
        <motion.main
            id='memesAppOuterContainer'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: "100%", opacity: 1 }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <MemesAppMain />
        </motion.main>
    )
}

export default MemesAppOuterContainer