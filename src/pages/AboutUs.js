import React from 'react'

export default function AboutUs() {
    return (
        <div className="about-us">
            <h1 className="aboutUS-title"> ABOUT US </h1>
            <div className="aboutUs-contents">
                <div className="imageAbhishek aboutUsImage">Abhishek Image here</div>
                <div className="imageCrispen aboutUsImage">Crispen Image here</div>
                <div className="imageNilson aboutUsImage">Nilson Image here</div>
            </div>
            <div className="aboutUs-contents">
                <div className="contentAbhishek aboutUsContent"><p>Some random ipsum lorem here Abhishek</p></div>
                <div className="contentCrispen aboutUsContent"><p>Some random ipsum lorem here Crispen</p></div>
                <div className="contentNilson aboutUsContent"><p>Some random ipsum lorem here Nilson</p></div>
            </div>
        </div>
    )
}
