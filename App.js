import React from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './Components/Navbar/navbar.css'
import About from './Components/About.jsx';
import ContactUs from './Components/ContactUs.jsx';
// import Navbar from './Components/Navbar/Navbar.jsx';

import Home from './Components/pages/homepage';
import Type from './Components/pages/CheckHealth';


const App = () => {
  return(
  <>
  <Router>
    
      {/* <Navbar/> */}

      <Switch>

   

      <Route path='/' compontent={LoginForm} exact>
        <LoginForm/>
      </Route>
      
      <Route path='/Login' compontent={LoginForm} exact>
        <LoginForm/>
      </Route>

      <Route path='/About' compontent={About} exact>
        <About />
      </Route>
      
      <Route path='/Contact_Us' compontent={ContactUs} exact>
        <ContactUs/>
      </Route>

      <Route path="/home" compontent={ Home } exact>
        <Home/>
          </Route>
    <Route path="/type" compontent={ Type } exact> 
        <Type/>
    </Route>

    </Switch>


    </Router>
    
</>
)
}
export default App