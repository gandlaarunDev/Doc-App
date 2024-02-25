import React from "react";

import './DoctorCard.css';

export default function DoctorCard(){
    return (
        <section className="doc-card">
            <img src={require('../Resources/images/DoctorImage.png')} className="doctorImg" alt="doctor"/>
            <h2>Dr Anji Babu<span>B.H.M.S</span></h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque augue non eros dignissim, non vehicula leo gravida. 
                Fusce eleifend tempor pellentesque. Nam vel cursus tellus. Cras dapibus et augue non pretium. 
                Aliquam blandit libero a enim tristique laoreet. Nullam nec blandit lorem. Sed et fringilla nisi. 
                Nulla eu nisi nec neque pharetra aliquet. 
                Quisque luctus, metus vitae luctus tempor, libero lacus egestas orci, sed viverra leo nulla vitae mi.
            </p>
        </section>
    );
}