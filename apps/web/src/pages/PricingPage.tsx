import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PRICING_CONFIG } from "../config/pricing";

export function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (faq: number) => {
    setActiveFaq(activeFaq === faq ? null : faq);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - ApplyNora</title>
        <meta name="description" content="Pricing plans for ApplyNora executive career platform" />
      </Helmet>
      <div className="flex flex-col w-full">
        {/* AMBIENT GLOW SYSTEM */}
        <div className="relative w-full overflow-hidden bg-surface-ground">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-fixed/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary-fixed/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

          {/* SECTION 1: HEADER & TOGGLE */}
          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-lg text-center">
            {PRICING_CONFIG.isDraft && (
                <div className="inline-block mb-space-md px-3 py-1 bg-warning/10 text-warning text-caption font-caption rounded-full">
                    Draft Pricing - Not Final
                </div>
            )}
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-md">
              Transparent, high-leverage plans.
            </h1>
            <p className="font-body-lg text-body-lg text-slate-muted max-w-2xl mx-auto mb-space-xl">
              Select the tier that matches your career trajectory. Cancel anytime.
              No hidden fees, and zero data monetization.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center p-1 bg-surface-card border border-border-lavender rounded-xl shadow-sm mb-space-lg">
              <button
                className={`px-space-md py-space-sm rounded-lg font-label-md text-label-md transition-all duration-300 cursor-pointer ${billing === 'monthly' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-on-surface'}`}
                onClick={() => setBilling('monthly')}
              >
                Monthly Billing
              </button>
              <button
                className={`flex items-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md transition-all duration-300 cursor-pointer ${billing === 'annual' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-on-surface'}`}
                onClick={() => setBilling('annual')}
              >
                Annual Billing
                <span
                  className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                    billing === "annual"
                      ? "bg-surface-blush-subtle text-primary"
                      : "bg-surface-container-high text-primary"
                  }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </section>

          {/* SECTION 2: PRICING CARDS */}
          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pb-space-xl z-10 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-space-lg">
              {PRICING_CONFIG.tiers.map((tier) => (
                <div key={tier.id} className={`bg-surface-card rounded-2xl p-space-xl shadow-sm flex flex-col h-full hover:shadow-md transition-shadow relative ${tier.highlighted ? 'border-[2px] border-primary transform md:-translate-y-4 shadow-xl' : 'border border-border-lavender'}`}>
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-container to-secondary text-on-primary font-label-sm text-label-sm px-space-md py-1 rounded-full whitespace-nowrap shadow-sm">
                        {tier.badge}
                    </div>
                  )}
                  <div className={`mb-space-md ${tier.highlighted ? 'pt-2' : ''}`}>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-2 flex items-center gap-2">
                      {tier.name}
                      {tier.icon && (
                        <span className="material-symbols-outlined text-[20px] text-secondary">
                          {tier.icon}
                        </span>
                      )}
                    </h3>
                    <p className="font-body-sm text-body-sm text-slate-muted min-h-[40px]">
                      {tier.description}
                    </p>
                  </div>
                  <div className="mb-space-lg">
                    <span className="font-headline-xl text-headline-xl text-on-surface">
                      {tier.price.monthly === "Custom" ? "Custom" : `$${billing === "annual" ? tier.price.annual : tier.price.monthly}`}
                    </span>
                    {tier.price.monthly !== "Custom" && (
                        <span className="font-body-sm text-body-sm text-slate-muted">
                        /mo
                        </span>
                    )}
                    <div className={`font-caption text-caption text-slate-muted mt-1 ${tier.price.monthly === 'Custom' ? 'opacity-0' : ''}`}>
                      {billing === "annual" && tier.price.annual !== "Custom"
                        ? `Billed $${Number(tier.price.annual) * 12} annually`
                        : "Billed monthly"}
                    </div>
                  </div>
                  <Link
                    className={`w-full text-center font-label-md text-label-md py-space-sm rounded-xl transition-all mb-space-lg active:scale-95 ${tier.highlighted ? 'text-on-primary bg-primary hover:bg-primary-container shadow-md' : 'text-on-surface bg-surface-ground border border-border-lavender hover:bg-surface-blush-subtle hover:text-primary hover:border-primary/50'}`}
                    to={tier.ctaLink}
                  >
                    {tier.ctaLabel}
                  </Link>
                  <div className="flex flex-col gap-space-sm mt-auto border-t border-border-lavender pt-space-lg">
                    <span className="font-label-sm text-label-sm text-on-surface">
                      Includes:
                    </span>
                    {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">
                            check_circle
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface">
                            {feature}
                        </span>
                        </div>
                    ))}
                    {tier.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-slate-muted text-[20px] mt-0.5 shrink-0 opacity-50">
                            cancel
                        </span>
                        <span className="font-body-sm text-body-sm text-slate-muted">
                            {feature}
                        </span>
                        </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* SECTION 4: DETAILED COMPARISON TABLE */}
        <section className="w-full bg-surface-card border-t border-border-lavender py-space-xl hidden md:block">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop">
            <h2 className="font-headline-md text-headline-md text-on-surface text-center mb-space-lg">
              Compare Features
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-space-md px-space-md border-b-2 border-border-lavender w-2/5"></th>
                    <th className="text-center py-space-md px-space-md border-b-2 border-border-lavender font-headline-sm text-headline-sm text-on-surface w-1/5">
                      Professional
                    </th>
                    <th className="text-center py-space-md px-space-md border-b-2 border-primary font-headline-sm text-headline-sm text-primary bg-surface-blush-subtle/50 w-1/5 rounded-t-lg">
                      Executive
                    </th>
                    <th className="text-center py-space-md px-space-md border-b-2 border-border-lavender font-headline-sm text-headline-sm text-on-surface w-1/5">
                      Concierge
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-lavender/50">
                  <tr className="bg-surface-ground">
                    <td
                      colSpan={4}
                      className="py-space-sm px-space-lg font-label-md text-label-md text-on-surface"
                    >
                      Core AI Capabilities
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-blush-subtle/30 transition-colors">
                    <td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">
                      Fact-Grounded CV Tailoring
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-slate-muted">
                      30/mo
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-primary bg-surface-blush-subtle/50">
                      150/mo
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-blush-subtle/30 transition-colors">
                    <td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">
                      Executive Cover Letters
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-slate-muted">
                      30/mo
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-primary bg-surface-blush-subtle/50">
                      150/mo
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-blush-subtle/30 transition-colors">
                    <td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">
                      Custom Voice Modeling
                    </td>
                    <td className="py-space-md px-space-md text-center">
                      <span className="material-symbols-outlined text-slate-muted opacity-50">
                        remove
                      </span>
                    </td>
                    <td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50">
                      <span className="material-symbols-outlined text-primary">
                        check
                      </span>
                    </td>
                    <td className="py-space-md px-space-md text-center">
                      <span className="material-symbols-outlined text-on-surface">
                        check
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-surface-ground">
                    <td
                      colSpan={4}
                      className="py-space-sm px-space-lg font-label-md text-label-md text-on-surface"
                    >
                      Automation & Tracking
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-blush-subtle/30 transition-colors">
                    <td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">
                      Application Tracking Vault
                    </td>
                    <td className="py-space-md px-space-md text-center">
                      <span className="material-symbols-outlined text-on-surface-variant">
                        check
                      </span>
                    </td>
                    <td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50">
                      <span className="material-symbols-outlined text-primary">
                        check
                      </span>
                    </td>
                    <td className="py-space-md px-space-md text-center">
                      <span className="material-symbols-outlined text-on-surface">
                        check
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-blush-subtle/30 transition-colors">
                    <td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">
                      Gmail Integration
                    </td>
                    <td className="py-space-md px-space-md text-center">
                      <span className="material-symbols-outlined text-slate-muted opacity-50">
                        remove
                      </span>
                    </td>
                    <td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50">
                      <span className="material-symbols-outlined text-primary">
                        check
                      </span>
                    </td>
                    <td className="py-space-md px-space-md text-center">
                      <span className="material-symbols-outlined text-on-surface">
                        check
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-blush-subtle/30 transition-colors">
                    <td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">
                      1-Click ATS Submission
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-slate-muted">
                      Manual Export
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-primary bg-surface-blush-subtle/50">
                      Supported Platforms
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">
                      All Platforms
                    </td>
                  </tr>
                  <tr className="bg-surface-ground">
                    <td
                      colSpan={4}
                      className="py-space-sm px-space-lg font-label-md text-label-md text-on-surface"
                    >
                      Service & Security
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-blush-subtle/30 transition-colors">
                    <td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">
                      Data Privacy
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-slate-muted">
                      Isolated DB Row
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-primary bg-surface-blush-subtle/50">
                      Isolated DB Row
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">
                      Dedicated Instance
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-blush-subtle/30 transition-colors border-b border-border-lavender">
                    <td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">
                      Support SLA
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-slate-muted">
                      Community & Docs
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-primary bg-surface-blush-subtle/50 rounded-b-lg">
                      Priority Email ({"< 4h"})
                    </td>
                    <td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">
                      Dedicated Concierge & Strategy Call
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ ACCORDION */}
        <section className="w-full bg-surface-ground py-space-xl border-t border-border-lavender">
          <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin">
            <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-space-xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-space-sm">
              <div
                className="p-space-lg rounded-xl bg-surface-card shadow-sm cursor-pointer"
                onClick={() => toggleFaq(1)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    How does the "Zero Blind Submissions" policy work?
                  </h4>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${
                      activeFaq === 1 ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>
                {activeFaq === 1 && (
                  <div className="mt-space-sm pt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    We fundamentally oppose fully autonomous AI agents firing off
                    applications without your consent. ApplyNora prepares
                    everything—CVs, cover letters, and form data—but pauses at the
                    final gate. You must explicitly click "Approve & Submit" for
                    every single application. You retain absolute control over
                    your career brand.
                  </div>
                )}
              </div>

              <div
                className="p-space-lg rounded-xl bg-surface-card shadow-sm cursor-pointer"
                onClick={() => toggleFaq(2)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    Will I be charged unexpectedly after my trial or subscription
                    expires?
                  </h4>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${
                      activeFaq === 2 ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>
                {activeFaq === 2 && (
                  <div className="mt-space-sm pt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Never. ApplyNora implements a strict Zero Surprise Renewal
                    policy. You can choose "Manual Renewal" at checkout to
                    authorize each monthly billing cycle explicitly. For
                    auto-renewing subscriptions, we dispatch an advance email
                    notification 72 hours before payment processing, and
                    cancellations are effective instantly.
                  </div>
                )}
              </div>

              <div
                className="p-space-lg rounded-xl bg-surface-card shadow-sm cursor-pointer"
                onClick={() => toggleFaq(3)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    What happens if I exhaust my fact-grounded drafts quota?
                  </h4>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${
                      activeFaq === 3 ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>
                {activeFaq === 3 && (
                  <div className="mt-space-sm pt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    If you exceed your tier's monthly AI draft allowance, your
                    existing documents, ATS templates, and tracking sync remain
                    100% operational. You can either purchase a supplementary
                    top-up draft pack through Paystack or instantly upgrade to the
                    next tier for prorated access.
                  </div>
                )}
              </div>

              <div
                className="p-space-lg rounded-xl bg-surface-card shadow-sm cursor-pointer"
                onClick={() => toggleFaq(4)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    Is my Gmail and CV data shared or used to train third-party AI
                    models?
                  </h4>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${
                      activeFaq === 4 ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </div>
                {activeFaq === 4 && (
                  <div className="mt-space-sm pt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Absolutely not. We use restricted Google OAuth scopes solely to
                    detect interview schedules and company responses. Your CV
                    credentials and emails are isolated via Postgres Row-Level
                    Security (RLS) and are never used to train public models or
                    shared with outside recruiters.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
