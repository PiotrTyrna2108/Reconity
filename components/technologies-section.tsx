export default function TechnologiesSection() {
  const technologies = [
    { name: "Slack", image: "https://via.placeholder.com/150x50/ffffff/ffffff?text=Slack" },
    { name: "Jira", image: "https://via.placeholder.com/150x50/ffffff/ffffff?text=Jira" },
    { name: "Microsoft Teams", image: "https://via.placeholder.com/150x50/ffffff/ffffff?text=Teams" },
    { name: "GitHub", image: "https://via.placeholder.com/150x50/ffffff/ffffff?text=GitHub" },
    { name: "AWS", image: "https://via.placeholder.com/150x50/ffffff/ffffff?text=AWS" },
    { name: "Microsoft Azure", image: "https://via.placeholder.com/150x50/ffffff/ffffff?text=Azure" },
  ]

  return (
    <section className="technologies">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Seamless Integrations</h2>
          <p>Connect Reconity with your existing tools and workflows</p>
        </div>
        <div className="tech-logos">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-logo fade-in">
              <img src={tech.image || "/placeholder.svg"} alt={tech.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
