import { useRouter, Link } from './Router';
import { Logo } from './Header';
import LucideIcon from './LucideIcon';

export default function Footer() {
  const { currentPath } = useRouter();

  const servicesLinks = [
    { label: 'Managed IT Support', path: '/services/managed-it' },
    { label: 'IT Consulting', path: '/services/it-consulting' },
    { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { label: 'Cybersecurity Solutions', path: '/services/cybersecurity' },
    { label: 'Network & Infrastructure', path: '/services/network-infrastructure' },
    { label: 'Custom Software', path: '/services/custom-software' },
    { label: 'Website & Digital Solutions', path: '/services/website-digital' },
    { label: 'Backup & Recovery Planning', path: '/services/backup-recovery' },
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services Directory', path: '/services' },
    { label: 'Industries Served', path: '/industries' },
    { label: 'Our Process', path: '/process' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms & Conditions', path: '/terms' },
    { label: 'Accessibility', path: '/accessibility' },
    { label: 'Security & Disclosure', path: '/security-disclosure' },
    { label: 'Cookie Policy', path: '/cookie-policy' },
  ];

  return (
    <footer id="main-footer" className="relative bg-[#02000f] border-t border-brand-border/60 overflow-hidden z-10">
      {/* Visual neon light leak */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-32 bg-brand-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-32 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Logo and Contact Info column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link to="/" title="HIYA IT Solutions - Home">
              <Logo />
            </Link>
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              HIYA IT SOLUTIONS LLC helps small and growing businesses build technology environments that are dependable, secure, and ready to grow through responsive IT support, consulting, and cloud solutions.
            </p>
            
            <div className="flex flex-col gap-3 font-sans text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <LucideIcon name="MapPin" size={16} className="text-brand-primary mt-0.5 shrink-0" />
                <span>
                  12902 National Dr, Apt C<br />
                  Tampa, FL 33617
                </span>
              </div>
              <a
                href="mailto:nuzhat@hiyait.com"
                className="flex items-center gap-3 hover:text-brand-primary transition-colors group"
                title="Email HIYA IT Solutions"
              >
                <LucideIcon name="Mail" size={16} className="text-brand-primary group-hover:scale-110 transition-transform" />
                <span>nuzhat@hiyait.com</span>
              </a>
              <a
                href="tel:8506011657"
                className="flex items-center gap-3 hover:text-brand-primary transition-colors group"
                title="Call HIYA IT Solutions"
              >
                <LucideIcon name="Phone" size={16} className="text-brand-primary group-hover:scale-110 transition-transform" />
                <span>(850) 601-1657</span>
              </a>

            </div>
          </div>

          {/* Quick links column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              Navigator
            </span>
            <ul className="flex flex-col gap-2 font-sans text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-1.5 transition-all text-brand-primary">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services list column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              IT Services
            </span>
            <ul className="flex flex-col gap-2 font-sans text-sm text-gray-400">
              {servicesLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-1.5 transition-all text-brand-primary">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal references column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-display font-semibold text-white tracking-wider text-sm uppercase">
              Compliance & Legal
            </span>
            <ul className="flex flex-col gap-2 font-sans text-sm text-gray-400">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-brand-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="opacity-0 w-0 group-hover:opacity-100 group-hover:w-1.5 transition-all text-brand-primary">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px bg-brand-border/40 my-12" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-mono tracking-wider text-center sm:text-left">
            © 2026 HIYA IT SOLUTIONS LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
