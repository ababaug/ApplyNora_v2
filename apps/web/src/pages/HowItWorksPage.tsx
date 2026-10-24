import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>How It Works - ApplyNora</title>
        <meta name="description" content="HowItWorksPage for ApplyNora" />
      </Helmet>
      <div className="flex flex-col w-full">
        <div className="relative w-full overflow-hidden bg-surface-ground">
          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-lg">
            <div className="max-w-3xl mx-auto text-center space-y-space-md">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
                The ApplyNora Methodology.
              </h1>
              <p className="font-body-lg text-body-lg text-slate-muted">
                A structured, seven-step process designed to maximize your
                leverage in the executive job market.
              </p>
            </div>
          </section>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl border-y border-border-lavender bg-surface-card">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-space-lg">
              <div className="flex flex-wrap justify-center gap-space-sm w-full">
                <button
                  className={`step-nav-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all flex items-center gap-1 ${activeStep === 1 ? 'bg-surface-ground text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}`}
                  onClick={() => setActiveStep(1)}
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold">
                    1
                  </span>
                  Phase One: Profile
                </button>
                <button
                  className={`step-nav-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all flex items-center gap-1 ${activeStep === 2 ? 'bg-surface-ground text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}`}
                  onClick={() => setActiveStep(2)}
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold">
                    2
                  </span>
                  Phase Two: Radar
                </button>
                <button
                  className={`step-nav-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all flex items-center gap-1 ${activeStep === 3 ? 'bg-surface-ground text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}`}
                  onClick={() => setActiveStep(3)}
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold">
                    3
                  </span>
                  Phase Three: Execution
                </button>
                <button
                  className={`step-nav-btn px-space-md py-space-xs rounded-lg font-label-md text-label-md transition-all flex items-center gap-1 ${activeStep === 4 ? 'bg-surface-ground text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}`}
                  onClick={() => setActiveStep(4)}
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold">
                    4
                  </span>
                  Phase Four: Tracking
                </button>
              </div>

              <div className="w-full mt-space-md relative min-h-[400px]">
                <div
                  className={`step-panel flex-col md:flex-row gap-space-xl items-center animate-fade-in ${activeStep === 1 ? 'flex' : 'hidden'}`}
                >
                  <div className="md:w-1/2 flex flex-col gap-space-md">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                      Phase One
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Structured Data Ingestion
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      We don't rely on generic LLM summaries. You upload your
                      master CV, and ApplyNora parses it into a strictly typed
                      relational database. This becomes your immutable "Fact
                      Vault."
                    </p>
                    <ul className="flex flex-col gap-space-sm mt-space-sm">
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-[20px] text-primary mt-0.5">
                          dataset
                        </span>
                        <span className="font-body-md text-body-md text-on-surface">
                          Every metric, title, and date is isolated and
                          verified.
                        </span>
                      </li>
                      <li className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-[20px] text-primary mt-0.5">
                          policy
                        </span>
                        <span className="font-body-md text-body-md text-on-surface">
                          The engine is locked from inventing experiences
                          outside this vault.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 w-full">
                    <div className="bg-surface-ground border border-border-lavender rounded-2xl p-space-md shadow-inner flex flex-col gap-space-sm">
                      <div className="flex items-center gap-space-sm border-b border-border-lavender pb-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface-card border border-border-lavender flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined">
                            upload_file
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface">
                            Master_Resume_2024.pdf
                          </span>
                          <span className="font-caption text-caption text-slate-muted">
                            Parsed successfully
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between font-caption text-caption text-on-surface-variant mb-1">
                          <span>Direct P&amp;L Responsibility &gt;$30M</span>
                          <span className="font-bold text-primary">
                            Fully Attested
                          </span>
                        </div>
                        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[95%]"></div>
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between font-caption text-caption text-on-surface-variant mb-1">
                          <span>Grew ARR by 140% YoY</span>
                          <span className="font-bold text-primary">
                            Fully Attested
                          </span>
                        </div>
                        <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-full w-[100%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`step-panel flex-col md:flex-row gap-space-xl items-center animate-fade-in ${activeStep === 2 ? 'flex' : 'hidden'}`}
                >
                  <div className="md:w-1/2 flex flex-col gap-space-md">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                      Phase Two
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Precision Radar
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      Configure strict parameters: compensation floors, remote
                      requirements, and specific titles. ApplyNora constantly
                      monitors private and public channels, surfacing only
                      high-probability matches.
                    </p>
                  </div>
                  <div className="md:w-1/2 w-full">
                    <div className="bg-surface-ground border border-border-lavender rounded-2xl p-space-md shadow-inner flex flex-col gap-space-sm">
                      <div className="bg-surface-card p-space-md rounded-xl border-l-4 border-l-primary shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-label-md text-label-md text-on-surface">
                            Head of Machine Learning
                          </span>
                          <span className="font-caption text-caption text-success bg-success/10 px-2 py-1 rounded-full">
                            94% Match
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-slate-muted">
                          Anthropic • San Francisco (Hybrid) • $350k - $450k
                        </p>
                      </div>
                      <div className="bg-surface-card p-space-md rounded-xl border-l-4 border-l-surface-variant shadow-sm opacity-60">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-label-md text-label-md text-on-surface">
                            Director of Engineering
                          </span>
                          <span className="font-caption text-caption text-slate-muted bg-surface-container px-2 py-1 rounded-full">
                            Filtered
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-slate-muted">
                          Below compensation floor requirement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`step-panel flex-col md:flex-row gap-space-xl items-center animate-fade-in ${activeStep === 3 ? 'flex' : 'hidden'}`}
                >
                  <div className="md:w-1/2 flex flex-col gap-space-md">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                      Phase Three
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Contextual Tailoring
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      When you select a role, ApplyNora generates a custom CV
                      variant and executive briefing. It re-ranks your factual
                      achievements to perfectly align with the specific Job
                      Description.
                    </p>
                  </div>
                  <div className="md:w-1/2 w-full">
                    <div className="bg-surface-ground border border-border-lavender rounded-2xl p-space-md shadow-inner flex flex-col gap-space-sm relative">
                      <div className="p-space-sm bg-surface-card rounded-lg border border-primary relative z-10 shadow-lg">
                        <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                          <span className="bg-surface-blush-subtle text-primary font-medium px-1 rounded">
                            Architected distributed Kubernetes clusters
                          </span>{' '}
                          handling 10M+ daily requests, directly aligning with
                          the{' '}
                          <span className="bg-surface-variant text-on-surface px-1 rounded">
                            "scale infrastructure"
                          </span>{' '}
                          requirement in the JD.
                        </p>
                      </div>
                      <div className="mt-space-md bg-surface-card p-space-sm rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-space-xs">
                          <input
                            defaultChecked={true}
                            className="accent-primary w-4 h-4 rounded"
                            id="human-confirm"
                            type="checkbox"
                          />
                          <label
                            className="font-body-sm text-body-sm text-on-surface font-medium"
                            htmlFor="human-confirm"
                          >
                            I have reviewed and attest to document veracity
                          </label>
                        </div>
                        <button className="px-space-md py-1.5 rounded-lg bg-gradient-to-r from-primary-container to-secondary text-on-primary font-label-md text-label-md shadow-sm">
                          Approve Draft
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`step-panel flex-col md:flex-row gap-space-xl items-center animate-fade-in ${activeStep === 4 ? 'flex' : 'hidden'}`}
                >
                  <div className="md:w-1/2 flex flex-col gap-space-md">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                      Phase Four
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      Lifecycle Tracking
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      We securely sync with your inbox to detect recruiter
                      responses and interview schedules, updating your unified
                      Kanban board automatically.
                    </p>
                  </div>
                  <div className="md:w-1/2 w-full">
                    <div className="bg-surface-ground border border-border-lavender rounded-2xl p-space-md shadow-inner grid grid-cols-2 gap-space-sm">
                      <div className="bg-surface-card rounded-lg p-space-sm border border-border-lavender flex flex-col gap-2">
                        <span className="font-label-sm text-label-sm text-on-surface border-b border-border-lavender pb-1">
                          Applied
                        </span>
                        <div className="p-2 bg-surface-ground rounded border border-border-lavender/50 text-[10px] text-slate-muted">
                          Stripe - Product Lead
                        </div>
                      </div>
                      <div className="bg-surface-card rounded-lg p-space-sm border border-border-lavender flex flex-col gap-2">
                        <span className="font-label-sm text-label-sm text-primary border-b border-primary/20 pb-1">
                          Interviewing
                        </span>
                        <div className="p-2 bg-surface-blush-subtle rounded border border-primary/20 text-[10px] text-primary font-medium shadow-sm">
                          Anthropic - VP Eng
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl bg-surface-ground">
            <div className="max-w-3xl mx-auto flex flex-col gap-space-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface text-center mb-space-md">
                Methodology FAQ
              </h2>
              <div className="flex flex-col gap-space-sm" id="faq-accordion">
                <button
                  className="w-full p-space-md flex items-center justify-between text-left focus:outline-none bg-surface-card rounded-xl border border-border-lavender shadow-sm"
                  onClick={() => toggleFaq(1)}
                >
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    Why do you require me to upload a master CV first?
                  </h4>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${activeFaq === 1 ? 'rotate-180' : ''}`}
                  >
                    expand_more
                  </span>
                </button>
                {activeFaq === 1 && (
                  <div className="px-space-md pb-space-md pt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed bg-surface-card rounded-b-xl border border-t-0 border-border-lavender -mt-2">
                    We use your master CV to establish an immutable "Fact
                    Vault." By forcing our AI models to draw exclusively from
                    this verified database, we mathematically eliminate the
                    possibility of the AI inventing skills or experiences you
                    don't possess (hallucinations).
                  </div>
                )}

                <button
                  className="w-full p-space-md flex items-center justify-between text-left focus:outline-none bg-surface-card rounded-xl border border-border-lavender shadow-sm mt-2"
                  onClick={() => toggleFaq(2)}
                >
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    Do you submit applications automatically while I sleep?
                  </h4>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${activeFaq === 2 ? 'rotate-180' : ''}`}
                  >
                    expand_more
                  </span>
                </button>
                {activeFaq === 2 && (
                  <div className="px-space-md pb-space-md pt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed bg-surface-card rounded-b-xl border border-t-0 border-border-lavender -mt-2">
                    No. ApplyNora operates on a strict Human-in-the-Loop
                    architecture. We will prepare the tailored document, fill
                    out the complex forms via our integrations, and then halt. A
                    human (you) must click "Approve and Submit" before any data
                    leaves our servers.
                  </div>
                )}

                <button
                  className="w-full p-space-md flex items-center justify-between text-left focus:outline-none bg-surface-card rounded-xl border border-border-lavender shadow-sm mt-2"
                  onClick={() => toggleFaq(3)}
                >
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    How does the Gmail integration work for tracking?
                  </h4>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 ${activeFaq === 3 ? 'rotate-180' : ''}`}
                  >
                    expand_more
                  </span>
                </button>
                {activeFaq === 3 && (
                  <div className="px-space-md pb-space-md pt-space-xs font-body-sm text-body-sm text-on-surface-variant leading-relaxed bg-surface-card rounded-b-xl border border-t-0 border-border-lavender -mt-2">
                    We use highly restricted OAuth scopes. Our system only scans
                    for sender domains matching your active applications (e.g.,
                    @stripe.com, @greenhouse.io). When an interview request
                    arrives, we sync that status to your dashboard. We do not
                    read your personal emails.
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-md">
              Experience the process firsthand.
            </h2>
            <Link
              className="inline-flex items-center gap-2 font-label-md text-label-md text-on-primary bg-primary hover:bg-primary-container active:scale-95 px-space-xl py-space-md rounded-xl transition-all shadow-md"
              to="/register"
            >
              Start Your Executive Setup
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
