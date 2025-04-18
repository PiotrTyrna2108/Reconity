import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Products</h4>
            <ul className="footer-links">
              <li>
                <Link href="/platform/asset-discovery">Asset Discovery</Link>
              </li>
              <li>
                <Link href="/platform/vulnerability-detection">Vulnerability Monitoring</Link>
              </li>
              <li>
                <Link href="/platform/threat-intelligence">Threat Intelligence</Link>
              </li>
              <li>
                <Link href="/platform/compliance">Compliance Tools</Link>
              </li>
              <li>
                <Link href="/services/courses">Security Training</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul className="footer-links">
              <li>
                <Link href="/solutions/finance">For Financial Services</Link>
              </li>
              <li>
                <Link href="/solutions/healthcare">For Healthcare</Link>
              </li>
              <li>
                <Link href="/solutions/ecommerce">For E-commerce</Link>
              </li>
              <li>
                <Link href="/solutions/government">For Government</Link>
              </li>
              <li>
                <Link href="/solutions/enterprise">For Enterprise</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/resources/whitepapers">Whitepapers</Link>
              </li>
              <li>
                <Link href="/resources/webinars">Webinars</Link>
              </li>
              <li>
                <Link href="/resources/case-studies">Case Studies</Link>
              </li>
              <li>
                <Link href="/documentation">Documentation</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About Us</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">Company</Link>
              </li>
              <li>
                <Link href="/about/team">Leadership</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/about/partners">Partners</Link>
              </li>
              <li>
                <Link href="/about/news">Press & News</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <i className="fas fa-envelope"></i> info@reconity.com
              </li>
              <li>
                <i className="fas fa-phone"></i> +1 (800) 123-4567
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Security Ave, Cybertown
              </li>
            </ul>
            <div className="social-links">
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">&copy; {new Date().getFullYear()} Reconity. All rights reserved.</div>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Settings</Link>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
