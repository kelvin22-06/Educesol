import React from "react";
import "./AboutUs.css";
import EducesolChildren from "./assets/img/educesol-children.png";

const AboutUs: React.FC = () => {
    return(
        <section>
            <span className="top">
                <div className="welcome">
                    <span>
                        <h1>Welcome To Educesol</h1>
                        <p>Educesol Basic is a groundbreaking school management solution developed by MetroBlue Tech System Ltd. We are committed to transforming the educational landscape in Nigeria and across Africa by making school operations simple, transparent, and affordable.</p>
                    </span>
                    <ul>
                        <span>
                            <li>Professional Teachers</li>
                            <li>24/7 Online Course</li>
                            <li>Works with All Devices</li>
                            <li>Friendly User Panel</li>
                            <li>Support Desk for All Prices</li>
                        </span>
                        <span>
                            <li>Lifetime Membership</li>
                            <li>Online Chat with Support</li>
                            <li>Second Course 50% Cheap</li>
                            <li>Limitless Bandwidth</li>
                            <li>And much more...</li>
                        </span>
                    </ul>
                </div>
                <div className="image">
                    <img src={EducesolChildren} alt="Educesol-Children" />
                </div>
            </span>
            
            <span>
                <div className="cards-container">
                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front">Mission</div>
                            <div className="back">To simplify school administration through innovative technology that empowers teachers, parents, and administrators to achieve excellence.</div>
                        </div>
                    </div>

                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front">Vision</div>
                            <div className="back">To become Africa’s leading provider of digital school management solutions, advancing education through efficiency, transparency, and accessibility.</div>
                        </div>
                    </div>

                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front">Core Values</div>
                            <div className="back">Innovation – Creating technology that solves real challenges. Integrity – Building trust with transparency and accountability. Excellence – Striving for the highest standards in everything we deliver. Accessibility – Ensuring our platform is affordable, reliable, and easy to use.</div>
                        </div>
                    </div>
                </div>
            </span>

            <div className="teamCon">
                <h2>Meet the team</h2>
                <div className="team">
                    <span className="team1">
                        <span className="team-title"><h3>Kelly Stone</h3> Product Designer</span>
                    </span>

                    <span className="team2">
                        <span className="team-title"><h3>Shelly Brown</h3> Copy Writer</span>
                    </span>

                    <span className="team3">
                        <span className="team-title"><h3>Vivian Chris</h3> Marketer</span>
                    </span>

                    <span className="team4">
                        <span className="team-title"><h3>Tom Jacob</h3> Senior Developer </span>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;