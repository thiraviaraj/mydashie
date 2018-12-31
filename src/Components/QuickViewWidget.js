import React from 'react';

let QuickViewWidget = (props) => {
    return (
        <div className="quickViewBox">
            <div className="boxTopRow">
                <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div>
                    {props.text}
                </div>
            </div>
            <div className="boxLead">
                {props.number}
            </div>
            <div className="smallFont">
                <span className="greenColor">{props.perc}% </span>{props.desc}
            </div>
        </div>
    )
}

export default QuickViewWidget;