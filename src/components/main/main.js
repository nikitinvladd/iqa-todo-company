import React from 'react';
import { Link } from 'react-router-dom';
import './main.sass';

const Main = () => {
    return (
        <div className="main">
            <div className="main-information">
                <div className="start-text">&#91; 0.1 GET STARTED &#93;</div>
                <h1 className='main-title'>Improve Your Focus And Efficiency</h1>
                <div className="main-description">No server code needed. Focus on things that matter!</div>
                <Link className='blank-button' to="/functionality task">Get Start</Link>
            </div>
            <div className="main-img"><img src="img/44126.webp" alt="Focus Img" /></div>
        </div>
    );
}

export default Main;