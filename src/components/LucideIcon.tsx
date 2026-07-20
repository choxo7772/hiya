import {
  Headphones,
  Compass,
  Cloud,
  ShieldCheck,
  Network,
  Code,
  Globe,
  Save,
  Briefcase,
  TrendingUp,
  ShoppingBag,
  Home,
  Activity,
  Hammer,
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  AlertCircle,
  Cpu,
  FileText,
  Eye,
  ExternalLink,
  Lock,
  FileCode,
  Cookie,
  LucideProps
} from 'lucide-react';
import { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Headphones,
  Compass,
  Cloud,
  ShieldCheck,
  Network,
  Code,
  Globe,
  Save,
  Briefcase,
  TrendingUp,
  ShoppingBag,
  Home,
  Activity,
  Hammer,
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Check,
  ChevronDown,
  ArrowRight,
  Clock,
  AlertCircle,
  Cpu,
  FileText,
  Eye,
  ExternalLink,
  Lock,
  FileCode,
  Cookie
};

interface LucideIconProps extends Omit<LucideProps, 'name'> {
  name: string;
  className?: string;
  size?: number | string;
}

export default function LucideIcon({ name, className, size = 20, ...props }: LucideIconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    // Fallback icon if there's any typo or missing item
    return <HelpFallback className={className} size={size} {...props} />;
  }
  // Cast icon to any to safely allow tailwind className injections across various lucide-react definition bundles
  const Icon = IconComponent as any;
  return <Icon className={className} size={size} {...props} />;
}

interface HelpFallbackProps extends LucideProps {
  className?: string;
  size?: number | string;
}

// Fallback visual
function HelpFallback({ className, size, ...props }: HelpFallbackProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...(props as any)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
