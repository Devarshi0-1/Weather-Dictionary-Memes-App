import { Link } from 'react-router-dom'
import './navBar.css'

function NavBar() {
    return (
        <nav>
            <div className="leftNav"><h1>Devarshi</h1></div>
            <div className="rightNav">
                <ul className="navList">
                    <li className="navListItems"><Link to="/">Weather</Link></li>
                    <li className="navListItems"><Link to="/dictionary">Dictionary</Link></li>
                    <li className="navListItems"><Link to="/memesApp">MemeApp</Link></li>
                    <li className="navListItems"><Link href="#">AboutMe</Link></li>
                    <li className="navListItems"><Link href="#">ContactMe</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar