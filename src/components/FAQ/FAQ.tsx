"use client"

import type React from "react"
import { useState } from "react"
import "./FAQ.css"

interface FAQItem {
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "WHAT IS EDUCESOL BASIC?",
      answer:
        "Educesol Basic is a mobile-first school management solution that helps schools digitise administration, automate payments, and improve communication among teachers, parents, and administrators.",
    },
    {
      question: "WHO CAN USE EDUCESOL?",
      answer:
        "The platform is designed for schools of all sizes—primary, secondary, and tertiary institutions—whether private or public.",
    },
    {
      question: "DOES EDUCESOL WORK WITHOUT STRONG INTERNENT?",
      answer:
        "Yes. Educesol Basic is optimised to work in areas with limited connectivity, making it ideal for schools in developing regions.",
    },
    {
      question: "HOW SECURE IS MY SCHOOL'S DATA?",
      answer: "All records are stored on secure cloud servers with encryption and role-based access controls to ensure confidentiality."
    },
    {
      question: "HOW CAN I GET STARTED?",
      answer: "Simply click Get Started and fill out our contact form. A member of our team will guide you through onboarding."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <h2 className="section-title">FAQ's</h2>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
