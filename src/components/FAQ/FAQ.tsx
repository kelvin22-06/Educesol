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
      question: "WHY EDUCESOL?",
      answer:
        "Educesol is an exceptional educational institution fostering growth and innovation. We provide cutting-edge technology with engaging, multimedia-rich content and personalized learning paths tailored to each user's unique needs and preferences.",
    },
    {
      question: "WHAT IS EDUCESOL?",
      answer:
        "Educesol is a comprehensive school management system that seamlessly integrates modern technology with educational excellence. Our platform offers result checking, easy fee payments, quiz and assignments, and much more to enhance the learning experience.",
    },
    {
      question: "WHAT IS EDUCESOL FEATURES?",
      answer:
        "Educesol features include Result Checker for tracking performance, Easy Fees Payment system, Quiz & Assignments platform, Activity Management, Payment Processing, Real-time reporting, and cross-device compatibility for seamless learning anywhere.",
    },
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
