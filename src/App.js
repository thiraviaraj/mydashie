import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route, {Switch} from 'react-router-dom/Route';
import TestClassComp from './testClassComp';
import MainPage from './mainPage';
import DisplayCounter from './lifeCycleHooks';
import SideBar from './Components/SideBar';
import Login from './Components/login';
import HomePage from './Components/HomePage';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';

class App extends Component {
  render() {
    return (
        <div id="Container">
          {/* <MainPage>
            <TestClassComp></TestClassComp>
            <DisplayCounter></DisplayCounter>
          </MainPage> */}
          {/* <SideBar></SideBar> */}
          {/* <Switch> */}
          <Router basename={process.env.PUBLIC_URL}>
            <>
            {/* <Route path="/" exact component={Login} /> */}
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/mydashie" component={HomePage} />
            <Route path="/HomePage" component={HomePage} />
          </>
          {/* <Route component={HomePage} /> */}
          {/* <HomePage></HomePage> */}
          
          </Router>
          {/* </Switch> */}
        </div>
    );
  }
}

export default App;
