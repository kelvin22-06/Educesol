import React from "react"
import "./HomeFeatures.css"

interface Feature {
  icon: string
  title: string
  description: string
}

const HomeFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      icon: "/pic11.png?height=80&width=80",
      title: "Full Admin Controls",
      description:
        "Manage students, staff, classes, and operations centrally.",
    },
    {
      icon: "/pic13.png?height=80&width=80",
      title: "Attendance & Records",
      description:
        "Real-time tracking and automated academic reporting.",
    },
    {
      icon: "/pic12.png?height=80&width=80",
      title: "Finance & Fees",
      description:
        "Secure, automated payment collection and receipts.",
    },
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--primary-green)" }}>
          Our Features
        </h2>
        <p className="section-subtitle">Everything You Need to Run Your School Efficiently</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon || "/placeholder.svg"} alt={`${feature.title} icon`} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures