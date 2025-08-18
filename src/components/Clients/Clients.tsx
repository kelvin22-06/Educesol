import type React from "react"
import "./Clients.css"

interface Client {
  name: string
  logo: string
}

const Clients: React.FC = () => {
  const clients: Client[] = [
    {
      name: "Robert Morris University",
      logo: "/pic20.png?height=100&width=150",
    },
    {
      name: "Auburn University",
      logo: "/pic21.png?height=100&width=150",
    },
    {
      name: "MetroBlue",
      logo: "/pic22.png?height=100&width=150",
    },
  ]

  return (
    <section className="clients section">
      <div className="container">
        <h2 className="section-title">OUR CLIENTS</h2>
        <p className="section-subtitle">What University's Love Work With Us and With Our Teachers</p>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img src={client.logo || "/placeholder.svg"} alt={`${client.name} logo`} className="client-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
