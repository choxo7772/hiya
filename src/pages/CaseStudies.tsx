import { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data';
import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  // Extract all unique industries + 'All' option
  const industries = ['All', ...Array.from(new Set(CASE_STUDIES_DATA.map((study) => study.industry)))];

  const filteredStudies = selectedIndustry === 'All'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter((study) => study.industry === selectedIndustry);

  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden text-left">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12">
        
        {/* Navigation Breadcrumbs & Page Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-primary">CASE STUDIES</span>
          </div>
          
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase mt-2">
            REAL-WORLD PROJECTS & OUTCOMES
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Our Case Studies: Proven <br />
            <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-clip-text text-transparent text-glow-cyan">
              Technical Solutions
            </span>
          </h1>
          <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mt-1">
            We partner with local Tampa-area businesses to resolve operational bottlenecks, protect digital accounts, migrate systems to secure cloud drives, and automate repetitive manual administration tasks.
          </p>
        </div>

        {/* Global Performance Highlights Block */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border border-brand-border/60 bg-brand-card/40 p-6 sm:p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-primary/40 to-brand-secondary/40" />
          
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">AVERAGE TIME SAVED</span>
            <span className="font-display font-bold text-3xl sm:text-4xl text-white text-glow-cyan">30+ Hours</span>
            <p className="text-gray-400 text-xs sm:text-sm font-sans">Reclaimed weekly per organization by automating manual SaaS pipelines.</p>
          </div>
          
          <div className="flex flex-col gap-1 sm:border-l sm:border-brand-border/40 sm:pl-6">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">NETWORK LIFETIME</span>
            <span className="font-display font-bold text-3xl sm:text-4xl text-white text-glow-cyan">99.9% Uptime</span>
            <p className="text-gray-400 text-xs sm:text-sm font-sans">Delivered through professional router configurations and isolated Wi-Fi.</p>
          </div>

          <div className="flex flex-col gap-1 sm:border-l sm:border-brand-border/40 sm:pl-6">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">DATA RECOVERY</span>
            <span className="font-display font-bold text-3xl sm:text-4xl text-white text-glow-cyan">100% Secure</span>
            <p className="text-gray-400 text-xs sm:text-sm font-sans">Encrypted daily backups with continuous background restoration dry-runs.</p>
          </div>
        </div>

        {/* Interactive Industry Filter Tabs */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs tracking-wider text-gray-500 uppercase font-semibold">
            Filter Case Studies by Industry Sector:
          </span>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 text-xs font-mono rounded transition-all border ${
                  selectedIndustry === ind
                    ? 'bg-brand-primary text-brand-dark font-bold border-brand-primary glow-cyan'
                    : 'bg-brand-card/30 text-gray-400 hover:text-white hover:bg-brand-card/60 border-brand-border/40'
                }`}
              >
                {ind.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Case Studies List Grid */}
        <div className="flex flex-col gap-12">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              className="border border-brand-border/60 bg-brand-card/30 p-6 md:p-8 rounded-2xl hover:bg-brand-card/50 hover:border-brand-primary/20 transition-all flex flex-col gap-8 relative group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Top Meta info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-brand-border/40 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:glow-cyan transition-all">
                    <LucideIcon name={study.iconName} size={24} />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-brand-primary transition-colors">
                      {study.client}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-gray-400 font-sans">
                      <span className="flex items-center gap-1">
                        <LucideIcon name="Briefcase" size={12} className="text-gray-500" />
                        {study.industry}
                      </span>
                      <span className="hidden sm:inline text-gray-600">•</span>
                      <span className="flex items-center gap-1">
                        <LucideIcon name="MapPin" size={12} className="text-gray-500" />
                        {study.location}
                      </span>
                      <span className="hidden sm:inline text-gray-600">•</span>
                      <span className="flex items-center gap-1 text-brand-secondary">
                        <LucideIcon name="Clock" size={12} className="text-brand-secondary" />
                        {study.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/case-studies/${study.id}`}
                  className="px-5 py-2.5 border border-brand-primary/40 bg-brand-primary/5 hover:bg-brand-primary hover:text-brand-dark rounded text-xs font-mono font-bold tracking-widest uppercase text-brand-primary hover:glow-cyan transition-all self-start md:self-center"
                >
                  View Case Study
                </Link>
              </div>

              {/* Grid content: Challenge vs Solution vs Metrics */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Challenge & Solution details (8 cols) */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] tracking-widest text-red-400 uppercase font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                      The IT Challenge
                    </span>
                    <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] tracking-widest text-brand-primary uppercase font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      Our Custom Solution
                    </span>
                    <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics Box (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-center gap-6 bg-brand-dark/40 border border-brand-border/40 p-6 rounded-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
                  <span className="font-mono text-[10px] tracking-widest text-brand-secondary uppercase font-bold block mb-2 relative z-10">
                    Key Performance Metrics
                  </span>
                  
                  <div className="flex flex-col gap-5 relative z-10">
                    {study.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-baseline gap-3 border-b border-brand-border/20 pb-3 last:border-0 last:pb-0">
                        <span className="font-display font-bold text-2xl sm:text-3xl text-white text-glow-cyan shrink-0">
                          {metric.value}
                        </span>
                        <span className="text-xs text-gray-400 font-sans leading-snug">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Quote card */}
              {study.quote && (
                <div className="border-l-2 border-brand-secondary bg-brand-card/50 p-4 rounded-r-xl text-left">
                  <p className="text-gray-300 italic text-xs sm:text-sm leading-relaxed font-sans">
                    "{study.quote.text}"
                  </p>
                  <span className="block text-gray-400 font-mono text-[10px] uppercase mt-2 tracking-wider">
                    — {study.quote.author}, <span className="text-brand-secondary">{study.quote.role}</span>
                  </span>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Action Bottom Card */}
        <div className="border border-brand-border/60 bg-brand-card/40 p-8 md:p-12 rounded-xl text-center flex flex-col gap-5 items-center">
          <h3 className="font-display font-bold text-xl md:text-2xl text-white">
            Ready to Build a Success Story for Your Business?
          </h3>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
            We are dedicated to building customized IT systems that protect assets, reclaim hours, and help teams thrive. Get in touch with us for a free plain-English systems audit.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-brand-primary text-brand-dark rounded font-mono text-xs tracking-widest font-bold uppercase hover:bg-brand-primary/95 hover:glow-cyan transition-all"
          >
            Start Your Custom IT Audit
          </Link>
        </div>

      </div>
    </div>
  );
}
