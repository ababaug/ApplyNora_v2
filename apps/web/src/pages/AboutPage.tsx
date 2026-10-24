

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <>
      <Helmet>
           <title>AboutPage - ApplyNora</title>
           <meta name="description" content="AboutPage for ApplyNora" />
       </Helmet>
      <main className="w-full pt-20 bg-surface-ground min-h-screen"><div className="flex flex-col w-full">
{/*  Top Ambient Luminescence Scrim  */}
<div className="relative w-full overflow-hidden bg-surface-ground">
<div className="absolute -top-40 right-1/4 w-[620px] h-[620px] bg-gradient-to-br from-primary-fixed via-secondary-fixed to-transparent rounded-full blur-3xl opacity-40 pointer-events-none"></div>
<div className="absolute top-80 -left-20 w-[420px] h-[420px] bg-surface-blush rounded-full blur-3xl opacity-30 pointer-events-none"></div>
{/*  Main Hero / Manifesto Overline Section  */}
<section className="relative w-full px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-xl">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
{/*  Eyebrow Badge & Index Counter  */}
<div className="flex items-center justify-between w-full">
<div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-blush-subtle text-primary shadow-sm">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Our Mission & Founding Principles</span>
</div>
<span className="hidden sm:inline-flex font-caption text-caption text-slate-muted uppercase tracking-widest font-mono">DOC ID: AN-CORP-2025.04</span>
</div>
{/*  Typography Strike & Narrative Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Restoring Candidate Agency in the Age of Synthetic Noise.
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
              ApplyNora was founded by senior engineering leaders and talent advocates weary of reckless automated spray-and-pray bots diluting talent credibility and violating privacy boundaries.
            </p>
</div>
{/*  Micro Telemetry Bento Box  */}
<div className="lg:col-span-4 flex flex-col gap-space-sm bg-surface-card p-space-lg rounded-xl shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-slate-muted uppercase tracking-wider">Candidate Signal Index</span>
<span className="material-symbols-outlined text-primary text-[20px]">equalizer</span>
</div>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface">99.4%</span>
<span className="font-label-sm text-label-sm text-success flex items-center">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> Attested Truth
              </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Every résumé artifact and executive brief generated inside our enclave maps cleanly to verifiably human achievements.
            </p>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden mt-space-xs">
<div className="bg-gradient-to-r from-primary-container to-secondary h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Narrative Manifesto Mosaic  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-lg">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
{/*  Image Card: The Executive War Room  */}
<div className="lg:col-span-7 rounded-xl overflow-hidden shadow-sm relative group min-h-[360px] flex flex-col justify-end p-space-xl bg-surface-container-high">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Modern executive conference room with high-tech monitors displaying cryptographic security diagrams and candidate talent graphs, bathed in clean architectural sunlight and deep plum-violet reflections with two thoughtful engineering leaders discussing strategy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx3bfhsjzebwkOzrBfc5qM6KgjgvACpUfcwlvzzDTh6H6NIvffRImIEKBpMP0TGdCLJmzRQbX-pLKZaqI6UD2VPt2UwAlGeaFDGXdF2_b-SIAHVXVXxu8v7vWz7U7Ck-0pWdKSYWdn-tU3vPj-Tw_NwqjYjnjxRIyvM8wRkh9qTgsTT5hO9m206CTwZBRfoFFshN7-OKY0xnqWuTy_vUYmJZk_KT6eD5KNXs_k9Ds4xfvbyf74GL3B-A" />
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/95 via-inverse-surface/40 to-transparent"></div>
<div className="relative z-10 flex flex-col gap-space-xs">
<span className="font-label-sm text-label-sm text-surface-blush uppercase tracking-wider">Origins</span>
<h3 className="font-headline-md text-headline-md text-on-primary">
              Crafted in reaction to the commodification of elite career talent.
            </h3>
<p className="font-body-sm text-body-sm text-surface-container-highest max-w-xl">
              When generative scripts began flooding hiring desks with hallucinated qualifications, authentic practitioners were drowned out. We built ApplyNora as an impenetrable fortress of verifiable record.
            </p>
</div>
</div>
{/*  Metric Highlight Callout  */}
<div className="lg:col-span-5 flex flex-col justify-between gap-space-lg bg-surface-card p-space-xl rounded-xl shadow-sm">
<div className="flex flex-col gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-blush-subtle flex items-center justify-center text-primary mb-space-xs">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<span className="font-label-md text-label-md uppercase tracking-wider text-slate-muted">Zero Hallucination Guarantee</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">
              Architected for those who cannot afford algorithmic distortion.
            </h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              In C-suite and VP transitions, reputation is an asymmetric asset. Our core parsing protocols enforce strict mathematical attribution back to source documents.
            </p>
</div>
<div className="pt-space-md bg-surface-container-low p-space-md rounded-lg flex items-center justify-between">
<div className="flex flex-col">
<span className="font-caption text-caption text-slate-muted uppercase">Avg. Recruiter Trust Score</span>
<span className="font-headline-sm text-headline-sm text-primary">4.92 / 5.00</span>
</div>
<span className="material-symbols-outlined text-primary text-[32px]">shield_with_heart</span>
</div>
</div>
</div>
</section>
{/*  SECTION 1: THE CORE TENETS  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Foundational Pillars</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">The Three Non-Negotiable Tenets</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
              We reject the growth-at-all-costs playbook of mass scraping and autonomous spambots. Our engine runs on deliberate consent.
            </p>
</div>
<div className="hidden lg:flex items-center gap-space-xs font-mono text-caption text-slate-muted">
<span className="w-2 h-2 rounded-full bg-success"></span>
            ACTIVE GOVERNANCE CHARTER
          </div>
</div>
{/*  3 Pillars Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Card 1  */}
<div className="bg-surface-card p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-lg group relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-blush-subtle text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">fact_check</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-caption text-caption text-slate-muted uppercase font-mono">TENET 01</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Truth-Grounded Attribution</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Our model strictly prevents metric exaggeration. It refuses to invent headcount numbers, budget figures, or competencies not backed by authenticated candidate assertions.
              </p>
</div>
<div className="pt-space-sm bg-surface-ground p-space-sm rounded-lg flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px]">lock</span>
              Strict Semantic Anchoring
            </div>
</div>
{/*  Card 2  */}
<div className="bg-surface-card p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-lg group relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-blush-subtle text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">lock_clock</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-caption text-caption text-slate-muted uppercase font-mono">TENET 02</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Uncompromised Data Privacy</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Scoped OAuth integrations, hardware-isolated tenant memory vaults, and a strict contract: your executive dossiers and unlisted search activities are never used for frontier foundation model training.
              </p>
</div>
<div className="pt-space-sm bg-surface-ground p-space-sm rounded-lg flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px]">security</span>
              Ephemerality By Default
            </div>
</div>
{/*  Card 3  */}
<div className="bg-surface-card p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-space-lg group relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-blush-subtle text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
<span className="material-symbols-outlined text-[26px]">touch_app</span>
</div>
<div className="flex flex-col gap-space-xs">
<span className="font-caption text-caption text-slate-muted uppercase font-mono">TENET 03</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Human-in-the-Loop Dignity</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                We believe total autonomous job submission is catastrophic for senior candidates. ApplyNora dry-runs every action; no recruiter message or package leaves without deliberate human sign-off.
              </p>
</div>
<div className="pt-space-sm bg-surface-ground p-space-sm rounded-lg flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              Mandatory Approval Gate
            </div>
</div>
</div>
</div>
</section>
{/*  SECTION 2: LEADERSHIP & ENGINEERING TEAM  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Built By Operators</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Executive Leadership & Engineering</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Former infrastructure security engineers, AI research scholars, and executive search partners unified around career integrity.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/*  Profile 1  */}
<div className="bg-surface-card rounded-xl overflow-hidden shadow-sm flex flex-col group">
<div className="h-64 w-full relative overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Editorial portrait of an authoritative female chief technology executive with refined composure wearing a dark plum blazer in a minimalist modern glass studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBN6t3edr1-_wTXQoi5Q35S1AmHcvk3Q6mkeHUzmdIYPvFVpCXebH_sxB9fcn2Q8zJDZMDNtLULQFFfB8DmHejGFbPh2wb_hRpFZQ5M8OAA61kK5RQ0FGKx_k4KH5tSCima-KKxLmJsYs8DcS-Py2EZRXLcwgSxGGA1DdCSgeZKb1fzUEjVvqiGawOVKQFZjcrlIJevuFp2m-fbi_ZZexurKeCyLMP04llWFe4MK3kqSBlOyN4vgoJZA" />
<div className="absolute bottom-3 left-3 px-space-sm py-space-xs rounded-full bg-inverse-surface/80 backdrop-blur-md text-on-primary font-caption text-caption">
                Founder & CEO
              </div>
</div>
<div className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between">
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Dr. Elena Vance</h3>
<span className="font-caption text-caption text-primary font-mono uppercase">Ex-Stripe / Stanford AI Lab</span>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                  Spent 12 years engineering high-throughput fraud prevention and NLP verification rails before founding ApplyNora.
                </p>
</div>
<div className="pt-space-sm bg-surface-ground p-space-xs rounded font-caption text-caption text-slate-muted italic">
                “A career search should be a precision instrument, not an undignified lottery.”
              </div>
</div>
</div>
{/*  Profile 2  */}
<div className="bg-surface-card rounded-xl overflow-hidden shadow-sm flex flex-col group">
<div className="h-64 w-full relative overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Professional studio portrait of an executive chief architect with glasses and a tailored charcoal shirt, neutral architectural backdrop, warm magenta accent rim light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3tIyxjtGr17-eTgfk-QPfCI_SEFbWpDPWeqFYvDSUX3YMxUClXXNYXdElx9ZHke1rqFo8KRFJ4d7FjsNmohC6pMolRJpNAOKViOBVamOKeVqm3llZqsHXHIg88Qf1DJTuR1m2-GCeZhUDOYM7z24AnFm3eHRSydueorA-fZNil12L3qpWpxKfj8UMlO9e9mXVElf23kx8yiBpns64Wev5D_U04t0CV7E661o_8SaZXGIq3Mryp6kBSw" />
<div className="absolute bottom-3 left-3 px-space-sm py-space-xs rounded-full bg-inverse-surface/80 backdrop-blur-md text-on-primary font-caption text-caption">
                CTO & Head of Enclave
              </div>
</div>
<div className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between">
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Marcus Thorne</h3>
<span className="font-caption text-caption text-primary font-mono uppercase">Ex-Cloudflare / Zero-Knowledge Lead</span>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                  Pioneered cryptographic isolation primitives. Designed our sandboxed parsing vaults and OAuth consent brokers.
                </p>
</div>
<div className="pt-space-sm bg-surface-ground p-space-xs rounded font-caption text-caption text-slate-muted italic">
                “Zero telemetry escapes our sandboxes without explicit candidate sign-off.”
              </div>
</div>
</div>
{/*  Profile 3  */}
<div className="bg-surface-card rounded-xl overflow-hidden shadow-sm flex flex-col group">
<div className="h-64 w-full relative overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern candid executive portrait of a thoughtful female vice president of talent advocacy sitting in an executive lounge with soft ambient lighting and deep violet tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaEzsI4_S7RnzJyNGM9qST8DlVkkeW1KsPV_2DbJkOH2shCIYiubYtqZ1MJrRYcKID0sDeRYSyh2cepjDSwtxUGjeLJAlv7kyY2GzMnhD2baXxv4wmf3DBSgRPkU-xiJr0yfpD1oJoAFzXLq4vrkHyD_SmjIRDD1Kso3T0CvoiNaVpigbdhpe9UyxKBFa7Z19OBDNkuW_reGJBCvQNZQ6Qr8en2ujuzuhfNwYbDCul0tWBVgT3VeLqNQ" />
<div className="absolute bottom-3 left-3 px-space-sm py-space-xs rounded-full bg-inverse-surface/80 backdrop-blur-md text-on-primary font-caption text-caption">
                VP of Talent Integrity
              </div>
</div>
<div className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between">
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Aria Chen</h3>
<span className="font-caption text-caption text-primary font-mono uppercase">Ex-Heidrick & Struggles Partner</span>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                  Advised Fortune 100 boards on C-suite placements. Directs ApplyNora’s Executive Tone Engine and human concierge network.
                </p>
</div>
<div className="pt-space-sm bg-surface-ground p-space-xs rounded font-caption text-caption text-slate-muted italic">
                “Recruiters see through generic keyword stuffing in five seconds. Precision always wins.”
              </div>
</div>
</div>
{/*  Profile 4  */}
<div className="bg-surface-card rounded-xl overflow-hidden shadow-sm flex flex-col group">
<div className="h-64 w-full relative overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up confident portrait of a senior artificial intelligence researcher with keen analytical focus, warm studio lighting with a subtle amethyst ambient tint" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYCCLT5Oh4KyeUJF2NMuyJtHN6Wl4C1PK0zXYg8XZVnt2e7eJ-Mel8GFKqDLdzoUf8Y5TQmq9rMPjRJ35yaJ9TaynTHjTktT5AAs9m1vZCpPjvVvZd7e_tKQAMSVDO6Y7stSf6MZXD8bp4F6O5a79rtyJJpjmDUKv176N9DKlpkCHzgP9Ii4K6S5QXvFOZqOSCq-ktKq-LoBXLL7EwMvX9Xzm8s1nH_0mfVjy5Y2SRLz6mgpGj8jkvKQ" />
<div className="absolute bottom-3 left-3 px-space-sm py-space-xs rounded-full bg-inverse-surface/80 backdrop-blur-md text-on-primary font-caption text-caption">
                Principal AI Scientist
              </div>
</div>
<div className="p-space-lg flex flex-col gap-space-sm flex-1 justify-between">
<div className="flex flex-col gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Tariq Al-Mansoor</h3>
<span className="font-caption text-caption text-primary font-mono uppercase">Ex-DeepMind / Oxford Ph.D.</span>
<p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                  Specializes in constrained generation and semantic truth-locking mechanisms for mission-critical enterprise workflows.
                </p>
</div>
<div className="pt-space-sm bg-surface-ground p-space-xs rounded font-caption text-caption text-slate-muted italic">
                “Generative models should never replace candidate truth; they must amplify it.”
              </div>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 3: ENGINEERING MILESTONES & SECURITY MATRIX  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Enterprise Cryptography & Trust</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Security Standards & Architecture Roadmap</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Because our clientele handles proprietary patents, confidential M&A histories, and non-public performance data, we operate under institutional governance tiers.
          </p>
</div>
{/*  Interactive Certification Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg" id="compliance-matrix">
{/*  ISO 27001 Readiness  */}
<div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-all hover:-translate-y-1">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">badge</span>
</span>
<span className="inline-flex items-center gap-1 font-caption text-caption text-success bg-surface-container px-space-xs py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-success"></span> In Place
                </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">ISO/IEC 27001</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Full compliance framework covering Information Security Management Systems (ISMS), cryptographic key rotations, and access logs.
              </p>
</div>
<div className="pt-space-xs font-mono text-caption text-slate-muted">
              AUDITED: Q4 2024 (SEC-ANN-04)
            </div>
</div>
{/*  NDPA / GDPR  */}
<div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-all hover:-translate-y-1">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">policy</span>
</span>
<span className="inline-flex items-center gap-1 font-caption text-caption text-success bg-surface-container px-space-xs py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-success"></span> Active Enforced
                </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">GDPR & NDPA</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Right-to-be-forgotten triggers erase vector caches, structured digests, and OAuth tokens across cold and hot memory stores in under 60 seconds.
              </p>
</div>
<div className="pt-space-xs font-mono text-caption text-slate-muted">
              REGISTRATION: DPO-88219-EU
            </div>
</div>
{/*  ClamAV / Malware Clean Scans  */}
<div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-all hover:-translate-y-1">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">cleaning_services</span>
</span>
<span className="inline-flex items-center gap-1 font-caption text-caption text-success bg-surface-container px-space-xs py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-success"></span> Continuous
                </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">ClamAV Ingestion</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Every uploaded CV, PDF, or portfolio artifact is quarantined and evaluated against signature engines prior to parsing extraction.
              </p>
</div>
<div className="pt-space-xs font-mono text-caption text-slate-muted">
              THROUGHPUT: 100% QUARANTINED
            </div>
</div>
{/*  SOC 2 Type II Roadmap  */}
<div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md transition-all hover:-translate-y-1">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">schedule</span>
</span>
<span className="inline-flex items-center gap-1 font-caption text-caption text-warning bg-surface-container px-space-xs py-0.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-warning"></span> Final Observation
                </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">SOC-2 Type II</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Independent continuous observation period measuring enterprise availability, confidentiality, and tenant data segmentation.
              </p>
</div>
<div className="pt-space-xs font-mono text-caption text-slate-muted">
              ATTESTATION: EXP. Q2 2025
            </div>
</div>
</div>
{/*  Visual Architecture Callout: Isolated Tenant Vault  */}
<div className="w-full bg-surface-card p-space-xl rounded-xl shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-xl">
<div className="inline-flex items-center gap-space-xs text-primary font-caption text-caption uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px]">terminal</span>
              Vault Architecture
            </div>
<h3 className="font-headline-md text-headline-md text-on-surface">
              Hardware-Secured Career Silos
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Unlike generic resume builders that aggregate user documents into unpartitioned data lakes, each ApplyNora candidate profile is cryptographically keyed to individual session tokens.
            </p>
</div>
{/*  Micro Vector Diagram  */}
<div className="w-full lg:w-auto flex items-center gap-space-sm bg-surface-ground p-space-md rounded-xl">
<div className="flex flex-col items-center p-space-sm bg-surface-card rounded-lg shadow-sm">
<span className="material-symbols-outlined text-primary text-[24px]">description</span>
<span className="font-caption text-caption text-on-surface font-mono mt-1">Raw Doc</span>
</div>
<span className="material-symbols-outlined text-slate-muted text-[18px]">arrow_forward</span>
<div className="flex flex-col items-center p-space-sm bg-surface-blush-subtle rounded-lg shadow-sm">
<span className="material-symbols-outlined text-secondary text-[24px]">vpn_key</span>
<span className="font-caption text-caption text-primary font-mono mt-1">Enclave Lock</span>
</div>
<span className="material-symbols-outlined text-slate-muted text-[18px]">arrow_forward</span>
<div className="flex flex-col items-center p-space-sm bg-surface-card rounded-lg shadow-sm">
<span className="material-symbols-outlined text-success text-[24px]">verified</span>
<span className="font-caption text-caption text-on-surface font-mono mt-1">Attested Signal</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 4: PRESS & ACADEMIC THOUGHT LEADERSHIP  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Thought Leadership</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Publications & Industry Commentary</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
              Our research team regularly contributes to dialogues surrounding candidate rights, generative AI integrity, and recruitment ethics.
            </p>
</div>
<Link className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-secondary transition-colors" data-path="blog" to="/">
            View All Press Mentions <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/*  Article 1  */}
<div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-caption text-caption text-primary font-mono uppercase">MIT Tech Review AI Forum</span>
<span className="font-caption text-caption text-slate-muted">Jan 2025</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                “Combating Synthetic Noise: Why Hiring Pipelines Are Demanding Attested Provenance.”
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                An analysis by ApplyNora Labs dissecting the failure rates of autonomous application bots and the algorithmic shift toward verified career tokens.
              </p>
</div>
<div className="pt-space-xs flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span>Read Whitepaper</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</div>
</div>
{/*  Article 2  */}
<div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-caption text-caption text-primary font-mono uppercase">Financial Times Executive</span>
<span className="font-caption text-caption text-slate-muted">Dec 2024</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                “The C-Suite Stealth Search: Navigating Leadership Transitions Without Leaking Alpha.”
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Quoting CEO Elena Vance on privacy hygiene, confidential network outreach, and why board candidates must guard their digital footprint.
              </p>
</div>
<div className="pt-space-xs flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span>Read Feature</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</div>
</div>
{/*  Article 3  */}
<div className="bg-surface-card p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-caption text-caption text-primary font-mono uppercase">VentureBeat AI & Privacy</span>
<span className="font-caption text-caption text-slate-muted">Nov 2024</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors cursor-pointer">
                “Beyond the Prompts: How ApplyNora Implements Hardware-Enforced Candidate Confidentiality.”
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                A technical breakdown of our enclave architecture, showing zero persistence and complete detachment from public LLM training feeds.
              </p>
</div>
<div className="pt-space-xs flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span>Read Case Study</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION 5: CALL TO ACTION BANNER (EXECUTIVE AURA MATCH)  */}
<section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
<div className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-gradient-to-br from-primary-container via-primary to-inverse-surface text-on-primary shadow-xl relative p-space-xl md:p-16">
{/*  Decorative Ambient Rings  */}
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary opacity-30 blur-2xl pointer-events-none"></div>
<div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-surface-blush opacity-20 blur-xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-space-xl">
<div className="flex flex-col gap-space-md max-w-2xl text-center lg:text-left">
<div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container/20 text-on-primary font-caption text-caption self-center lg:self-start backdrop-blur-sm">
<span className="material-symbols-outlined text-[16px]">workspace_premium</span>
              Strict Confidentiality Assured
            </div>
<h2 className="font-headline-xl text-headline-xl tracking-tight text-on-primary">
              Take Command of Your Executive Transition.
            </h2>
<p className="font-body-lg text-body-lg text-surface-container-highest max-w-xl">
              Equip your executive narrative with verifiable precision. Zero spam bots, zero unconsented submissions, total candidate agency.
            </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md w-full lg:w-auto">
<Link className="w-full sm:w-auto font-label-md text-label-md text-primary bg-surface-card hover:bg-surface-blush-subtle active:scale-95 px-space-xl py-space-md rounded-lg shadow-md transition-all flex items-center justify-center gap-space-xs text-decoration-none font-bold" data-path="pricing" to="/">
<span className="material-symbols-outlined text-[18px]">verified</span>
              Explore Executive Plans
            </Link>
<Link className="w-full sm:w-auto font-label-md text-label-md text-on-primary bg-surface-container/20 hover:bg-surface-container/30 active:scale-95 px-space-lg py-space-md rounded-lg transition-all flex items-center justify-center gap-space-xs backdrop-blur-sm text-decoration-none" data-path="contact" to="/">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
              Speak with Concierge
            </Link>
</div>
</div>
</div>
</section>
</div>
</div></main>
    </>
  );
}
