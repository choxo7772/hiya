import { motion } from 'motion/react';
import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';
import {
  VALUE_STRIP_ITEMS,
  SERVICES_DATA,
  CHALLENGES_ITEMS,
  WHY_CHOOSE_US_ITEMS,
  PROCESS_DATA,
  INDUSTRIES_DATA
} from '../data';

// SVG Decorative Network Mesh for the Hero Background
function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {/* Dense grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-grid-pattern-dense opacity-40" />
      
      {/* Ambient gradient glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-secondary/10 blur-[150px] rounded-full" />

      {/* Decorative Network Grid lines and digital circuits */}
      <svg className="absolute w-full h-full top-0 left-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grid-line-grad" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.2)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </linearGradient>
        </defs>
        {/* Animated scanning line */}
        <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#grid-line-grad)" strokeWidth="1" className="animate-pulse" />
        <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#grid-line-grad)" strokeWidth="1" className="animate-pulse" />
        
        {/* Abstract floating nodes */}
        <circle cx="15%" cy="25%" r="3" fill="#00f0ff" className="animate-ping" style={{ animationDuration: '4s' }} />
        <circle cx="85%" cy="40%" r="4" fill="#a855f7" className="animate-ping" style={{ animationDuration: '6s' }} />
        <circle cx="35%" cy="65%" r="2" fill="#00f0ff" />
        <circle cx="65%" cy="80%" r="3" fill="#a855f7" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-brand-dark">
      
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <NetworkBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Column (7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-primary/30 rounded bg-brand-primary/5 w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-brand-primary font-bold uppercase">
                Tampa-Based IT Solutions Partner
              </span>
            </div>
            
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              Technology That <br />
              <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-clip-text text-transparent text-glow-cyan">
                Moves Your Business Forward
              </span>
            </h1>
            
            <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
              HIYA IT SOLUTIONS LLC helps businesses strengthen their technology, simplify daily operations, and build reliable digital systems through responsive IT support, consulting, cloud solutions, cybersecurity guidance, and custom technology services.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
              <Link
                to="/contact"
                className="flex items-center justify-center px-8 py-4 bg-brand-primary text-brand-dark rounded font-mono text-sm tracking-widest font-bold uppercase shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/95 hover:glow-cyan transition-all"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="flex items-center justify-center px-8 py-4 border border-brand-border/80 bg-brand-card/40 hover:bg-brand-card hover:border-brand-primary/40 text-gray-200 hover:text-white rounded font-mono text-sm tracking-widest font-bold uppercase transition-all"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Hero Decorative Visual Column (5 columns) */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
            {/* Visual server console layout representation */}
            <div className="relative w-full max-w-sm aspect-square border border-brand-border/60 bg-gradient-to-b from-brand-card/70 to-brand-card/40 backdrop-blur-md rounded-2xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/60 to-transparent" />
              <div className="absolute -inset-1 border border-brand-primary/15 rounded-2xl pointer-events-none" />
              
              {/* Retro scanline overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]" />

              {/* Terminal line headers */}
              <div className="flex items-center justify-between border-b border-brand-border/40 pb-4 relative z-10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-[9px] tracking-widest text-gray-400 uppercase font-semibold">
                  System Monitor // Active
                </span>
              </div>

              {/* Console logs with custom state indicators */}
              <div className="flex flex-col gap-3.5 font-mono text-[10.5px] py-4 text-left relative z-10">
                {/* Item 1 */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-brand-primary/5 border border-brand-primary/10 hover:bg-brand-primary/10 hover:border-brand-primary/25 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <span className="text-brand-primary animate-pulse">›</span>
                    <span>INSPECTING ARCHITECTURE</span>
                  </div>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-brand-primary/20 text-brand-primary font-bold uppercase tracking-wider animate-pulse">Active</span>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-brand-secondary/5 border border-brand-secondary/10 hover:bg-brand-secondary/10 hover:border-brand-secondary/25 transition-all duration-300">
                  <div className="flex items-center gap-2 text-brand-secondary">
                    <span className="text-brand-secondary">›</span>
                    <span>MAPPING CLOUD SPACES</span>
                  </div>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-brand-secondary/20 text-brand-secondary font-bold uppercase tracking-wider">Done</span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-brand-border/40 hover:bg-white/10 hover:border-brand-border/60 transition-all duration-300">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-brand-primary/60">›</span>
                    <span>SECURING DIRECTORIES</span>
                  </div>
                  <div className="flex items-center gap-1 text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-gray-300">
                    <LucideIcon name="Lock" size={10} className="text-brand-primary" />
                    <span>SECURE</span>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-brand-border/40 hover:bg-white/10 hover:border-brand-border/60 transition-all duration-300">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-brand-primary/60">›</span>
                    <span>AUTOMATION TRIGGERS</span>
                  </div>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-white/10 text-gray-400 font-semibold">WAITING</span>
                </div>

                {/* Item 5 */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-brand-primary/10 border border-brand-primary/30 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
                  <div className="flex items-center gap-2 text-brand-primary font-bold">
                    <span className="text-brand-primary">›</span>
                    <span>HIYA IT SOLUTIONS</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-brand-primary uppercase tracking-widest font-bold">READY</span>
                    <span className="w-1.5 h-3 bg-brand-primary animate-pulse inline-block ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Console footers */}
              <div className="border-t border-brand-border/40 pt-4 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
                  <span className="text-[10px] text-gray-400 font-mono">TAMPA DISTRICT</span>
                </div>
                <span className="text-[10px] text-brand-secondary font-mono font-bold">EST_2023</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST OR VALUE STRIP */}
      <section id="value-strip" className="relative py-14 border-t border-b border-brand-border/60 bg-gradient-to-b from-brand-card/25 to-brand-card/40 backdrop-blur-sm overflow-hidden">
        {/* Subtle top/bottom line gradient accents */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-secondary/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_STRIP_ITEMS.map((item, idx) => {
              // Map elegant icons to each value strip item
              const icons = ['Briefcase', 'Headphones', 'Cpu', 'ShieldCheck'];
              const iconName = icons[idx] || 'Check';

              return (
                <div 
                  key={idx} 
                  className="group relative flex flex-col gap-3 pl-6 border-l-2 border-brand-primary/25 hover:border-brand-primary transition-all duration-300 text-left"
                >
                  {/* Glowing background highlight on hover */}
                  <div className="absolute inset-0 -left-[2px] bg-gradient-to-r from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-r-lg pointer-events-none" />

                  <div className="flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/5 border border-brand-primary/10 group-hover:border-brand-primary/35 group-hover:bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-sm shadow-brand-primary/5 transition-all duration-300 shrink-0">
                      <LucideIcon name={iconName} size={15} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-display font-semibold text-white text-[15px] sm:text-base tracking-wide group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </span>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed relative z-10 pl-0 group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section id="services-overview" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
          
          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase">
              Operational Competence
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Technology Support for the Way You Work
            </h2>
            <div className="h-0.5 w-16 bg-brand-primary mx-auto" />
            <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed mt-2">
              Every organization has different systems, challenges, and priorities. We provide flexible IT services designed around the client’s actual operational needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {SERVICES_DATA.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative border border-brand-border/60 bg-brand-card/40 hover:bg-brand-card/80 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/40 hover:glow-cyan flex flex-col justify-between"
              >
                {/* Laser line effect on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/10 transition-colors mb-4 border border-white/5 group-hover:border-brand-primary/20">
                    <LucideIcon name={service.iconName} size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-6 font-mono text-[10px] sm:text-xs tracking-wider text-brand-primary uppercase font-bold">
                  <span>Explore details</span>
                  <LucideIcon name="ArrowRight" size={12} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border bg-brand-card/40 text-gray-200 hover:text-white rounded font-mono text-xs tracking-widest uppercase font-bold hover:border-brand-secondary transition-colors"
            >
              <span>View All Services Detail</span>
              <LucideIcon name="ArrowRight" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS CHALLENGES SECTION */}
      <section id="challenges-section" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 bg-brand-card/20">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Challenges Title Column (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="font-mono text-xs tracking-widest text-brand-primary font-bold uppercase">
              Addressing Friction points
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Technology Should Support Your Business—<br />
              <span className="text-brand-secondary">not Slow It Down</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand-secondary" />
            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
              We frequently find that small businesses struggle with unoptimized setups, fragmented licensing, or slow workstations that leak productivity. Before we recommend any software, server setup, or network purchase, HIYA IT SOLUTIONS LLC conducts an honest audit of your complete physical and cloud environment to identify actual gaps.
            </p>
            <div className="p-4 border border-brand-secondary/20 rounded bg-brand-secondary/5 font-mono text-xs text-brand-secondary/80">
              Tampa small business owners deserve an IT partner that looks at systems from an operational standpoint, not just a technical checklist.
            </div>
          </div>

          {/* Challenges Grid Column (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {CHALLENGES_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 border border-brand-border/50 bg-brand-dark/60 rounded-xl flex flex-col gap-2 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-secondary/40" />
                <h3 className="font-display font-semibold text-sm sm:text-base text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section id="why-choose-us" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
          
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs tracking-widest text-brand-primary font-bold uppercase">
              Practical Value
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              A More Practical Approach to IT
            </h2>
            <div className="h-0.5 w-16 bg-brand-primary mx-auto" />
            <p className="text-gray-400 font-sans text-sm leading-relaxed mt-1">
              We stand against bloated service packages and unneeded subscriptions. We build setups aligned strictly with your physical growth and budget.
            </p>
          </div>

          {/* Grid blocks with custom cards, icons, and micro-interactions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
              // Map elegant icons to each why choose us feature item
              const featureIcons = ['Compass', 'FileText', 'Headphones', 'TrendingUp', 'Network', 'ShieldCheck'];
              const iconName = featureIcons[idx] || 'Check';
              const stepNumber = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={idx}
                  className="group relative border border-brand-border/50 bg-gradient-to-b from-brand-card/30 to-brand-card/10 hover:bg-brand-card/70 p-7 rounded-2xl transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_0_25px_rgba(0,240,255,0.03)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle top light bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Top capsule bar with icon and index indicator */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/5 border border-brand-primary/10 group-hover:border-brand-primary/20 group-hover:bg-brand-primary/10 flex items-center justify-center text-brand-primary transition-all duration-300">
                        <LucideIcon name={iconName} size={18} className="group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="font-mono text-xs text-brand-secondary/70 font-semibold tracking-wider bg-brand-secondary/5 border border-brand-secondary/10 px-2.5 py-1 rounded-md">
                        [{stepNumber}]
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom decorative aesthetic bar */}
                  <div className="w-8 h-[2px] bg-brand-primary/10 group-hover:w-16 group-hover:bg-brand-primary/40 transition-all duration-300 mt-6" />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section id="process-section" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 bg-brand-card/10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col gap-16 text-center">
          
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase">
              Operational Milestones
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              A Clear Path from Challenge to Solution
            </h2>
            <div className="h-0.5 w-16 bg-brand-secondary mx-auto" />
            <p className="text-gray-400 font-sans text-sm leading-relaxed mt-1">
              No guesswork. We use a transparent, step-by-step audit and execution process to ensure your systems transition smoothly.
            </p>
          </div>

          {/* Numbered visual timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-left relative">
            
            {/* Visual connector line for desktop layouts */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary opacity-30 z-0" />
            
            {PROCESS_DATA.map((item, idx) => (
              <div
                key={idx}
                className="border border-brand-border/60 bg-brand-card/50 backdrop-blur-md p-6 rounded-xl relative z-10 hover:border-brand-primary/40 transition-colors flex flex-col gap-3 group"
              >
                {/* Numbered node */}
                <div className="w-10 h-10 rounded-full bg-brand-dark border border-brand-border flex items-center justify-center font-mono text-sm font-bold text-brand-primary group-hover:text-brand-dark group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-300">
                  {item.step}
                </div>
                
                <h3 className="font-display font-semibold text-lg text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary/10 border border-brand-secondary/40 text-brand-secondary hover:text-white rounded font-mono text-xs tracking-widest uppercase font-bold hover:bg-brand-secondary/20 transition-all"
            >
              <span>View Expanded Roadmap</span>
              <LucideIcon name="ArrowRight" size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. INDUSTRIES SECTION */}
      <section id="industries-section" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 text-center">
          
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs tracking-widest text-brand-primary font-bold uppercase">
              Targeted Environments
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Flexible Solutions for Different Business Environments
            </h2>
            <div className="h-0.5 w-16 bg-brand-primary mx-auto" />
            <p className="text-gray-400 font-sans text-sm leading-relaxed mt-1">
              Every industry carries distinct operational and safety configurations. We adapt directory layouts, local firewalls, and workstation parameters to suit.
            </p>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <div
                key={idx}
                className="group border border-brand-border/60 bg-brand-card/40 hover:bg-brand-card/80 p-5 rounded-xl transition-all duration-300 hover:border-brand-primary/30 flex flex-col gap-3 justify-between"
              >
                <div className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary/10 group-hover:text-brand-primary transition-all">
                    <LucideIcon name={ind.iconName} size={16} />
                  </div>
                  <h3 className="font-display font-semibold text-base text-white group-hover:text-brand-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">
                    {ind.description}
                  </p>
                </div>
                <div className="h-px bg-brand-border/40 my-1" />
                <p className="text-gray-500 text-[11px] font-mono leading-relaxed">
                  {ind.needs}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border bg-brand-card/40 text-gray-200 hover:text-white rounded font-mono text-xs tracking-widest uppercase font-bold hover:border-brand-primary transition-colors"
            >
              <span>Review Custom Industry Scopes</span>
              <LucideIcon name="ArrowRight" size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 8. SECURITY SECTION */}
      <section id="security-section" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 bg-brand-card/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto border border-brand-secondary/30 bg-gradient-to-r from-brand-card to-brand-secondary/5 rounded-2xl p-8 md:p-12 text-center glow-purple">
          <div className="w-12 h-12 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center text-brand-secondary mx-auto mb-6">
            <LucideIcon name="Lock" size={24} />
          </div>
          
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase block mb-2">
            Safety Baselines
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4">
            Security Should Be Built into Every Technology Decision
          </h2>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            We consider account protection, permission controls, off-site encrypted backup routines, software updates, data handling, and operational continuity throughout every IT decision. We do not push unneeded expensive software, but rather verify that simple, bulletproof baseline protections are actively working.
          </p>
          <p className="text-gray-500 text-xs font-mono mb-8 italic">
            Note: We provide practical risk-reduction planning. Specific complex regulatory or compliance mandates may require consultation with qualified credentialed legal professionals.
          </p>
          
          <Link
            to="/contact?interest=security"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-secondary text-white rounded font-mono text-sm tracking-widest font-bold uppercase shadow-lg shadow-brand-secondary/20 hover:bg-brand-secondary/90 hover:glow-purple transition-all"
          >
            <span>Discuss Your Security Needs</span>
            <LucideIcon name="ArrowRight" size={14} />
          </Link>
        </div>
      </section>

      {/* 9. CALL-TO-ACTION SECTION */}
      <section id="cta-section" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto border border-brand-border/60 bg-brand-card/60 backdrop-blur-md p-10 md:p-16 rounded-2xl text-center glow-cyan">
          <span className="font-mono text-xs tracking-widest text-brand-primary font-bold uppercase block mb-3">
            INITIAL DEVIATION ANALYSIS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4 max-w-2xl mx-auto">
            Ready for Technology That Works Better?
          </h2>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Tell us what is slowing your business down, what you are planning next, or where you need dependable, responsive technical support. We are ready to listen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-brand-dark rounded font-mono text-sm tracking-widest font-bold uppercase shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/95 hover:glow-cyan transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-brand-border hover:border-brand-primary/40 bg-transparent text-gray-300 hover:text-white rounded font-mono text-sm tracking-widest font-bold uppercase transition-all"
            >
              Contact Us Direct
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
