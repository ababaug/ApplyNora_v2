
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function HomePage() {
  const [activeTab, setActiveTab] = useState('cv-builder');

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Helmet>
        <title>Home - ApplyNora</title>
      </Helmet>
      <main className="w-full pt-20 bg-surface-ground min-h-screen"><div className="flex flex-col w-full">
{/*  AMBIENT GLOW SYSTEM (Non-overflowing)  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary-fixed/30 to-secondary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-surface-blush/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
{/*  SECTION 1: HERO CONTAINER  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-lg pb-space-xl">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
{/*  Trust Badge Pill  */}
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-card shadow-sm mb-space-md animate-fade-in">
<span className="w-2 h-2 rounded-full bg-success"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
            Zero Blind Submissions • 100% Fact-Grounded Claims • Human-in-the-Loop
          </span>
</div>
{/*  Main Headline  */}
<h1 className="font-headline-xl text-headline-xl text-on-surface max-w-5xl tracking-tight leading-tight">
          Land Executive & Specialist Roles with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Precision AI</span> That Respects Your Truth
        </h1>
{/*  Subheadline  */}
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mt-space-md mb-space-lg">
          AI-tailored CVs and cover letters grounded strictly in your verified career history. Human-reviewed automation, zero hallucinations, and candidate-controlled job discovery and tracking.
        </p>
{/*  CTA Action Hub  */}
<div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
<Link className="w-full sm:w-auto font-label-md text-label-md text-on-primary bg-gradient-to-r from-primary-container to-secondary hover:brightness-105 active:scale-95 px-space-xl py-space-md rounded-xl shadow-lg shadow-primary-container/20 transition-all flex items-center justify-center gap-space-xs" to="/">
<span className="material-symbols-outlined text-[20px]">bolt</span>
            Start Free Trial
          </Link>
<Link className="w-full sm:w-auto font-label-md text-label-md text-on-surface bg-surface-card hover:bg-surface-blush-subtle px-space-xl py-space-md rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-space-xs" to="/">
<span className="material-symbols-outlined text-[20px] text-primary">play_circle</span>
            Explore Interactive Demo
          </Link>
</div>
{/*  Reassurance Micro-Copy  */}
<div className="flex items-center gap-space-lg mt-space-md text-slate-muted font-caption text-caption">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-success">check_circle</span> No credit card required</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-primary">shield</span> Strict zero-model-training policy</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px] text-secondary">tune</span> Tailor on your own domain</span>
</div>
{/*  HERO DUAL-PANEL INTERACTIVE VISUAL  */}
<div className="w-full mt-space-xl max-w-6xl" id="interactive-preview">
<div className="p-space-xs md:p-space-sm rounded-2xl bg-gradient-to-b from-primary-fixed/50 via-surface-card to-surface-container-low shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md bg-surface-card rounded-xl p-space-md md:p-space-lg text-left">
{/*  Left Preview: ATS Resume Generation Workspace (7 Cols)  */}
<div className="lg:col-span-7 flex flex-col gap-space-md bg-surface-ground rounded-xl p-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-full bg-error/40"></span>
<span className="w-3 h-3 rounded-full bg-warning/40"></span>
<span className="w-3 h-3 rounded-full bg-success/40"></span>
<span className="font-label-sm text-label-sm text-slate-muted ml-2">Executive_Brief_VP_Product_v4.pdf</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-success/10 text-success font-caption text-caption">
<span className="w-1.5 h-1.5 rounded-full bg-success"></span> ATS Score: 98/100
                    </span>
<span className="px-space-xs py-0.5 rounded-full bg-surface-blush-subtle text-primary font-caption text-caption">
                      Fact-Locked
                    </span>
</div>
</div>
{/*  Resume Sheet Mockup  */}
<div className="bg-surface-card rounded-lg p-space-md shadow-sm space-y-space-sm">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Elena Rostova, MBA</h3>
<p className="font-label-sm text-label-sm text-secondary">VP of Global Product Strategy • Enterprise SaaS Scale</p>
</div>
<div className="text-right">
<span className="font-caption text-caption text-slate-muted">Target: Chief Product Officer</span>
<p className="font-caption text-caption text-success font-semibold">Matched to Stripe / Series D FinTech</p>
</div>
</div>
{/*  Executive Summary with Highlighted Grounded Facts  */}
<div className="p-space-sm rounded-md bg-surface-blush-subtle text-on-surface">
<p className="font-caption text-caption uppercase text-primary font-bold tracking-wider mb-1">Fact-Synthesized Executive Dossier</p>
<p className="font-body-sm text-body-sm leading-relaxed">
                      Transformational product leader with 14+ years spearheading B2B platforms. Scaled ARR from <span className="bg-primary-fixed text-on-primary-fixed px-1 rounded font-semibold">$18M to $120M</span> across EMEA and NA markets. Directed 65-person cross-functional squads, authored 3 core machine learning platform patents, and spearheaded SOC2-Type II enterprise deployments.
                    </p>
</div>
{/*  Experience Item  */}
<div className="space-y-1">
<div className="flex justify-between items-baseline">
<span className="font-label-md text-label-md text-on-surface">VP of Product • CloudMatrix Systems</span>
<span className="font-caption text-caption text-slate-muted">2021 — 2024</span>
</div>
<ul className="space-y-1 pl-4 list-disc text-slate-muted font-body-sm text-body-sm">
<li>Modernized legacy billing API, shortening customer provisioning cycle by <span className="text-on-surface font-semibold">68%</span> (Source: Q3 2023 Attested Report).</li>
<li>Maintained zero compliance breaches while expanding cross-border payment gateway to 24 new jurisdictions.</li>
</ul>
</div>
{/*  Bottom CV Controls Bar  */}
<div className="pt-space-xs flex items-center justify-between border-t-0 bg-surface-ground p-space-xs rounded-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[18px] text-primary">auto_fix_high</span>
<span className="font-caption text-caption text-on-surface font-medium">Model: NVIDIA-Nemotron Career-Engine v2.4</span>
</div>
<button className="px-space-sm py-1 rounded bg-surface-card text-primary font-label-sm text-label-sm shadow-sm hover:bg-surface-blush-subtle transition-colors">
                      Compare with Raw Profile
                    </button>
</div>
</div>
</div>
{/*  Right Preview: Evidence Verification & Quota Audit (5 Cols)  */}
<div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
{/*  Match Confidence Gauge & Telemetry  */}
<div className="bg-surface-ground rounded-xl p-space-md space-y-space-sm">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface">Verification Engine Status</span>
<span className="inline-flex items-center gap-1 font-caption text-caption text-success bg-surface-card px-space-xs py-0.5 rounded-full shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-success animate-ping"></span> Live Audit
                    </span>
</div>
<div className="p-space-md bg-surface-card rounded-lg shadow-sm flex items-center gap-space-md">
{/*  Inline Match Gauge SVG  */}
<div className="relative w-20 h-20 flex-shrink-0 flex items-center justify-center">
<svg className="w-20 h-20 -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="98, 100" strokeLinecap="round" strokeWidth="3.5" />
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-sm text-headline-sm text-on-surface font-extrabold leading-none">98%</span>
<span className="font-caption text-caption text-slate-muted scale-90">Match</span>
</div>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Fact Grounding Ratio</span>
<span className="font-caption text-caption text-success font-semibold">0 Hallucinated Tokens Detected</span>
<span className="font-body-sm text-body-sm text-slate-muted mt-1">Cross-referenced with 4 uploaded work transcripts & verified LinkedIn archive.</span>
</div>
</div>
{/*  Claim Verification Feed  */}
<div className="space-y-space-xs">
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider">Candidate Claim Attestations</span>
<div className="p-space-xs bg-surface-card rounded-md shadow-sm flex items-center justify-between text-on-surface">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-[18px] text-success">task_alt</span>
<span className="font-body-sm text-body-sm truncate">Annual ARR Scale: $18M → $120M</span>
</div>
<span className="font-caption text-caption px-1.5 py-0.5 rounded bg-surface-ground text-slate-muted font-mono">10-K Audited</span>
</div>
<div className="p-space-xs bg-surface-card rounded-md shadow-sm flex items-center justify-between text-on-surface">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-[18px] text-success">task_alt</span>
<span className="font-body-sm text-body-sm truncate">Direct Team Leadership: 65 FTEs</span>
</div>
<span className="font-caption text-caption px-1.5 py-0.5 rounded bg-surface-ground text-slate-muted font-mono">Org Verified</span>
</div>
<div className="p-space-xs bg-surface-card rounded-md shadow-sm flex items-center justify-between text-on-surface">
<div className="flex items-center gap-2 min-w-0">
<span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
<span className="font-body-sm text-body-sm truncate">Stanford GSB Executive Education</span>
</div>
<span className="font-caption text-caption px-1.5 py-0.5 rounded bg-surface-ground text-slate-muted font-mono">Degree Safe</span>
</div>
</div>
{/*  Controlled Dry-Run Automation Bar  */}
<div className="p-space-sm bg-surface-blush rounded-lg text-on-surface flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm text-on-secondary-fixed">Daily Dry-Run Quota Status</p>
<p className="font-body-sm text-body-sm text-on-surface-variant font-medium">3 of 5 Drafts Ready for Manual Sign-off</p>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow hover:brightness-110 transition-all flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">visibility</span>
                      Inspect Queue
                    </button>
</div>
</div>
{/*  Micro Quick Action Help  */}
<div className="flex items-center justify-between px-space-xs text-slate-muted font-caption text-caption">
<span>Candidate Workspace Session ID: #EX-9042</span>
<span className="text-primary font-semibold hover:underline cursor-pointer flex items-center gap-0.5">
                    View Audit Logs <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 2: LIVE METRICS & PROOF POINTS BAR  */}
<section className="w-full bg-surface-card shadow-sm py-space-lg px-margin-mobile md:px-margin lg:px-margin-desktop">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center md:text-left">
<div className="flex flex-col gap-1 items-center md:items-start">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight">14,200+</span>
<span className="material-symbols-outlined text-secondary text-[20px]">trending_up</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Tailored Applications</span>
<span className="font-caption text-caption text-slate-muted">Zero mass-spam, zero auto-rejects</span>
</div>
<div className="flex flex-col gap-1 items-center md:items-start">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-secondary tracking-tight">94%</span>
<span className="font-caption text-caption text-success font-bold">+18% vs avg</span>
</div>
<span className="font-label-md text-label-md text-on-surface">ATS Parse Rate</span>
<span className="font-caption text-caption text-slate-muted">Validated against Workday, Greenhouse & Lever</span>
</div>
<div className="flex flex-col gap-1 items-center md:items-start">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">4.2x</span>
<span className="material-symbols-outlined text-warning text-[20px]">speed</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Faster Response Time</span>
<span className="font-caption text-caption text-slate-muted">Average candidate first-round invite speed</span>
</div>
<div className="flex flex-col gap-1 items-center md:items-start">
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-success tracking-tight">100%</span>
<span className="material-symbols-outlined text-success text-[20px]">lock</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Data Isolation</span>
<span className="font-caption text-caption text-slate-muted">Client vaults partitioned via zero-trust encryption</span>
</div>
</div>
</section>
{/*  SECTION 3: VALUE PROPOSITION (3 PILLARS)  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="text-center max-w-3xl mx-auto space-y-space-xs">
<span className="font-caption text-caption uppercase text-primary font-bold tracking-widest">Built For Executive Discretion</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
            The Three Pillars of Ethical Career Intelligence
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Traditional career bots spam generic cover letters that damage your brand. ApplyNora delivers executive-grade craftsmanship with unyielding integrity.
          </p>
</div>
{/*  3 Pillars Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Pillar 1  */}
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div className="space-y-space-md">
<div className="w-14 h-14 rounded-xl bg-surface-blush-subtle text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[32px]">psychology</span>
</div>
<div className="space-y-space-xs">
<div className="inline-flex items-center gap-1 font-caption text-caption text-secondary font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Zero Hallucinations
                </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Fact-Grounded AI Gateway</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Server-side Gemini and NVIDIA Nemotron models strictly constrain output to your verified profile facts and candidate-attested claims. We never invent titles, skills, or inflated revenue numbers.
                </p>
</div>
</div>
{/*  Architectural visual cue  */}
<div className="mt-space-md pt-space-md bg-surface-ground rounded-xl p-space-sm space-y-2">
<div className="flex items-center justify-between font-caption text-caption">
<span className="text-slate-muted">Hallucination Threshold</span>
<span className="text-success font-bold font-mono">0.000% Enforced</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-primary to-secondary h-full w-full"></div>
</div>
<div className="text-slate-muted font-caption text-caption flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">format_image_left</span> Source token grounding active
              </div>
</div>
</div>
{/*  Pillar 2  */}
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div className="space-y-space-md">
<div className="w-14 h-14 rounded-xl bg-surface-blush-subtle text-secondary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[32px]">handyman</span>
</div>
<div className="space-y-space-xs">
<div className="inline-flex items-center gap-1 font-caption text-caption text-secondary font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Full Control
                </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Controlled Dry-Run Automation</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  No runaway scripts firing applications in your sleep. Review discovered matches, adjust custom daily submission quotas, and inspect draft application packets before anything ever leaves your queue.
                </p>
</div>
</div>
{/*  Interactive simulation snippet  */}
<div className="mt-space-md pt-space-md bg-surface-ground rounded-xl p-space-sm space-y-2">
<div className="flex items-center justify-between font-caption text-caption">
<span className="text-slate-muted">Queue Mode</span>
<span className="text-primary font-bold">Manual Authorize (Default)</span>
</div>
<div className="flex items-center gap-1 bg-surface-card p-1.5 rounded text-on-surface font-body-sm text-body-sm shadow-xs">
<span className="material-symbols-outlined text-[16px] text-warning">pending_actions</span>
<span className="truncate">VP Engineering @ Datadog (Pending Approval)</span>
</div>
</div>
</div>
{/*  Pillar 3  */}
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
<div className="space-y-space-md">
<div className="w-14 h-14 rounded-xl bg-surface-blush-subtle text-primary-container flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[32px]">dashboard_customize</span>
</div>
<div className="space-y-space-xs">
<div className="inline-flex items-center gap-1 font-caption text-caption text-primary-container font-bold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span> Complete Orchestration
                </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Intelligent Candidate Workspace</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  A high-productivity command center. Unified interview tracker with bidirectional Gmail sync, calendar meeting alerts, automated Google Sheets pipeline exports, and a private encrypted document vault.
                </p>
</div>
</div>
{/*  Integration Pill icons  */}
<div className="mt-space-md pt-space-md bg-surface-ground rounded-xl p-space-sm flex items-center justify-around">
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-[20px] text-primary">mail</span>
<span className="font-caption text-caption text-slate-muted mt-0.5">Gmail Sync</span>
</div>
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-[20px] text-secondary">table_chart</span>
<span className="font-caption text-caption text-slate-muted mt-0.5">Sheets Sync</span>
</div>
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-[20px] text-success">event_available</span>
<span className="font-caption text-caption text-slate-muted mt-0.5">Calendar Cal</span>
</div>
<div className="flex flex-col items-center">
<span className="material-symbols-outlined text-[20px] text-outline">lock</span>
<span className="font-caption text-caption text-slate-muted mt-0.5">Vault Key</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 4: INTERACTIVE FEATURE SHOWCASE / TABBED SUITE  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl bg-surface-card shadow-sm">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-caption text-caption uppercase text-primary font-bold tracking-widest">Platform Capabilities</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
              Engineered for Discerning Leadership Careers
            </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Click through our specialized modules designed to replace disjointed spreadsheets and brittle browser extensions.
          </p>
</div>
{/*  Interactive Tab Navigation Buttons  */}
<div className="flex items-center gap-space-xs p-1.5 bg-surface-ground rounded-xl overflow-x-auto self-start" id="tab-nav">
<button className={`tab-btn ${activeTab === 'cv-builder' ? 'active bg-surface-card text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'} px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs bg-surface-card text-primary shadow-xs`} onClick={() => switchTab('cv-builder')}>
<span className="material-symbols-outlined text-[18px]">document_scanner</span>
            ATS CV Builder
          </button>
<button className={`tab-btn ${activeTab === 'tracker' ? 'active bg-surface-card text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'} px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface`} onClick={() => switchTab('tracker')}>
<span className="material-symbols-outlined text-[18px]">timeline</span>
            Interview Tracker & Reminders
          </button>
<button className={`tab-btn ${activeTab === 'matcher' ? 'active bg-surface-card text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'} px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs text-on-surface-variant hover:text-on-surface`} onClick={() => switchTab('matcher')}>
<span className="material-symbols-outlined text-[18px]">target</span>
            Ethical Opportunity Radar
          </button>
</div>
{/*  Tab Content Panes  */}
<div className="w-full bg-surface-ground rounded-2xl p-space-md md:p-space-xl shadow-xs">
{/*  PANE 1: ATS CV Builder  */}
<div className={`tab-pane ${activeTab === 'cv-builder' ? 'flex' : 'hidden'} flex-col lg:flex-row items-center gap-space-xl`}>
<div className="w-full lg:w-1/2 space-y-space-md">
<span className="inline-flex items-center gap-1 font-caption text-caption text-primary bg-surface-blush-subtle px-2 py-0.5 rounded-full font-bold">
                Dynamic Profile Weaving
              </span>
<h3 className="font-headline-md text-headline-md text-on-surface">
                Target-Specific Formatting That Beats Screening Engines
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Most AI CV writers introduce buzzword-stuffed hallucinations that flag compliance filters. ApplyNora restructures your verified achievements to highlight verbatim requirements found in the target job requisition.
              </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5">check_circle</span>
<div>
<span className="font-label-md text-label-md text-on-surface">Semantic Keyword Harmony</span>
<p className="font-body-sm text-body-sm text-slate-muted">Aligns ontology without keyword-stuffing penalties.</p>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5">check_circle</span>
<div>
<span className="font-label-md text-label-md text-on-surface">Export to Clean LaTeX, PDF, and DOCX</span>
<p className="font-body-sm text-body-sm text-slate-muted">Retains standard Unicode parsing structure for high-density ATS.</p>
</div>
</div>
</div>
<div className="pt-space-xs">
<Link className="font-label-md text-label-md text-primary flex items-center gap-1 hover:gap-2 transition-all" to="/">
                  Inspect Sample Executive ATS Dossier <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</Link>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="bg-surface-card rounded-xl p-space-md shadow-md space-y-space-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface">Keyword Alignment Inspector</span>
<span className="text-success font-caption text-caption font-bold">Match Score: 96%</span>
</div>
{/*  Keyword tags match representation  */}
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 rounded bg-success/10 text-success font-caption text-caption font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">done</span> P&L Ownership ($80M+)
                  </span>
<span className="px-2 py-1 rounded bg-success/10 text-success font-caption text-caption font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">done</span> B2B SaaS Architecture
                  </span>
<span className="px-2 py-1 rounded bg-success/10 text-success font-caption text-caption font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">done</span> Series B to D Scaling
                  </span>
<span className="px-2 py-1 rounded bg-surface-blush-subtle text-primary font-caption text-caption font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">priority_high</span> Product Led Growth (PLG)
                  </span>
</div>
<div className="p-space-sm bg-surface-ground rounded-lg font-mono text-[11px] text-slate-muted leading-tight space-y-1">
<div className="text-primary font-bold font-sans">Verification Audit Stream:</div>
<div>&gt; Attested claim: Led 45 PMs & Designers (Confirmed via Org chart archive)</div>
<div>&gt; ATS formatting sanity test: Passed [Standard Section Heuristics]</div>
<div>&gt; Model output status: Ready for candidate manual export.</div>
</div>
</div>
</div>
</div>
{/*  PANE 2: Interview Tracker with reminders (Hidden by default)  */}
<div className={`tab-pane ${activeTab === 'tracker' ? 'flex' : 'hidden'} flex-col lg:flex-row items-center gap-space-xl`}>
<div className="w-full lg:w-1/2 space-y-space-md">
<span className="inline-flex items-center gap-1 font-caption text-caption text-secondary bg-surface-blush-subtle px-2 py-0.5 rounded-full font-bold">
                Zero Missed Deadlines
              </span>
<h3 className="font-headline-md text-headline-md text-on-surface">
                Autonomous Interview Pipeline & Executive Briefing
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Connect your professional calendar and inbox. ApplyNora automatically parses incoming recruiter emails, schedules follow-up cadences, prepares interview dossier prep cards, and sends push notifications.
              </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">mark_email_read</span>
<div>
<span className="font-label-md text-label-md text-on-surface">Intelligent Thread Parsing</span>
<p className="font-body-sm text-body-sm text-slate-muted">Extracts recruiter panel identities, interview rounds, and prep decks.</p>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">sync_alt</span>
<div>
<span className="font-label-md text-label-md text-on-surface">Two-Way Google Sheets Export</span>
<p className="font-body-sm text-body-sm text-slate-muted">Keep an offline spreadsheet mirror updated in real-time.</p>
</div>
</div>
</div>
</div>
{/*  Pipeline Mockup Table  */}
<div className="w-full lg:w-1/2">
<div className="bg-surface-card rounded-xl p-space-md shadow-md space-y-space-xs">
<div className="flex justify-between items-center mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface">Active Executive Pipelines (4)</span>
<span className="font-caption text-caption text-slate-muted">Auto-Synced with G-Suite</span>
</div>
<div className="p-space-sm bg-surface-ground rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center font-bold text-primary shadow-xs">S</div>
<div>
<div className="font-label-sm text-label-sm text-on-surface">Stripe • Head of Platform</div>
<div className="font-caption text-caption text-secondary">Final Partner Round • Tomorrow 2:00 PM EST</div>
</div>
</div>
<span className="px-2 py-1 rounded-full bg-success/10 text-success font-caption text-caption">Prep Ready</span>
</div>
<div className="p-space-sm bg-surface-ground rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center font-bold text-secondary shadow-xs">F</div>
<div>
<div className="font-label-sm text-label-sm text-on-surface">Figma • Director of Product</div>
<div className="font-caption text-caption text-slate-muted">Screening Interview • Oct 28</div>
</div>
</div>
<span className="px-2 py-1 rounded-full bg-surface-blush-subtle text-primary font-caption text-caption">Follow-up due</span>
</div>
<div className="p-space-sm bg-surface-ground rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-8 h-8 rounded-lg bg-surface-card flex items-center justify-center font-bold text-slate-muted shadow-xs">C</div>
<div>
<div className="font-label-sm text-label-sm text-on-surface">Coinbase • VP Eng Infrastructure</div>
<div className="font-caption text-caption text-slate-muted">Technical Deep Dive • Completed</div>
</div>
</div>
<span className="px-2 py-1 rounded-full bg-surface-container text-slate-muted font-caption text-caption">Awaiting Reply</span>
</div>
</div>
</div>
</div>
{/*  PANE 3: Ethical Job Matching (Hidden by default)  */}
<div className={`tab-pane ${activeTab === 'matcher' ? 'flex' : 'hidden'} flex-col lg:flex-row items-center gap-space-xl`}>
<div className="w-full lg:w-1/2 space-y-space-md">
<span className="inline-flex items-center gap-1 font-caption text-caption text-success bg-surface-card px-2 py-0.5 rounded-full font-bold shadow-xs">
                Discreet Executive Discovery
              </span>
<h3 className="font-headline-md text-headline-md text-on-surface">
                Filter Out Phantom Postings and Recruiter Farms
              </h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                ApplyNora's opportunity crawler verifies active hiring budgets, direct board-appointed search firms, and compensation ranges before serving matches to your personal queue.
              </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5">verified</span>
<div>
<span className="font-label-md text-label-md text-on-surface">Ghost Job Detection</span>
<p className="font-body-sm text-body-sm text-slate-muted">Flags listings stagnant for over 45 days or reposted without headcount.</p>
</div>
</div>
<div className="flex items-start gap-space-xs">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5">shield</span>
<div>
<span className="font-label-md text-label-md text-on-surface">Direct Executive Access</span>
<p className="font-body-sm text-body-sm text-slate-muted">Connect directly to internal talent partners and hiring committee members.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="bg-surface-card rounded-xl p-space-md shadow-md space-y-space-sm">
<div className="flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface">High-Precision Opportunity Radar</span>
<span className="font-caption text-caption text-success font-semibold">Compensation Verified</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-blush-subtle space-y-1">
<div className="flex justify-between items-start">
<div>
<span className="font-label-md text-label-md text-on-surface">VP of Platform Engineering</span>
<p className="font-caption text-caption text-slate-muted">Anthropic AI • San Francisco / Remote</p>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold">$380k - $460k + Equity</span>
</div>
<div className="flex items-center gap-2 pt-1 font-caption text-caption text-success">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Budget Allocated: Q4 2025 Headcount
                  </div>
</div>
<div className="p-space-sm rounded-lg bg-surface-ground space-y-1">
<div className="flex justify-between items-start">
<div>
<span className="font-label-md text-label-md text-on-surface">Chief Information Security Officer</span>
<p className="font-caption text-caption text-slate-muted">Ramp Financial • New York, NY</p>
</div>
<span className="font-label-sm text-label-sm text-slate-muted font-bold">$320k - $400k</span>
</div>
<div className="flex items-center gap-2 pt-1 font-caption text-caption text-slate-muted">
<span className="material-symbols-outlined text-[14px]">info</span> Requisition verified 2 hours ago
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 5: EXECUTIVE ENDORSEMENTS / TESTIMONIALS  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="text-center max-w-2xl mx-auto space-y-space-xs">
<span className="font-caption text-caption uppercase text-primary font-bold tracking-widest">Endorsed by Leaders</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
            Trusted by Leaders at Tier-1 Tech & Enterprises
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            See how senior professionals reclaimed hours each week and secured coveted leadership seats while maintaining career privacy.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Testimonial 1  */}
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex text-secondary gap-1">
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
                “ApplyNora is the antithesis of the reckless AI spam tools filling LinkedIn. It allowed me to customize 18 highly specialized CPO packages without inventing a single metric. Landed 4 tier-1 interviews within 3 weeks.”
              </p>
</div>
<div className="flex items-center gap-space-sm pt-space-xs">
<img className="w-12 h-12 rounded-full object-cover shadow-xs" data-alt="Professional studio portrait of an experienced female senior product executive with confident warm smile, wearing executive charcoal blazer against a clean bright studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh-o06Qv1Jxn-3PjIUUAsOU_SrARgn4mbUDYfnAn9cdPJK9pXSpSgfBhvd2UdFABmhZqqZLpVUCyeuVnqSEhppg-lQEMSH17BBqylbuQBRdiZ9usALPlNj1_kzBG0NiQ2-hSD46AlbeUSs9lHxv43pjv6PgiF29VBENFCSt_Z-VGpJpH31y3QrHuOUmG_JhODhAESlsoiCiRpvtblyK0o6HjDyNBb8mIXJLpFxrYSip4HaB__1wxYnew" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Marcus Vance</span>
<span className="font-caption text-caption text-slate-muted">Former VP of Product @ FinTech Unicorn</span>
</div>
</div>
</div>
{/*  Testimonial 2  */}
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex text-secondary gap-1">
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
                “The controlled dry-run feature gave me complete peace of mind. As a sitting Director of Engineering, I could never risk blind auto-applications. Having a human-in-the-loop review queue makes this indispensable.”
              </p>
</div>
<div className="flex items-center gap-space-sm pt-space-xs">
<img className="w-12 h-12 rounded-full object-cover shadow-xs" data-alt="Executive headshot of a male engineering director with modern spectacles, sharp thoughtful expression, professional executive lighting, soft neutral gradient background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC55TrHV1V4mwn0DSpqaddbtWEpoN_Ol2cjVS527TYId0YW8EbBqVAePZ6fIWy7H7ctUiE_Eykfdpqanyolhz9InJS_41sNI8t5cb2YZMPt9IaCyBMv6oiHJkHBhik46Japk-J4v_T2CmfWKDiqWNizomfZPjylOjTuBGT1KAqc7Fe9yGQ3J0uK8U2PGtVvhRqSd1Oyn-6L4B0N7DPxHp3aN1HSBHFvjdysM-FoKUoJKO9dOhWa2de2WQ" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Dr. Aris Thorne</span>
<span className="font-caption text-caption text-slate-muted">Director of Cloud Infrastructure @ CloudScale</span>
</div>
</div>
</div>
{/*  Testimonial 3  */}
<div className="bg-surface-card rounded-2xl p-space-lg shadow-sm flex flex-col justify-between space-y-space-md">
<div className="space-y-space-sm">
<div className="flex text-secondary gap-1">
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="material-symbols-outlined text-[18px]">star</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed italic">
                “The Gmail tracker and ATS parsing insights are alone worth 10x the subscription. It highlighted blind spots in my bio that were triggering keyword rejections in Workday. Upgraded to SVP within 60 days.”
              </p>
</div>
<div className="flex items-center gap-space-sm pt-space-xs">
<img className="w-12 h-12 rounded-full object-cover shadow-xs" data-alt="Polished corporate headshot of an executive woman in minimal beige attire, modern high-tech architectural office backdrop with soft natural lighting and warm tone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaWAPjiecxXZRqBdcTKn5ajAEBdj4UD5hjm2RjJkY6hL6yf6CayE5Nci1SABGyf7dLYgqffhpgdUvhLhp-DtebpRXxNlkIGLjsRRofFwsO09q3pA81t9bNYf7XO8uXy9KpcQ4RZj_8jnUaR_SNap3VKJVRS30DAdo1REgDiENsafxHGSOE2AknbnnCvCdC9RaGWf1BnAAHjxexehwKu5Ind5leDd2SdYDiPZYMoLBapnauhcvAuQWmyg" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Seraphina Chen</span>
<span className="font-caption text-caption text-slate-muted">SVP of Global Marketing Operations</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 6: BOTTOM CONVERSION BANNER (Executive Aura Gradient)  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pb-space-xl">
<div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-primary via-tertiary to-primary-container text-on-primary p-space-xl md:p-20 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-space-xl">
{/*  Ambient Decorative Ring inside Card  */}
<div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
<div className="max-w-2xl space-y-space-md relative z-10">
<div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-card/10 backdrop-blur-md text-surface-blush font-caption text-caption font-semibold">
<span className="w-2 h-2 rounded-full bg-surface-blush"></span> Strictly Confidential • Single-Tenant Vault Options
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-primary leading-tight">
            Ready to elevate your career search with ethical AI? Join ambitious leaders today.
          </h2>
<p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed">
            Take full control of your career progression with precision-engineered automation that protects your professional reputation.
          </p>
</div>
<div className="flex flex-col sm:flex-row md:flex-col gap-space-sm w-full md:w-auto relative z-10 flex-shrink-0">
<Link className="w-full sm:w-auto font-label-md text-label-md text-primary bg-surface-card hover:bg-surface-blush-subtle active:scale-95 px-space-xl py-space-md rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-2" to="/">
<span className="material-symbols-outlined text-[20px]">verified</span>
            Get Started Free
          </Link>
<Link className="w-full sm:w-auto font-label-md text-label-md text-on-primary border-0 bg-surface-card/20 hover:bg-surface-card/30 active:scale-95 px-space-xl py-space-md rounded-xl transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm" to="/">
<span className="material-symbols-outlined text-[20px]">calendar_month</span>
            Book Enterprise Demo
          </Link>
</div>
</div>
</section>
</div>
{/*  Inline Tab Switcher Logic  */}

</div></main>
    </>
  );
}
