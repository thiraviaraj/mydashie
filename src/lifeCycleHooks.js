import React, {useState, useEffect, useContext} from 'react';
import Themes, {ThemeContext} from './mainPage';
const DisplayCounter = () => {
    let theme = useContext(ThemeContext);
    const [val1, setVal1] = useState(1);
    const [val2, setVal2] = useState(1);
    let applyDark = () => {
        // mpobj = themes.light;
    }
    let applyLite = () => {
        // mpobj = themes.light;
    }
    useEffect(()=>{
        document.title = val1;
    }, [val1])
    useEffect(()=>{
        document.title = val2;
    }, [val2])
    return (
        <>
            <button onClick={()=>applyDark()}>dark</button>
            <button onClick={()=>applyLite()}>white</button>
            <h1 style={theme.selected}>{val1}</h1>
            <h1>{val2}</h1>
            {theme.name}
            <input type="text" onChange={(e) => setVal1(e.target.value)}/>
            <input type="text" onChange={(e) => setVal2(e.target.value)}/>
            <input type="text" onChange={(e) => theme.setTheme(e.target.value)}/>
        </>
    )
}

export default DisplayCounter;