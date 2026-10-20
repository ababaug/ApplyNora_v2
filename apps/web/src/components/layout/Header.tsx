import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-margin-desktop flex items-center justify-between">
        <Link
          className="flex items-center gap-space-sm text-decoration-none group"
          data-path="home"
          to="/"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-[22px]">
              auto_awesome
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
              ApplyNora
            </span>
            <span className="font-caption text-caption text-outline uppercase tracking-wider">
              Executive Career AI
            </span>
          </div>
        </Link>
        <nav
          className="hidden xl:flex items-center gap-space-lg"
          data-active-classes="text-primary font-bold bg-surface-blush-subtle rounded-lg"
        >
          <Link
            aria-current="page"
            className="px-space-sm py-space-xs transition-colors text-primary font-bold bg-surface-blush-subtle rounded-lg"
            data-path="home"
            to="/"
          >
            Home
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors"
            data-path="features"
            to="/"
          >
            Features
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors"
            data-path="how-it-works"
            to="/"
          >
            How It Works
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors"
            data-path="pricing"
            to="/"
          >
            Pricing
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors"
            data-path="about"
            to="/"
          >
            About
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors"
            data-path="blog"
            to="/"
          >
            Blog
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface px-space-sm py-space-xs transition-colors"
            data-path="contact"
            to="/"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-space-md">
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-space-sm py-space-xs transition-colors"
            data-path="sign-in"
            to="/"
          >
            Sign In
          </Link>
          <Link
            className="font-label-md text-label-md text-on-primary bg-gradient-to-r from-primary-container to-secondary hover:brightness-105 active:scale-95 px-space-lg py-space-sm rounded-lg shadow-[0_2px_8px_-2px_rgba(30,41,59,0.04),0_4px_16px_-4px_rgba(142,30,162,0.12)] transition-all flex items-center gap-space-xs"
            data-path="pricing"
            to="/"
          >
            <span className="material-symbols-outlined text-[18px]">
              verified
            </span>
            Get Started Free
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
