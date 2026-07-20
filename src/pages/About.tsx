import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';

export default function About() {
  const values = [
    {
      title: 'Clarity Over Jargon',
      desc: 'We explain systems, licenses, and security protocols in plain, actionable language. We believe you should understand every IT decision made in your workspace.',
      icon: 'Eye'
    },
    {
      title: 'Objective Alignment',
      desc: 'We never suggest a piece of software, network card, or hardware upgrade unless it directly improves your security, speed, or team productivity.',
      icon: 'Compass'
    },
    {
      title: 'Durable Integrity',
      desc: 'We are in this for the long-term partnership. We configure administrative logins, domains, and setups so that you hold 100% ownership and control over your accounts.',
      icon: 'Lock'
    },
    {
      title: 'Responsive Accountability',
      desc: 'When critical tech challenges slow down your team, we address them with urgency, transparency, and logical troubleshooting.',
      icon: 'Headphones'
    }
  ];

  const benefits = [
    {
      title: 'Direct Strategic Evaluation',
      desc: 'We map your existing local drives, email consoles, and employee devices to isolate redundancies before writing an agreement.'
    },
    {
      title: 'Clean Account Governance',
      desc: 'We consolidate your SaaS profiles and Microsoft/Google consoles to secure employee entry points.'
    },
    {
      title: 'Proactive System Hygiene',
      desc: 'We perform quiet, consistent background updates, disk cleanups, security patches, and backup monitoring.'
    },
    {
      title: 'Direct Client Empowerment',
      desc: 'We document your physical network structure and system logins, providing you with a complete, confidential asset binder.'
    }
  ];

  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16">
        
        {/* Breadcrumb & Intro Heading */}
        <div className="text-left flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-primary">ABOUT US</span>
          </div>
          
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase mt-2">
            WHO WE ARE & WHAT WE REPRESENT
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Technology Solutions Built on <br />
            <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-clip-text text-transparent text-glow-cyan">
              Clarity and Reliability
            </span>
          </h1>
          <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mt-1">
            HIYA IT SOLUTIONS LLC was established in Tampa, Florida, to provide small businesses, growing practices, and local professional organizations with practical, dependable, and high-quality IT services. We believe that technology should be an asset that simplifies your operations, not a constant source of friction or confusing licensing fees.
          </p>
        </div>

        {/* Corporate Mission Block */}
        <div className="border border-brand-primary/30 bg-gradient-to-r from-brand-card to-brand-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 blur-xl rounded-full" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="w-16 h-16 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0">
              <LucideIcon name="Compass" size={32} />
            </div>
            <div className="flex flex-col gap-3 text-left">
              <span className="font-mono text-xs tracking-widest text-brand-primary font-bold uppercase">
                OUR CORPORATE MISSION
              </span>
              <blockquote className="font-display font-medium text-lg md:text-xl text-white leading-relaxed italic">
                "Our mission is to make business technology more dependable, understandable, and useful by delivering practical solutions that support secure operations, efficient workflows, and sustainable growth."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Company Core Values Grid */}
        <section className="flex flex-col gap-10">
          <div className="text-left flex flex-col gap-2 max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase">
              Operational Standards
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              What We Value & Practice
            </h2>
            <div className="h-0.5 w-16 bg-brand-secondary mt-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="border border-brand-border/60 bg-brand-card/30 p-6 rounded-xl flex items-start gap-4 hover:bg-brand-card/60 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-white/5 border border-white/5 flex items-center justify-center text-brand-secondary shrink-0 mt-0.5">
                  <LucideIcon name={val.icon} size={20} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-semibold text-base text-white">
                    {val.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-sans leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Businesses Work With Us / Our Approach */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="font-mono text-xs tracking-widest text-brand-primary font-bold uppercase">
              Client Focus
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Why Tampa Businesses Work With Us
            </h2>
            <div className="h-0.5 w-16 bg-brand-primary mt-1" />
            <p className="text-gray-300 font-sans text-sm leading-relaxed">
              We focus on building practical relationships with our clients rather than treating them like standardized ticket numbers. Our approach is characterized by absolute transparency, thorough documentation, and a strong awareness of standard cybersecurity risks.
            </p>
            <div className="p-4 border border-brand-border rounded bg-brand-card/50 text-xs text-gray-400 font-mono flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <LucideIcon name="Check" size={12} className="text-brand-primary" />
                <span>Established in Florida (2023)</span>
              </div>
              <div className="flex items-center gap-2">
                <LucideIcon name="Check" size={12} className="text-brand-primary" />
                <span>Responsive remote support focus</span>
              </div>
            </div>
          </div>

          {/* Grid panel (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="p-5 border border-brand-border/60 bg-brand-card/40 rounded-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-brand-primary/5 rounded-full blur-md" />
                <h3 className="font-display font-semibold text-sm sm:text-base text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* Call to action section */}
        <div className="border border-brand-border/60 bg-brand-card/40 p-8 md:p-12 rounded-xl text-center flex flex-col gap-5 items-center">
          <h3 className="font-display font-bold text-xl md:text-2xl text-white">
            Have Questions About Our IT Services?
          </h3>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
            We are here to help clarify your technology environment. Contact us today to schedule a professional, plain-English discussion of your IT support, cloud directory setup, or network needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-2">
            <Link
              to="/contact"
              className="px-6 py-3 bg-brand-primary text-brand-dark rounded font-mono text-xs tracking-widest font-bold uppercase hover:bg-brand-primary/95 hover:glow-cyan transition-all"
            >
              Contact Our Representative
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 border border-brand-border bg-transparent text-gray-300 hover:text-white rounded font-mono text-xs tracking-widest font-bold uppercase transition-all"
            >
              Review Services Briefs
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
