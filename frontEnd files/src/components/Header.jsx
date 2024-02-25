import React from "react";
import './Header.css';
import profile from '../Resources/Icons/profile-user2.svg';

export default function Header(){
    return (
        // <h1>Doc Assist App.</h1>
        <div className="Header">
            <div className="flex_header">
                <img src={require('../Resources/images/logo.png')} className="logo" alt="Logo"/>
                <img src={profile} className="profile" alt="Menu"/>
            </div>
            
            <h1>Sri SaiNath Homeo Clinic</h1>
        </div>
    );
}