import { SERVICES_DATA } from '../data';
import { useRouter, Link } from './Router';
import LucideIcon from './LucideIcon';
import { motion } from 'motion/react';

export default function ServiceDetail({ serviceId }: { serviceId: string }) {
  const { navigate } = useRouter();
  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center font-sans">
        <LucideIcon name="AlertCircle" size={48} className="text-brand-secondary mx-auto mb-4" />
        <h1 className="text-2xl font-display font-bold text-white mb-2">Service Not Found</h1>
        <p className="text-gray-400 mb-6">The requested service detail page could not be located.</p>
        <Link to="/services" className="px-6 py-2 bg-brand-primary text-brand-dark rounded font-mono text-xs tracking-wider uppercase font-bold">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-brand-primary transition-colors">SERVICES</Link>
          <span>/</span>
          <span className="text-brand-primary">{service.title.toUpperCase()}</span>
        </div>

        {/* Header Block */}
        <div className="border border-brand-border/60 bg-brand-card/60 backdrop-blur-md p-8 md:p-12 rounded-2xl glow-cyan mb-12 relative overflow-hidden">
          {/* Laser beam top decoration */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0">
              <LucideIcon name={service.iconName} size={32} />
            </div>
            <div>
              <span className="font-mono text-xs tracking-widest text-brand-secondary font-semibold uppercase">
                HIYA IT SOLUTIONS SERVICE BRIEF
              </span>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-white mt-1 tracking-tight">
                {service.title}
              </h1>
              <p className="text-gray-300 text-base md:text-lg mt-3 leading-relaxed font-sans max-w-3xl">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Core Descriptions & Inclusions (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Overview */}
            <section className="flex flex-col gap-4">
              <h2 className="font-display font-semibold text-xl text-white flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-primary rounded-full" />
                Service Overview
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                {service.longDesc}
              </p>
            </section>

            {/* What We Address (Problems) */}
            <section className="flex flex-col gap-4">
              <h2 className="font-display font-semibold text-xl text-white flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-secondary rounded-full" />
                Common Operational Friction We Address
              </h2>
              <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">
                If your company experiences any of these issues, this service is built for you:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.problems.map((prob, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 bg-brand-card/40 border border-brand-border/40 p-4 rounded-xl font-sans text-sm text-gray-300"
                  >
                    <LucideIcon name="AlertCircle" size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What the Service Includes */}
            <section className="flex flex-col gap-4">
              <h2 className="font-display font-semibold text-xl text-white flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-primary rounded-full" />
                What This Service Includes
              </h2>
              <div className="bg-brand-card/20 border border-brand-border/50 rounded-xl p-6 md:p-8 flex flex-col gap-4">
                {service.includes.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start text-sm md:text-base font-sans text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 mt-0.5">
                      <LucideIcon name="Check" size={12} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Column: Metadata & CTAs (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Ideal Match card */}
            <div className="border border-brand-border/60 bg-brand-card/40 p-6 rounded-xl flex flex-col gap-3 relative">
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-primary/5 blur-lg rounded-full" />
              <div className="flex items-center gap-2 text-brand-primary font-mono text-xs tracking-wider uppercase font-semibold">
                <LucideIcon name="User" size={14} />
                <span>Ideal Target Match</span>
              </div>
              <h3 className="font-display font-semibold text-base text-white">
                Who Is This Service For?
              </h3>
              <p className="text-gray-400 text-xs md:text-sm font-sans leading-relaxed">
                {service.idealClient}
              </p>
            </div>

            {/* Business Outcomes */}
            <div className="border border-brand-border/60 bg-brand-card/40 p-6 rounded-xl flex flex-col gap-4">
              <div className="flex items-center gap-2 text-brand-secondary font-mono text-xs tracking-wider uppercase font-semibold">
                <LucideIcon name="TrendingUp" size={14} />
                <span>Operational Outcomes</span>
              </div>
              <h3 className="font-display font-semibold text-base text-white">
                Expected Business Benefits
              </h3>
              <ul className="flex flex-col gap-3 text-xs md:text-sm font-sans text-gray-300">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-brand-primary font-mono font-bold mt-0.5 shrink-0">›</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Consultation CTA */}
            <div className="border border-brand-primary/30 bg-gradient-to-br from-brand-card to-brand-primary/5 p-6 rounded-xl flex flex-col gap-4 text-center">
              <h4 className="font-display font-semibold text-white text-base">
                Ready to Discuss Your Needs?
              </h4>
              <p className="text-xs text-gray-400 font-sans">
                Schedule a professional consultation regarding {service.title} with HIYA IT Solutions today.
              </p>
              <Link
                to={`/contact?interest=${service.id}`}
                className="w-full py-2.5 bg-brand-primary text-brand-dark rounded font-mono text-xs font-bold tracking-widest uppercase hover:bg-brand-primary/90 hover:glow-cyan transition-all"
              >
                Book Consultation
              </Link>
            </div>

          </div>

        </div>

        {/* Related Services Row */}
        <div className="mt-16 h-px bg-brand-border/40" />
        <div className="mt-12">
          <span className="font-mono text-xs tracking-widest text-brand-secondary uppercase font-bold block mb-4">
            EXPAND YOUR DIGITAL ARCHITECTURE
          </span>
          <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-6">
            Related IT Support & Solutions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {service.relatedServices.map((rel) => {
              const relFull = SERVICES_DATA.find((s) => s.id === rel.id);
              return (
                <Link
                  key={rel.id}
                  to={`/services/${rel.id}`}
                  className="group border border-brand-border/60 bg-brand-card/30 p-5 rounded-xl hover:bg-brand-card/60 hover:border-brand-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex flex-col gap-2">
                    <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/10 transition-colors">
                      <LucideIcon name={relFull?.iconName || 'Settings'} size={16} />
                    </div>
                    <span className="font-display font-medium text-sm text-gray-200 group-hover:text-white transition-colors">
                      {rel.title}
                    </span>
                    <p className="text-gray-400 text-xs font-sans line-clamp-2 mt-1">
                      {relFull?.shortDesc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-brand-primary font-mono text-[10px] tracking-wider uppercase font-semibold mt-4">
                    <span>Explore details</span>
                    <LucideIcon name="ArrowRight" size={10} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
