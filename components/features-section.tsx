export default function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-search",
      title: "Automatic Asset Discovery",
      description:
        "Continuously discover and inventory your external-facing assets, including forgotten or shadow IT systems, to maintain a complete view of your attack surface.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Continuous Vulnerability Monitoring",
      description:
        "Real-time scanning and alerting for new vulnerabilities across your entire digital footprint, ensuring you're always aware of potential security gaps.",
    },
    {
      icon: "fas fa-brain",
      title: "AI-Powered Threat Analysis",
      description:
        "Leverage cutting-edge AI and machine learning algorithms to predict potential threats and prioritize security efforts based on real-world risk models.",
    },
    {
      icon: "fas fa-user-ninja",
      title: "Attack Simulations & Phishing Tests",
      description:
        "Simulate real-world attacks to identify weaknesses in your security posture before malicious actors can exploit them.",
    },
    {
      icon: "fas fa-tasks",
      title: "Compliance Management",
      description:
        "Streamline regulatory compliance with automated scanning and reporting for GDPR, HIPAA, PCI DSS, ISO 27001, and other frameworks.",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Cybersecurity Training",
      description:
        "Comprehensive security awareness training programs to educate employees and reduce human-factor risks.",
    },
    {
      icon: "fas fa-code-branch",
      title: "DevOps & CI/CD Integration",
      description:
        "Seamlessly integrate security checks into your development lifecycle with our comprehensive API and plugin ecosystem.",
    },
    {
      icon: "fas fa-wrench",
      title: "Automated Remediation",
      description:
        "Implement one-click fixes for common vulnerabilities with our intelligent remediation engine, saving your team valuable time and resources.",
    },
    {
      icon: "fas fa-user-secret",
      title: "Dark Web & Threat Intelligence",
      description:
        "Monitor dark web forums and marketplaces for mentions of your organization, leaked credentials, or planned attacks.",
    },
    {
      icon: "fas fa-sitemap",
      title: "Multi-site Management",
      description:
        "Centralized dashboard to monitor and manage security across multiple sites, divisions, or client environments with role-based access control.",
    },
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title fade-in">
          <h2>Comprehensive Protection</h2>
          <p>Powerful features designed to secure your organization's digital presence</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in">
              <div className="feature-icon">
                <i className={feature.icon}></i>
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
