import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export function ContactPage() {
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('error');
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>ContactPage - ApplyNora</title>
        <meta name="description" content="ContactPage for ApplyNora" />
      </Helmet>
      <div className="flex flex-col w-full min-h-[80vh]">
        <div className="relative w-full overflow-hidden bg-surface-ground">
          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-space-xl">
                <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
                  Executive Concierge
                </h1>
                <p className="font-body-md text-body-md text-slate-muted">
                  Reach out for enterprise inquiries or executive support.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="bg-surface-card rounded-2xl p-space-xl border border-border-lavender shadow-sm space-y-space-md"
              >
                <div>
                  <label
                    className="block font-label-sm text-label-sm text-on-surface mb-space-xs"
                    htmlFor="name"
                  >
                    Full Name *
                  </label>
                  <input
                    className="w-full px-space-sm py-2 rounded-lg border border-border-lavender bg-surface outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                    id="name"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label
                    className="block font-label-sm text-label-sm text-on-surface mb-space-xs"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    className="w-full px-space-sm py-2 rounded-lg border border-border-lavender bg-surface outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                    id="email"
                    required
                    type="email"
                  />
                </div>

                <div>
                  <label
                    className="block font-label-sm text-label-sm text-on-surface mb-space-xs"
                    htmlFor="subject"
                  >
                    Subject *
                  </label>
                  <input
                    className="w-full px-space-sm py-2 rounded-lg border border-border-lavender bg-surface outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md"
                    id="subject"
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label
                    className="block font-label-sm text-label-sm text-on-surface mb-space-xs"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <textarea
                    className="w-full px-space-sm py-2 rounded-lg border border-border-lavender bg-surface outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body-md resize-none"
                    id="message"
                    maxLength={1000}
                    required
                    rows={4}
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="p-space-sm bg-error-container text-on-error-container rounded-lg font-body-sm text-body-sm">
                    Service temporarily unavailable. Please try again later.
                  </div>
                )}

                <button
                  disabled={status === 'submitting'}
                  className="w-full font-label-md text-label-md text-on-primary bg-primary hover:bg-primary-container active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed px-space-xl py-space-md rounded-xl transition-all"
                  type="submit"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
