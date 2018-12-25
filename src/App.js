import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TestClassComp from './testClassComp';
import MainPage from './mainPage';
import DisplayCounter from './lifeCycleHooks';
import SideBar from './Components/SideBar';
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
          
          <HomePage></HomePage>
        </div>
    );
  }
}

export default App;
