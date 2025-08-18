import type React from "react"
import "./HowToUse.css"

interface Step {
  number: string
  title: string
  description: string
}

const HowToUse: React.FC = () => {
  const steps: Step[] = [
    {
      number: "Step 1:",
      title: "Download and Install the App",
      description:
        'Visit the App Store (iOS) or Google Play Store (Android). Search for "Educesol" and click on the download button. Once downloaded, open the app to begin the setup.',
    },
    {
      number: "Step 2:",
      title: "Create an Account",
      description:
        'Click on the "Sign Up" button. Fill in the required information, such as your name, email address, and password. Verify your email to activate your account.',
    },
    {
      number: "Step 3:",
      title: "Log In",
      description:
        'Open the app and enter your registered email and password. Click "Log In" to access your dashboard.',
    },
  ]

  return (
    <section className="how-to-use">
      <div className="container">
        <div className="how-to-use-content">
          <div className="phone-mockup">
            <img
              src="/pic7.png?height=500&width=250"
              alt="Educesol mobile app interface"
              className="phone-image"
            />
          </div>

          <div className="steps-content">
            <h2 className="how-to-use-title">HOW TO USE THE APP</h2>

            <div className="steps-list">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <h3 className="step-title">
                    <span className="step-number">{step.number}</span>
                    {step.title}
                  </h3>
                  <p className="step-description">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="app-buttons">
              <button className="btn btn-primary">Learn More</button>
              <button className="btn btn-secondary">Install Now</button>
            </div>

            <div className="store-badges">
              <img src="/pic8.png?height=60&width=180" alt="Get it on Google Play" className="store-badge" />
              <img src="/pic9.png?height=60&width=180" alt="Download on the App Store" className="store-badge" />
              <img src="/pic10.png?height=60&width=180" alt="Get it from Microsoft" className="store-badge" />
              <img
                src="/pic9.png?height=60&width=180"
                alt="Download on the Mac App Store"
                className="store-badge"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToUse
