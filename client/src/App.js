import React, {Fragment} from 'react'
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";



import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'


const App = ()=> {
  return (
    
    <AuthState>
      <ContactState>
        <AlertState>
        <Router>

          <Fragment>
            <Navbar></Navbar>
            <Alert />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/login" component={Login}/>
              </Switch>
            </div>
          </Fragment>

        </Router>
        </AlertState>
      </ContactState>
    </AuthState>
    
  );
}

export default App;
