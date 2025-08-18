import type React from "react"
import "./WhyEducesol.css"

interface Feature {
  icon: string
  title: string
  description: string
}

const WhyEducesol: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "/pic19.png?height=50&width=50",
      title: "Educesol",
      description: "Educesol is an exceptional educational institution fostering growth and innovation.",
    },
    {
      icon: "/pic6.png?height=50&width=50",
      title: "Works Any Device",
      description: "Seamless Access Across All Your Devices with Our Versatile Platform",
    },
    {
      icon: "/pic19.png?height=80&width=80",
      title: "Home",
      description: "Embrace the freedom and flexibility of learning from home.",
    },
    {
      icon: "/pic19.png?height=50&width=50",
      title: "Real Time Saver",
      description: "Maximize Your Productivity with Our Real-Time Saver Platform",
    },
    {
      icon: "/pic19.png?height=50&width=50",
      title: "Powerful Options",
      description: "Unlock Your Potential with Our Powerful Options Platform",
    },
    {
      icon: "/pic19.png?height=50&width=50",
      title: "Easily Customisable",
      description: "Unleash Your Creativity with Our Easily Customisable Platform",
    },
  ]

  return (
    <section className="why-educesol section">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--primary-green)" }}>
          WHY EDUCESOL?
        </h2>

        <div className="why-educesol-content">
          <div className="features-left">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-container">
                  <img src={feature.icon || "/placeholder.svg"} alt={`${feature.title} icon`} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="center-phone">
            <img
              src="/pic18.png?height=450&width=250"
              alt="Educesol mobile app showcase"
              className="center-phone-image"
            />
          </div>

          <div className="features-right">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon-container">
                  <img src={feature.icon || "/placeholder.svg"} alt={`${feature.title} icon`} />
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyEducesol
