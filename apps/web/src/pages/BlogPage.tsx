import { useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "ai-gateway", label: "AI in Recruiting" },
    { id: "privacy", label: "Privacy" },
    { id: "strategy", label: "Executive Strategy" },
    { id: "releases", label: "Releases" }
  ];

  return (
    <>
      <Helmet>
        <title>BlogPage - ApplyNora</title>
        <meta name="description" content="BlogPage for ApplyNora" />
      </Helmet>
      <div className="flex flex-col w-full min-h-[80vh]">
        <div className="relative w-full overflow-hidden bg-surface-ground">
          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pt-space-xl pb-space-lg text-center">
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-md">
              Insights &amp; Research
            </h1>
            <p className="font-body-lg text-body-lg text-slate-muted max-w-2xl mx-auto">
              Analysis, methodologies, and technical perspectives on the modern
              executive job market.
            </p>
          </section>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop pb-space-lg">
            <div className="max-w-4xl mx-auto flex flex-wrap gap-space-sm justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md shadow-sm transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-primary-container to-secondary text-on-primary"
                      : "bg-surface-card text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </section>

          <section className="w-full px-margin-mobile md:px-margin lg:px-margin-desktop py-space-xl">
            <div className="max-w-4xl mx-auto text-center py-space-xl border-t border-border-lavender">
              <span className="material-symbols-outlined text-[48px] text-outline mb-space-sm">
                article
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                No publications yet
              </h3>
              <p className="font-body-md text-body-md text-slate-muted">
                Our research team is currently preparing our first series of
                insights.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export function BlogArticlePage() {
  return (
    <>
      <Helmet>
        <title>Article Not Found - ApplyNora</title>
        <meta name="description" content="Article not found" />
      </Helmet>
      <div className="flex flex-col w-full min-h-[80vh] items-center justify-center bg-surface-ground">
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
          Article Not Found
        </h1>
        <p className="font-body-md text-body-md text-slate-muted mb-space-lg">
          The requested publication could not be located.
        </p>
        <Link
          to="/blog"
          className="font-label-md text-label-md text-primary hover:underline"
        >
          Return to Research
        </Link>
      </div>
    </>
  );
}
