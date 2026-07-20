import { INDUSTRIES_DATA } from '../data';
import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';

export default function Industries() {
  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden">
      {/* Visual backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16">
        
        {/* Page Header */}
        <div className="text-left flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-primary">INDUSTRIES</span>
          </div>
          
          <span className="font-mono text-xs tracking-widest text-brand-primary font-bold uppercase mt-2">
            TAILORED DIGITAL ENVIRONMENTS
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Tailored IT Solutions for <br />
            <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-clip-text text-transparent text-glow-cyan">
              Your Specific Industry
            </span>
          </h1>
          <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mt-1">
            Every business environment has unique requirements for file collaboration, document safety, and computer setups. We customize local networks, administrative user access, and software integration to suit how your team actually operates.
          </p>
        </div>

        {/* Essential Compliance Disclaimer Card */}
        <div className="border border-brand-secondary/30 bg-brand-card/40 p-6 md:p-8 rounded-xl relative overflow-hidden flex flex-col gap-3">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-secondary" />
          <div className="flex items-center gap-2 text-brand-secondary font-mono text-xs tracking-wider uppercase font-bold">
            <LucideIcon name="AlertCircle" size={14} />
            <span>Essential Compliance Notice</span>
          </div>
          <p className="text-gray-300 text-xs sm:text-sm font-sans leading-relaxed">
            While we implement robust baselines for account safety, encryption, and off-site data backups, specific regulatory compliance mandates (such as HIPAA, FINRA, PCI-DSS, or other technical standards) vary. Our technology consultations provide practical operational risk reduction. If your business has strict legal compliance obligations, we strongly recommend coordinating with certified legal or professional compliance auditors to verify your custom guidelines.
          </p>
        </div>

        {/* Detailed Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <div
              key={idx}
              className="border border-brand-border/60 bg-brand-card/30 p-6 md:p-8 rounded-2xl flex flex-col gap-5 hover:bg-brand-card/60 hover:border-brand-primary/20 transition-all relative group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-brand-secondary/5 rounded-full blur-md" />
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center text-brand-secondary group-hover:text-brand-primary transition-colors">
                  <LucideIcon name={ind.iconName} size={20} />
                </div>
                <div>
                  <h2 className="font-display font-bold text-lg text-white group-hover:text-brand-primary transition-colors">
                    {ind.name}
                  </h2>
                  <span className="font-mono text-[9px] tracking-widest text-gray-500 uppercase">
                    ENVIRONMENT_SCOPE_0{idx + 1}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm font-sans leading-relaxed">
                {ind.description}
              </p>

              <div className="h-px bg-brand-border/40 w-full" />

              <div className="flex flex-col gap-2 bg-brand-dark/40 border border-brand-border/40 p-4 rounded-xl">
                <span className="font-mono text-[10px] tracking-widest text-brand-primary uppercase font-bold">
                  Focus Target Core Requirements
                </span>
                <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {ind.needs}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Footer call to action */}
        <div className="border border-brand-border/60 bg-brand-card/40 p-8 md:p-12 rounded-xl text-center flex flex-col gap-5 items-center">
          <h3 className="font-display font-bold text-xl md:text-2xl text-white">
            Need an IT Assessment Custom to Your Business?
          </h3>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
            We are ready to design an IT framework that fits your unique industry requirements. Book a consultation call with us today and let us simplify your workspace technology.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-brand-primary text-brand-dark rounded font-mono text-xs tracking-widest font-bold uppercase hover:bg-brand-primary/95 hover:glow-cyan transition-all"
          >
            Schedule Industry Consultation
          </Link>
        </div>

      </div>
    </div>
  );
}
