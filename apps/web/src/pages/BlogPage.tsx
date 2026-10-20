
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { useState } from 'react';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <Helmet>
        <title>Blog - ApplyNora</title>
      </Helmet>
      <main className="w-full pt-20 bg-surface-ground min-h-screen"><div className="flex flex-col w-full">
{/*  Subtle Ambient Glow Scrim behind Hero  */}
<div className="relative w-full overflow-hidden px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-r from-primary-fixed/30 via-surface-blush/40 to-secondary-fixed/20 blur-3xl rounded-full pointer-events-none -z-10"></div>
{/*  Header Block  */}
<div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-space-sm mb-space-xl">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-blush-subtle shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">RESEARCH & SYSTEM INSIGHTS</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight max-w-4xl">
        Intelligence, Attestation, and the Modern Job Market.
      </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
        Deep dives on deterministic ATS parsing, OAuth scoping safeguards, candidate-attested LLM gateways, and executive career velocity.
      </p>
{/*  Micro Meta Bar  */}
<div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs text-on-surface-variant">
<span className="font-caption text-caption flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">verified_user</span> Peer-Reviewed Protocols
        </span>
<span className="font-caption text-caption text-outline">•</span>
<span className="font-caption text-caption flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">memory</span> Zero-Retention AI Audits
        </span>
<span className="font-caption text-caption text-outline">•</span>
<span className="font-caption text-caption flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-success">analytics</span> 99.4% Taleo/Workday Ingestion Fidelity
        </span>
</div>
</div>
{/*  Featured Article Master Card  */}
<div className="max-w-6xl mx-auto mb-space-xl">
<article className="relative bg-surface-card rounded-xl p-space-md md:p-space-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(142,30,162,0.08)] transition-all duration-300 group overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-container via-secondary to-primary-fixed"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-sm py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm tracking-wide uppercase">
                SYSTEM ARCHITECTURE
              </span>
<span className="font-caption text-caption text-slate-muted flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">timer</span> 9 MIN READ
              </span>
<span className="font-caption text-caption text-success flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">verified</span> CRYPTOGRAPHICALLY AUDITED
              </span>
</div>
<Link className="no-underline group" to="/">
<h2 className="font-headline-lg text-headline-lg text-on-surface group-hover:text-primary transition-colors tracking-tight leading-snug">
                Why LLM Hallucinations in CV Tailoring Are Fatal for Executive Searches — and How We Cryptographically Prevent Them.
              </h2>
</Link>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Executive headhunters inspect claims under high legal scrutiny. Unconstrained autoregressive models routinely embellish revenue ownership, extrapolate team headcounts, or invent board-level committees. We demonstrate our candidate-attested Merkle Tree framework that guarantees every generated resume modification maps to cryptographically signed career source artifacts.
            </p>
<div className="pt-space-xs flex flex-wrap items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-full object-cover shadow-sm" data-alt="Portrait photo of Dr. Julian Vance, Chief AI Architect at ApplyNora, wearing a tailored navy blazer against an executive studio backdrop with soft magenta ambient rim light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4lJZg4Vmi6kCJl6_SBhDmjyGNUv3POVXRia5Bug-7MPw9Hi0iOeE2U0mLdvZE3wUSJh-iLQ-_HcQAW5koZLev4EYAhVhvVbh7fldjnoO5sxPKTvqB7WhXYwXX8eV0Hw-In-VWjJV21vYQocNOD0zkJYEx7F2Lu2i1BAAf47mAIU7kacSzpcXZv7Zke_TUYbu03JIAB8cvIRiw9BJeZQsrsDRaT7rT8lvv-gwNa7yp1Lz6DAa39ypVw" />
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Dr. Julian Vance & Elena Rostova</span>
<span className="font-caption text-caption text-slate-muted">AI Reliability & Career Cryptography • Oct 24, 2025</span>
</div>
</div>
<Link className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary group-hover:text-secondary transition-colors font-bold" to="/">
                Read Whitepaper
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
{/*  Visual Teaser / Architecture Schema Illustration  */}
<div className="lg:col-span-5 relative">
<div className="w-full bg-surface-container-low rounded-xl p-space-md shadow-inner flex flex-col gap-space-sm overflow-hidden">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-full bg-error/70"></span>
<span className="w-3 h-3 rounded-full bg-warning/70"></span>
<span className="w-3 h-3 rounded-full bg-success/70"></span>
<span className="font-caption text-caption font-mono text-slate-muted ml-2">merkle_attest_v3.proto</span>
</div>
<span className="font-caption text-caption px-2 py-0.5 rounded bg-surface-card text-primary font-mono text-[10px]">ECDSA-P256</span>
</div>
{/*  Inline Diagram Graphic  */}
<div className="bg-surface-card rounded-lg p-space-md flex flex-col gap-space-sm shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface">Candidate Base Truth Record</span>
<span className="font-caption text-caption text-success font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span> Attested
                  </span>
</div>
<div className="w-full bg-surface-container rounded p-2 text-[11px] font-mono text-on-surface-variant leading-tight">
                  root_hash: 0x9f4a...83c1 → verified P&L ownership ($42.8M ARR)
                </div>
<div className="relative py-1 flex items-center justify-center">
<div className="w-full h-[1px] bg-outline-variant/40 absolute"></div>
<div className="bg-primary-fixed px-3 py-1 rounded-full text-on-primary-fixed font-caption text-caption text-[11px] font-bold z-10 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">psychology</span> Scoped AI Synthesizer
                  </div>
</div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface">Target Position Formulation</span>
<span className="font-caption text-caption text-primary font-mono text-[11px]">Workday CXO Profile</span>
</div>
<div className="w-full bg-surface-blush-subtle rounded p-2 text-[11px] font-mono text-tertiary leading-tight">
                  delta_patch: zero_hallucination_delta [100% Attestation Provenance]
                </div>
</div>
<div className="flex items-center justify-between pt-space-xs text-[11px] text-slate-muted">
<span>Deterministic Zero Embellishment Rate</span>
<span className="font-bold text-success">0.000% False Metrics</span>
</div>
</div>
</div>
</div>
</article>
</div>
{/*  Filter Bar / Category Tabs  */}
<div className="max-w-6xl mx-auto mb-space-lg">
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md pb-space-sm">
{/*  Interactive Category Switcher  */}
<div className="flex items-center gap-space-xs overflow-x-auto py-1 scrollbar-none" id="categoryFilterContainer">
<button className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all whitespace-nowrap ${activeCategory === 'all' ? 'bg-gradient-to-r from-primary-container to-secondary text-on-primary shadow-sm' : 'bg-surface-card text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle shadow-sm'}`} onClick={() => setActiveCategory('all')} type="button">
            All Dispatches
          </button>
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md bg-surface-card text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle shadow-sm transition-all whitespace-nowrap" type="button">
            AI Gateway & Accuracy
          </button>
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md bg-surface-card text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle shadow-sm transition-all whitespace-nowrap" type="button">
            Privacy & Security
          </button>
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md bg-surface-card text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle shadow-sm transition-all whitespace-nowrap" type="button">
            Career Strategy
          </button>
<button className="px-space-md py-space-xs rounded-lg font-label-md text-label-md bg-surface-card text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle shadow-sm transition-all whitespace-nowrap" type="button">
            Release Notes
          </button>
</div>
{/*  Search Micro Bar  */}
<div className="relative min-w-[220px]">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-muted text-[18px]">search</span>
<input className="w-full bg-surface-card text-on-surface font-body-sm text-body-sm pl-9 pr-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-outline" id="articleSearchInput" placeholder="Search engineering topics..." type="text" />
</div>
</div>
</div>
{/*  Article Bento / Grid (5 Distinct Architectural Cards)  */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg mb-space-xl" id="articlesGrid">
{/*  Article 1: ATS Formats (Large Span 7)  */}
<article className="article-card lg:col-span-7 bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-category="ai-gateway">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wide">
              AI Gateway & Accuracy
            </span>
<span className="font-caption text-caption text-slate-muted">Oct 18, 2025 • 7 min read</span>
</div>
<Link className="no-underline group" to="/">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors tracking-tight">
              Deterministic ATS Formats vs. Rich HTML: Surviving Enterprise Taleo and Workday Parsers
            </h3>
</Link>
<p className="font-body-md text-body-md text-on-surface-variant">
            Why modern multi-column CSS and complex flexbox tables fail silently inside legacy Fortune 500 ATS daemons. We benchmark our custom binary postscript compiler against 12 enterprise resume parsers to ensure zero data drop.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs">
              MT
            </div>
<span className="font-caption text-caption text-on-surface font-medium">Marc Tremblay, Principal Systems</span>
</div>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1 group-hover:underline">
            Read Case Study <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/*  Article 2: Zero-Retention Gateways (Span 5)  */}
<article className="article-card lg:col-span-5 bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-category="privacy">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-blush-subtle text-tertiary font-label-sm text-label-sm uppercase tracking-wide">
              Privacy & Security
            </span>
<span className="font-caption text-caption text-slate-muted">Oct 14, 2025 • 6 min</span>
</div>
<Link className="no-underline group" to="/">
<h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors tracking-tight">
              Zero-Retention LLM Gateways: How Scoped Multi-Tenant Vaults Protect Confidential Resignations
            </h3>
</Link>
<p className="font-body-md text-body-md text-on-surface-variant">
            Preventing unannounced career moves from leaking into foundation model pre-training caches. A blueprint for ephemeral stateless inferencing.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-success text-[18px]">verified_user</span>
<span className="font-caption text-caption text-slate-muted">SOC2 Type II + NDPA Vault</span>
</div>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1 group-hover:underline">
            Read Architecture <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/*  Article 3: Two-Stage Dry Run Automation (Span 4)  */}
<article className="article-card lg:col-span-4 bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-category="strategy">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wide">
              Career Strategy
            </span>
<span className="font-caption text-caption text-slate-muted">Oct 09, 2025 • 5 min</span>
</div>
<Link className="no-underline group" to="/">
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors tracking-tight">
              Why Two-Stage Dry-Run Automation Outperforms Blind 500-Application Mass Senders
            </h3>
</Link>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Data from 4,200 executive placements demonstrates that volume spam triggers IP rate-limiting and domain-wide blacklist penalties at executive search firms.
          </p>
</div>
<div className="pt-space-sm mt-space-md flex items-center justify-between">
<span className="font-caption text-caption text-slate-muted font-mono">SIGNAL_RATIO: 18.4x</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1 group-hover:underline">
            Explore <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</article>
{/*  Article 4: Paystack Global Tech Talent (Span 4)  */}
<article className="article-card lg:col-span-4 bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-category="releases">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wide">
              Release Notes
            </span>
<span className="font-caption text-caption text-slate-muted">Oct 03, 2025 • 8 min</span>
</div>
<Link className="no-underline group" to="/">
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors tracking-tight">
              The Paystack Integration Playbook: Compliant Subscription Infrastructure for African & Global Tech Talent
            </h3>
</Link>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Engineering multi-currency cross-border billing gateways with localized NDPA compliance, sub-Saharan FX resilience, and instantaneous concierge unlocks.
          </p>
</div>
<div className="pt-space-sm mt-space-md flex items-center justify-between">
<span className="font-caption text-caption text-slate-muted font-mono">PAN-AFRICA ROUTING</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1 group-hover:underline">
            Explore <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</article>
{/*  Article 5: Gmail Scopes (Span 4)  */}
<article className="article-card lg:col-span-4 bg-surface-card rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between group" data-category="privacy">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="px-space-sm py-0.5 rounded-full bg-surface-blush-subtle text-tertiary font-label-sm text-label-sm uppercase tracking-wide">
              Privacy & Security
            </span>
<span className="font-caption text-caption text-slate-muted">Sep 27, 2025 • 6 min</span>
</div>
<Link className="no-underline group" to="/">
<h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors tracking-tight">
              Heuristic Gmail Interview Ingestion with Strict Header-Only Scopes
            </h3>
</Link>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            How we detect executive interview requests without ever reading email bodies or accessing Google Workspace personal attachments.
          </p>
</div>
<div className="pt-space-sm mt-space-md flex items-center justify-between">
<span className="font-caption text-caption text-slate-muted font-mono">RESTRICTED_HEADER_SCOPE</span>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1 group-hover:underline">
            Explore <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</article>
</div>
{/*  Editorial Research Digest Banner / Subscription Box  */}
<div className="max-w-6xl mx-auto mb-space-xl">
<div className="relative bg-gradient-to-br from-inverse-surface via-inverse-surface to-tertiary text-inverse-on-surface rounded-2xl p-space-lg md:p-space-xl overflow-hidden shadow-xl">
<div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary/20 blur-2xl pointer-events-none"></div>
<div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-secondary-container/10 blur-xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div className="lg:col-span-7 flex flex-col gap-space-sm">
<div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container/20 text-inverse-on-surface w-fit">
<span className="material-symbols-outlined text-[16px] text-primary-fixed">mark_email_unread</span>
<span className="font-label-sm text-label-sm tracking-wider uppercase">ARCHITECTURAL BRIEFING</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-inverse-on-surface tracking-tight">
              Join 12,000+ engineering directors and product executives receiving our bi-weekly architecture papers.
            </h2>
<p className="font-body-md text-body-md text-slate-muted text-gray-300 max-w-xl">
              Zero recruiting spam. Just mathematical parser benchmarks, cryptographic credential schemas, and executive job market liquidity telemetry.
            </p>
</div>
<div className="lg:col-span-5 flex flex-col gap-space-sm">
<form className="flex flex-col sm:flex-row gap-space-xs" id="digestForm">
<input className="flex-grow px-space-md py-space-sm rounded-lg bg-surface-card text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary-fixed shadow-inner" placeholder="executive@corporate.com" required type="email" />
<button className="bg-gradient-to-r from-primary-container to-secondary hover:brightness-110 active:scale-95 text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-lg transition-all shadow-md flex items-center justify-center gap-space-xs whitespace-nowrap" type="submit">
                Subscribe <span className="material-symbols-outlined text-[18px]">send</span>
</button>
</form>
<div className="hidden text-success font-label-sm text-label-sm flex items-center gap-1" id="subscribeSuccess">
<span className="material-symbols-outlined text-[16px]">check_circle</span> Attested dispatch subscription active. Confirmation transmitted.
            </div>
<div className="flex items-center gap-space-sm text-gray-400 font-caption text-caption">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span> One-click cryptographic opt-out
              </span>
<span>•</span>
<span>Bi-weekly schedule</span>
<span>•</span>
<span>Strict zero-third-party tracking</span>
</div>
</div>
</div>
</div>
</div>
{/*  Standard Executive Aura Bottom Action Banner  */}
<div className="max-w-6xl mx-auto mb-space-xl">
<div className="bg-surface-card rounded-2xl p-space-lg md:p-space-xl shadow-sm text-center flex flex-col items-center gap-space-md relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center text-on-primary shadow-md">
<span className="material-symbols-outlined text-[30px]">rocket_launch</span>
</div>
<div className="max-w-2xl flex flex-col gap-space-xs">
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Ready to upgrade your executive trajectory?
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Deploy deterministic ATS optimization, automated dry-runs, and confidential interview telemetry designed exclusively for director and VP transitions.
          </p>
</div>
<div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">
<Link className="font-label-md text-label-md text-on-primary bg-gradient-to-r from-primary-container to-secondary hover:brightness-105 active:scale-95 px-space-xl py-space-sm rounded-lg shadow-md transition-all flex items-center gap-space-xs" to="/">
<span className="material-symbols-outlined text-[18px]">verified</span> Deploy Free Executive Audit
          </Link>
<Link className="font-label-md text-label-md text-on-surface hover:text-primary bg-surface-container px-space-lg py-space-sm rounded-lg transition-colors flex items-center gap-space-xs" to="/">
            Schedule Systems Briefing <span className="material-symbols-outlined text-[18px]">call</span>
</Link>
</div>
</div>
</div>
</div>
{/*  Dynamic Filter & Search JavaScript  */}

</div></main>
    </>
  );
}

export function BlogArticlePage() {
  return (
    <>
      <Helmet>
        <title>Article Not Found - ApplyNora</title>
      </Helmet>
      <div className="flex flex-col w-full min-h-[80vh] items-center justify-center bg-surface-ground">
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">Article Not Found</h1>
        <p className="font-body-md text-body-md text-slate-muted mb-space-lg">The requested publication could not be located.</p>
        <Link to="/blog" className="font-label-md text-label-md text-primary hover:underline">Return to Research</Link>
      </div>
    </>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
