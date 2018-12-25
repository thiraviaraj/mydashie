import React from 'react';

let QuickViewWidget = () => {
    return (
        <div className="quickViewBox">
            <div className="boxTopRow">
                <div>
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div>
                    Total Users
                </div>
            </div>
            <div className="boxLead">
                2500
            </div>
            <div className="smallFont">
                <span className="greenColor">4% </span>from last Week
            </div>
        </div>
    )
}

export default QuickViewWidget;