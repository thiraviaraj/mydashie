import React, {useState} from 'react';

let AccordionWidget = (props) => {
    let [panelStyle, setPanelStyle] = useState({maxHeight: null});
    let toggleAccordion = (e) => {
        if(!panelStyle.maxHeight) {
            panelStyle = {
                maxHeight: e.nextElementSibling.scrollHeight + "px"
            };
        } else {
            panelStyle = {
                maxHeight: null
            };
        }
        
        setPanelStyle(panelStyle);
    }
    return (
        <span>
            <button onClick={(e) => toggleAccordion(e.target)} className="accordion">{props.btnName}</button>
            <div className="panel" style={panelStyle}>
                <ul className="MenuItems">
                    <li className="MenuItem">{props.btnName}</li>
                    <li className="MenuItem">{props.btnName}</li>
                    <li className="MenuItem">{props.btnName}</li>
                </ul>
            </div>
        </span>
    )
}

export default AccordionWidget;