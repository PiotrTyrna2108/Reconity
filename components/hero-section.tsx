import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content fade-in">
          <h1>Discover your digital attack surface before others do.</h1>
          <p>
            Reconity is a cutting-edge External Attack Surface Management platform that continuously monitors your
            digital perimeter, identifies vulnerabilities, and helps you stay ahead of threats.
          </p>
          <div className="hero-cta">
            <Link href="/trial" className="btn btn-primary">
              Start Free Trial
            </Link>
            <Link href="/demo" className="btn btn-secondary">
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-graphic"></div>
    </section>
  )
}
