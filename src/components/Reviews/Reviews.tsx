import type React from "react"
import "./Reviews.css"

interface Review {
  name: string
  website: string
  review: string
  avatar: string
}

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Mrs. Adebayo School Administrator, Lagos",
      website: "",
      review: "The fee collection system is a game-changer. Parents can now pay easily, and we can track everything instantly.",
      avatar: "/pic14.png?height=80&width=80",
    },
    {
      name: "Mrs. Okonkwo, Proprietor, Enugu",
      website: "",
      review: "With Educesol, I always know how my children are performing. The app keeps me informed in real time.",
      avatar: "/pic15.png?height=80&width=80",
    },
    {
      name: "Mr. Alvan Ikoku, Proprietor, Abuja",
      website: "",
      review: "My students are now excelling in their studies and feeling more empowered than ever before.",
      avatar: "/pic16.png?height=80&width=80",
    },
  ]

  return (
    <section className="reviews section">
      <div className="container">
        <h2 className="section-title" style={{ color: "var(--primary-green)" }}>
          REVIEWS
        </h2>
        <p className="section-subtitle">
          Reviews and feedback from students and educators, helps to assess the effectiveness of courses and improve the
          overall educational experience.
        </p>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="reviewer-info">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={`${review.name} avatar`}
                  className="reviewer-avatar"
                />
                <div className="reviewer-details">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <p className="reviewer-website">{review.website}</p>
                </div>
              </div>
              <p className="review-text">"{review.review}"</p>
            </div>
          ))}
        </div>

        <div className="reviews-footer">
          <p className="reviews-footer-text">
            Underpinning Educesol's success is a relentless commitment to innovation and a deep understanding of the
            evolving needs of modern learners. By continuously investing in research, technology, and pedagogical best
            practices, Educesol ensures that its offerings
          </p>
        </div>
      </div>
    </section>
  )
}

export default Reviews
