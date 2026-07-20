import { CASE_STUDIES_DATA } from '../data';
import { useRouter, Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';

export default function CaseStudyDetail({ studyId }: { studyId: string }) {
  const { navigate } = useRouter();
  const study = CASE_STUDIES_DATA.find((s) => s.id === studyId);

  if (!study) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center font-sans text-left">
        <LucideIcon name="AlertTriangle" size={48} className="text-brand-secondary mx-auto mb-4" />
        <h1 className="text-2xl font-display font-bold text-white mb-2">Case Study Not Found</h1>
        <p className="text-gray-400 mb-6">The requested case study could not be located in our systems.</p>
        <Link to="/case-studies" className="px-6 py-2.5 bg-brand-primary text-brand-dark rounded font-mono text-xs tracking-wider uppercase font-bold hover:glow-cyan transition-all">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden text-left">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-gray-500">
          <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
          <span>/</span>
          <Link to="/case-studies" className="hover:text-brand-primary transition-colors">CASE STUDIES</Link>
          <span>/</span>
          <span className="text-brand-primary">{study.client.toUpperCase()}</span>
        </div>

        {/* Back Link */}
        <div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-brand-primary transition-colors group"
          >
            <LucideIcon name="ArrowLeft" size={14} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO ALL CASE STUDIES
          </Link>
        </div>

        {/* Hero Title Card with neon laser line */}
        <div className="border border-brand-border/60 bg-brand-card/50 p-6 sm:p-10 md:p-12 rounded-2xl relative overflow-hidden flex flex-col gap-6">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-primary/40 via-brand-secondary/40 to-brand-primary/40" />
          
          <div className="flex flex-col md:flex-row justify-between gap-6 md:items-start">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase">
                SUCCESS STORY BRIEF: {study.industry.toUpperCase()}
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                {study.title}
              </h1>
            </div>

            <div className="flex flex-col gap-1 bg-brand-dark/60 border border-brand-border/40 px-4 py-3 rounded-lg shrink-0 text-left md:text-right">
              <span className="font-mono text-[10px] text-gray-500 uppercase">PROJECT DURATION</span>
              <span className="font-sans font-bold text-sm text-brand-primary">{study.duration}</span>
              <span className="font-mono text-[9px] text-gray-400 mt-1 uppercase">{study.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-border/40">
            {study.servicesUsed.map((srv, idx) => (
              <Link
                key={idx}
                to={`/services/${srv.id}`}
                className="px-3 py-1.5 bg-brand-primary/5 hover:bg-brand-primary/10 border border-brand-primary/20 hover:border-brand-primary/40 text-brand-primary rounded text-xs font-mono transition-colors"
              >
                {srv.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main narrative block (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Challenge description */}
            <section className="flex flex-col gap-4">
              <h2 className="font-display font-semibold text-xl text-white flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-red-400 rounded-full" />
                The IT Challenge & Friction
              </h2>
              <div className="bg-brand-card/20 border border-brand-border/40 p-6 rounded-xl font-sans text-gray-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
                <p>{study.challenge}</p>
                <div className="flex items-start gap-3 bg-red-500/5 border border-red-500/20 p-4 rounded-lg mt-2">
                  <LucideIcon name="AlertTriangle" size={20} className="text-red-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-red-300">
                    This situation directly compromised daily administrative productivity, network reliability, and security compliance.
                  </span>
                </div>
              </div>
            </section>

            {/* Solution description */}
            <section className="flex flex-col gap-4">
              <h2 className="font-display font-semibold text-xl text-white flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-brand-primary rounded-full" />
                Our Customized Technical Solution
              </h2>
              <div className="bg-brand-card/20 border border-brand-border/40 p-6 rounded-xl font-sans text-gray-300 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
                <p>{study.solution}</p>
                <div className="flex items-start gap-3 bg-brand-primary/5 border border-brand-primary/20 p-4 rounded-lg mt-2">
                  <LucideIcon name="CheckCircle" size={20} className="text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-brand-primary/90">
                    We designed this solution around practical workflows to ensure minimal disruption to current employee routines.
                  </span>
                </div>
              </div>
            </section>

            {/* Key Deliverables & Results */}
            <section className="flex flex-col gap-4">
              <h2 className="font-display font-semibold text-xl text-white flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-brand-secondary rounded-full" />
                Key Project Outcomes & Deliverables
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 bg-brand-card/40 border border-brand-border/40 p-4 rounded-xl font-sans text-sm text-gray-300 hover:border-brand-secondary/30 transition-colors"
                  >
                    <LucideIcon name="CheckCircle" size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar block (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            
            {/* Key performance metrics */}
            <div className="border border-brand-border/60 bg-brand-card/40 p-6 rounded-2xl flex flex-col gap-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-secondary/40 to-brand-primary/40" />
              <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-2">
                MEASURABLE METRICS
              </span>

              <div className="flex flex-col gap-5">
                {study.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="flex flex-col gap-1 border-b border-brand-border/20 pb-4 last:border-none last:pb-0">
                    <span className="font-display font-bold text-3xl text-white text-glow-cyan">
                      {m.value}
                    </span>
                    <span className="text-xs text-gray-400 font-sans leading-tight">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            {study.quote && (
              <div className="border border-brand-secondary/30 bg-brand-card/50 p-6 rounded-2xl relative flex flex-col gap-4">
                <LucideIcon name="Quote" size={24} className="text-brand-secondary/40 self-start" />
                <p className="text-gray-300 italic text-sm leading-relaxed font-sans">
                  "{study.quote.text}"
                </p>
                <div className="border-t border-brand-border/40 pt-3 mt-1 flex flex-col">
                  <span className="font-display font-bold text-white text-sm">
                    {study.quote.author}
                  </span>
                  <span className="font-mono text-[10px] text-brand-secondary uppercase mt-0.5">
                    {study.quote.role}
                  </span>
                </div>
              </div>
            )}

            {/* Quick Consultation Callout */}
            <div className="border border-brand-primary/30 bg-brand-primary/5 p-6 rounded-2xl flex flex-col gap-4 text-center items-center">
              <LucideIcon name="HelpCircle" size={24} className="text-brand-primary" />
              <span className="font-mono text-[10px] text-gray-400 tracking-wider uppercase font-semibold">NEED SOMETHING SIMILAR?</span>
              <p className="text-gray-300 font-sans text-xs leading-relaxed">
                Contact us to discuss your operational challenges and we will draft a detailed solution proposal for your business.
              </p>
              <Link
                to="/contact"
                className="w-full py-2.5 bg-brand-primary text-brand-dark rounded text-xs font-mono font-bold tracking-widest uppercase hover:bg-brand-primary/95 hover:glow-cyan transition-all"
              >
                Book Systems Audit
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
