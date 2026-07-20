import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-brand-dark px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-md w-full border border-brand-border/60 bg-brand-card/40 p-8 rounded-2xl text-center glow-purple">
        <div className="w-16 h-16 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center text-brand-secondary mx-auto mb-6">
          <LucideIcon name="AlertCircle" size={32} />
        </div>
        
        <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase block mb-1">
          ROUTE_RESOLUTION_ERROR
        </span>
        <h1 className="font-display font-bold text-4xl text-white tracking-tight mb-2">
          404 - Not Found
        </h1>
        <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mb-8">
          The requested technical coordinate, file, or subpage does not exist or has been relocated within our digital directory.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full py-3 bg-brand-primary text-brand-dark rounded font-mono text-xs font-bold tracking-widest uppercase hover:bg-brand-primary/95 hover:glow-cyan transition-all flex items-center justify-center gap-2"
          >
            <LucideIcon name="Home" size={14} />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="w-full py-3 border border-brand-border bg-transparent text-gray-300 hover:text-white rounded font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
          >
            <LucideIcon name="Compass" size={14} />
            <span>Explore IT Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
