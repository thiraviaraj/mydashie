import React, { useReducer, useState, useContext, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import QuickViewWidget from './QuickViewWidget';
import NavBar from './NavBar';
import SideBar from './SideBar';
import appReducer from '../Reducer/appReducer';
import { Chart } from "react-google-charts";

export const Context = React.createContext();
function useEffectOnce(cb) {
    const didRun = useRef(false);
  
    useEffect(() => {
      if (!didRun.current) {
        cb();
        didRun.current = true;
      }
    });
  }
let HomePage = () => {
    const [state, dispatch] = useReducer(appReducer, {});
    useEffect(()=>{
        document.title = "My Dashboard";
    });
    
      useEffectOnce(() => {
          debugger;
        dispatch({ type: 'setInitialState'});
      });
    
    //   const widgetView = () => {
    //     return (
    //         // {state.widgetData ? state.widgetData.map((data) => <QuickViewWidget key={data.id} text={data.text} number={data.totalClicks} perc={data.percentage} desc=" from last Week"></QuickViewWidget> : ''};  
    //         <span>
    //             if(state && state.widgetData) {
    //                 "thiravi"
    //                 {/* // state.widgetData.map((data) => <QuickViewWidget key={data.id} text={data.text} number={data.totalClicks} perc={data.percentage} desc=" from last Week"></QuickViewWidget>) */}
    //             }
                
    //         </span>
    //       )
    //   }


    return (
        
    <Router basename={process.env.PUBLIC_URL}>
        <>
            <Context.Provider value={dispatch}>
                <div id="main">
                        <NavBar></NavBar>
                        <SideBar></SideBar>
                        <div id="quickViewWidgetViewer">
                        {state.widgetData && state.widgetData.length > 0 &&
                            state.widgetData.map((data) => {
                            return <QuickViewWidget key={data.id} text={data.text} number={data.totalClicks} perc={data.percentage} desc=" from last Week"></QuickViewWidget>
                        })
                        }
                        
                        <QuickViewWidget text="Total Clicks" number={state.totalcount} perc="100" desc=" from last Week"></QuickViewWidget>
                        <QuickViewWidget text="Total Reset Clicks" number={state.resetcount} perc="100" desc=" from last Week"></QuickViewWidget>

                            {/* <QuickViewWidget text="Total Users" number="2500" perc="4" desc=" from last Week"></QuickViewWidget>
                            <QuickViewWidget text="Total Users" number="2500" perc="4" desc=" from last Week"></QuickViewWidget>
                            <QuickViewWidget text="Total Users" number="2500" perc="4" desc=" from last Week"></QuickViewWidget>
                            <QuickViewWidget text="Total Users" number="2500" perc="4" desc=" from last Week"></QuickViewWidget>
                            <QuickViewWidget text="Total Users" number="2500" perc="4" desc=" from last Week"></QuickViewWidget>
                            <QuickViewWidget text="Total Clicks" number={state[0] && state[0].ClickCounts} perc="4" desc=" from last Week"></QuickViewWidget> */}
                        </div>
                        <div id="pageContent">
                        <Chart
                            width={'1000px'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={state.chartData}
                            options={{
                                title: 'My Daily Activities',
                            }}
                            rootProps={{ 'data-testid': '1' }}
                            />
                            <Route path="/mydashie/" exact render={
                                    () => {
                                        return ( <>
                                            <h1>Welcome to My Homepage</h1>
                                            <button onClick={() => dispatch({ type: 'CountClicks', index:0 })}>Increment HomePage</button>
                                            <button className="Reset" onClick={() => dispatch({ type: 'ResetCounter'})}>Reset</button>
                                        </>);
                                    }
                                }/>

                                <Route path="/mydashie/About" exact render={
                                    () => {
                                        return ( <>
                                            <h1>Welcome to My About</h1>
                                            <button onClick={() => dispatch({ type: 'CountClicks', index:1})}>Increment About US</button>
                                            <button className="Reset" onClick={() => dispatch({ type: 'ResetCounter'})}>Reset</button>
                                        </>);
                                    }
                                }/> 

                                <Route path="/mydashie/Services" exact render={
                                    () => {
                                        return ( <>
                                            <h1>Welcome to My Services</h1>
                                            <button onClick={() => dispatch({ type: 'CountClicks', index:2 })}>Increment Services</button>
                                            <button className="Reset" onClick={() => dispatch({ type: 'ResetCounter'})}>Reset</button>
                                        </>);
                                    }
                                }/> 

                                <Route path="/mydashie/Contact" exact render={
                                    () => {
                                        return ( <>
                                            <h1>Welcome to My Contact</h1>
                                            <button onClick={() => dispatch({ type: 'CountClicks', index:3 })}>Increment Contact</button>
                                            <button className="Reset" onClick={() => dispatch({ type: 'ResetCounter'})}>Reset</button>
                                        </>);
                                    }
                                }/>       
                        </div>
                </div>
            </Context.Provider>
        </>
    </Router>
    )
}

export default HomePage;