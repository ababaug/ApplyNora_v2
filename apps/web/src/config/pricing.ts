export const PRICING_CONFIG = {
  tiers: [
    {
      id: "pro",
      name: "Professional",
      description: "Essential tools for targeted, manual application scaling.",
      price: {
        monthly: 36,
        annual: 29
      },
      features: [
        "30 AI-tailored drafts per month",
        "Unified application tracking vault",
        "Standard ATS formatting"
      ],
      notIncluded: [
        "No automated Gmail sync"
      ],
      highlighted: false,
      ctaLabel: "Start Professional",
      ctaLink: "/register?plan=pro"
    },
    {
      id: "exec",
      name: "Executive",
      description: "Comprehensive AI assistance and tracking for rigorous searches.",
      price: {
        monthly: 99,
        annual: 79
      },
      features: [
        "150 AI-tailored drafts per month",
        "Bi-directional Gmail recruiter sync",
        "1-Click gated application automation",
        "Priority queue email support (< 4h SLA)"
      ],
      notIncluded: [],
      highlighted: true,
      badge: "Most Popular",
      icon: "stars",
      ctaLabel: "Start Executive",
      ctaLink: "/register?plan=exec"
    },
    {
      id: "concierge",
      name: "Concierge",
      description: "White-glove service with dedicated human strategy review.",
      price: {
        monthly: "Custom",
        annual: "Custom"
      },
      features: [
        "Unlimited AI drafts & submissions",
        "1x/mo 45-min Human Strategy Call",
        "Dedicated Account Manager",
        "Direct phone support"
      ],
      notIncluded: [],
      highlighted: false,
      ctaLabel: "Contact Sales",
      ctaLink: "/contact"
    }
  ],
  isDraft: true // Marked as draft values per phase requirements
};
