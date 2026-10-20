import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-margin-mobile md:px-margin lg:px-margin-desktop flex items-center justify-between">
        <Link className="flex items-center gap-space-sm text-decoration-none group" to="/">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-[22px]">auto_awesome</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">ApplyNora</span>
            <span className="font-caption text-caption text-outline uppercase tracking-wider">Executive Career AI</span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              className={`px-space-sm py-space-xs transition-colors rounded-lg font-label-md text-label-md ${location.pathname === link.path ? 'text-primary font-bold bg-surface-blush-subtle' : 'text-on-surface-variant hover:text-on-surface'}`}
              to={link.path}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-space-md">
          <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary px-space-sm py-space-xs transition-colors" to="/login">Sign In</Link>
          <Link className="font-label-md text-label-md text-on-primary bg-gradient-to-r from-primary-container to-secondary hover:brightness-105 active:scale-95 px-space-lg py-space-sm rounded-lg shadow-[0_2px_8px_-2px_rgba(30,41,59,0.04),0_4px_16px_-4px_rgba(142,30,162,0.12)] transition-all flex items-center gap-space-xs" to="/register">
            <span className="material-symbols-outlined text-[18px]">verified</span>Get Started Free
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>

        <button className="xl:hidden flex items-center text-on-surface p-2 focus:outline-none" onClick={toggleMenu} aria-label="Toggle mobile menu">
           <span className="material-symbols-outlined text-[28px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 right-0 bg-surface border-b border-border-lavender shadow-lg flex flex-col p-space-md animate-fade-in z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
           {navLinks.map((link) => (
            <Link
              key={link.path}
              className={`px-space-md py-space-sm transition-colors rounded-lg font-headline-sm text-headline-sm ${location.pathname === link.path ? 'text-primary font-bold bg-surface-blush-subtle' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-ground'}`}
              to={link.path}
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-full h-px bg-border-lavender my-space-sm"></div>
          <Link className="px-space-md py-space-sm font-headline-sm text-headline-sm text-on-surface-variant hover:text-primary transition-colors" to="/login" onClick={toggleMenu}>Sign In</Link>
          <Link className="mt-space-sm font-headline-sm text-headline-sm text-center text-on-primary bg-gradient-to-r from-primary-container to-secondary hover:brightness-105 active:scale-95 px-space-lg py-space-md rounded-xl shadow-md transition-all flex items-center justify-center gap-space-xs" to="/register" onClick={toggleMenu}>
            <span className="material-symbols-outlined text-[20px]">verified</span>Get Started Free
          </Link>
        </div>
      )}
    </header>
  );
}
