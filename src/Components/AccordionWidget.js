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
            <button onClick={(e) => toggleAccordion(e.target)} className="accordion">{props.itemName}</button>
            <div className="panel" style={panelStyle}>
                <ul className="MenuItems">
                    {
                        props.nestedMenuItems.map((item)=>{
                            return <li key={item.id} className="MenuItem">{item.name}</li>
                        })
                    }
                </ul>
            </div>
        </span>
    )
}

export default AccordionWidget;