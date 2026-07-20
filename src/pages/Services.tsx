import { SERVICES_DATA } from '../data';
import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';

export default function Services() {
  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden">
      {/* Visual background cues */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16">
        
        {/* Page Header */}
        <div className="text-left flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-primary">SERVICES</span>
          </div>
          
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase mt-2">
            COMPLETE TECHNOLOGY OPERATIONS
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Our IT Support & <br />
            <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-clip-text text-transparent text-glow-cyan">
              Custom Technology Solutions
            </span>
          </h1>
          <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mt-1">
            We provide a diverse suite of technical capabilities to help your business operate with greater safety, continuity, and efficiency. Every service we deliver is customized specifically for your physical office layout, team workflows, and active budget parameters.
          </p>
        </div>

        {/* Services Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="group border border-brand-border/60 bg-brand-card/40 hover:bg-brand-card/70 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:glow-cyan flex flex-col justify-between"
            >
              <div>
                {/* Header card items */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/20 transition-all">
                    <LucideIcon name={service.iconName} size={24} />
                  </div>
                  <span className="font-mono text-xs text-gray-600 font-semibold uppercase tracking-wider mt-1">
                    [ SERVICE_0{idx + 1} ]
                  </span>
                </div>

                <h2 className="font-display font-bold text-xl md:text-2xl text-white mb-3 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h2>
                
                <p className="text-gray-300 text-sm font-sans leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Problems Solved brief preview */}
                <div className="flex flex-col gap-2.5 bg-brand-dark/40 border border-brand-border/40 p-4 rounded-xl mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-brand-secondary uppercase font-bold">
                    Primary Operational Target
                  </span>
                  <div className="flex items-start gap-2.5 text-xs text-gray-400 font-sans leading-normal">
                    <LucideIcon name="AlertCircle" size={12} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span>Solves: {service.problems[0]}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-brand-border/40 pt-6">
                <Link
                  to={`/services/${service.id}`}
                  className="w-full sm:w-auto px-5 py-2.5 bg-brand-primary/5 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-brand-dark rounded font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Service Details</span>
                  <LucideIcon name="ArrowRight" size={12} />
                </Link>
                <Link
                  to={`/contact?interest=${service.id}`}
                  className="w-full sm:w-auto px-5 py-2.5 border border-transparent hover:border-brand-border bg-transparent text-gray-400 hover:text-white rounded font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-center"
                >
                  Get Estimation
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="border border-brand-secondary/30 bg-gradient-to-br from-brand-card to-brand-secondary/5 rounded-2xl p-8 md:p-12 text-center glow-purple">
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase block mb-2">
            OBJECTIVE ASSESSMENT
          </span>
          <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4">
            Unsure Which IT Solutions Align with Your Operations?
          </h3>
          <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We understand that navigating software subscriptions, network cabling, and server licenses can be overwhelming. Schedule a professional, plain-English consultation and let us help map your digital landscape.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-secondary text-white rounded font-mono text-xs tracking-widest font-bold uppercase hover:bg-brand-secondary/90 hover:glow-purple transition-all"
          >
            <span>Book Initial Discovery Call</span>
            <LucideIcon name="ArrowRight" size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
