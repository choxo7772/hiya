export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'managed-it'
  | 'it-consulting'
  | 'cloud-solutions'
  | 'cybersecurity'
  | 'network-infrastructure'
  | 'custom-software'
  | 'website-digital'
  | 'backup-recovery'
  | 'industries'
  | 'process'
  | 'faq'
  | 'contact'
  | 'case-studies'
  | 'privacy'
  | 'terms'
  | 'accessibility'
  | 'security-disclosure'
  | 'cookie-policy';

export interface NavLink {
  label: string;
  pageId: PageId;
  path: string;
}

export interface ServiceItem {
  id: PageId;
  title: string;
  shortDesc: string;
  iconName: string;
  longDesc: string;
  problems: string[];
  includes: string[];
  idealClient: string;
  benefits: string[];
  relatedServices: { title: string; id: PageId }[];
}

export interface IndustryItem {
  name: string;
  description: string;
  iconName: string;
  needs: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceOfInterest: string;
  contactMethod: 'email' | 'phone';
  timeframe: string;
  message: string;
  consent: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { value: string; label: string }[];
  servicesUsed: { title: string; id: PageId }[];
  quote?: { text: string; author: string; role: string };
  iconName: string;
  duration: string;
}

