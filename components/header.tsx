"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeDropdowns = () => {
    const dropdowns = document.querySelectorAll(".dropdown")
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active")
    })
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeDropdowns()
      }
    }

    const handleScroll = () => {
      const header = document.querySelector("header")
      if (header) {
        if (window.scrollY > 50) {
          header.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.1)"
        } else {
          header.style.boxShadow = "none"
        }
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".dropdown")) {
        closeDropdowns()
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleClickOutside)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleDropdownClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      const dropdown = (e.target as Element).closest(".dropdown")

      // Close other dropdowns
      const dropdowns = document.querySelectorAll(".dropdown")
      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown && otherDropdown.classList.contains("active")) {
          otherDropdown.classList.remove("active")
        }
      })

      // Toggle current dropdown
      dropdown?.classList.toggle("active")
    }
  }

  return (
    <header>
      <nav className="navbar container">
        <Link href="/" className="logo">
          <i className="fas fa-shield-alt logo-icon"></i>
          Recon<span>ity</span>
        </Link>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/about" onClick={handleDropdownClick}>
                ABOUT <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <Link href="/about#mission">Mission & Vision</Link>
                <Link href="/about#team">Our Team</Link>
                <Link href="/about#history">Company History</Link>
                <Link href="/about#partners">Partners & Clients</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link href="/services" onClick={handleDropdownClick}>
                SERVICES <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="dropdown-content">
                <Link href="/services/courses">Security Training</Link>
                <Link href="/services/simulations">Attack Simulations</Link>
                <Link href="/services/audit">Security Audits</Link>
                <Link href="/services/consulting">Expert Consulting</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link href="/platform" onClick={handleDropdownClick}>
                PLATFORM <i className="fas fa-chevron-down"></i>
              </Link>
              <div className="dropdown-content mega-dropdown">
                <div className="mega-col">
                  <h4>Asset Management</h4>
                  <Link href="/platform/asset-discovery">Asset Discovery</Link>
                  <Link href="/platform/asset-attribution">Asset Attribution</Link>
                  <Link href="/platform/asset-classification">Classification & Tagging</Link>
                  <Link href="/platform/asset-inventory">Asset Inventory & CMDB</Link>
                </div>
                <div className="mega-col">
                  <h4>Security Solutions</h4>
                  <Link href="/platform/vulnerability-detection">Vulnerability Detection</Link>
                  <Link href="/platform/monitoring">Continuous Monitoring</Link>
                  <Link href="/platform/threat-intelligence">Dark Web Intelligence</Link>
                  <Link href="/platform/compliance">Legal & Compliance</Link>
                </div>
                <div className="mega-col">
                  <h4>Platform Features</h4>
                  <Link href="/platform/dashboard">Dashboard & Reporting</Link>
                  <Link href="/platform/alerts">Notifications & Alerts</Link>
                  <Link href="/platform/risk-scoring">Risk Scoring</Link>
                  <Link href="/platform/api">API & SDK Access</Link>
                </div>
              </div>
            </li>
            <li>
              <Link href="#pricing">PRICING</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
          <div className="auth-buttons mobile">
            <Link href="/login" className="btn btn-login">
              Login
            </Link>
            <Link href="/register" className="btn btn-signup">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="auth-buttons">
          <Link href="/login" className="btn btn-login">
            Login
          </Link>
          <Link href="/register" className="btn btn-signup">
            Sign Up
          </Link>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}
