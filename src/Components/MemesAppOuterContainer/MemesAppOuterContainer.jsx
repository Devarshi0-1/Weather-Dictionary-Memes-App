import './memesAppOuterContainer.css'
import favIcon from '../../../public/memePageIcon.png'
import MemesAppMain from '../MemesAppMain/MemesAppMain'
import { motion } from 'framer-motion'

function MemesAppOuterContainer() {
    document.title = "Memes"
    const favicon = document.getElementById("favIcon");
    favicon.setAttribute('href', favIcon)
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