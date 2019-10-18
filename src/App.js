import React from "react"

import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import LocationList from "./components/LocationsList"
import SearchForm from "./components/SearchForm"
import PostList from "./components/PostList"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

export default function App() {
    return (
        <Router>
            <div>
                <nav className='main-nav'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/postlist'>PostList</Link>
                        </li>
                        <li>
                            <Link to='/location'>Location</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={WelcomePage} />
                    {/* <Route path='/characters' component={CharacterList} /> */}
                    <Route path='/location' component={LocationList} />
                    <Route path='/postlist' component={PostList} />
                </Switch>
            </div>
        </Router>
    )
}
