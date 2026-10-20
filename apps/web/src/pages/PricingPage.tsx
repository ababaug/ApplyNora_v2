
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


export function PricingPage() {






  return (
    <>
      <Helmet>
        <title>Pricing - ApplyNora</title>
      </Helmet>
      <main className="w-full pt-20 bg-surface-ground min-h-screen"><div className="flex flex-col w-full">
{/*  Hero / Introduction Banner  */}
<section className="relative w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl overflow-hidden">
{/*  Atmospheric Ambient Glow Orbs  */}
<div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute -top-20 right-1/4 w-[32rem] h-[32rem] rounded-full bg-surface-blush/30 blur-3xl pointer-events-none"></div>
<div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
{/*  Overline Pill  */}
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high shadow-sm mb-space-md">
<span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Paystack Verified • Complete Transparency</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-md max-w-4xl">
        Transparent, Value-Driven Plans.
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
        No hidden fees, no automatic runaway charges. Upgrade, renew, or cancel with complete peace of mind through secured gateway authorization.
      </p>
{/*  Paystack Currency & Cadence Switcher  */}
<div className="mt-space-xl p-space-xs rounded-full bg-surface-card shadow-md flex items-center gap-space-xs">
<button className="flex items-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md transition-all duration-300 cursor-pointer text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
          Monthly Billing
        </button>
<button className="flex items-center gap-space-xs px-space-lg py-space-sm rounded-full font-label-md text-label-md transition-all duration-300 cursor-pointer bg-gradient-to-r from-primary-container to-secondary text-on-primary shadow-sm">
<span className="material-symbols-outlined text-[18px]">verified</span>
          Annual Billing
          <span className="px-space-xs py-0.5 rounded-full bg-surface-blush text-primary text-caption font-bold ml-1">Save 20%</span>
</button>
</div>
{/*  Currency Switcher Pill  */}
<div className="mt-space-md flex items-center gap-space-sm text-slate-muted font-label-sm text-label-sm">
<span>Payment Currency:</span>
<button className="px-space-sm py-0.5 rounded-lg bg-surface-container-highest text-primary font-bold transition-all" id="currUSD">USD ($)</button>
<button className="px-space-sm py-0.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" id="currNGN">NGN (₦ via Paystack)</button>
</div>
</div>
</section>
{/*  3-Tier Pricing Cards Grid  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pb-space-xl">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
{/*  1. Free Tier (Explorer)  */}
<div className="flex flex-col justify-between rounded-xl bg-surface-card p-space-xl shadow-md transition-all duration-300 hover:shadow-xl">
<div className="flex flex-col">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-slate-muted uppercase tracking-wider">Explorer</span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Entry Level</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Free Tier</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
            Essential foundation for students and professionals starting structured career positioning.
          </p>
{/*  Price Indicator  */}
<div className="mb-space-lg pb-space-md bg-surface-ground p-space-md rounded-lg">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-xl text-headline-xl text-on-surface price-val-free">$0</span>
<span className="font-body-md text-body-md text-slate-muted">/ forever</span>
</div>
<p className="font-caption text-caption text-slate-muted mt-1">Zero credit card required at sign up</p>
</div>
{/*  Entitlements List  */}
<div className="flex flex-col gap-space-sm mb-space-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-muted">Includes:</span>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface"><strong>10 Fact-grounded</strong> AI tailored drafts/mo</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">ATS plain-text CV builder & PDF export</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Manual interview stage tracker & notes</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">1 Master CV in private secure vault</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Community Slack & Docs access</span>
</div>
<div className="flex items-start gap-space-sm opacity-40">
<span className="material-symbols-outlined text-slate-muted text-[20px] mt-0.5 shrink-0">block</span>
<span className="font-body-sm text-body-sm text-slate-muted line-through">Scoped Gmail interview sync</span>
</div>
<div className="flex items-start gap-space-sm opacity-40">
<span className="material-symbols-outlined text-slate-muted text-[20px] mt-0.5 shrink-0">block</span>
<span className="font-body-sm text-body-sm text-slate-muted line-through">Telegram dispatch notifications</span>
</div>
</div>
</div>
<Link className="w-full text-center py-space-sm px-space-md rounded-lg font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors" data-path="signup" to="/">
          Get Started Free
        </Link>
</div>
{/*  2. Professional Tier (Most Popular)  */}
<div className="relative flex flex-col justify-between rounded-xl bg-surface-card p-space-xl shadow-xl transition-all duration-300 hover:shadow-2xl -mt-0 lg:-mt-4 bg-gradient-to-b from-surface-card via-surface-card to-surface-blush-subtle/50">
{/*  Floating Highlight Badge  */}
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-md py-1 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm shadow-md flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-surface-blush">stars</span>
          Most Popular for Job Seekers
        </div>
<div className="flex flex-col">
<div className="flex items-center justify-between mb-space-sm mt-1">
<span className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider">Active Search</span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-blush text-primary font-label-sm text-label-sm">High Value</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Professional Tier</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
            High-cadence applications with verified multi-model fallback, auto sync, and instant dispatches.
          </p>
{/*  Price Indicator  */}
<div className="mb-space-lg pb-space-md bg-surface-container-low p-space-md rounded-lg">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-xl text-headline-xl text-primary" id="proPrice">$29</span>
<span className="font-body-md text-body-md text-slate-muted" id="proPeriod">/ month</span>
</div>
<p className="font-caption text-caption text-secondary font-semibold mt-1" id="proAltPaystack">
              ₦35,000 NGN via Paystack recurring or manual renewal
            </p>
</div>
{/*  Entitlements List  */}
<div className="flex flex-col gap-space-sm mb-space-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Everything in Explorer, plus:</span>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface"><strong>60 Fact-grounded</strong> AI tailored drafts/mo</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Multi-model fallback <em>(Gemini Pro + NVIDIA)</em></span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Unlimited ATS CV versions & DOCX export</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface"><strong>Scoped Gmail sync</strong> & interview intelligence</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">24h & 1h Telegram + Email reminders</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Google Sheets two-way tracking sync</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Priority queue email support (&lt; 4h SLA)</span>
</div>
</div>
</div>
<Link className="w-full text-center py-space-sm px-space-md rounded-lg font-label-md text-label-md text-on-primary bg-gradient-to-r from-primary-container to-secondary shadow-md hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-space-xs" data-path="checkout-pro" to="/">
<span className="material-symbols-outlined text-[18px]">bolt</span>
          Start 14-Day Pro Trial
        </Link>
</div>
{/*  3. Executive Tier (Career Accelerator)  */}
<div className="flex flex-col justify-between rounded-xl bg-surface-card p-space-xl shadow-md transition-all duration-300 hover:shadow-xl">
<div className="flex flex-col">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-slate-muted uppercase tracking-wider">Career Accelerator</span>
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">High Cadence</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-space-xs">Executive Tier</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
            Complete executive suite with dry-run automations, multi-tenant roles, and strategic 1-on-1 human advisory.
          </p>
{/*  Price Indicator  */}
<div className="mb-space-lg pb-space-md bg-surface-ground p-space-md rounded-lg">
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-xl text-headline-xl text-on-surface" id="execPrice">$69</span>
<span className="font-body-md text-body-md text-slate-muted" id="execPeriod">/ month</span>
</div>
<p className="font-caption text-caption text-slate-muted mt-1" id="execAltPaystack">
              ₦85,000 NGN via Paystack recurring or manual invoice
            </p>
</div>
{/*  Entitlements List  */}
<div className="flex flex-col gap-space-sm mb-space-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-slate-muted">Everything in Pro, plus:</span>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface"><strong>200 Fact-grounded</strong> AI tailored drafts/mo</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface"><strong>Dry-run automation</strong> pipeline with batch queueing</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Advanced skill-gap analysis & salary benchmarking</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Dedicated account vault with unlimited CVs</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Multi-tenant role matching & headhunter radar</span>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5 shrink-0">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface"><strong>1-on-1 career strategy onboarding</strong> session</span>
</div>
</div>
</div>
<Link className="w-full text-center py-space-sm px-space-md rounded-lg font-label-md text-label-md bg-inverse-surface text-inverse-on-surface hover:bg-slate-muted transition-colors flex items-center justify-center gap-space-xs" data-path="checkout-exec" to="/">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
          Get Executive Access
        </Link>
</div>
</div>
</section>
{/*  Value & Security Guarantees: Paystack & Fair Billing Section  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-lg">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Card 1: Paystack Secured  */}
<div className="p-space-lg rounded-xl bg-surface-card shadow-sm flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">lock</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Paystack Secured Gateway</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Bank-grade TLS 256-bit encryption. Seamlessly pay via credit card, bank transfer, or USSD with immediate receipt issuance and automated tokenization.
        </p>
<div className="flex items-center gap-space-xs text-caption font-bold text-success mt-auto">
<span className="material-symbols-outlined text-[16px]">check</span>
          PCI-DSS Level 1 Certified Integration
        </div>
</div>
{/*  Card 2: Fair Billing / No Surprise Renewals  */}
<div className="p-space-lg rounded-xl bg-surface-card shadow-sm flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-blush-subtle flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[28px]">sentiment_very_satisfied</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Zero Surprise Renewals</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Choose between manual monthly authorization or automatic billing with a 3-day advance email notification. Cancel anytime with a single click inside your dashboard.
        </p>
<div className="flex items-center gap-space-xs text-caption font-bold text-primary mt-auto">
<span className="material-symbols-outlined text-[16px]">notifications_active</span>
          Explicit 72h renewal warning notices
        </div>
</div>
{/*  Card 3: Strict Privacy & Zero Reselling  */}
<div className="p-space-lg rounded-xl bg-surface-card shadow-sm flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]">shield_person</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Strict Privacy & Zero Reselling</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          Your CVs, career metrics, and interview communications are confidential. We never sell profile data to recruitment brokers or third-party ad networks.
        </p>
<div className="flex items-center gap-space-xs text-caption font-bold text-success mt-auto">
<span className="material-symbols-outlined text-[16px]">verified</span>
          Encrypted RLS & NDPA/GDPR Compliant
        </div>
</div>
</div>
</section>
{/*  Interactive ROI & Usage Calculator Widget  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-7xl mx-auto rounded-xl bg-surface-card p-space-xl shadow-md">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-5 flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">Value Multiplier</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Calculate Your Weekly Time Saved</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Tailoring each CV manually takes on average 45 minutes. With ApplyNora fact-grounded drafts and automatic tracking, you reclaim hours every week.
          </p>
<div className="mt-space-md flex flex-col gap-space-sm">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface">Target Applications / Month:</span>
<span className="font-headline-sm text-headline-sm text-primary" id="calcAppsValue">30</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer" id="appRange" max="150" min="5" type="range" value="30" />
<div className="flex justify-between text-caption text-slate-muted">
<span>5 apps</span>
<span>75 apps</span>
<span>150 apps</span>
</div>
</div>
</div>
{/*  Metric Output Cards  */}
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-space-md">
<div className="p-space-md rounded-lg bg-surface-ground flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-slate-muted">Hours Reclaimed</span>
<div className="my-space-sm">
<span className="font-headline-lg text-headline-lg text-primary font-bold" id="hoursSaved">22.5</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">hrs/mo</span>
</div>
<span className="font-caption text-caption text-success font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> 85% faster submissions
            </span>
</div>
<div className="p-space-md rounded-lg bg-surface-ground flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-slate-muted">ATS Match Velocity</span>
<div className="my-space-sm">
<span className="font-headline-lg text-headline-lg text-on-surface font-bold" id="matchScore">94%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">avg</span>
</div>
<span className="font-caption text-caption text-slate-muted flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">tune</span> Multi-model grounded
            </span>
</div>
<div className="p-space-md rounded-lg bg-surface-ground flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-slate-muted">Suggested Tier</span>
<div className="my-space-sm">
<span className="font-headline-md text-headline-md text-secondary font-bold" id="suggestedTier">Professional</span>
</div>
<Link className="font-caption text-caption text-primary hover:underline font-bold flex items-center gap-1" data-path="signup" to="/">
              Choose plan <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/*  Exhaustive Feature Comparison Matrix  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-space-xl">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs">Exhaustive Entitlement Matrix</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
          Every capability itemized across security, AI engines, third-party sync, and support SLAs.
        </p>
</div>
<div className="w-full overflow-x-auto rounded-xl bg-surface-card shadow-sm">
<table className="w-full text-left border-collapse min-w-[700px]">
<thead>
<tr className="bg-surface-ground">
<th className="py-space-md px-space-lg font-label-md text-label-md text-on-surface w-1/3">Capability & Entitlements</th>
<th className="py-space-md px-space-md font-label-md text-label-md text-slate-muted text-center w-1/5">Free (Explorer)</th>
<th className="py-space-md px-space-md font-label-md text-label-md text-primary text-center w-1/5 bg-surface-blush-subtle">Professional</th>
<th className="py-space-md px-space-md font-label-md text-label-md text-on-surface text-center w-1/5">Executive</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/*  Category: AI Gateway & Modeling  */}
<tr className="bg-surface-container-low">
<td className="py-space-xs px-space-lg font-label-sm text-label-sm uppercase tracking-wider text-slate-muted font-bold" colSpan={4}>
                AI Gateway & Tailoring
              </td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Monthly Tailored CV & Cover Drafts</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-on-surface-variant">10 / month</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-primary bg-surface-blush-subtle/50">60 / month</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">200 / month</td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Multi-Model Engine Fallback (Gemini + NVIDIA)</td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-slate-muted text-[18px]">remove</span></td>
<td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Fact-grounding Truth Guard (No Hallucination)</td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
<td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Automated Dry-Run & Queue Pipeline</td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-slate-muted text-[18px]">remove</span></td>
<td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50"><span className="material-symbols-outlined text-slate-muted text-[18px]">remove</span></td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
</tr>
{/*  Category: Document Vault  */}
<tr className="bg-surface-container-low">
<td className="py-space-xs px-space-lg font-label-sm text-label-sm uppercase tracking-wider text-slate-muted font-bold" colSpan={4}>
                Document Vault & Exporting
              </td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Master CV Private Storage</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-on-surface-variant">1 Profile</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-primary bg-surface-blush-subtle/50">Unlimited</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">Unlimited Dedicated</td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Export Formats</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-on-surface-variant">PDF only</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-primary font-bold bg-surface-blush-subtle/50">PDF, DOCX, TXT</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">PDF, DOCX, LaTeX, TXT</td>
</tr>
{/*  Category: Integration Scopes  */}
<tr className="bg-surface-container-low">
<td className="py-space-xs px-space-lg font-label-sm text-label-sm uppercase tracking-wider text-slate-muted font-bold" colSpan={4}>
                Automations & Integrations
              </td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Gmail Scoped Interview Ingestion</td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-slate-muted text-[18px]">remove</span></td>
<td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Telegram Dispatch (24h & 1h Alerts)</td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-slate-muted text-[18px]">remove</span></td>
<td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Google Sheets 2-Way Sync</td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-slate-muted text-[18px]">remove</span></td>
<td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
</tr>
{/*  Category: Security & Support  */}
<tr className="bg-surface-container-low">
<td className="py-space-xs px-space-lg font-label-sm text-label-sm uppercase tracking-wider text-slate-muted font-bold" colSpan={4}>
                Security, Privacy & Support
              </td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Row-Level Security (RLS) & MFA</td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
<td className="py-space-md px-space-md text-center bg-surface-blush-subtle/50"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
<td className="py-space-md px-space-md text-center"><span className="material-symbols-outlined text-success text-[20px]">check_circle</span></td>
</tr>
<tr className="hover:bg-surface-blush-subtle/30 transition-colors">
<td className="py-space-md px-space-lg font-body-sm text-body-sm text-on-surface">Support SLA</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm text-slate-muted">Community & Docs</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-primary bg-surface-blush-subtle/50">Priority Email (&lt; 4h)</td>
<td className="py-space-md px-space-md text-center font-body-sm text-body-sm font-bold text-on-surface">Dedicated Concierge & Strategy Call</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  Frequently Asked Questions Accordion  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<div className="text-center mb-space-lg">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">Got Questions?</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Frequently Asked Questions</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Clear answers about billing authorizations, Paystack payment methods, and account upgrades.
        </p>
</div>
<div className="w-full flex flex-col gap-space-sm">
{/*  FAQ 1  */}
<div className="p-space-lg rounded-xl bg-surface-card shadow-sm cursor-pointer" >
                 <div className="flex items-center justify-between">
                     <h4 className="font-headline-sm text-headline-sm text-on-surface">How does Paystack billing work for Nigerian and international cards?</h4>
                     <span className={`material-symbols-outlined text-primary transition-transform duration-200 `}>expand_more</span>
                 </div>
                 <div className="mt-space-sm pt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            We use Paystack to process payments in Nigerian Naira (₦) as well as USD. For Nigerian accounts, you can pay via local Mastercard, Visa, Verve, direct bank transfer, or USSD code. International applicants outside Nigeria can pay via standard Visa and Mastercard in USD. All conversions follow live interbank settlement rates with no surcharges.
          </div>
             </div>
{/*  FAQ 2  */}
<div className="p-space-lg rounded-xl bg-surface-card shadow-sm cursor-pointer" >
                 <div className="flex items-center justify-between">
                     <h4 className="font-headline-sm text-headline-sm text-on-surface">Will I be charged unexpectedly after my trial or subscription expires?</h4>
                     <span className={`material-symbols-outlined text-primary transition-transform duration-200 `}>expand_more</span>
                 </div>
                 <div className="mt-space-sm pt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Never. ApplyNora implements a strict Zero Surprise Renewal policy. You can choose "Manual Renewal" at checkout to authorize each monthly billing cycle explicitly. For auto-renewing subscriptions, we dispatch an advance email notification 72 hours before payment processing, and cancellations are effective instantly.
          </div>
             </div>
{/*  FAQ 3  */}
<div className="p-space-lg rounded-xl bg-surface-card shadow-sm cursor-pointer" >
                 <div className="flex items-center justify-between">
                     <h4 className="font-headline-sm text-headline-sm text-on-surface">What happens if I exhaust my fact-grounded drafts quota?</h4>
                     <span className={`material-symbols-outlined text-primary transition-transform duration-200 `}>expand_more</span>
                 </div>
                 <div className="mt-space-sm pt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            If you exceed your tier's monthly AI draft allowance, your existing documents, ATS templates, and tracking sync remain 100% operational. You can either purchase a supplementary top-up draft pack through Paystack or instantly upgrade to the next tier for prorated access.
          </div>
             </div>
{/*  FAQ 4  */}
<div className="p-space-lg rounded-xl bg-surface-card shadow-sm cursor-pointer" >
                 <div className="flex items-center justify-between">
                     <h4 className="font-headline-sm text-headline-sm text-on-surface">Is my Gmail and CV data shared or used to train third-party AI models?</h4>
                     <span className={`material-symbols-outlined text-primary transition-transform duration-200 `}>expand_more</span>
                 </div>
                 <div className="mt-space-sm pt-space-sm font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Absolutely not. We use restricted Google OAuth scopes solely to detect interview schedules and company responses. Your CV credentials and emails are isolated via Postgres Row-Level Security (RLS) and are never used to train public models or shared with outside recruiters.
          </div>
             </div>
</div>
</div>
</section>
{/*  Bottom CTA Banner  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-primary-container via-secondary to-tertiary p-space-xl text-on-primary shadow-xl relative overflow-hidden">
{/*  Decorative Backdrop Geometry  */}
<div className="absolute -right-10 -bottom-10 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-xl">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-blush">Accelerate Your Search</span>
<h2 className="font-headline-lg text-headline-lg font-extrabold text-on-primary">
            Ready for a structured, interview-generating search?
          </h2>
<p className="font-body-md text-body-md text-white/90">
            Join thousands of professionals landing higher-compensation roles with AI-guided ATS precision.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0">
<Link className="px-space-lg py-space-sm rounded-lg bg-surface-card text-primary font-label-md text-label-md hover:bg-surface-blush-subtle shadow-md transition-all" data-path="signup" to="/">
            Get Started Free
          </Link>
<Link className="px-space-lg py-space-sm rounded-lg bg-white/20 backdrop-blur-md text-on-primary font-label-md text-label-md hover:bg-white/30 transition-all" data-path="checkout-pro" to="/">
            Start 14-Day Pro Trial
          </Link>
</div>
</div>
</div>
</section>
{/*  Client-side Interactive Logic for Pricing, Currency & FAQ  */}

</div></main>
    </>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
