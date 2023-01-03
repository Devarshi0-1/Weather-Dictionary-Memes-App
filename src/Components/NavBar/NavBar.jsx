import { useState } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar() {

    const [toggleState, setToggleState] = useState(null)

    const handleNavClick = (index) => {
        setToggleState(index)
    }

    return (
        <nav>
            <div className="leftNav"><h1>Devarshi</h1></div>
            <div className="rightNav">
                <ul className="navList">
                    <li className={`navListItems ${toggleState === 1 ? "active" : ''}`}  onClick={() => handleNavClick(1)}><Link to="/">Weather</Link></li>
                    <li className={`navListItems ${toggleState === 2 ? "active" : ''}`}  onClick={() => handleNavClick(2)}><Link to="/memesApp">MemeApp</Link></li>
                    <li className={`navListItems ${toggleState === 3 ? "active" : ''}`}  onClick={() => handleNavClick(3)}><a href="https://devarshi0personalportfolio.netlify.app/" target={"_blank"}>AboutMe</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar