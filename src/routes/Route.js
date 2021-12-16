import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../page/Home/Home'
import Others from '../page/Others/Others'
import NewsPaper from '../page/NewsPaper/NewsPaper'
import About from '../page/About/About'
import Contact from '../page/Contact/Contact'


function Rota (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/others' component={Others}/>
                <Route path='/newspaper' component={NewsPaper}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Rota