

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function HowItWorksPage() {
  return (
    <>
      <Helmet>
           <title>HowItWorksPage - ApplyNora</title>
           <meta name="description" content="HowItWorksPage for ApplyNora" />
       </Helmet>
      <main className="w-full pt-20 bg-surface-ground min-h-screen"><div className="flex flex-col w-full">
{/*  Top Ambient Flare  */}
<div className="relative w-full overflow-hidden">
<div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
<div className="absolute -top-12 left-10 w-72 h-72 rounded-full bg-secondary-container/15 blur-2xl pointer-events-none"></div>
{/*  Page Title & Header Block  */}
<div className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
<div className="max-w-4xl flex flex-col gap-space-sm">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-primary font-caption text-caption self-start">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          System Architecture & Candidate Agency Workflow
        </div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
          How ApplyNora Works: Transparency from Profile to Offer.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          A zero-compromise, four-step journey designed around candidate agency. Zero hallucinated credentials, no autonomous stealth spamming, and total cryptographic isolation for executive career telemetry.
        </p>
</div>
{/*  Quick Trust Indicators Strip  */}
<div className="mt-space-lg grid grid-cols-2 md:grid-cols-4 gap-space-md">
<div className="bg-surface-card rounded-xl p-space-md shadow-sm flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-blush-subtle text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">lock</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Private Vault</span>
<span className="font-caption text-caption text-slate-muted">AES-256 at rest</span>
</div>
</div>
<div className="bg-surface-card rounded-xl p-space-md shadow-sm flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container text-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">fact_check</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Zero Hallucinations</span>
<span className="font-caption text-caption text-slate-muted">Fact-grounded grounding</span>
</div>
</div>
<div className="bg-surface-card rounded-xl p-space-md shadow-sm flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-blush-subtle text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">fingerprint</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Explicit Consent</span>
<span className="font-caption text-caption text-slate-muted">No blackbox sends</span>
</div>
</div>
<div className="bg-surface-card rounded-xl p-space-md shadow-sm flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container text-success flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">sync</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Bi-directional Sync</span>
<span className="font-caption text-caption text-slate-muted">Sheets, Mail, Telegram</span>
</div>
</div>
</div>
</div>
</div>
{/*  Interactive Step-by-Step Workflow Section  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="flex flex-col gap-space-xl">
{/*  Section Tagline & Interactive Navigator  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-sm">
<div>
<span className="font-caption text-caption text-primary uppercase tracking-widest font-semibold">Deterministic Execution</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">
            The 4-Step Agency Protocol
          </h2>
</div>
{/*  Tab Bar for Step Selection  */}
<div className="flex bg-surface-container-low p-1.5 rounded-xl gap-1">
<button className="step-nav-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md bg-surface-card text-primary shadow-sm transition-all flex items-center gap-1" id="step-btn-1">
<span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[11px] flex items-center justify-center font-bold">1</span>
            Profile
          </button>
<button className="step-nav-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1" id="step-btn-2">
<span className="w-5 h-5 rounded-full bg-surface-container text-on-surface-variant text-[11px] flex items-center justify-center font-bold">2</span>
            Gap Analysis
          </button>
<button className="step-nav-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1" id="step-btn-3">
<span className="w-5 h-5 rounded-full bg-surface-container text-on-surface-variant text-[11px] flex items-center justify-center font-bold">3</span>
            Tailoring
          </button>
<button className="step-nav-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1" id="step-btn-4">
<span className="w-5 h-5 rounded-full bg-surface-container text-on-surface-variant text-[11px] flex items-center justify-center font-bold">4</span>
            Tracking
          </button>
</div>
</div>
{/*  STEP PANELS CONTAINER  */}
<div className="w-full">
{/*  STEP 1 PANEL  */}
<div className="step-panel block transition-opacity duration-300" id="step-panel-1">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
{/*  Left Narrative  */}
<div className="lg:col-span-5 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-headline-sm text-headline-sm font-extrabold shadow-sm">
                    01
                  </div>
<div>
<span className="font-caption text-caption uppercase tracking-wider text-primary font-bold">Phase One</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Profile & Verified Fact Onboarding</h3>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                  Build your verified career baseline: structured work history, verified skills, and self-attested claims. Upload master CVs to your private, encrypted vault with automated malware scanning and optical parsing.
                </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5">verified_user</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Cryptographic Vault Isolation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Files are chunked, virus-screened via ClamAV micro-daemons, and keyed to your individual PostgreSQL tenant partition.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">fact_check</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Attested Fact Extraction</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Every bullet point, company valuation, team size, and ARR metric is extracted into immutable factual primitives.</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-space-md bg-surface-ground p-space-sm rounded-lg flex items-center justify-between">
<span className="font-caption text-caption text-slate-muted">Strict Zero-Inference Policy: Only approved metrics enter generation pipelines.</span>
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
</div>
</div>
{/*  Right Interactive Graphic / Visual Mock  */}
<div className="lg:col-span-7 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="w-3 h-3 rounded-full bg-warning"></span>
<span className="w-3 h-3 rounded-full bg-success"></span>
<span className="font-caption text-caption text-slate-muted ml-space-xs">Candidate Vault // Fact-Ingest v4.2</span>
</div>
<span className="font-caption text-caption px-space-xs py-0.5 rounded bg-surface-container text-success font-semibold">256-Bit ClamAV PASS</span>
</div>
{/*  Structured Fact Inspector Mockup  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm mt-space-sm">
{/*  Uploaded Item  */}
<div className="bg-surface-ground p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">description</span>
<span className="font-label-md text-label-md text-on-surface truncate">Executive_CV_2025_Master.pdf</span>
</div>
<span className="material-symbols-outlined text-success text-[18px]">check_circle</span>
</div>
<span className="font-caption text-caption text-slate-muted">Parsed: 34 verifiable assertions</span>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-space-xs">
<div className="bg-primary h-full w-full"></div>
</div>
</div>
{/*  Attestation status  */}
<div className="bg-surface-blush-subtle p-space-md rounded-lg flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-primary">Self-Attestation Lock</span>
<span className="material-symbols-outlined text-primary text-[18px]">gavel</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                      Candidate has verified 100% of executive titles, direct reports ($45M P&L, 82 FTEs).
                    </p>
<span className="font-caption text-caption text-success font-bold">14 Core Competencies Verified</span>
</div>
</div>
{/*  Parsed Facts Ledger  */}
<div className="mt-space-md bg-surface-ground p-space-md rounded-lg flex flex-col gap-space-xs">
<span className="font-caption text-caption text-on-surface-variant font-bold uppercase tracking-wider">Extracted Atomic Truth Table</span>
<div className="flex items-center justify-between bg-surface-card p-space-xs px-space-sm rounded">
<span className="font-body-sm text-body-sm text-on-surface">VP of Engineering at FinScale Corp</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-primary font-caption text-caption">2021 - 2024</span>
</div>
<div className="flex items-center justify-between bg-surface-card p-space-xs px-space-sm rounded">
<span className="font-body-sm text-body-sm text-on-surface">Distributed Systems, SOC-2 Type II, Kubernetes, Golang</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-success font-caption text-caption">Verified</span>
</div>
<div className="flex items-center justify-between bg-surface-card p-space-xs px-space-sm rounded">
<span className="font-body-sm text-body-sm text-on-surface">Scaled org from 14 to 86 engineers; cut cloud COGS by 38%</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-caption text-caption">Telemetry Grounded</span>
</div>
</div>
</div>
{/*  High-quality context image  */}
<div className="mt-space-md rounded-lg overflow-hidden h-32 relative">
<img className="w-full h-full object-cover" data-alt="An executive reviewing high-resolution digital career analytics on a sleek modern workstation, surrounded by subtle violet and amethyst light refractions in a clean minimalist architectural office environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyBBHrRN9oV8uMFk3RR463HnbsaerSMF011LCDPvdp8LuN-1yJZvZGtE8r8JqsM91E1KokrqFfMRFThKz_Vc70DIw2hoyoEyKomLJFKtgtQYjndqmz1DGSFBy3X9RAagKnwJeArjEyvgUT53_79ao3ZeuO_gJI3N2I_QsZADz-dS6JeSp0YxpopNkB3FWlB9m8T-Bp5tht44daUsWdPNT8qfGrHlGvDEqvYjNpfEOL7tne0l-CAxd7fw" />
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent flex items-end p-space-sm">
<span className="font-caption text-caption text-on-primary">Strict sandboxing prevents vector leakages across candidates</span>
</div>
</div>
</div>
</div>
</div>
{/*  STEP 2 PANEL  */}
<div className="step-panel hidden transition-opacity duration-300" id="step-panel-2">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
<div className="lg:col-span-5 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-headline-sm text-headline-sm font-extrabold shadow-sm">
                    02
                  </div>
<div>
<span className="font-caption text-caption uppercase tracking-wider text-primary font-bold">Phase Two</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Algorithmic Matching & Gap Analysis</h3>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                  Discover vetted opportunities matching your exact criteria. Inspect evidence-based match scoring, skill overlap, and prerequisite checks before deciding to apply.
                </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">analytics</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Multi-Vector Gap Diagnosis</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">We contrast target JD syntax with your factual knowledge base, highlighting immediate fits and clear deficiency risks.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">policy</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Prerequisite Enforcement</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Flags mandatory location boundaries, security clearance constraints, and equity vesting clauses automatically.</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-space-md bg-surface-blush-subtle p-space-sm rounded-lg flex items-center justify-between">
<span className="font-caption text-caption text-primary font-medium">Over 94% average alignment threshold on matched roles.</span>
<span className="material-symbols-outlined text-primary text-[18px]">thumb_up</span>
</div>
</div>
{/*  Right Interactive Graphic / Visual Mock  */}
<div className="lg:col-span-7 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-caption text-caption text-slate-muted">Inspection Engine // Role #8291: VP Platform Engineering</span>
<span className="px-space-xs py-0.5 rounded bg-surface-blush-subtle text-primary font-caption text-caption font-bold">96.4% Compatibility Match</span>
</div>
{/*  Match Breakdown Component  */}
<div className="p-space-md bg-surface-ground rounded-lg mt-space-sm">
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-md text-label-md text-on-surface">Skill Overlap & Domain Resonance</span>
<span className="font-label-md text-label-md text-primary font-bold">38 / 40 Requisites Met</span>
</div>
{/*  Inline SVG Radar-Style Chart Representation  */}
<div className="w-full bg-surface-card rounded-lg p-space-md flex flex-col gap-space-sm">
<div>
<div className="flex justify-between font-caption text-caption text-on-surface-variant mb-1">
<span>Distributed Systems Architecture</span>
<span className="font-bold text-success">100% Match (Verified by 3 Roles)</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-success h-full w-full"></div>
</div>
</div>
<div>
<div className="flex justify-between font-caption text-caption text-on-surface-variant mb-1">
<span>Multi-Region AWS / GCP Disaster Recovery</span>
<span className="font-bold text-success">95% Match</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-caption text-caption text-on-surface-variant mb-1">
<span>Direct P&L Responsibility &gt;$30M</span>
<span className="font-bold text-primary">Fully Attested</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[90%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-caption text-caption text-on-surface-variant mb-1">
<span>Kubernetes Operator Go SDK</span>
<span className="font-bold text-warning">Minor Gap (Self-Reported, Secondary)</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-warning h-full w-[65%]"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Action Confirmation Strip  */}
<div className="mt-space-md bg-surface-ground p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-success text-[18px]">verified</span>
<span className="font-caption text-caption text-on-surface">No auto-application trigger fired. Candidate holds execution authority.</span>
</div>
<button className="px-space-sm py-1 rounded bg-primary text-on-primary font-caption text-caption font-semibold">Proceed to Tailor</button>
</div>
</div>
</div>
</div>
{/*  STEP 3 PANEL  */}
<div className="step-panel hidden transition-opacity duration-300" id="step-panel-3">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
<div className="lg:col-span-5 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-headline-sm text-headline-sm font-extrabold shadow-sm">
                    03
                  </div>
<div>
<span className="font-caption text-caption uppercase tracking-wider text-primary font-bold">Phase Three</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Fact-Grounded AI Tailoring with Human Review</h3>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                  Generate job-specific cover letters and ATS-optimized CV drafts. Our server-side AI gateway strictly references only your attested facts. Review, edit, and approve every document.
                </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">psychology_alt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Constrained Generation Pipeline</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Every sentence links to a cryptographically validated node from Step 1. Unsubstantiated buzzwords are strictly rejected by the validator.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[20px] mt-0.5">rate_review</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Mandatory Human-in-the-Loop Sign-off</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Nothing leaves your workstation until you click 'Approve for Transmission'. You have inline markdown editing control.</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-space-md bg-surface-ground p-space-sm rounded-lg flex items-center justify-between">
<span className="font-caption text-caption text-slate-muted">Zero LLM training on candidate resumes. Strict zero-retention API headers.</span>
<span className="material-symbols-outlined text-primary text-[18px]">security</span>
</div>
</div>
{/*  Right Interactive Graphic / Visual Mock  */}
<div className="lg:col-span-7 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-caption text-caption text-slate-muted">Draft Studio // ATS Target: Greenhouse / Workday Compliant</span>
<span className="font-caption text-caption px-space-xs py-0.5 rounded bg-surface-blush text-primary font-bold">100% Fact Checked</span>
</div>
{/*  Split Diff / Verification Mock  */}
<div className="mt-space-sm bg-surface-ground p-space-md rounded-lg flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Generated Executive Summary Paragraph</span>
<span className="font-caption text-caption text-success flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[16px]">verified</span> 4 Proven Citations
                    </span>
</div>
<div className="bg-surface-card p-space-md rounded-lg font-body-sm text-body-sm text-on-surface leading-relaxed">
                    "Engineering Leader with 12+ years scaling cloud infrastructures. At FinScale Corp, steered <mark className="bg-surface-blush px-1 rounded text-primary font-semibold">a 38% infrastructure cost reduction</mark> across hybrid AWS deployments while managing <mark className="bg-surface-blush px-1 rounded text-primary font-semibold">a team of 86 engineers</mark> with zero unscheduled downtime during SOC-2 audits."
                  </div>
{/*  Citations Inspector  */}
<div className="grid grid-cols-2 gap-space-xs pt-space-xs">
<div className="p-space-xs bg-surface-card rounded text-caption font-caption text-on-surface-variant">
<span className="font-semibold text-primary">Fact #31:</span> FinScale 38% COGS reduction
                    </div>
<div className="p-space-xs bg-surface-card rounded text-caption font-caption text-on-surface-variant">
<span className="font-semibold text-primary">Fact #34:</span> Headcount verified 86 engineers
                    </div>
</div>
</div>
</div>
{/*  Interactive Approval Control  */}
<div className="mt-space-md bg-surface-ground p-space-sm rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<input defaultChecked={true} className="accent-primary w-4 h-4 rounded" id="human-confirm" type="checkbox" />
<label className="font-body-sm text-body-sm text-on-surface font-medium" htmlFor="human-confirm">I have reviewed and attest to document veracity</label>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-gradient-to-r from-primary-container to-secondary text-on-primary font-label-md text-label-md shadow-sm">
                  Approve Draft
                </button>
</div>
</div>
</div>
</div>
{/*  STEP 4 PANEL  */}
<div className="step-panel hidden transition-opacity duration-300" id="step-panel-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
<div className="lg:col-span-5 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-md">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-headline-sm text-headline-sm font-extrabold shadow-sm">
                    04
                  </div>
<div>
<span className="font-caption text-caption uppercase tracking-wider text-primary font-bold">Phase Four</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Controlled Application & Interview Tracking</h3>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                  Submit with explicit authorization. Automatically sync interview requests from Gmail snippets, receive Telegram/Email reminders, and track outcomes in Google Sheets.
                </p>
<div className="space-y-space-sm pt-space-xs">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">mail</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Zero-Storage Gmail Integration</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Only regex patterns matching confirmed calendar invites and recruiter keywords are processed. Full emails are never stored.</span>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">table_chart</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Candidate Owned Telemetry</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Real-time bi-directional pipeline synchronization into your private Google Sheets workbook or Notion database.</span>
</div>
</div>
</div>
</div>
<div className="pt-space-md mt-space-md bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
<span className="font-caption text-caption text-on-surface-variant font-medium">Telegram executive alert bot triggers only for scheduled interviews.</span>
<span className="material-symbols-outlined text-primary text-[18px]">notifications_active</span>
</div>
</div>
{/*  Right Interactive Graphic / Visual Mock  */}
<div className="lg:col-span-7 bg-surface-card rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-caption text-caption text-slate-muted">Telemetry Relay // Live Dispatch & Webhooks</span>
<span className="px-space-xs py-0.5 rounded bg-surface-blush-subtle text-primary font-caption text-caption font-bold">3 Dispatch Nodes Active</span>
</div>
{/*  Visual Tracker Mockup  */}
<div className="mt-space-sm space-y-space-sm">
{/*  Event item 1  */}
<div className="p-space-md bg-surface-ground rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[20px]">send</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Application Dispatched: Stripe</span>
<span className="font-caption text-caption text-slate-muted">Via Greenhouse API • Signed Hash: #9d81ec • 10:14 AM</span>
</div>
</div>
<span className="px-space-xs py-1 rounded bg-surface-card text-success font-caption text-caption font-semibold">Delivered</span>
</div>
{/*  Event item 2  */}
<div className="p-space-md bg-surface-ground rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-[20px]">mark_email_read</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Interview Invocation Detected</span>
<span className="font-caption text-caption text-slate-muted">Google Meet Snippet parsed • Calendly booking captured</span>
</div>
</div>
<span className="px-space-xs py-1 rounded bg-surface-blush text-primary font-caption text-caption font-bold">Sync to G-Sheets</span>
</div>
{/*  Event item 3  */}
<div className="p-space-md bg-surface-ground rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-card flex items-center justify-center text-warning shadow-sm">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Telegram Concierge Alert</span>
<span className="font-caption text-caption text-slate-muted">Prompt: VP Eng Round 1 Prep Briefing generated</span>
</div>
</div>
<span className="px-space-xs py-1 rounded bg-surface-card text-warning font-caption text-caption font-semibold">Ping Sent</span>
</div>
</div>
</div>
{/*  Bottom image banner  */}
<div className="mt-space-md rounded-lg overflow-hidden h-28 relative">
<img className="w-full h-full object-cover" data-alt="A clean modern executive tracking dashboard displayed on an iPad tablet placed on a dark walnut executive desk with soft morning architectural light reflecting off glass surfaces." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS-DLPZR9yeNfrYMmTXPTn4SpuOajVFTYSXfCgcARQy2HI8UgW5mrkLGVIdj41oIXdHu4NEgpi6RRuVy_jYDr0JCLnCFrqBz3wTbUeMOZTeTj1FtQVIKlb7qskvpZEcPNM2OTBwBe8yNHHwMtGitAipB9q6rw4vUO0VOKJeXWhObA_ex9rTm4GS2PsbLEAfI8I6x-Y42d-prn5Vv5H0kLTikaUiM4fdSurEhFSF1Lgmjh2matbpcJ1tQ" />
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-on-surface/30 to-transparent flex items-end p-space-sm">
<span className="font-caption text-caption text-on-primary">Continuous Google Sheets mirror enables zero platform lock-in</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Technical Architecture & Data Boundary Diagram Section  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
<div className="max-w-6xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-1 text-primary font-caption text-caption uppercase tracking-wider font-bold">
<span className="material-symbols-outlined text-[16px]">account_tree</span>
            Security Architecture & Data Isolation
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Cryptographic Boundaries & Data Flow
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Inspect our zero-trust engineering topography. Tenant isolation occurs at every layer: browser-side encryption keys, air-gapped worker processes, and strict multi-tenant Row Level Security.
          </p>
</div>
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-full bg-success"></span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold">All Microservices Operational</span>
</div>
</div>
{/*  Architectural Canvas / Bento Diagram  */}
<div className="bg-surface-card rounded-xl p-space-lg shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
{/*  Node 1: Candidate Client (Browser)  */}
<div className="bg-surface-ground rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"></div>
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider font-bold">Client Tier</span>
<span className="material-symbols-outlined text-primary text-[20px]">devices</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Browser Client</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Candidate workstation executing client-side pre-flight payload hashing and session management.
              </p>
<div className="mt-space-md space-y-1">
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">Next.js 14 SSR & Hydration</div>
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">WebCrypto Token Staging</div>
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">Zero Local PII Storage</div>
</div>
</div>
<div className="pt-space-md">
<span className="font-caption text-caption text-primary font-bold">TLS 1.3 Strict HTTPS</span>
</div>
</div>
{/*  Node 2: Next.js Edge & App Router  */}
<div className="bg-surface-ground rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-secondary"></div>
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider font-bold">Edge Gateway</span>
<span className="material-symbols-outlined text-secondary text-[20px]">lan</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Next.js Edge Proxy</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                Reverse proxy validating session JWTs, rate-limiting spam requests, and orchestrating server components.
              </p>
<div className="mt-space-md space-y-1">
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">Edge Rate-Limiter (WAF)</div>
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">Auth0 / OIDC Token Verification</div>
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">CSRF Strict SameSite Cookie</div>
</div>
</div>
<div className="pt-space-md">
<span className="font-caption text-caption text-secondary font-bold">Internal VPC Mesh</span>
</div>
</div>
{/*  Node 3: FastAPI Core Engine  */}
<div className="bg-surface-ground rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider font-bold">Logic Engine</span>
<span className="material-symbols-outlined text-primary text-[20px]">memory</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">FastAPI Compute</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                High-performance async application workers handling validation, match algorithms, and webhook telemetry.
              </p>
<div className="mt-space-md space-y-1">
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">Pydantic Fact Verification</div>
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">ClamAV Ingestion Daemon</div>
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">Asynchronous Celery Workers</div>
</div>
</div>
<div className="pt-space-md">
<span className="font-caption text-caption text-primary font-bold">mTLS Air-Gapped Channel</span>
</div>
</div>
{/*  Node 4: Private Storage & AI Gateway  */}
<div className="bg-surface-ground rounded-xl p-space-md flex flex-col justify-between shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-success"></div>
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider font-bold">Data & AI Tier</span>
<span className="material-symbols-outlined text-success text-[20px]">database</span>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Vault & AI Gateway</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
                PostgreSQL RLS with S3 private buckets and enterprise LLM providers bound by zero-retention policies.
              </p>
<div className="mt-space-md space-y-1">
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">PostgreSQL Row-Level Security</div>
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">Private KMS-Encrypted S3</div>
<div className="text-caption font-caption bg-surface-card px-space-xs py-1 rounded text-on-surface">Zero Data Retention LLM Headers</div>
</div>
</div>
<div className="pt-space-md">
<span className="font-caption text-caption text-success font-bold">Complete Tenant Segregation</span>
</div>
</div>
</div>
{/*  Explanatory Architectural Guarantees Strip  */}
<div className="mt-space-lg p-space-md bg-surface-ground rounded-xl grid grid-cols-1 md:grid-cols-3 gap-space-md">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">policy</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Strict RLS Isolation</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">PostgreSQL Row-Level Security ensures SQL queries cannot access neighboring tenant rows even under hypothetical breach conditions.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px]">disabled_by_default</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Zero Model Retraining</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Enterprise OpenAI/Anthropic gateway connections invoke explicit non-persistence zero-day wipe agreements. Your profile is never used for weights training.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-success text-[22px]">lock_reset</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Permanent Purge Guarantee</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Click 'Delete Account' and our background daemons trigger automated cryptographic erasure across PostgreSQL, vector indexes, and S3 objects.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Comprehensive FAQ Accordion Section  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-4xl mx-auto flex flex-col gap-space-lg">
<div className="text-center flex flex-col items-center gap-space-xs">
<span className="font-caption text-caption uppercase tracking-wider text-primary font-bold">Safety, Privacy & Control</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Frequently Asked Questions
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Everything you need to know about our data handling, LLM interaction boundaries, and human authorization safeguards.
        </p>
</div>
{/*  Accordion List  */}
<div className="flex flex-col gap-space-sm" id="faq-accordion">
{/*  FAQ 1  */}
<div className="bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none">
<span className="font-label-md text-label-md text-on-surface font-semibold">How does ApplyNora ensure the AI doesn't fabricate experiences or skills?</span>
<span className="material-symbols-outlined text-primary transition-transform duration-200">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-body-sm font-body-sm text-on-surface-variant">
            ApplyNora enforces a proprietary deterministic fact-grounding engine. During step one, we build a structured database of your verified claims (employers, dates, verifiable metrics, technologies). When generating applications, our prompts strictly limit the language model to reference only that specific graph. In the event the model suggests unreferenced claims, our automated secondary AST (Abstract Syntax Tree) validator flags or strips the ungrounded assertion before you ever see the draft.
          </div>
</div>
{/*  FAQ 2  */}
<div className="bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none">
<span className="font-label-md text-label-md text-on-surface font-semibold">Are my uploaded resumes or personal documents used to train public AI models?</span>
<span className="material-symbols-outlined text-primary transition-transform duration-200">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-body-sm font-body-sm text-on-surface-variant">
            No. Under our enterprise AI gateway agreements, all prompts and output payloads are governed by strict zero-retention enterprise SLAs. Your resume data, contact info, salary expectations, and self-attestations are NEVER cached for model evaluation or incorporated into public training datasets.
          </div>
</div>
{/*  FAQ 3  */}
<div className="bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none">
<span className="font-label-md text-label-md text-on-surface font-semibold">What does 'Human-in-the-Loop' sign-off actually mean in practice?</span>
<span className="material-symbols-outlined text-primary transition-transform duration-200">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-body-sm font-body-sm text-on-surface-variant">
            Unlike reckless 'auto-applier' bots that blast thousands of generic resumes into recruiter inboxes, ApplyNora does not possess the algorithmic capability to submit any application without your affirmative, manual authorization. You review every tailored resume and cover letter, examine the match gap breakdown, and explicitly click 'Approve for Transmission' for every single role.
          </div>
</div>
{/*  FAQ 4  */}
<div className="bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none">
<span className="font-label-md text-label-md text-on-surface font-semibold">How does the Gmail and Google Sheets integration maintain my privacy?</span>
<span className="material-symbols-outlined text-primary transition-transform duration-200">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-body-sm font-body-sm text-on-surface-variant">
            Our Google API integration requests strictly scoped metadata access. We do not index your personal inbox. We monitor only webhooks and headers associated with confirmed recruitment applicant systems (e.g., Workday, Greenhouse, Lever, Ashby) to capture calendar invites and application status updates. All collected telemetry is routed directly into your private Google Sheets file, giving you total ownership of your job search records.
          </div>
</div>
{/*  FAQ 5  */}
<div className="bg-surface-card rounded-xl shadow-sm overflow-hidden transition-all">
<button className="w-full p-space-md flex items-center justify-between text-left focus:outline-none">
<span className="font-label-md text-label-md text-on-surface font-semibold">What happens if I decide to delete my ApplyNora account?</span>
<span className="material-symbols-outlined text-primary transition-transform duration-200">expand_more</span>
</button>
<div className="faq-content hidden px-space-md pb-space-md text-body-sm font-body-sm text-on-surface-variant">
            We adhere to full GDPR and NDPA 'Right to be Forgotten' mandates. Triggering account termination initiates an automated cascading purge: your master CVs are shredded from encrypted S3 buckets, all fact-grounding vector embeddings are deleted, and your PostgreSQL row partitions are irrevocably dropped. No residual shadow profile is maintained.
          </div>
</div>
</div>
</div>
</section>
{/*  Conversion CTA Section  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="relative rounded-2xl bg-gradient-to-br from-primary-container via-primary to-secondary text-on-primary p-space-xl overflow-hidden shadow-lg">
{/*  Background Ambient Glow  */}
<div className="absolute -right-10 -bottom-10 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-3xl flex flex-col gap-space-md">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-card/10 backdrop-blur-md text-on-primary font-caption text-caption self-start">
<span className="material-symbols-outlined text-[16px]">shield_with_heart</span>
          Zero Risk • Instant Setup • Full Agency
        </div>
<h2 className="font-headline-xl text-headline-xl tracking-tight text-on-primary">
          Ready to experience executive career acceleration without the black box?
        </h2>
<p className="font-body-lg text-body-lg text-primary-fixed leading-relaxed max-w-2xl">
          Join thousands of engineering directors, executives, and senior specialists who manage confidential career transitions with verified facts and precision intelligence.
        </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
<Link className="px-space-lg py-space-sm rounded-lg bg-surface-card text-primary font-label-md text-label-md font-bold shadow-md hover:bg-surface-blush-subtle transition-all flex items-center justify-center gap-space-xs" to="/">
<span className="material-symbols-outlined text-[18px]">verified</span>
            Create Your Verified Profile
          </Link>
<Link className="px-space-lg py-space-sm rounded-lg bg-surface-card/10 hover:bg-surface-card/20 backdrop-blur-md text-on-primary font-label-md text-label-md font-medium transition-all flex items-center justify-center gap-space-xs" to="/">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
            Review Security Whitepaper
          </Link>
</div>
{/*  Trust Badges Footer  */}
<div className="flex flex-wrap items-center gap-space-md pt-space-md text-surface-container-high font-caption text-caption">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">verified</span> No credit card required</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">security</span> SOC-2 Type II Compliant Infra</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">visibility</span> 100% Human Sign-off Guarantee</span>
</div>
</div>
</div>
</section>
{/*  Interactive Logic for Tabs & Accordions  */}

</div></main>
    </>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
