import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="w-full px-margin-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-xl">
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[20px]">
                  auto_awesome
                </span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
                ApplyNora
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Intelligent, authoritative career acceleration for high-caliber
              professionals and executives navigating modern transitions with AI
              precision and human discretion.
            </p>
            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-success font-caption text-caption">
                <span className="w-2 h-2 rounded-full bg-success"></span>NDPA /
                GDPR Compliant
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-blush-subtle text-primary font-caption text-caption">
                <span className="material-symbols-outlined text-[14px]">
                  verified_user
                </span>
                Human-in-the-Loop
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container text-slate-muted font-caption text-caption">
                <span className="material-symbols-outlined text-[14px]">
                  shield
                </span>
                Zero Spam Guarantee
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
              Platform
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="features"
                to="/"
              >
                Smart ATS Optimization
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="features"
                to="/"
              >
                Executive Brief Generator
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="features"
                to="/"
              >
                Opportunity Radar
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="features"
                to="/"
              >
                Confidential Application Vault
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="pricing"
                to="/"
              >
                Executive Tier Plans
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
              Company
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="about"
                to="/"
              >
                About Us
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="blog"
                to="/"
              >
                Insights & Research
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="how-it-works"
                to="/"
              >
                Methodology
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="contact"
                to="/"
              >
                Executive Concierge
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="contact"
                to="/"
              >
                Support Desk
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">
              Governance
            </span>
            <div className="flex flex-col gap-space-xs">
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="privacy-policy"
                to="/"
              >
                Privacy Policy
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="terms-of-service"
                to="/"
              >
                Terms of Service
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="security"
                to="/"
              >
                Security Protocols
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="compliance"
                to="/"
              >
                NDPA / GDPR Policy
              </Link>
              <Link
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                data-path="trust-center"
                to="/"
              >
                Zero-Spam Pledge
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <Link
              aria-label="Global Network"
              className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle transition-all"
              to="/"
            >
              <span className="material-symbols-outlined text-[20px]">
                globe
              </span>
            </Link>
            <Link
              aria-label="Terminal Insights"
              className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle transition-all"
              to="/"
            >
              <span className="material-symbols-outlined text-[20px]">
                terminal
              </span>
            </Link>
            <Link
              aria-label="Discussions"
              className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle transition-all"
              to="/"
            >
              <span className="material-symbols-outlined text-[20px]">
                forum
              </span>
            </Link>
            <Link
              aria-label="Corporate RSS"
              className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-blush-subtle transition-all"
              to="/"
            >
              <span className="material-symbols-outlined text-[20px]">
                rss_feed
              </span>
            </Link>
          </div>
          <p className="font-body-sm text-body-sm text-outline">
            © 2025 ApplyNora Inc. All rights reserved. Precision career
            engineering.
          </p>
        </div>
      </div>
    </footer>
  );
}
