import { Check } from "lucide-react"
import Link from "next/link"

interface PricingTier {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
  isPopular?: boolean
}

export default function PricingSection() {
  const pricingTiers: PricingTier[] = [
    {
      title: "Basic",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 assets",
        "Weekly vulnerability scans",
        "Basic threat detection",
        "Email notifications",
        "30-day data retention",
        "Standard support",
      ],
      ctaText: "Get Started",
      ctaLink: "/pricing/basic",
    },
    {
      title: "Professional",
      price: "$2,499",
      period: "/month",
      description: "Ideal for medium-sized organizations",
      features: [
        "Up to 500 assets",
        "Daily vulnerability scans",
        "Advanced AI threat detection",
        "Attack simulations",
        "Dark web monitoring",
        "90-day data retention",
        "Priority support",
        "API access",
      ],
      ctaText: "Get Started",
      ctaLink: "/pricing/professional",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: " pricing",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited assets",
        "Continuous vulnerability scanning",
        "Custom integrations",
        "Advanced attack simulations",
        "Comprehensive compliance tools",
        "1-year data retention",
        "24/7 dedicated support",
        "On-premise deployment option",
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact",
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-primary-dark">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Transparent Pricing</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Choose the plan that fits your organization's needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300
                border border-cyan-900/30 bg-primary-dark/80 backdrop-blur-sm
                flex flex-col h-full
                hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/50
                ${tier.isPopular ? "md:scale-105 shadow-lg shadow-cyan-500/10 border-cyan-500/30" : ""}`}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-cyan-400 to-cyan-500 text-primary-dark rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8 border-b border-cyan-900/20">
                <h3 className="text-xl font-semibold text-white mb-2">{tier.title}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400 ml-1">{tier.period}</span>
                </div>
                <p className="text-sm text-gray-400">{tier.description}</p>
              </div>

              <div className="p-8 flex-grow">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-400 text-sm">
                      <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Link
                  href={tier.ctaLink}
                  className={`block w-full py-3 px-4 rounded-md text-center font-medium transition-all
                    ${
                      tier.isPopular
                        ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-primary-dark hover:shadow-lg hover:shadow-cyan-500/30"
                        : "border border-cyan-500 text-white hover:bg-cyan-500/10"
                    }`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
