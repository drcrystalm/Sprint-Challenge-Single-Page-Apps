import React from "react"
import Header from "./components/Header.js"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import LocationList from "./components/LocationsList"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

export default function App() {
    return (
        <Router>
            <div>
                <Header />
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
                <Switch>
                    <Route path='/' exact component={WelcomePage} />
                    <Route path='/characters' component={CharacterList} />
                    <Route path='/location' component={LocationList} />
                </Switch>
            </div>
        </Router>
    )
}
