import React from 'react';
import AccordionWidget from './AccordionWidget';
const SidePage = () => {
    return (
        <div id="side-menu" className="side-nav">
            <span id="titleHolder"><span><img alt="title" width="40" src="http://chittagongit.com//images/camtasia-studio-icon/camtasia-studio-icon-17.jpg"></img></span><span className="titleFont">My DashBoard!</span></span>
            <span id="introHolder">
                <div id="logoHolder">
                    <div id="profImg"><img width="50" alt="logo" src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"></img></div>
                    <div id="desg">GENERAL</div>
                </div>
                <div id="textHolder">
                    <div id="greet" className="greyColor">Welcome,</div>
                    <div id="name">Thiraviaraj B</div>
                </div>
            </span>
            <div id="menuList">
                <AccordionWidget btnName="Home"></AccordionWidget>
                <AccordionWidget btnName="Home123"></AccordionWidget>
            </div>
            <div id="leftFooter">
                <div className="icon"><img width="50" alt="icon1" src="http://chittagongit.com//images/controller-icon/controller-icon-7.jpg"></img></div>
                <div className="icon"><img width="50" alt="icon2" src="http://chittagongit.com//images/icon-spider/icon-spider-14.jpg"></img></div>
                <div className="icon"><img width="50" alt="icon3" src="http://chittagongit.com//images/notification-bell-icon/notification-bell-icon-7.jpg"></img></div>
            </div>
      </div>
    )
}

export default SidePage;