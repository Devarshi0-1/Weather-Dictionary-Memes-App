import './navBar.css'

function NavBar() {
    return (
        <nav>
            <div className="leftNav"><h1>Devarshi</h1></div>
            <div className="rightNav">
                <ul className="navList">
                    <li className="navListItems"><a href="#">Weather</a></li>
                    <li className="navListItems"><a href="#">Dictionary</a></li>
                    <li className="navListItems"><a href="#">MemeApp</a></li>
                    <li className="navListItems"><a href="#">AboutMe</a></li>
                    <li className="navListItems"><a href="#">ContactMe</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar