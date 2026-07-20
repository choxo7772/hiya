import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';

interface LegalDocProps {
  path: string;
}

export default function Legal({ path }: LegalDocProps) {
  
  // Dynamic document selection
  const getDocumentContent = () => {
    switch (path) {
      case '/privacy':
        return {
          title: 'Privacy Policy',
          subtitle: 'Information Handling & Operational Privacy Rules',
          lastUpdated: 'January 1, 2026',
          sections: [
            {
              heading: '1. Information We Collect',
              paragraphs: [
                'HIYA IT SOLUTIONS LLC ("we", "us", "our") is committed to protecting your privacy. When you interact with our website (hiyait.com) or submit a request via our contact forms, we collect information necessary to deliver our services.',
                'The types of personal details we collect include your full name, company name, business email address, phone number, specific services of interest, approximate project timeframe, and any custom message notes you choose to share.'
              ]
            },
            {
              heading: '2. How We Use Form and Contact Data',
              paragraphs: [
                'Any personal information submitted to our contact portal is used solely to respond to your technical inquiries, schedule consultations, evaluate project scopes, and follow up regarding ongoing IT services.',
                'We do not sell, rent, trade, or distribute your email records, phone numbers, or corporate profiles to third-party marketing companies.'
              ]
            },
            {
              heading: '3. Cookies & Analytical Metrics',
              paragraphs: [
                'We utilize basic cookies and browser local storage configurations to facilitate smooth user navigation, track active routing preferences, and record basic, non-personally identifiable analytical metrics to improve page load speeds.',
                'You can choose to disable cookies directly through your individual web browser settings, although certain aspects of the responsive layout may experience limited visual updates as a result.'
              ]
            },
            {
              heading: '4. Service Providers & System Integrity',
              paragraphs: [
                'We may coordinate with hosting providers, email servers, and basic software vendors to keep our communication pipelines online. These external service partners have access to your details solely to perform tasks on our behalf and are obligated not to disclose or use them for any other purpose.',
                'We maintain robust administrative and physical safeguards to protect information; however, no method of digital transmission over the internet is 100% secure. We cannot guarantee absolute mathematical security.'
              ]
            },
            {
              heading: '5. Data Retention & User Choices',
              paragraphs: [
                'We retain contact form details and email records solely for as long as necessary to fulfill project requirements, resolve help desk questions, or comply with standard local business accounting guidelines.',
                'You may request to review, update, or remove your personal information from our active list at any time by contacting us directly at nuzhat@hiyait.com.'
              ]
            }
          ]
        };

      case '/terms':
        return {
          title: 'Terms and Conditions',
          subtitle: 'Standard Agreement for Website Use & Consultation Inquiries',
          lastUpdated: 'January 1, 2026',
          sections: [
            {
              heading: '1. Agreement to Terms',
              paragraphs: [
                'By accessing, browsing, or using this website (hiyait.com), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.',
                'If you do not agree to these terms, you must discontinue using our website immediately.'
              ]
            },
            {
              heading: '2. Informational Content & Services',
              paragraphs: [
                'The information displayed on this website is provided solely for educational, informational, and general consulting reference purposes.',
                'Any service description, technical overview, or process guideline does not constitute a binding operational warranty. Official service parameters, service-level agreements (SLAs), and project timelines are established solely via custom signed service contracts.'
              ]
            },
            {
              heading: '3. Intellectual Property Rights',
              paragraphs: [
                'All elements of this website—including code, text layout, custom technology logos, geometric SVGs, color schemes, and structural designs—are the exclusive intellectual property of HIYA IT SOLUTIONS LLC and are protected by United States and international copyright laws.',
                'You are prohibited from copying, distributing, republishing, or scraping any of this content without our express written permission.'
              ]
            },
            {
              heading: '4. Prohibited Uses',
              paragraphs: [
                'You agree to use this website solely for lawful purposes. You are strictly forbidden from attempting to breach website security protocols, injecting malicious scripts, flooding contact forms with automated spam, or harvesting email addresses from our contact directory.'
              ]
            },
            {
              heading: '5. Limitation of Liability & Governing Law',
              paragraphs: [
                'HIYA IT SOLUTIONS LLC will not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website, minor server downtime, or errors in informational content.',
                'These terms and your use of this website are governed by the laws of the State of Florida, United States, without regard to conflict of law principles.'
              ]
            }
          ]
        };

      case '/cookie-policy':
        return {
          title: 'Cookie Policy',
          subtitle: 'How We Manage Necessary & Analytical Browser Storage',
          lastUpdated: 'January 1, 2026',
          sections: [
            {
              heading: '1. What Are Cookies?',
              paragraphs: [
                'Cookies are small text files stored directly on your computer or mobile device when you load web pages. They are widely used to make websites function correctly and provide analytical insights to site owners.'
              ]
            },
            {
              heading: '2. Cookies We Implement',
              paragraphs: [
                'Necessary Cookies: These are strictly required to operate the basic functions of our website. For example, they track routing parameters in our custom path-based SPA context so page-transitions display correctly.',
                'Analytical Cookies: We may use basic, anonymized web trackers to map how visitors navigate sections. This helps us optimize layouts, reduce load times, and fix broken links. We do not implement intrusive cross-site advertising or third-party marketing trackers.'
              ]
            },
            {
              heading: '3. Your Management Choices',
              paragraphs: [
                'You can control, block, or delete cookies at any time through your specific browser preference panel. However, please note that blocking essential cookies may affect how certain responsive layouts render.'
              ]
            }
          ]
        };

      case '/accessibility':
        return {
          title: 'Accessibility Statement',
          subtitle: 'Our Commitment to Inclusive Digital Design Standards',
          lastUpdated: 'January 1, 2026',
          sections: [
            {
              heading: '1. Our Commitment',
              paragraphs: [
                'HIYA IT SOLUTIONS LLC is committed to making our website usable and accessible to all visitors, including individuals with visual, auditory, cognitive, or motor difficulties.',
                'We design our pages with close adherence to Web Content Accessibility Guidelines (WCAG 2.1) Level AA standards, prioritizing high text-background contrast ratios, clear headings, logical navigation order, and semantic markup.'
              ]
            },
            {
              heading: '2. Accessible Design Features',
              paragraphs: [
                'Proper Keyboard Navigation: All buttons, text fields, links, and forms are fully focusable using standard tab controls, complete with highly visible blue outline indicators.',
                'Screen Reader Support: We use clean semantic HTML (such as header, nav, main, footer) to ensure assistive technologies can parse page flows logically.',
                'Reduced Motion Safety: Our animation frameworks respect system-level preferences and automatically scale down movement if "prefers-reduced-motion" is toggled.'
              ]
            },
            {
              heading: '3. Reporting Difficulties',
              paragraphs: [
                'If you experience any physical difficulty navigating our digital pages, or identify elements that do not display correctly with your assistive device, please contact us immediately.',
                'We will address your concerns promptly to provide an inclusive solution. Email us at: nuzhat@hiyait.com.'
              ]
            }
          ]
        };

      case '/security-disclosure':
        return {
          title: 'Security and Responsible Disclosure',
          subtitle: 'Coordinated Rules for Website Integrity Reporting',
          lastUpdated: 'January 1, 2026',
          sections: [
            {
              heading: '1. Security-Conscious Baseline',
              paragraphs: [
                'As an IT solutions company, we take security seriously. We maintain SSL configurations across our public domains, monitor form entry routes to prevent scripting injection, and keep server packages fully updated.'
              ]
            },
            {
              heading: '2. Responsible Disclosure Guideline',
              paragraphs: [
                'If you are a security researcher or technical visitor and believe you have discovered a potential vulnerability or configuration oversight on hiyait.com, we encourage you to report it to us responsibly.',
                'We request that you do not publish, share, or exploit any suspected technical vulnerability until we have had a reasonable physical timeframe to inspect and patch the issue.'
              ]
            },
            {
              heading: '3. Safe Reporting Method',
              paragraphs: [
                'Please send your detailed technical findings directly to nuzhat@hiyait.com. To protect our users and infrastructure, please do not include sensitive administrative files or full exploit payloads in your initial email.',
                'We will acknowledge receipt of your coordinate report within 2 business days and work to resolve verified vulnerabilities as a high priority.'
              ]
            }
          ]
        };

      default:
        return {
          title: 'Legal Document',
          subtitle: 'HIYA IT SOLUTIONS LLC Compliance',
          lastUpdated: 'January 1, 2026',
          sections: []
        };
    }
  };

  const doc = getDocumentContent();

  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
          <span>/</span>
          <span className="text-brand-primary">{doc.title.toUpperCase()}</span>
        </div>

        {/* Header Title Card */}
        <div className="border border-brand-border/60 bg-brand-card/40 p-6 md:p-10 rounded-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase">
            HIYA IT SOLUTIONS COMPLIANCE
          </span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-white mt-1">
            {doc.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-sans mt-2">
            {doc.subtitle}
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500 mt-6 pt-4 border-t border-brand-border/40">
            <LucideIcon name="Clock" size={12} />
            <span>LAST UPDATED: {doc.lastUpdated}</span>
          </div>
        </div>

        {/* Content Paragraph Block */}
        <div className="flex flex-col gap-10">
          {doc.sections.map((sec, idx) => (
            <section key={idx} className="flex flex-col gap-3 font-sans">
              <h2 className="font-display font-semibold text-lg sm:text-xl text-white flex items-center gap-2.5">
                <span className="w-1.5 h-6 bg-brand-primary/80 rounded-full" />
                {sec.heading}
              </h2>
              <div className="flex flex-col gap-3 pl-4 border-l border-brand-border/40">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer link to contact */}
        <div className="h-px bg-brand-border/40 my-12" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-500">
          <span>HIYA IT SOLUTIONS LLC</span>
          <Link to="/contact" className="text-brand-primary hover:underline flex items-center gap-1">
            <span>Contact compliance officer</span>
            <LucideIcon name="ArrowRight" size={12} />
          </Link>
        </div>

      </div>
    </div>
  );
}
