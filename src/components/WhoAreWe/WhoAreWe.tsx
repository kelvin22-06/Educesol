import type React from "react"
import "./WhoAreWe.css"

const WhoAreWe: React.FC = () => {
  return (
    <section className="who-are-we">
      <div className="container">
        <div className="who-are-we-content">
          <div className="team-image">
            <img src="/pic4.png?height=300&width=400" alt="Educesol team collaboration" className="team-photo" />
          </div>

          <div className="who-are-we-text">
            <h2 className="who-are-we-title">WHO ARE WE</h2>
            <p className="who-are-we-description">
              Educesol's commitment to excellence is evident in its state-of-the-art learning management system, which
              seamlessly integrates cutting-edge technology with engaging, multimedia-rich content. Our intuitive
              interface and personalized learning paths ensure that each user's educational journey is tailored to their
              unique needs and preferences.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoAreWe
