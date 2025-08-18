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
      title: "Result Checker",
      description:
        "Unlock your potential with our result checker. Achieving your goals starts with understanding your progress. Our result checker empowers you to track your performance and identify areas for improvement.",
    },
    {
      icon: "/pic12.png?height=80&width=80",
      title: "Easy Fees Payment",
      description:
        "Simplify Your Payments with Our Easy Fee Solution. Dealing with fees and payments can be a hassle, but it doesn't have to be! Our easy fee payment system takes the stress out of managing your financial obligations.",
    },
    {
      icon: "/pic13.png?height=80&width=80",
      title: "Quiz & Assignments",
      description:
        "Elevate Your Learning with Our Comprehensive Quiz and Assignment Platform. Mastering new concepts and skills requires consistent practice and assessment. Our cutting-edge quiz and assignment.",
    },
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--primary-green)" }}>
          Our Features
        </h2>
        <p className="section-subtitle">Simply The Most Feature Rich School Management System</p>

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