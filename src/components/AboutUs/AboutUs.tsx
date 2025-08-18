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
                        <p>At Educesol, we believe in the transformative power of education. Our mission is to empower learners of all ages through innovative and engaging educational resources. Whether you're a student seeking to enhance your skills, Educesol is here to support you every step of the way.</p>
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
                            <div className="back">Our mission is to meet peoples needs in ways they never imagined possible.</div>
                        </div>
                    </div>

                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front">Vision</div>
                            <div className="back">Our Vision is to be among the leading technology product and service providers in the world through the development of creative and innovative technology solutions with international standards.</div>
                        </div>
                    </div>

                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front">Core Values</div>
                            <div className="back">Innovation, Creativity, Excellence, Reliability, Commitment, Love</div>
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