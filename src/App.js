import React from "react"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList.js"
import LocationsList from "./components/LocationsList"
import { Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

export default function App() {
    return (
        <>
            <nav className='main-nav'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/characters'>Characters</Link>
                    </li>
                    <li>
                        <Link to='/location'>Location</Link>
                    </li>
                </ul>
            </nav>

            <Route exact path='/' component={WelcomePage} />
            <Route path='/characters' component={CharacterList} />
            <Route path='/location' component={LocationsList} />
        </>
    )
}
