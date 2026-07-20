import { PROCESS_DATA } from '../data';
import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';

export default function Process() {
  const processDetailsList = [
    {
      step: '01',
      title: 'Discovery',
      desc: 'We begin by learning the shape of your business. We listen to your team, map your daily work routines, and identify current technical obstacles, software systems, and long-term targets.',
      duration: 'Timeline: 1 - 2 business days',
      deliverables: [
        'Understand unique user roles and team collaboration constraints.',
        'Document software subscriptions, cloud suites, and domain configurations.',
        'Isolate recurring technical frustrations that drain employee hours.'
      ],
      icon: 'User'
    },
    {
      step: '02',
      title: 'Assessment',
      desc: 'We perform an objective review of your existing technology environment. We evaluate network stability, device lifecycles, backup reliability, and basic account safety rules.',
      duration: 'Timeline: 2 - 3 business days',
      deliverables: [
        'Analyze local Wi-Fi speeds, router firmwares, and cabling endpoints.',
        'Review password hygiene, access controls, and Multi-Factor Authentication setups.',
        'Inspect active local backup drives and verify their recovery status.'
      ],
      icon: 'Eye'
    },
    {
      step: '03',
      title: 'Strategy',
      desc: 'We present a practical, plain-English recommendation outlining specific priorities, a defined project scope, and clear cost estimates. We avoid unnecessary upgrades and focus purely on what supports your goals.',
      duration: 'Timeline: Presented within 3 days of assessment',
      deliverables: [
        'Deliver a written IT roadmap dividing critical fixes from optional updates.',
        'Provide transparent, itemized service and software license cost estimates.',
        'Establish clear success parameters so outcomes are easy to evaluate.'
      ],
      icon: 'Compass'
    },
    {
      step: '04',
      title: 'Implementation',
      desc: 'We configure, improve, migrate, or deploy the selected solutions carefully. We coordinate this process with your team to avoid interrupting your daily business operations.',
      duration: 'Timeline: Scheduled around your business hours',
      deliverables: [
        'Migrate legacy shared drives to secure, logically structured cloud directories.',
        'Deploy password managers, secure network channels, and enforce MFA.',
        'Update workstations and configure proactive background system monitoring.'
      ],
      icon: 'Cpu'
    },
    {
      step: '05',
      title: 'Support',
      desc: 'We provide continued technical help, regular maintenance reviews, software updates, and clear advice as your operations grow and change.',
      duration: 'Timeline: Ongoing background engagement',
      deliverables: [
        'Quiet, continuous update testing, operating system patches, and security checks.',
        'Direct remote help desk support for employee workstations and software questions.',
        'Scheduled reviews to review domain health and adjust account permissions.'
      ],
      icon: 'Headphones'
    }
  ];

  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16">
        
        {/* Page Header */}
        <div className="text-left flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-primary">PROCESS</span>
          </div>
          
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase mt-2">
            METHODOLOGY & TIMELINES
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Our Delivery Process: From <br />
            <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-clip-text text-transparent text-glow-cyan">
              Challenge to Solution
            </span>
          </h1>
          <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed mt-1">
            We operate on a transparent, step-by-step methodology to ensure your business systems transition cleanly. We explain every stage in plain English, allowing you to stay fully informed without navigating technical jargon.
          </p>
        </div>

        {/* Detailed Timeline list layout */}
        <div className="flex flex-col gap-12 max-w-4xl mx-auto text-left">
          {processDetailsList.map((proc, idx) => (
            <div
              key={proc.step}
              className="group border border-brand-border/60 bg-brand-card/40 hover:bg-brand-card/70 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:border-brand-primary/20 relative"
            >
              {/* Laser trace */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col md:flex-row items-start gap-6">
                
                {/* Numeric node badge */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-brand-dark border border-brand-border/80 flex items-center justify-center font-mono text-xl font-bold text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark group-hover:border-brand-primary transition-colors duration-300">
                    {proc.step}
                  </div>
                  <span className="font-mono text-[9px] text-gray-500 tracking-wider uppercase">
                    STAGE_0{idx + 1}
                  </span>
                </div>

                {/* Text explanation */}
                <div className="flex flex-col gap-4 w-full">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-brand-secondary uppercase font-semibold">
                      {proc.duration}
                    </span>
                    <h2 className="font-display font-bold text-xl md:text-2xl text-white mt-1 group-hover:text-brand-primary transition-colors">
                      {proc.title}
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base font-sans mt-2 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>

                  <div className="h-px bg-brand-border/40 w-full" />

                  {/* Specific Deliverables List */}
                  <div className="flex flex-col gap-2.5">
                    <span className="font-mono text-[10px] tracking-widest text-brand-primary uppercase font-bold">
                      Deliverables & Actions
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-400 font-sans">
                      {proc.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <LucideIcon name="Check" size={14} className="text-brand-primary mt-0.5 shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Closing card */}
        <div className="border border-brand-border/60 bg-brand-card/40 p-8 md:p-12 rounded-xl text-center flex flex-col gap-5 items-center">
          <h3 className="font-display font-bold text-xl md:text-2xl text-white">
            Ready to Begin with Stage 01?
          </h3>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-2xl">
            Our initial discovery conversations are completely friendly, clear, and carry no physical obligations. Let us know where you are experiencing tech roadblocks and let’s outline a clean fix.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-brand-primary text-brand-dark rounded font-mono text-xs tracking-widest font-bold uppercase hover:bg-brand-primary/95 hover:glow-cyan transition-all"
          >
            Start Your Discovery Audit
          </Link>
        </div>

      </div>
    </div>
  );
}
