interface Testimonial {
  quote: string
  author: {
    name: string
    position: string
    avatar: string
  }
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Reconity has completely transformed our security posture. We discovered several unknown assets and vulnerabilities that could have led to serious breaches. Their platform is intuitive and the reporting is excellent.",
      author: {
        name: "Sarah Johnson",
        position: "CISO at TechCorp",
        avatar: "https://via.placeholder.com/100x100/cccccc/cccccc",
      },
    },
    {
      quote:
        "The AI-powered threat analysis helps us prioritize our security efforts effectively. We've seen a 70% reduction in our mean time to remediate since implementing Reconity.",
      author: {
        name: "Michael Chen",
        position: "Security Director at DataGuard",
        avatar: "https://via.placeholder.com/100x100/cccccc/cccccc",
      },
    },
    {
      quote:
        "As a financial institution, compliance is critical for us. Reconity streamlines our compliance reporting and helps us stay ahead of regulatory requirements. The ROI has been significant.",
      author: {
        name: "Emma Rodriguez",
        position: "VP of Security at Global Finance",
        avatar: "https://via.placeholder.com/100x100/cccccc/cccccc",
      },
    },
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Trusted by Security Professionals</h2>
          <p>See what our clients have to say about Reconity</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in">
              <div className="testimonial-quote">{testimonial.quote}</div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.author.avatar || "/placeholder.svg"} alt={testimonial.author.name} />
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.author.name}</div>
                  <div className="author-position">{testimonial.author.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
