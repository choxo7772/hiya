import { useState, useEffect } from 'react';
import { useRouter, Link } from './Router';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

export function Logo({ className = '', showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic Geometric Technology Logo: Stylized H with digital network nodes */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Glow behind logo */}
        <div className="absolute inset-0 bg-brand-primary/20 blur-md rounded-full" />
        
        <svg
          viewBox="0 0 100 100"
          className="w-9 h-9 relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main geometric 'H' structure */}
          <path
            d="M25 20V80M75 20V80M25 50H75"
            stroke="url(#logo-grad-primary)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Overlay circuit path */}
          <path
            d="M15 35H35V65H15M85 35H65V65H85"
            stroke="#a855f7"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />
          {/* Digital Nodes */}
          <circle cx="25" cy="20" r="7" fill="#00f0ff" className="animate-pulse" />
          <circle cx="75" cy="80" r="7" fill="#00f0ff" className="animate-pulse" />
          <circle cx="50" cy="50" r="5" fill="#a855f7" />
          <circle cx="25" cy="50" r="5" fill="#a855f7" />
          <circle cx="75" cy="50" r="5" fill="#a855f7" />
          
          <defs>
            <linearGradient id="logo-grad-primary" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold tracking-wider text-white text-base leading-none">
            HIYA
          </span>
          <span className="font-mono text-[10px] tracking-widest text-brand-primary font-medium mt-0.5 uppercase">
            IT Solutions
          </span>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { currentPath } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for compact header behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Process', path: '/process' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md py-3 border-b border-brand-border/60 shadow-lg shadow-brand-dark/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" title="HIYA IT Solutions - Home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-sans text-sm font-medium tracking-wide transition-all duration-200 rounded-md ${
                  isActive ? 'text-brand-primary' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="header-active-dot"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Menu Trigger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden lg:flex items-center justify-center px-4 py-2 text-xs font-mono font-medium tracking-widest text-brand-primary border border-brand-primary/40 rounded bg-brand-primary/5 hover:bg-brand-primary hover:text-brand-dark hover:glow-cyan transition-all duration-300 uppercase"
          >
            Schedule Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <LucideIcon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleLinkClick}
              className="fixed inset-0 top-[65px] bg-brand-dark/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-[65px] h-[calc(100vh-65px)] w-full max-w-sm bg-brand-card/95 border-l border-brand-border/60 z-40 md:hidden overflow-y-auto px-6 py-8 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5">
                <span className="font-mono text-xs font-semibold tracking-widest text-gray-500 uppercase">
                  Navigation
                </span>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg font-sans text-base font-medium transition-all ${
                          isActive
                            ? 'text-brand-primary bg-brand-primary/5 border border-brand-primary/20'
                            : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        {link.label}
                        <LucideIcon
                          name="ArrowRight"
                          size={16}
                          className={`opacity-40 transition-transform ${isActive ? 'translate-x-0 opacity-100 text-brand-primary' : ''}`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <div className="h-px bg-brand-border/40" />
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center w-full py-4 text-sm font-mono font-medium tracking-widest text-brand-dark bg-brand-primary rounded shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 hover:glow-cyan transition-all duration-300 uppercase"
                >
                  Schedule Consultation
                </Link>
                <div className="flex items-center gap-3 justify-center text-xs text-gray-500 font-mono mt-2">
                  <LucideIcon name="Phone" size={12} className="text-brand-secondary" />
                  <span>(850) 601-1657</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
