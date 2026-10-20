import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

export function FeaturesPage() {
  const [simulationStep, setSimulationStep] = useState(0);

  const steps = [
    {
      text: "Dry-Run Validated",
      badgeText: "Dry-Run Cleared",
      badgeClass: "bg-success text-on-primary",
    },
    {
      text: "Queue Pending (Human Gate)",
      badgeText: "Awaiting 1-Click",
      badgeClass: "bg-secondary text-on-primary",
    },
    {
      text: "Simulate Another Step",
      badgeText: "Kill-Switch Armed",
      badgeClass: "bg-error-container text-on-error-container",
    },
  ];

  const current = steps[simulationStep % steps.length];
  const newTokens = 68450 + simulationStep * 120;

  return (
    <>
      <Helmet>
        <title>Features - ApplyNora</title>
        <meta name="description" content="ApplyNora Platform Capabilities" />
      </Helmet>
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden bg-surface-ground">
          <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-surface-variant/30 to-transparent pointer-events-none -z-10"></div>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
            <div className="max-w-4xl mx-auto text-center space-y-space-md">
              <span className="inline-flex items-center gap-2 px-space-md py-space-xs rounded-full bg-surface-card border border-border-lavender shadow-sm font-label-sm text-label-sm text-primary uppercase tracking-widest">
                <span className="material-symbols-outlined text-[16px]">
                  memory
                </span>
                Platform Capabilities
              </span>
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tight">
                Precision tools for the modern{" "}
                <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  career transition.
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-slate-muted max-w-2xl mx-auto">
                ApplyNora replaces manual tracking and generic tailoring with a
                sophisticated, AI-driven workflow engine designed specifically
                for high-leverage roles.
              </p>
            </div>
          </section>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
              <div className="bg-surface-card rounded-2xl p-space-lg border border-border-lavender shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(30,41,59,0.08),0_4px_12px_-2px_rgba(142,30,162,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-surface-blush-subtle flex items-center justify-center text-primary mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">radar</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  AI Job Radar
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted">
                  Continuously scans premium job boards and hidden networks to
                  discover opportunities precisely matching your executive
                  profile and compensation targets.
                </p>
              </div>

              <div className="bg-surface-card rounded-2xl p-space-lg border border-border-lavender shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(30,41,59,0.08),0_4px_12px_-2px_rgba(142,30,162,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-surface-blush-subtle flex items-center justify-center text-primary mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">
                    auto_fix_high
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  Fact-Locked CV Tailoring
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted">
                  Dynamically rewrites your master resume to highlight relevant
                  achievements for specific JDs, strictly constrained by your
                  verified fact database. Zero hallucinations.
                </p>
              </div>

              <div className="bg-surface-card rounded-2xl p-space-lg border border-border-lavender shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(30,41,59,0.08),0_4px_12px_-2px_rgba(142,30,162,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-surface-blush-subtle flex items-center justify-center text-primary mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">
                    edit_document
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  Executive Briefing
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted">
                  Generates highly personalized, authoritative cover letters and
                  recruiter outbounds that align your narrative with the
                  company's stated strategic goals.
                </p>
              </div>

              <div className="bg-surface-card rounded-2xl p-space-lg border border-border-lavender shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(30,41,59,0.08),0_4px_12px_-2px_rgba(142,30,162,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-surface-blush-subtle flex items-center justify-center text-primary mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">view_kanban</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  Unified Tracking Vault
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted">
                  A secure, encrypted vault to monitor stages, communications,
                  and upcoming interviews across all your active submissions,
                  replacing fragile spreadsheets.
                </p>
              </div>

              <div className="bg-surface-card rounded-2xl p-space-lg border border-border-lavender shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(30,41,59,0.08),0_4px_12px_-2px_rgba(142,30,162,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-surface-blush-subtle flex items-center justify-center text-primary mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">automation</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  Gated Automation
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted">
                  Execute repetitive application steps with one click, while
                  retaining full human oversight and explicit approval before
                  any data is ever transmitted.
                </p>
              </div>

              <div className="bg-surface-card rounded-2xl p-space-lg border border-border-lavender shadow-sm hover:shadow-[0_8px_24px_-4px_rgba(30,41,59,0.08),0_4px_12px_-2px_rgba(142,30,162,0.08)] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-surface-blush-subtle flex items-center justify-center text-primary mb-space-md group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">sync</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-sm">
                  Ecosystem Integrations
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted">
                  Seamlessly sync recruiter communications via Gmail, export
                  analytics to Google Sheets, and receive real-time interview
                  updates via Telegram.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full bg-surface-card border-y border-border-lavender py-space-xl overflow-hidden relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tl from-primary-fixed/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop flex flex-col lg:flex-row items-center gap-space-xl relative z-10">
              <div className="lg:w-1/2 flex flex-col gap-space-md">
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Enterprise-Grade Infrastructure
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  ApplyNora is built on a distributed microservices architecture
                  ensuring high availability and strict tenant isolation. We do
                  not use shared LLM contexts.
                </p>
                <div className="flex flex-col gap-space-sm mt-space-sm">
                  <div className="flex items-center gap-space-sm p-space-sm bg-surface-ground rounded-lg border border-border-lavender">
                    <span className="material-symbols-outlined text-primary">
                      dns
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        Isolated PostgreSQL Vaults
                      </span>
                      <span className="font-body-sm text-body-sm text-slate-muted">
                        Row-Level Security (RLS) enabled
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm p-space-sm bg-surface-ground rounded-lg border border-border-lavender">
                    <span className="material-symbols-outlined text-primary">
                      speed
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        Redis Caching Layer
                      </span>
                      <span className="font-body-sm text-body-sm text-slate-muted">
                        Sub-50ms query responses
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-sm p-space-sm bg-surface-ground rounded-lg border border-border-lavender">
                    <span className="material-symbols-outlined text-primary">
                      memory
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        Dedicated Inference Nodes
                      </span>
                      <span className="font-body-sm text-body-sm text-slate-muted">
                        Zero cross-contamination
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="rounded-2xl bg-surface-ground border border-border-lavender shadow-xl overflow-hidden p-space-md flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-xs border-b border-border-lavender/50">
                    <span className="font-label-sm text-label-sm text-slate-muted uppercase tracking-widest">
                      System Architecture Matrix
                    </span>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-border-lavender"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-border-lavender"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-border-lavender"></span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-space-sm">
                    <div className="p-space-sm rounded-lg bg-surface-container flex flex-col items-center">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        OpenAI GPT-4o
                      </span>
                      <span className="font-caption text-caption text-success font-semibold">
                        Active Engine
                      </span>
                      <span className="font-caption text-caption text-slate-muted">
                        Zero data retention policy
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container flex flex-col items-center">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        Claude 3.5 Sonnet
                      </span>
                      <span className="font-caption text-caption text-success font-semibold">
                        Active Router
                      </span>
                      <span className="font-caption text-caption text-slate-muted">
                        Used for complex logic
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container flex flex-col items-center">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        NVIDIA NIM NIM-70B
                      </span>
                      <span className="font-caption text-caption text-success font-semibold">
                        Standby (Warm)
                      </span>
                      <span className="font-caption text-caption text-slate-muted">
                        Fallback threshold {"< 200ms"}
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container flex flex-col items-center">
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        Strict ATS Exporter
                      </span>
                      <span className="font-caption text-caption text-primary font-semibold">
                        Local CPU Worker
                      </span>
                      <span className="font-caption text-caption text-slate-muted">
                        Zero Cloud AI exposure
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-space-md rounded-xl bg-inverse-surface text-inverse-on-surface font-mono text-[11px] leading-relaxed overflow-x-auto mt-space-md">
                  <div className="text-secondary-fixed mb-1">
                    // Candidate-attested schema enforcement payload
                  </div>
                  <div>{"{"}</div>
                  <div className="pl-4">
                    <span className="text-primary-fixed-dim">
                      "candidate_id"
                    </span>
                    : <span className="text-success">"usr_9042a"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-primary-fixed-dim">
                      "verified_claims"
                    </span>
                    : [
                    <span className="text-surface-blush">
                      "Led 14-engineer team"
                    </span>
                    ,{" "}
                    <span className="text-surface-blush">
                      "Reduced latency 43%"
                    </span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-primary-fixed-dim">
                      "synthetic_facts_permitted"
                    </span>
                    : <span className="text-error font-bold">false</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-primary-fixed-dim">
                      "format_target"
                    </span>
                    :{" "}
                    <span className="text-surface-blush">
                      "Deterministic ATS Plain-Text / Strict DOCX"
                    </span>
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-surface-ground py-space-xl overflow-hidden relative">
            <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-gradient-to-tr from-surface-blush/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop flex flex-col lg:flex-row items-center gap-space-xl">
              <div className="lg:w-1/2 w-full order-2 lg:order-1">
                <div className="bg-surface-card rounded-2xl border border-border-lavender shadow-xl p-space-md flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        model_training
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface">
                          Pipeline Simulator
                        </span>
                        <span className="font-caption text-caption text-slate-muted">
                          Dry-Run Test Environment
                        </span>
                      </div>
                    </div>
                    <div
                      className={`px-space-sm py-space-xs rounded-lg font-caption text-caption font-bold flex items-center gap-space-xs ${current.badgeClass}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current"></span>{" "}
                      {current.badgeText}
                    </div>
                  </div>

                  <div className="bg-surface-ground border border-border-lavender rounded-lg p-space-sm font-mono text-[12px] leading-loose text-on-surface-variant max-h-48 overflow-y-auto">
                    <div className="flex gap-2">
                      <span className="text-slate-muted">08:42:01</span>
                      <span className="text-success">[GATEWAY]</span>
                      <span>
                        Connection established to target ATS (Workday).
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-muted">08:42:02</span>
                      <span className="text-primary">[MAPPER]</span>
                      <span>
                        Schema translation successful (Fields matched: 42/42).
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-muted">08:42:03</span>
                      <span className="text-warning">[POLICY]</span>
                      <span>
                        Awaiting explicit candidate token authorization.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-border-lavender pt-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface">
                        Monthly Context Quota
                      </span>
                      <span
                        className="font-caption text-caption text-slate-muted"
                        id="quota-display"
                      >
                        {newTokens.toLocaleString()} / 100,000
                      </span>
                    </div>
                    <div className="w-32 h-2 rounded-full bg-surface-container overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${(newTokens / 100000) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSimulationStep((s) => s + 1)}
                    className="px-space-md py-space-sm rounded-lg bg-surface-ground border border-border-lavender text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle font-label-md text-label-md flex items-center justify-center gap-space-sm transition-colors w-full"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      sync
                    </span>{" "}
                    {current.text}
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 flex flex-col gap-space-md order-1 lg:order-2">
                <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">
                  Test drive the automation before you commit.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  We know trust is earned. Use our dry-run simulator to see
                  exactly how ApplyNora translates your career data into target
                  ATS schemas before you ever connect your real accounts or
                  authorize a live submission.
                </p>
                <ul className="flex flex-col gap-space-sm mt-space-sm">
                  <li className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      verified
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Validate schema matching accuracy.
                    </span>
                  </li>
                  <li className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      verified
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Review the exact payload sent to the employer.
                    </span>
                  </li>
                  <li className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary mt-0.5">
                      verified
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      Test the human-in-the-loop kill switch.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
            <div className="max-w-4xl mx-auto rounded-3xl bg-surface-card border border-border-lavender p-space-xl text-center shadow-lg flex flex-col items-center gap-space-md">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center text-on-primary mb-space-xs shadow-md">
                <span className="material-symbols-outlined text-[32px]">
                  rocket_launch
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Ready to upgrade your workflow?
              </h2>
              <p className="font-body-lg text-body-lg text-slate-muted max-w-xl">
                Join the executives who have reclaimed their time and increased
                their interview rates using ApplyNora's precision AI engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-space-md mt-space-sm w-full sm:w-auto">
                <Link
                  className="w-full sm:w-auto font-label-md text-label-md text-on-primary bg-primary hover:bg-primary-container active:scale-95 px-space-xl py-space-md rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  to="/pricing"
                >
                  View Pricing
                </Link>
                <Link
                  className="w-full sm:w-auto font-label-md text-label-md text-on-surface border border-border-lavender bg-surface hover:bg-surface-blush-subtle active:scale-95 px-space-xl py-space-md rounded-xl transition-all flex items-center justify-center"
                  to="/contact"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
