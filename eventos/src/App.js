import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from "../src/store/";
import  { Provider }  from 'react-redux';


/*PAGINAS*/
import Login from "./view/login";
import Novousuario from "./view/usuario-novo/Index";
import Home from "./view/home/index"
import Quemsomos from './view/quemsomos/index'
import usuariorecuperar from "./view/recuperar-senha";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/novousuario' component={Novousuario} />
        <Route exact path='/' component={Home} />
        <Route exact path='/quemsomos' component={Quemsomos} />
        <Route exact path='/usuariorecuperar' component={usuariorecuperar}/>

      </Router>
    </Provider>
  )
}

export default App;
