import type React from "react"
import "./Hero.css"

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
             Shaping the Future of
              <br />
             Learning with Smart School Management
            </h1>
            <p className="hero-subtitle">
              Educesol Basic is Nigeria’s first mobile-first school management solution — designed to reduce costs,
              <br />
             eliminate manual errors, and connect parents, teachers, and administrators in real time.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-secondary">Register Now</button>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphics">
              <div className="network-node node-1">
                <img src="/pic1.png?height=50&width=50" alt="Money icon" />
              </div>
              <div className="network-node node-2">
                <img src="/pic2.png?height=50&width=50" alt="Plus icon" />
              </div>
              <div className="network-lines"></div>
            </div>
            <img
              src="/pic3.png?height=400&width=350"
              alt="Woman with laptop representing education technology"
              className="hero-main-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
