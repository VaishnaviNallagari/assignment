import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import Home from './components/Home'
import dashboard from './components/dashboard'
import About from './components/About'
import Team from './components/Team'


class App extends Component  {
  render(){
    return (
      <div>
         <BrowserRouter>
      <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/dashboard"} component={dashboard} />
      <Route exact path={"/About"} component={About}/>
      <Route exact path={"/Team"} component={Team}/>
     
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
