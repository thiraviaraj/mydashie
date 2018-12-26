import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import QuickViewWidget from './QuickViewWidget';
import NavBar from './NavBar';
import SideBar from './SideBar';

let HomePage = () => {
    useEffect(()=>{
        document.title = "My Dashboard";
    });
    return (
    <Router>
        <>
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
                        
                        <Route path="/mydashie/" exact render={
                                () => {
                                    return ( <>
                                        <h1>Welcome to My Homepage</h1>
                                    </>);
                                }
                            }/>

                            <Route path="/mydashie/About" exact render={
                                () => {
                                    return ( <>
                                        <h1>Welcome to My About</h1>
                                    </>);
                                }
                            }/> 

                            <Route path="/mydashie/Services" exact render={
                                () => {
                                    return ( <>
                                        <h1>Welcome to My Services</h1>
                                    </>);
                                }
                            }/> 

                            <Route path="/mydashie/Contact" exact render={
                                () => {
                                    return ( <>
                                        <h1>Welcome to My Contact</h1>
                                    </>);
                                }
                            }/>          
                    </div>
            </div>
        </>
    </Router>
    )
}

export default HomePage;