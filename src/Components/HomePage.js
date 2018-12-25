import React from 'react';
import { BrowserRouter as Router, Switch, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import QuickViewWidget from './QuickViewWidget';
import NavBar from './NavBar';
import SideBar from './SideBar';

let HomePage = () => {
    
    return (
        <div id="main">
                <NavBar></NavBar>
                <SideBar></SideBar>
                <div id="quickViewWidgetViewer">
                    <QuickViewWidget></QuickViewWidget>
                    <QuickViewWidget></QuickViewWidget>
                    <QuickViewWidget></QuickViewWidget>
                    <QuickViewWidget></QuickViewWidget>
                    <QuickViewWidget></QuickViewWidget>
                    <QuickViewWidget></QuickViewWidget>
                </div>
                <div id="pageContent">
        <Router>
           <Switch>
           <Route path="/" exact strict render={
                () => {
                    return ( <>
                        <h1>Welcome to My Homepage</h1>
                    </>);
                }
            }/>

        <Route path="/About" exact strict render={
                () => {
                    return ( <>
                        <h1>Welcome to My About</h1>
                    </>);
                }
            }/> 

<Route path="/Services" exact strict render={
                () => {
                    return ( <>
                        <h1>Welcome to My Services</h1>
                    </>);
                }
            }/> 

<Route path="/Contact" exact strict render={
                () => {
                    return ( <>
                        <h1>Welcome to My Contact</h1>
                    </>);
                }
            }/> 
            </Switch>
        </Router>
        </div>
        </div>
    )
}

export default HomePage;