import React from "react"
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import LocationList from "./components/LocationsList"
import { Nav, NavLink, NavItem } from "reactstrap"
import {
    BrowserRouter as Router,
    Route,
    Link as RRLink,
    Switch,
} from "react-router-dom"
import "./index.css"

export default function App() {
    return (
        <Router>
            <div>
                {/* <nav className='main-nav'>
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
                </nav> */}
                <Nav>
                    <NavItem>
                        <NavLink tag={RRLink} to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRLink} to='characters'>
                            Characters
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RRLink} to='location'>
                            Location
                        </NavLink>
                    </NavItem>
                </Nav>
                <Switch>
                    <Route exact path='/' component={WelcomePage} />
                    <Route path='/characters' component={CharacterList} />
                    <Route path='/location' component={LocationList} />
                </Switch>
            </div>
        </Router>
    )
}
