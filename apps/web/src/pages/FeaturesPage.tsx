

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function FeaturesPage() {
  return (
    <>
      <Helmet>
           <title>FeaturesPage - ApplyNora</title>
           <meta name="description" content="FeaturesPage for ApplyNora" />
       </Helmet>
      <main className="w-full pt-20 bg-surface-ground min-h-screen"><div className="flex flex-col w-full">
{/*  Top Editorial Header & Narrative Anchor  */}
<section className="relative w-full overflow-hidden bg-surface py-space-xl px-margin-desktop">
<div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
<div className="absolute top-48 left-1/4 w-80 h-80 rounded-full bg-surface-blush/30 blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-space-lg">
<div className="flex items-center gap-space-xs self-start">
<span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-primary font-caption text-caption uppercase tracking-widest font-semibold">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          System Architecture v2.4 Spec
        </span>
<span className="font-caption text-caption text-slate-muted hidden md:inline">· ISO 27001 & NDPA Certified Foundation</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
<div className="lg:col-span-8 flex flex-col gap-space-sm">
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            Engineered for Integrity, Built for Career Velocity.
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Explore ApplyNora’s deep technology stack and candidate-first safeguards. We replaced reckless autonomous scrapers with strict attestation guardrails, deterministic ATS engines, and zero-leakage security.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm pb-space-xs">
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-caption text-caption text-slate-muted uppercase font-bold tracking-wider">Engine Uptime</span>
<span className="font-headline-sm text-headline-sm text-success">99.98%</span>
</div>
<span className="material-symbols-outlined text-success text-[28px]">verified_user</span>
</div>
<div className="p-space-md rounded-xl bg-surface-blush-subtle shadow-sm flex items-center justify-between">
<div className="flex flex-col">
<span className="font-caption text-caption text-primary uppercase font-bold tracking-wider">Third-Party Training</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Zero Data Shared</span>
</div>
<span className="material-symbols-outlined text-primary text-[28px]">lock_reset</span>
</div>
</div>
</div>
{/*  Jump Anchors  */}
<div className="flex flex-wrap items-center gap-space-xs pt-space-md text-slate-muted">
<span className="font-caption text-caption uppercase tracking-wider font-bold text-outline">Jump to Module:</span>
<Link className="px-space-sm py-space-xs rounded-full bg-surface-container-high hover:bg-primary-fixed transition-colors font-label-sm text-label-sm text-on-surface" to="/">1. Fact-Grounded Gateway</Link>
<Link className="px-space-sm py-space-xs rounded-full bg-surface-container-high hover:bg-primary-fixed transition-colors font-label-sm text-label-sm text-on-surface" to="/">2. Controlled Automation</Link>
<Link className="px-space-sm py-space-xs rounded-full bg-surface-container-high hover:bg-primary-fixed transition-colors font-label-sm text-label-sm text-on-surface" to="/">3. Unified Inbox Sync</Link>
<Link className="px-space-sm py-space-xs rounded-full bg-surface-container-high hover:bg-primary-fixed transition-colors font-label-sm text-label-sm text-on-surface" to="/">4. Bank-Grade Security</Link>
<Link className="px-space-sm py-space-xs rounded-full bg-surface-container-high hover:bg-primary-fixed transition-colors font-label-sm text-label-sm text-on-surface" to="/">5. System Comparison</Link>
</div>
</div>
</section>
{/*  Feature Section 1: Fact-Grounded AI Gateway & CV Builder  */}
<section className="w-full py-space-xl px-margin-desktop bg-surface-ground" id="ai-gateway">
<div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-xl">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[20px]">psychology</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-bold">Sub-System 01</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Fact-Grounded AI Gateway & Deterministic CV Builder
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Uncompromising hallucination resistance. ApplyNora anchors every career bullet directly to user-attested metrics, preventing synthetic fabrication while leveraging multi-LLM resilience.
          </p>
</div>
<div className="flex items-center gap-space-sm">
<span className="px-space-sm py-space-xs rounded-lg bg-surface-container font-label-sm text-label-sm text-slate-muted">Fallback Latency: ~140ms</span>
<span className="px-space-sm py-space-xs rounded-lg bg-surface-blush-subtle font-label-sm text-label-sm text-primary font-bold">Never Scans Unverified CVs</span>
</div>
</div>
{/*  Feature Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  Interactive Telemetry Console Card  */}
<div className="lg:col-span-7 bg-surface-card rounded-2xl shadow-md p-space-lg flex flex-col gap-space-md relative overflow-hidden">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="w-3 h-3 rounded-full bg-warning"></span>
<span className="w-3 h-3 rounded-full bg-success"></span>
<span className="font-caption text-caption text-outline ml-space-xs uppercase tracking-wider">Gateway Telemetry · Pipeline Active</span>
</div>
<span className="px-space-sm py-space-xs rounded-full bg-surface-container font-caption text-caption text-primary font-bold">Deterministic Sandbox</span>
</div>
{/*  Dynamic Proof Badge & Token Consumption Gauge  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md p-space-md rounded-xl bg-surface-container-low">
<div className="flex flex-col gap-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Monthly Token Quota</span>
<span className="font-caption text-caption text-primary font-bold" id="quota-display">68,450 / 100,000</span>
</div>
{/*  Progress Bar  */}
<div className="w-full h-3 rounded-full bg-surface-container-highest overflow-hidden relative">
<div className="h-full rounded-full bg-gradient-to-r from-primary-container to-secondary transition-all duration-700" id="quota-bar"></div>
</div>
<span className="font-caption text-caption text-slate-muted">Atomic allocation per applicant tier. Metered per generation.</span>
</div>
{/*  Proof of Attestation Badge  */}
<div className="flex flex-col justify-center items-start p-space-sm rounded-lg bg-surface-card shadow-sm">
<div className="flex items-center gap-space-xs text-success">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span className="font-label-sm text-label-sm font-bold">Attestation Cryptographically Signed</span>
</div>
<p className="font-caption text-caption text-on-surface-variant pt-space-xs">
                Hash: <code className="text-primary font-mono text-[10px]">SHA256:8f4c...9d21</code> (Zero ungrounded hallucinations permitted)
              </p>
</div>
</div>
{/*  Gateway Pipeline Diagrammatic Visualization  */}
<div className="flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Server-Side Redundancy State</span>
<div className="grid grid-cols-3 gap-space-sm text-center">
<div className="p-space-sm rounded-lg bg-surface-blush-subtle flex flex-col items-center">
<span className="font-label-sm text-label-sm font-bold text-primary">Gemini 1.5 Pro</span>
<span className="font-caption text-caption text-success font-semibold">Primary (Operational)</span>
<span className="font-caption text-caption text-slate-muted">Prompt grounding active</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col items-center">
<span className="font-label-sm text-label-sm font-bold text-on-surface">NVIDIA NIM NIM-70B</span>
<span className="font-caption text-caption text-success font-semibold">Standby (Warm)</span>
<span className="font-caption text-caption text-slate-muted">Fallback threshold &lt; 200ms</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col items-center">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Strict ATS Exporter</span>
<span className="font-caption text-caption text-primary font-semibold">Local CPU Worker</span>
<span className="font-caption text-caption text-slate-muted">Zero Cloud AI exposure</span>
</div>
</div>
</div>
{/*  Code / Attestation Preview  */}
<div className="p-space-md rounded-xl bg-inverse-surface text-inverse-on-surface font-mono text-[11px] leading-relaxed overflow-x-auto">
<div className="text-secondary-fixed mb-1">// Candidate-attested schema enforcement payload</div>
<div>&#123;</div>
<div className="pl-4"><span className="text-primary-fixed-dim">"candidate_id"</span>: <span className="text-success">"usr_9042a"</span>,</div>
<div className="pl-4"><span className="text-primary-fixed-dim">"verified_claims"</span>: [<span className="text-surface-blush">"Led 14-engineer team"</span>, <span className="text-surface-blush">"Reduced latency 43%"</span>],</div>
<div className="pl-4"><span className="text-primary-fixed-dim">"synthetic_facts_permitted"</span>: <span className="text-error font-bold">false</span>,</div>
<div className="pl-4"><span className="text-primary-fixed-dim">"format_target"</span>: <span className="text-surface-blush">"Deterministic ATS Plain-Text / Strict DOCX"</span></div>
<div>&#125;</div>
</div>
</div>
{/*  Explanatory Value Column  */}
<div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Candidate-Attested Claims Only</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Unlike generic bots that scrape untrusted third-party resumes or ingest unvetted PDFs, ApplyNora only crafts narratives from validated milestones confirmed by you. No exaggeration, zero fictitious accreditations.
            </p>
</div>
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">description</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Deterministic ATS DOCX & PDF</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Generated locally in isolated render containers. No complex dual-column tables or invisible styling bugs that trip modern enterprise Taleo, Workday, or Greenhouse parsers. Clean, bulletproof, readable.
            </p>
</div>
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-blush flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">alt_route</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Multi-Model Server-Side Redundancy</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Automated circuit-breakers instantly switch traffic between Gemini 1.5 Pro and NVIDIA NIM microservices if latency spikes, ensuring you never miss application deadlines.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  Feature Section 2: Controlled Automation & Dry-Run Engine  */}
<section className="w-full py-space-xl px-margin-desktop bg-surface" id="dry-run">
<div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-2xl">
<div className="flex items-center gap-space-xs text-secondary">
<span className="material-symbols-outlined text-[20px]">tune</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-bold">Sub-System 02</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Controlled Automation & Dry-Run Verification Engine
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          We categorically reject reckless "1-click apply to 500 companies" scripts that destroy your reputation. ApplyNora delivers granular daily quotas, deep alignment scores, and mandatory human confirmation.
        </p>
</div>
{/*  Pipeline Visualization Graphic: Dry Run vs Confirmed Live Submission  */}
<div className="w-full bg-surface-card rounded-2xl shadow-md p-space-lg flex flex-col gap-space-lg">
<div className="flex flex-col sm:flex-row justify-between sm:items-center gap-space-xs pb-space-xs">
<div>
<span className="font-headline-sm text-headline-sm text-on-surface">Two-Stage Safe Execution Flow</span>
<p className="font-caption text-caption text-slate-muted">Dry-Run Simulation stage isolates discrepancies prior to actual portal handshake</p>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-space-xs rounded-lg bg-surface-container hover:bg-surface-blush-subtle font-label-sm text-label-sm text-primary font-bold transition-all flex items-center gap-space-xs" id="toggle-pipeline-btn">
<span className="material-symbols-outlined text-[16px]">play_circle</span>
              Simulate Pipeline Step
            </button>
<span className="px-space-sm py-space-xs rounded-lg bg-error-container text-on-error-container font-caption text-caption font-bold flex items-center gap-space-xs" id="killswitch-badge">
<span className="w-2 h-2 rounded-full bg-error"></span> Kill-Switch Ready
            </span>
</div>
</div>
{/*  Process Diagram  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-space-md relative">
{/*  Step 1  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary font-caption text-caption flex items-center justify-center font-bold">01</span>
<span className="font-caption text-caption text-primary font-bold">Pre-Flight Check</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface pt-space-xs">Relevance Scoring</h4>
<p className="font-caption text-caption text-slate-muted">Scans role criteria against verified claims. Drops match if below configured threshold (e.g., 85%).</p>
<div className="mt-space-xs p-space-xs rounded bg-surface-card text-success font-caption text-caption flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Match: 92.4% (Passed)
            </div>
</div>
{/*  Step 2  */}
<div className="p-space-md rounded-xl bg-surface-blush-subtle flex flex-col gap-space-xs relative">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-secondary text-on-primary font-caption text-caption flex items-center justify-center font-bold">02</span>
<span className="font-caption text-caption text-secondary font-bold">Simulation Sandbox</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface pt-space-xs">Dry-Run Inspection</h4>
<p className="font-caption text-caption text-slate-muted">Populates target questions, calculates salary expectation coherence, checks custom prompt limits.</p>
<div className="mt-space-xs p-space-xs rounded bg-surface-card text-secondary font-caption text-caption flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[14px]">visibility</span> Rendered preview available
            </div>
</div>
{/*  Step 3  */}
<div className="p-space-md rounded-xl bg-surface-container-high flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-on-surface text-surface font-caption text-caption flex items-center justify-center font-bold">03</span>
<span className="font-caption text-caption text-on-surface font-bold">Candidate Gate</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface pt-space-xs">Human Authorization</h4>
<p className="font-caption text-caption text-slate-muted">Transparent queue requires your 1-click unlock or automated window countdown with halt ability.</p>
<div className="mt-space-xs p-space-xs rounded bg-surface-card text-on-surface font-caption text-caption flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[14px]">touch_app</span> 1-Click Approval Queue
            </div>
</div>
{/*  Step 4  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="w-7 h-7 rounded-full bg-success text-on-primary font-caption text-caption flex items-center justify-center font-bold">04</span>
<span className="font-caption text-caption text-success font-bold">Confirmed Live Push</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface pt-space-xs">Direct Submission</h4>
<p className="font-caption text-caption text-slate-muted">Dispatches via authenticated API or encrypted headless runner. Generates signed receipt in your vault.</p>
<div className="mt-space-xs p-space-xs rounded bg-surface-card text-success font-caption text-caption flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[14px]">done_all</span> Receipt #TX-8820 Logged
            </div>
</div>
</div>
{/*  Control Details Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">speed</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Configurable Daily Velocity</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Cap submissions at 3, 5, or 10 per day. Quality over carpet-bombing ensures recruiter goodwill.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[24px]">filter_alt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Threshold Sliders</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Set compensation, tech stack, and location rigidity. Lower scoring jobs are silently archived.</p>
</div>
</div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-error text-[24px]">power_settings_new</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Global Instant Kill-Switch</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">One tap terminates all running sessions and purges transient browser memory instantaneously.</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Feature Section 3: Smart Unified Inbox & Interview Intelligence  */}
<section className="w-full py-space-xl px-margin-desktop bg-surface-ground" id="unified-inbox">
<div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-xl">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[20px]">mark_email_unread</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-bold">Sub-System 03</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Smart Unified Inbox & Interview Intelligence
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Privacy-first integration. We sync only header metadata and short snippets—never message bodies. Automated heuristic extraction converts recruiter replies into confirmed calendar events.
          </p>
</div>
<div className="p-space-sm rounded-xl bg-surface-card shadow-sm flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">key</span>
<div className="flex flex-col">
<span className="font-caption text-caption text-slate-muted font-bold uppercase">OAuth Scope Limited</span>
<span className="font-label-sm text-label-sm text-on-surface">gmail.readonly (Headers Only)</span>
</div>
</div>
</div>
{/*  Feature Split Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/*  Inbox Feed Preview  */}
<div className="lg:col-span-7 bg-surface-card rounded-2xl shadow-md p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[22px]">inbox</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Heuristic Opportunity Feed</span>
</div>
<span className="font-caption text-caption px-space-sm py-space-xs rounded-full bg-surface-container text-slate-muted">Parsed 3 mins ago</span>
</div>
{/*  Feed Item 1: Interview Scheduled  */}
<div className="p-space-md rounded-xl bg-surface-blush-subtle flex flex-col gap-space-xs relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold font-label-sm">
                  ST
                </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Stripe · VP of Engineering Hiring</span>
<span className="font-caption text-caption text-slate-muted">From: recruiting@stripe.com · Header ID #g_99182</span>
</div>
</div>
<span className="px-space-sm py-space-xs rounded-full bg-success text-on-primary font-caption text-caption font-bold">Interview Extracted</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-space-xs">
<span className="font-semibold text-primary">Snippet (24 chars):</span> "...would love to schedule 45m technical briefing this Thursday..."
            </p>
<div className="mt-space-xs p-space-xs rounded-lg bg-surface-card flex flex-wrap items-center justify-between gap-space-xs text-on-surface font-caption text-caption">
<span className="flex items-center gap-1 font-semibold text-primary">
<span className="material-symbols-outlined text-[16px]">calendar_month</span> Thu, Oct 24 · 2:00 PM EST
              </span>
<span className="flex items-center gap-1 text-slate-muted">
<span className="material-symbols-outlined text-[16px]">videocam</span> Google Meet Attached
              </span>
<span className="text-success font-bold">Multi-Channel Sync: Ready</span>
</div>
</div>
{/*  Feed Item 2: Recruiter Screening Snippet  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center font-bold font-label-sm">
                  FA
                </div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Figma · Staff Platform Architect</span>
<span className="font-caption text-caption text-slate-muted">From: talent@figma.com</span>
</div>
</div>
<span className="px-space-sm py-space-xs rounded-full bg-surface-container text-slate-muted font-caption text-caption">In Review</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">
<span className="font-semibold text-on-surface">Snippet:</span> "...confirming receipt of attested portfolio packet. Screening team is reviewing..."
            </p>
</div>
{/*  Limited Scope Disclaimer Banner  */}
<div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container text-slate-muted font-caption text-caption">
<span className="material-symbols-outlined text-[18px]">privacy_tip</span>
<span>ApplyNora never reads, parses, or stores private threads or personal contacts. Body contents are purged immediately following heuristic token extraction.</span>
</div>
</div>
{/*  Capability Cards Column  */}
<div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
{/*  Multi-Channel Reminders  */}
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-blush flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">notifications_active</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">24h & 1h Multi-Channel Alerts</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Never miscalculate a timezone again. Automated cadence pushes contextual briefing cards through your preferred channel before every recruiter dialogue:
            </p>
<div className="flex flex-wrap gap-space-xs pt-space-xs">
<span className="px-space-sm py-space-xs rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">stay_current_portrait</span> In-App Push
              </span>
<span className="px-space-sm py-space-xs rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">mail</span> Priority Email
              </span>
<span className="px-space-sm py-space-xs rounded-full bg-surface-container-high font-label-sm text-label-sm text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">send</span> Encrypted Telegram Bot
              </span>
</div>
</div>
{/*  Google Sheets Auto Export  */}
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">table_chart</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Google Sheets Auto-Export</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Maintain sovereign ownership of your pipeline. Real-time updates push stage changes, compensation notes, and dates directly into your private Google Sheet using strictly limited <code className="text-primary font-mono text-[11px]">drive.file</code> permissions.
            </p>
</div>
</div>
</div>
</div>
</section>
{/*  Feature Section 4: Bank-Grade Security & Privacy  */}
<section className="w-full py-space-xl px-margin-desktop bg-surface" id="bank-grade">
<div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-2xl">
<div className="flex items-center gap-space-xs text-primary">
<span className="material-symbols-outlined text-[20px]">security</span>
<span className="font-label-md text-label-md uppercase tracking-wider font-bold">Sub-System 04</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Bank-Grade Security, Tenant Isolation & Privacy Guardrails
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Your career history and active market positioning represent highly sensitive personal collateral. We built ApplyNora with defense-in-depth isolation standards trusted by global financial institutions.
        </p>
</div>
{/*  4-Pillar Architecture Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  Pillar 1  */}
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-blush-subtle text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">database</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">PostgreSQL Row-Level Security</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Every candidate operates inside an isolated PostgreSQL tenant boundary enforced at the database kernel level. Data crossover is mathematically precluded.
            </p>
</div>
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider font-semibold">Tenant-Scoped Isolation</span>
</div>
{/*  Pillar 2  */}
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">cloud_sync</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Private KMS S3 & ClamAV</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              All rendered assets and export artifacts are encrypted at rest with AWS KMS. Real-time ClamAV daemon scans incoming files before storage admittance.
            </p>
</div>
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider font-semibold">256-Bit Envelope Encryption</span>
</div>
{/*  Pillar 3  */}
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-blush text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">password</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Hardware TOTP & Encrypted MFA</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Enforce time-based OTP via 1Password, YubiKey, or Google Authenticator. Backup codes are salted, hashed, and never stored as plaintext in memory.
            </p>
</div>
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider font-semibold">Zero-Knowledge Credentials</span>
</div>
{/*  Pillar 4  */}
<div className="p-space-lg rounded-2xl bg-surface-card shadow-md flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">delete_forever</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">1-Click Full Hard Deletion</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Full GDPR and NDPA compliance. Request complete JSON/ZIP vault archives or trigger instantaneous cryptographic erasure of all records and tokens.
            </p>
</div>
<span className="font-caption text-caption text-slate-muted uppercase tracking-wider font-semibold">Right to Be Forgotten</span>
</div>
</div>
{/*  Trust Badges Bar  */}
<div className="p-space-md rounded-2xl bg-surface-container-low flex flex-wrap items-center justify-around gap-space-md text-center">
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-success text-[20px]">check_circle</span>
          NDPA (Nigeria Data Protection Act)
        </div>
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-success text-[20px]">check_circle</span>
          GDPR Chapter III Candidate Sovereignty
        </div>
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-success text-[20px]">check_circle</span>
          SOC 2 Type II Aligned Infrastructure
        </div>
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-success text-[20px]">check_circle</span>
          Zero-Model Training Pledge
        </div>
</div>
</div>
</section>
{/*  Section 5: Exhaustive Comparison Matrix  */}
<section className="w-full py-space-xl px-margin-desktop bg-surface-ground" id="comparison">
<div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs text-center items-center">
<span className="font-label-md text-label-md text-primary uppercase tracking-wider font-bold">The Strategic Difference</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight max-w-2xl">
          ApplyNora vs. Generic AI Job Bots vs. Traditional Job Boards
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Discover why high-caliber executives and senior professionals avoid carpet-bombing tools in favor of verified career acceleration.
        </p>
</div>
{/*  Comparison Table Card  */}
<div className="w-full bg-surface-card rounded-2xl shadow-md overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface font-caption text-caption uppercase tracking-wider">
<th className="py-space-md px-space-lg w-1/3">Architectural Standard</th>
<th className="py-space-md px-space-md w-1/4 bg-surface-blush-subtle text-primary font-bold">ApplyNora Engine</th>
<th className="py-space-md px-space-md w-1/5 text-slate-muted">Generic AI Job Bots</th>
<th className="py-space-md px-space-md w-1/5 text-slate-muted">Traditional Job Boards</th>
</tr>
</thead>
<tbody className="divide-y divide-border-lavender font-body-sm text-body-sm">
{/*  Row 1  */}
<tr className="hover:bg-surface-blush-subtle/40 transition-colors">
<td className="py-space-md px-space-lg font-semibold text-on-surface">
                  Attested Grounding (Hallucination Proof)
                  <span className="block font-caption text-caption text-slate-muted font-normal">Ensures resumes only state verifiable facts</span>
</td>
<td className="py-space-md px-space-md bg-surface-blush-subtle/50 text-success font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">verified</span> 100% Cryptographic Lock
                </td>
<td className="py-space-md px-space-md text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">cancel</span> Fabricates claims
                </td>
<td className="py-space-md px-space-md text-slate-muted">N/A (Manual Input)</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-blush-subtle/40 transition-colors">
<td className="py-space-md px-space-lg font-semibold text-on-surface">
                  Submission Guardrails & Dry-Runs
                  <span className="block font-caption text-caption text-slate-muted font-normal">Pre-flight preview, score threshold, instant kill-switch</span>
</td>
<td className="py-space-md px-space-md bg-surface-blush-subtle/50 text-success font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">verified</span> Dual-Stage Gate & Sandbox
                </td>
<td className="py-space-md px-space-md text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">cancel</span> Reckless mass-spam
                </td>
<td className="py-space-md px-space-md text-slate-muted">Manual apply per job</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-blush-subtle/40 transition-colors">
<td className="py-space-md px-space-lg font-semibold text-on-surface">
                  Email Privacy & OAuth Scope
                  <span className="block font-caption text-caption text-slate-muted font-normal">Restricted snippet extraction vs. full inbox scraping</span>
</td>
<td className="py-space-md px-space-md bg-surface-blush-subtle/50 text-success font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">verified</span> Headers Only (Zero full bodies)
                </td>
<td className="py-space-md px-space-md text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">cancel</span> Invasive full email scope
                </td>
<td className="py-space-md px-space-md text-slate-muted">No integration</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-blush-subtle/40 transition-colors">
<td className="py-space-md px-space-lg font-semibold text-on-surface">
                  Database & Vault Security
                  <span className="block font-caption text-caption text-slate-muted font-normal">Row-level isolation with hardware MFA</span>
</td>
<td className="py-space-md px-space-md bg-surface-blush-subtle/50 text-success font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">verified</span> Tenant PostgreSQL RLS
                </td>
<td className="py-space-md px-space-md text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">cancel</span> Shared multi-tenant pool
                </td>
<td className="py-space-md px-space-md text-warning flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">info</span> Variable legacy DBs
                </td>
</tr>
{/*  Row 5  */}
<tr className="hover:bg-surface-blush-subtle/40 transition-colors">
<td className="py-space-md px-space-lg font-semibold text-on-surface">
                  ATS Document Formatting
                  <span className="block font-caption text-caption text-slate-muted font-normal">Deterministic parsability across Taleo, Workday, Greenhouse</span>
</td>
<td className="py-space-md px-space-md bg-surface-blush-subtle/50 text-success font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">verified</span> Strict DOCX / Plain-Text
                </td>
<td className="py-space-md px-space-md text-warning flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">error</span> Fragile HTML/CSS exports
                </td>
<td className="py-space-md px-space-md text-slate-muted">Raw user uploaded files</td>
</tr>
{/*  Row 6  */}
<tr className="hover:bg-surface-blush-subtle/40 transition-colors">
<td className="py-space-md px-space-lg font-semibold text-on-surface">
                  Data Sovereignty & Deletion
                  <span className="block font-caption text-caption text-slate-muted font-normal">GDPR / NDPA hard purge with automated Google Sheet export</span>
</td>
<td className="py-space-md px-space-md bg-surface-blush-subtle/50 text-success font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">verified</span> 1-Click Hard Deletion
                </td>
<td className="py-space-md px-space-md text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">cancel</span> Data monetized/retained
                </td>
<td className="py-space-md px-space-md text-slate-muted">Aggregated for ad-tech</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
{/*  Strategic Executive CTA Section  */}
<section className="w-full py-space-xl px-margin-desktop bg-surface relative overflow-hidden">
<div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-primary-container via-secondary to-tertiary p-space-xl text-on-primary shadow-xl relative overflow-hidden">
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-sm max-w-xl text-center md:text-left">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-white/20 text-on-primary font-caption text-caption self-center md:self-start">
<span className="material-symbols-outlined text-[16px]">flight_takeoff</span>
            Ready for Controlled Career Acceleration
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
            Stop Risking Your Reputation with Unchecked Bots.
          </h2>
<p className="font-body-md text-body-md text-on-primary/90">
            Join discerning executives, engineering leads, and high-impact operators who navigate the modern job market with mathematical precision, verified claims, and bank-grade privacy.
          </p>
</div>
<div className="flex flex-col sm:flex-row gap-space-sm shrink-0 w-full md:w-auto">
<Link className="font-label-md text-label-md text-primary bg-surface-card hover:bg-surface-blush-subtle active:scale-95 px-space-lg py-space-md rounded-xl shadow-lg transition-all text-center flex items-center justify-center gap-space-xs font-bold" data-path="pricing" to="/">
<span className="material-symbols-outlined text-[20px]">verified</span>
            Get Started Free
          </Link>
<Link className="font-label-md text-label-md text-on-primary bg-white/10 hover:bg-white/20 active:scale-95 px-space-lg py-space-md rounded-xl transition-all text-center flex items-center justify-center gap-space-xs" data-path="how-it-works" to="/">
            Review Architecture Spec
          </Link>
</div>
</div>
</div>
</section>
</div>
</main>
    </>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
