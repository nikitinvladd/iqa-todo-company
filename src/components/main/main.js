import React from 'react';
import './main.sass';

const Main = () => {
    return (
        <div className="main">
            <div className="main-information">
                <div className="start-text">&#91; 0.1 GET STARTED &#93;</div>
                <h1 className='main-title'>Improve Your Focus And Efficiency</h1>
                <div className="main-description">No server code needed. Focus on things that matter!</div>
                <a className='blank-button' href="/">Get Start</a>
            </div>
            <div className="main-img"><img src="img/44126.png" alt="Focus Img" /></div>
        </div>
    );
}

export default Main;