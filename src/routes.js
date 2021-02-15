import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import About from './components/About'
import Websites from './components/Websites'
import Design from './components/Design'
import Contact from './components/Contact'

export default <Switch>
    <Route exact path="/" component = { Landing } />
    <Route path="/About" component = { About } />
    <Route path="/Websites" component = { Websites } />
    <Route path="/Design" component = { Design } />
    <Route path="/Contact" component = { Contact } />
</Switch>