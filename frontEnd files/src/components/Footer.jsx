import React from "react";

import './Footer.css';

import copyRightLogo from '../Resources/Icons/copyright.svg';

export default function Footer(){
    return (
        <footer className="footer">
            <div className="copyRightBar">
                <img src={copyRightLogo} alt="copy Right" />
                <h3>Sri SaiNath Homeo Clinic</h3>
            </div>
        </footer>
    );
}