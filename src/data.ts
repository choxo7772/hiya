import { ServiceItem, IndustryItem, FAQItem, CaseStudy } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'managed-it',
    title: 'Managed IT Support',
    shortDesc: 'Reliable assistance for technical problems, system maintenance, software issues, user support, and everyday technology needs.',
    iconName: 'Headphones',
    longDesc: 'Our Managed IT Support service acts as your virtual, responsive internal IT department. We monitor and maintain your devices, workstations, and software systems to address vulnerabilities and issues before they result in costly business interruptions. Whether your employees need day-to-day help desk troubleshooting, software updates, or standard workstation onboarding, we deliver clear and responsive support.',
    problems: [
      'Frequent office downtime due to recurring technical issues.',
      'Employees losing productive hours trying to troubleshoot their own devices.',
      'Software updates and critical patches being neglected or applied inconsistently.',
      'Lack of a single, reliable contact point for technical problems.'
    ],
    includes: [
      'Unlimited help desk support for routine software and hardware queries.',
      'Proactive monitoring, patching, and operating system updates for workstations.',
      'User account provisioning, access adjustments, and offboarding procedures.',
      'Local network troubleshooting and peripheral device coordination.',
      'Regular performance checks to extend the lifecycle of your hardware assets.'
    ],
    idealClient: 'Growing small-to-midsize businesses that need reliable, day-to-day IT support and regular system maintenance but do not require a full-time, in-house IT hire.',
    benefits: [
      'Reduced downtime through proactive, continuous device monitoring.',
      'Improved employee productivity with access to swift remote help desk assistance.',
      'Predictable operational expenses for ongoing business support.',
      'Confidence that systems are operating on verified, fully updated software.'
    ],
    relatedServices: [
      { title: 'IT Consulting', id: 'it-consulting' },
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' },
      { title: 'Data Backup & Recovery Planning', id: 'backup-recovery' }
    ]
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    shortDesc: 'Practical technology planning, system evaluation, solution selection, and guidance aligned with business goals and available resources.',
    iconName: 'Compass',
    longDesc: 'Choosing the right software, licensing, or infrastructure is difficult and expensive without dedicated expertise. Our IT Consulting services provide clear, independent guidance to help you navigate technology decisions. We evaluate your current systems, listen to your business goals, and draft an honest roadmap for hardware upgrades, cloud migrations, or software implementations that fit your budget and physical timeline.',
    problems: [
      'Unclear technology expenses and overlapping software subscriptions.',
      'Purchasing expensive hardware or systems that do not meet actual operations.',
      'Confusion regarding technology lifecycles and when to retire legacy setups.',
      'Anxiety about selecting software providers without technical representation.'
    ],
    includes: [
      'Comprehensive audit of your existing technology assets, licenses, and accounts.',
      'Independent vendor analysis and unbiased product research/selection guidance.',
      'Strategic technology planning aligned with physical growth and team workflow requirements.',
      'Cost-benefit analysis of cloud solutions vs. on-premises hardware configurations.',
      'Standardized technology documentation and asset registry creation.'
    ],
    idealClient: 'Professional organizations planning a major transition, seeking to reduce unneeded software subscriptions, or requiring experienced oversight on upcoming system purchases.',
    benefits: [
      'Optimized software spend by consolidating redundant or underutilized accounts.',
      'Reduced purchase risks through technical due diligence and realistic scope setting.',
      'A clear, long-term technical roadmap designed around operational continuity.',
      'Direct, jargon-free technical answers to your structural planning questions.'
    ],
    relatedServices: [
      { title: 'Managed IT Support', id: 'managed-it' },
      { title: 'Cloud Solutions', id: 'cloud-solutions' },
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDesc: 'Support with cloud migration, file collaboration, account organization, cloud-based workflows, access management, and system optimization.',
    iconName: 'Cloud',
    longDesc: 'Migrating file directories, emails, or operational databases to the cloud can transform team collaboration—if done securely and organized correctly. We help businesses plan and execute cloud transitions (such as Microsoft 365 or Google Workspace setups), migrate legacy shared drives to structured cloud repositories, configure user access levels, and build cloud-based workflows that keep your field or office staff aligned.',
    problems: [
      'Teams struggling to access critical client files from outside the office.',
      'Accidental file duplication, sync conflicts, and lost document versions.',
      'Over-permissive sharing settings exposing sensitive company folders.',
      'Confusing email accounts and fragmented digital storage platforms.'
    ],
    includes: [
      'Structured migration of local directories, email setups, and calendars to cloud suites.',
      'Logical permission design and folder organization for shared business drives.',
      'Configuration of multi-device file syncing and secure document collaboration.',
      'Centralized admin console configuration and mobile device access management.',
      'Cloud storage capacity optimization and account consolidation audits.'
    ],
    idealClient: 'Businesses transition to remote or hybrid environments, or those utilizing legacy file sharing methods that slow down routine collaboration.',
    benefits: [
      'Secure, 24/7 access to work files from authorized mobile and desktop devices.',
      'Enhanced collaboration with multi-user co-authoring and clean version history.',
      'Reduced physical hardware dependencies and server maintenance overhead.',
      'Logical, easy-to-understand folder permissions tailored to job roles.'
    ],
    relatedServices: [
      { title: 'IT Consulting', id: 'it-consulting' },
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' },
      { title: 'Network and Infrastructure', id: 'network-infrastructure' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    shortDesc: 'Security assessments, account protection guidance, risk reduction, access-control planning, security awareness, and backup recommendations.',
    iconName: 'ShieldCheck',
    longDesc: 'A single compromised password or unsecured device can disrupt business operations for weeks. Our security-first approach is designed around practical risk reduction. We perform structured security assessments, identify systemic vulnerabilities in your network or email setup, guide the deployment of password managers and Multi-Factor Authentication (MFA), and help train your employees to spot digital phishing attempts.',
    problems: [
      'Anxiety regarding weak employee passwords and lack of centralized control.',
      'Suspected phishing emails, malware threats, or unauthorized access attempts.',
      'Absence of formal IT policies regarding remote device usage and secure data handling.',
      'Concerns about sensitive business data leaking through personal email or apps.'
    ],
    includes: [
      'Comprehensive configuration audits for business email systems and identity consoles.',
      'Structured deployment guidance for Multi-Factor Authentication (MFA) and Single Sign-On (SSO).',
      'Evaluation of current anti-malware protections, firewalls, and active endpoint security.',
      'Practical training materials to assist employees in recognizing social engineering/phishing.',
      'Device encryption configuration and access-control reviews for administrative users.'
    ],
    idealClient: 'Businesses handling sensitive client documents, payment details, or personal records that want to proactively strengthen their defense before a security incident occurs.',
    benefits: [
      'Significant reduction in business risk by establishing robust identity protections.',
      'Greater confidence during client security audits or professional liability insurance applications.',
      'A vigilant team capable of recognizing and reporting modern email scams.',
      'A structured protocol for managing network devices and employee permissions.'
    ],
    relatedServices: [
      { title: 'Managed IT Support', id: 'managed-it' },
      { title: 'Cloud Solutions', id: 'cloud-solutions' },
      { title: 'Data Backup & Recovery Planning', id: 'backup-recovery' }
    ]
  },
  {
    id: 'network-infrastructure',
    title: 'Network and Infrastructure',
    shortDesc: 'Planning and support for business networks, connectivity, workstations, devices, and essential technology infrastructure.',
    iconName: 'Network',
    longDesc: 'A slow, unreliable local network directly drains business productivity. We evaluate, plan, and support your physical technology infrastructure—including business routers, wireless access points, cabling pathways, network switches, and local hardware connections. We ensure your internet connection is distributed reliably, workstations are connected securely, and printing or local storage units remain accessible.',
    problems: [
      'Consistent Wi-Fi dropouts, slow file transfers, and unreliable network connections.',
      'Fragmented cable setups, confusing wiring, or outdated network switches.',
      'Inability to cleanly access local printers, scanners, or network-attached devices.',
      'Unsecured guest network setups exposing internal business files.'
    ],
    includes: [
      'Comprehensive mapping and assessment of your network switches, router, and access points.',
      'Configuration of separate, secure Wi-Fi channels for internal staff and visiting guests.',
      'Network device firmware updates, physical testing, and connectivity optimization.',
      'Coordination with local Internet Service Providers (ISPs) to resolve bandwidth limitations.',
      'Local network security monitoring, IP address structure, and port configuration.'
    ],
    idealClient: 'Offices, clinics, real estate spaces, or warehouses undergoing renovation, experiencing network performance bottlenecks, or setting up a brand-new workspace.',
    benefits: [
      'Consistent, high-performance network speeds across office environments.',
      'Secure isolation of business systems from public guest access.',
      'Neat, organized physical infrastructure that is easier to maintain and update.',
      'Properly scaled network equipment matching physical space and user density.'
    ],
    relatedServices: [
      { title: 'Managed IT Support', id: 'managed-it' },
      { title: 'Cloud Solutions', id: 'cloud-solutions' },
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' }
    ]
  },
  {
    id: 'custom-software',
    title: 'Custom Software and Automation',
    shortDesc: 'Customized tools, integrations, workflow automation, and digital solutions that reduce repetitive work and improve efficiency.',
    iconName: 'Code',
    longDesc: 'Manual, repetitive data entry is slow, expensive, and highly prone to human error. We build custom software components, connect disparate SaaS applications via APIs, and design automated workflows to save your team time. From generating automated customer alerts to linking your CRM system directly to your project tracking software, we build custom digital solutions that streamline your unique operational loops.',
    problems: [
      'Staff copying and pasting data back and forth between disconnected software applications.',
      'Manual, repetitive tasks (like sending recurring email notices) draining team hours.',
      'Lack of customized reports or aggregated data views needed for weekly operations.',
      'Off-the-shelf software failing to match a highly specific business workflow.'
    ],
    includes: [
      'Integration of cloud services, databases, and third-party tools via API configurations.',
      'Custom web utilities and software portals tailored to specific business tasks.',
      'Automation of data pipelines, notification dispatches, and form-submission workflows.',
      'Design and maintenance of simple, robust database schemas for tracking assets.',
      'Code reviews and refactoring for legacy internal automation scripts.'
    ],
    idealClient: 'Organizations operating multiple disconnected cloud tools that want to automate repetitive daily administrative procedures without hiring an entire developer team.',
    benefits: [
      'Substantial reduction in administrative hours spent on manual data entry.',
      'Virtually eliminated clerical errors in repeating business transactions.',
      'Unified software applications that sync details automatically in real-time.',
      'Custom-tailored business tools that match your exact operational procedures.'
    ],
    relatedServices: [
      { title: 'IT Consulting', id: 'it-consulting' },
      { title: 'Cloud Solutions', id: 'cloud-solutions' },
      { title: 'Website and Digital Solutions', id: 'website-digital' }
    ]
  },
  {
    id: 'website-digital',
    title: 'Website and Digital Solutions',
    shortDesc: 'Professional business websites, system integrations, online forms, digital platforms, performance improvements, and ongoing technical support.',
    iconName: 'Globe',
    longDesc: 'A professional website is more than just a digital brochure—it is a functional hub for leads, customer questions, and system integrations. We build responsive, lightning-fast business websites, configure secure online contact systems, optimize page speed performance, and integrate digital schedulers, client portals, and intake forms that feed cleanly into your back-office applications.',
    problems: [
      'Outdated business websites that load slowly or fail to display correctly on mobile.',
      'Broken links, obsolete content, and insecure connection warnings in search engines.',
      'Contact forms failing to deliver inquiries, or flooding your email with junk spam.',
      'Inability to easily integrate scheduling tools or lead systems into the active homepage.'
    ],
    includes: [
      'Bespoke, responsive website design optimized for modern mobile and desktop web browsers.',
      'Integration of lead capture modules, online scheduling, and customer intake forms.',
      'Advanced search engine visibility audits, speed tuning, and canonical setup.',
      'Secure SSL hosting setup, domain configuration, and continuous system monitoring.',
      'Technical upkeep support to ensure code, plug-ins, and security keys stay updated.'
    ],
    idealClient: 'Tampa-area service providers, growing businesses, or professionals who need an elegant, fast, and secure web interface that represents their services accurately.',
    benefits: [
      'A professional, secure digital presence that builds trust with incoming clients.',
      'Seamless lead intake workflows that automatically capture and organize inquiries.',
      'High-performance website speed resulting in better search visibility.',
      'Reliable technical assistance to keep your public-facing systems online.'
    ],
    relatedServices: [
      { title: 'IT Consulting', id: 'it-consulting' },
      { title: 'Custom Software and Automation', id: 'custom-software' },
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' }
    ]
  },
  {
    id: 'backup-recovery',
    title: 'Data Backup and Recovery Planning',
    shortDesc: 'Backup strategy, business continuity preparation, data-protection planning, and recovery-readiness guidance.',
    iconName: 'Save',
    longDesc: 'Data loss from drive failure, theft, or user error is a severe risk for any business. Our Data Backup and Recovery Planning services establish dependable backup protocols that protect your operations from catastrophe. We design multi-tiered backup architectures combining secure local snapshots with encrypted cloud storage, and establish simple, step-by-step recovery plans so you know exactly how to resume work if disaster strikes.',
    problems: [
      'Critical documents stored solely on individual employee laptops or single hard drives.',
      'Unmonitored backup systems that have silent, undetected sync failures.',
      'Lack of clear written procedures detailing how to restore system operations after failure.',
      'Anxiety regarding files being lost forever in the event of local office flooding or theft.'
    ],
    includes: [
      'Designing robust backup strategies incorporating local and secure cloud storage models.',
      'Setting up automated, quiet backup intervals for high-priority file directories.',
      'Performing dry-run recovery tests to verify that backed-up files can be cleanly restored.',
      'Drafting step-by-step Business Continuity checklists for emergency situations.',
      'Verifying storage retention durations and configuring folder encryption keys.'
    ],
    idealClient: 'Professional practices, offices, or agencies that hold confidential client records, accounting ledgers, or historical project data that cannot afford any data loss.',
    benefits: [
      'Peace of mind knowing your core operational files are secured in separate, safe zones.',
      'Minimized downtime during unexpected physical equipment failures or accidents.',
      'Clearly documented step-by-step restoration procedures that prevent panic during crises.',
      'Automated, continuous data-protection processes that do not require manual effort.'
    ],
    relatedServices: [
      { title: 'Managed IT Support', id: 'managed-it' },
      { title: 'Cloud Solutions', id: 'cloud-solutions' },
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' }
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    name: 'Professional Services',
    description: 'Providing tailored technology frameworks that protect confidential records, facilitate prompt document execution, and maintain responsive communication channels.',
    iconName: 'Briefcase',
    needs: 'Needs include secure document access control, client communication platforms, integrated calendar structures, robust email compliance, and dependable remote workplace access.'
  },
  {
    name: 'Small and Growing Businesses',
    description: 'Delivering scalable technology setups that streamline day-to-day administrative duties and adapt smoothly as your staff expands.',
    iconName: 'TrendingUp',
    needs: 'Needs include straightforward email management, simplified shared directories, cost-effective workstation updates, and easily configured administrative permissions.'
  },
  {
    name: 'Retail and E-commerce',
    description: 'Ensuring your public-facing checkout channels, inventory logs, and local connection systems operate reliably to prevent lost sales.',
    iconName: 'ShoppingBag',
    needs: 'Needs include secure payment system integration, high-performance website hosting, secure customer data storage, and resilient checkout connectivity.'
  },
  {
    name: 'Real Estate and Property Services',
    description: 'Supporting real estate professionals with fluid mobile file sharing and secure email access during off-site customer tours.',
    iconName: 'Home',
    needs: 'Needs include cloud-based folder hierarchies, encrypted mobile configurations, reliable tablet synchronization, and secure digital signature tools.'
  },
  {
    name: 'Healthcare and Wellness Offices',
    description: 'Helping professional offices operate on reliable local networks, protect customer access consoles, and support workflow continuity.',
    iconName: 'Activity',
    needs: 'Needs include stable local printing networks, secure workstation logouts, robust system backup loops, and highly structured computer account permissions.'
  },
  {
    name: 'Construction and Home Services',
    description: 'Structuring remote communication systems that allow field technicians, project managers, and central office admins to share files easily.',
    iconName: 'Hammer',
    needs: 'Needs include mobile scheduling applications, field file access portals, robust remote networks, and straightforward cloud-based invoicing.'
  },
  {
    name: 'Nonprofits and Community Organizations',
    description: 'Configuring clear, budget-friendly IT systems that maximize collaboration and simplify digital operations for busy volunteers.',
    iconName: 'Heart',
    needs: 'Needs include affordable software suite setups, structured file databases, basic data protection rules, and simple shared calendars.'
  },
  {
    name: 'Independent Professionals',
    description: 'Setting up clean, secure, and professional tech environments so independent contractors can focus entirely on delivering quality client work.',
    iconName: 'User',
    needs: 'Needs include professional business domains, secure cloud backup, centralized password managers, and reliable device hardware setups.'
  }
];

export const PROCESS_DATA = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We begin by learning the shape of your business. We listen to your team, map your daily work routines, and identify current technical obstacles, software systems, and long-term targets.'
  },
  {
    step: '02',
    title: 'Assessment',
    desc: 'We perform an objective review of your existing technology environment. We evaluate network stability, device lifecycles, backup reliability, and basic account safety rules.'
  },
  {
    step: '03',
    title: 'Strategy',
    desc: 'We present a practical, plain-English recommendation outlining specific priorities, a defined project scope, and clear cost estimates. We avoid unnecessary upgrades and focus purely on what supports your goals.'
  },
  {
    step: '04',
    title: 'Implementation',
    desc: 'We configure, improve, migrate, or deploy the selected solutions carefully. We coordinate this process with your team to avoid interrupting your daily business operations.'
  },
  {
    step: '05',
    title: 'Support',
    desc: 'We provide continued technical help, regular maintenance reviews, software updates, and clear advice as your operations grow and change.'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: 'What types of businesses do you support?',
    answer: 'We support small to midsize businesses, local professional service providers (like real estate, accounting, law, and consulting), health and wellness offices, and growing organizations. Our solutions are designed for businesses that need high-quality technical help but do not need a full-time, in-house IT manager.'
  },
  {
    question: 'Do you provide remote IT support?',
    answer: 'Yes. We can resolve the vast majority of software issues, access problems, user onboarding, and system updates securely using remote troubleshooting tools. This allows us to provide responsive and rapid assistance without waiting for a technician to travel.'
  },
  {
    question: 'Do you serve clients outside Tampa?',
    answer: 'While we are proud to be based in Tampa, Florida, and focus on supporting our local business community, our remote monitoring and management capabilities allow us to serve and support client systems anywhere across the United States.'
  },
  {
    question: 'Can you help improve an existing IT environment?',
    answer: 'Absolutely. We do not require you to scrap your current setup and start over. We review what you already have, identify specific bottlenecks or security gaps, and upgrade, integrate, or optimize your existing systems to work more efficiently.'
  },
  {
    question: 'Do you offer ongoing IT support?',
    answer: 'Yes, we offer ongoing managed support arrangements where we handle your routine device maintenance, software updates, data backups, help desk questions, and system monitoring on a consistent monthly basis. This helps keep your technology environment running smoothly.'
  },
  {
    question: 'Can you assist with cloud migration?',
    answer: 'Yes, we specialize in helping businesses safely transition local files, shared networks, and calendars to secure cloud setups, specifically Microsoft 365 or Google Workspace. We handle the account migration, logical permission mapping, and local workstation configurations.'
  },
  {
    question: 'Do you provide cybersecurity assessments?',
    answer: 'Yes. We review your current account structures, password policies, email security setups, endpoint anti-malware programs, and network firewalls. We then outline clear, practical recommendations to reduce your digital exposure and strengthen data protections.'
  },
  {
    question: 'Can you build custom software or workflow automation?',
    answer: 'Yes, we design custom digital tools and use API integrations to connect separate cloud tools (like linking your CRM, billing tools, or email platforms). This helps eliminate repetitive, manual copying and pasting, saving your team valuable hours.'
  },
  {
    question: 'Do you create and maintain business websites?',
    answer: 'Yes, we build modern, responsive, and secure business websites designed to represent your services professionally. We also integrate customer contact systems, booking calendars, and custom intake forms that feed directly into your back-office systems.'
  },
  {
    question: 'How does the consultation process work?',
    answer: 'It starts with a simple, no-obligation conversation. We chat about your current business, how you use technology, and what issues are slowing you down. If there is a good fit, we can move forward with a technical review and a clear, plain-English roadmap recommendation.'
  },
  {
    question: 'How is project pricing determined?',
    answer: 'Pricing is determined on a project-by-project or subscription basis depending on the specific service you need. We provide clear, itemized scopes and transparent estimates before any work begins, ensuring there are no hidden fees or unexpected billing surprises.'
  },
  {
    question: 'How quickly can a new project begin?',
    answer: 'This depends on our current schedule and the scale of your project, but we typically schedule initial discovery consultations within 1 to 2 business days. Implementation times are scheduled carefully to fit your business timeline.'
  },
  {
    question: 'Can services be customized?',
    answer: 'Yes, always. We do not believe in a one-size-fits-all approach. We adapt every service—from basic help desk support to custom cloud storage structures and website features—to fit your actual business scale, workflow, and budget.'
  },
  {
    question: 'How do I request support?',
    answer: 'For ongoing clients, we provide direct, convenient access methods including our responsive help desk portal, dedicated email support channels, and a direct telephone hotline so you can reach us quickly when technical challenges arise.'
  }
];

export const VALUE_STRIP_ITEMS = [
  { title: 'Business-Focused Solutions', desc: 'Practical tools designed solely around your actual daily work routines.' },
  { title: 'Responsive Communication', desc: 'Fast, professional, and jargon-free support when you need it.' },
  { title: 'Scalable Technology', desc: 'Secure environments configured to expand alongside your staff.' },
  { title: 'Security-Conscious Approach', desc: 'Account safety, encryption, and backups embedded in every step.' }
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: 'Personalized Solutions',
    desc: 'Our recommendations are built strictly around your specific workflows, goals, and constraints. We never push generic, pre-packaged IT schemes.'
  },
  {
    title: 'Clear Communication',
    desc: 'We explain technical systems in plain, straightforward English. You will always understand the what, why, and how behind our recommendations.'
  },
  {
    title: 'Responsive Support',
    desc: 'We recognize that computer or network downtime directly hurts your operations. We resolve support inquiries with urgency and precision.'
  },
  {
    title: 'Business Perspective',
    desc: 'We do not look at technology as a hobby. Every system we suggest must demonstrate real value—improving safety, productivity, or efficiency.'
  },
  {
    title: 'Scalable Planning',
    desc: 'We structure network and software directories with foresight, making it simple to onboard new employees or integrate new software down the road.'
  },
  {
    title: 'Security Awareness',
    desc: 'We proactively include security audits, account access limits, regular patches, and backup checks as essential baselines for everything we set up.'
  }
];

export const CHALLENGES_ITEMS = [
  { title: 'Recurring Technical Interruptions', desc: 'Slow computers, constant network dropouts, or application crashes that frustrate your team.' },
  { title: 'Disconnected Software & Workflows', desc: 'Valuable time wasted copying and pasting data manually between multiple tools that do not talk to each other.' },
  { title: 'Security & Access Concerns', desc: 'Anxiety regarding weak passwords, file-sharing controls, email spoofing, or missing backups.' },
  { title: 'Unclear Technology Expenses', desc: 'Confusing monthly software licensing bills, redundant subscriptions, and surprise hardware replacement costs.' },
  { title: 'Outdated Legacy Systems', desc: 'Relying on physical office drives or outdated software that makes secure remote work slow and difficult.' },
  { title: 'Limited Internal IT Resources', desc: 'Draining employee hours on minor troubleshooting instead of moving key business objectives forward.' }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'apex-medical-group',
    title: 'Network Modernization and Secure Backups for Apex Medical Group',
    client: 'Apex Medical Group',
    industry: 'Healthcare & Wellness',
    location: 'Tampa, FL',
    challenge: 'Apex Medical Group was struggling with an outdated, unmanaged office network. Staff experienced frequent Wi-Fi disconnects, slow access to local client charts, and inconsistent connection to office printers. Furthermore, their backup strategy relied on a single local hard drive that was rarely monitored or checked for recovery viability, posing a major risk of data loss and regulatory non-compliance.',
    solution: 'We performed a comprehensive network overhaul, installing enterprise-grade routing equipment, managed switches, and secure dual-band wireless access points. We split the local network into two secure channels: one isolated, encrypted channel for clinical workstations and a secondary restricted network for guest use. Finally, we deployed an automated, encrypted cloud backup solution that uploads critical data hourly, verified by weekly dry-run restoration audits.',
    results: [
      'Eliminated workstation disconnects and printer latency, restoring full clinic operational efficiency.',
      'Configured a completely secure guest network isolated from internal file storage.',
      'Deployed automated cloud-hybrid backups with proactive administrative notifications.',
      'Upgraded office computers and established standardized password policies with multi-factor authentication (MFA).'
    ],
    metrics: [
      { value: '99.9%', label: 'Network Uptime Achieved' },
      { value: '100%', label: 'Backup Restoration Verified' },
      { value: '0', label: 'Local Server Security Vulnerabilities' }
    ],
    servicesUsed: [
      { title: 'Managed IT Support', id: 'managed-it' },
      { title: 'Network & Infrastructure', id: 'network-infrastructure' },
      { title: 'Backup & Recovery Planning', id: 'backup-recovery' }
    ],
    quote: {
      text: "Nuzhat and the HIYA team completely simplified our office systems. We no longer lose clinical hours troubleshooting printer links or fearing critical file loss.",
      author: 'Dr. David Vance',
      role: 'Clinical Director, Apex Medical Group'
    },
    iconName: 'Activity',
    duration: '2 Weeks Implementation'
  },
  {
    id: 'premier-coast-real-estate',
    title: 'Secure Google Workspace Cloud Directory Migration for Premier Coast',
    client: 'Premier Coast Real Estate',
    industry: 'Real Estate & Property',
    location: 'St. Petersburg, FL',
    challenge: 'With dozens of agents working off-site and on mobile tablets, Premier Coast was suffering from severe collaboration bottlenecks. Files were stored on a physical desktop drive inside their central office, meaning remote agents had to email sensitive client records back and forth. This created widespread file duplication, sync conflicts, and security concerns regarding client privacy.',
    solution: 'We guided Premier Coast through a complete cloud migration to Google Workspace. We structured a unified shared drive with specific role-based permissions, allowing agents to access agreements and contracts securely on-site from any mobile device. We also implemented robust device security protocols, including remote-wipe configurations and mandatory 2-Step Verification for all email logins.',
    results: [
      'Successfully migrated over 120GB of historic property files and client contracts with zero data loss.',
      'Created a logical, secure folder hierarchy restricted to specific agency branches.',
      'Provided secure mobile and tablet synchronization so off-site agents can edit folders in real-time.',
      'Enforced domain-wide Multi-Factor Authentication to block unauthorized credential access.'
    ],
    metrics: [
      { value: '24/7', label: 'Secure Remote Access Enabled' },
      { value: '35+ Hrs', label: 'Saved Monthly per Agent' },
      { value: '100%', label: 'Credential Access Protection' }
    ],
    servicesUsed: [
      { title: 'Cloud Solutions', id: 'cloud-solutions' },
      { title: 'IT Consulting', id: 'it-consulting' },
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' }
    ],
    quote: {
      text: "Our agents are constantly in the field. Transitioning our directories to a structured cloud model has made real-time file sharing secure, fast, and simple.",
      author: 'Sarah Jenkins',
      role: 'Principal Broker & Founder, Premier Coast'
    },
    iconName: 'Home',
    duration: '10 Business Days'
  },
  {
    id: 'bay-area-logistics',
    title: 'Custom Invoicing Pipeline and SaaS Automation for Bay Area Logistics',
    client: 'Bay Area Logistics & Distribution',
    industry: 'Supply Chain & Operations',
    location: 'Tampa, FL',
    challenge: 'Bay Area Logistics faced major operational delays due to disconnected computer platforms. Administration staff had to copy and paste order details manually from their central CRM into their shipping manager and then into their billing software. This manual workflow was extremely slow, prone to transcription errors, and frequently delayed client notifications.',
    solution: 'We designed and implemented a custom software integration using robust cloud endpoints and SaaS APIs. We built a background automation script that connects their core client database directly with scheduling and invoicing platforms. When an order status updates, the pipeline automatically syncs client details across systems and dispatches automated SMS and email notifications to the client.',
    results: [
      'Eliminated manual copy-and-paste tasks, saving dozens of staff hours per week.',
      'Created seamless API synchronizations connecting CRM, dispatch, and billing suites.',
      'Set up automatic, real-time client alerts to increase customer satisfaction.',
      'Built a centralized administrative dashboard showing sync status and daily metrics.'
    ],
    metrics: [
      { value: '95%', label: 'Manual Copy-Paste Eliminated' },
      { value: '120 Hrs', label: 'Reclaimed Staff Hours / Mo' },
      { value: '< 2 sec', label: 'Cross-Platform Sync Latency' }
    ],
    servicesUsed: [
      { title: 'Custom Software & Automation', id: 'custom-software' },
      { title: 'IT Consulting', id: 'it-consulting' },
      { title: 'Website & Digital Solutions', id: 'website-digital' }
    ],
    quote: {
      text: "HIYA IT Solutions transformed how we handle order flows. Automating our repetitive daily tasks has reclaimed our administrative staff's time and eliminated entry errors.",
      author: 'Marcus Alvarez',
      role: 'Director of Operations, Bay Area Logistics'
    },
    iconName: 'Cpu',
    duration: '3 Weeks Development'
  },
  {
    id: 'horizon-accounting-partners',
    title: 'FINRA Compliance and High-Security Desktop Support for Horizon Accounting',
    client: 'Horizon Accounting Partners',
    industry: 'Finance & Insurance',
    location: 'Tampa, FL',
    challenge: 'Horizon Accounting was preparing for a critical regulatory compliance audit but realized their device management and software logins were completely unstructured. Employees stored customer tax forms directly on local workstation desktops with no disk encryption. Standard office computers had outdated operating system patches, and passwords were shared across administrative departments without Multi-Factor Authentication.',
    solution: 'We deployed a secure, centralized Mobile Device Management (MDM) framework across all workstation fleets. We enabled full-disk BitLocker encryption, locked down physical USB ports, and automated system patches. We rolled out a corporate password manager and enforced security keys and Multi-Factor Authentication across all accounting suites.',
    results: [
      'Enforced full-disk encryption and deactivated USB file-transfer permissions on all devices.',
      'Migrated and secured sensitive accounting software access with managed single sign-on (SSO).',
      'Passed the corporate compliance review with zero administrative vulnerabilities.',
      'Configured proactive workstation health and security tracking modules.'
    ],
    metrics: [
      { value: '100%', label: 'Compliance Audit Passed' },
      { value: '45 Devices', label: 'Secured via Central MDM' },
      { value: 'MFA', label: 'Enforced for All Employees' }
    ],
    servicesUsed: [
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' },
      { title: 'Managed IT Support', id: 'managed-it' },
      { title: 'IT Consulting', id: 'it-consulting' }
    ],
    quote: {
      text: "Preparing for audits used to keep us up at night. HIYA IT Solutions established ironclad security measures that let us operate with complete confidence.",
      author: 'James Vance',
      role: 'Managing Partner, Horizon Accounting'
    },
    iconName: 'Shield',
    duration: '12 Business Days'
  },
  {
    id: 'vanguard-legal-florida',
    title: 'Secure Remote Work and Cloud Migration for Vanguard Legal Group',
    client: 'Vanguard Legal Florida',
    industry: 'Legal & Compliance',
    location: 'Clearwater, FL',
    challenge: 'With trial attorneys frequently working from courtrooms and remote offices, Vanguard Legal was struggling to maintain client document security. Attorneys used unencrypted personal laptops to view highly confidential case documents stored on an aging in-office server via a slow, frequently failing VPN connection.',
    solution: 'We migrated the firm from local servers to a secure, cloud-hosted document management system with end-to-end encryption. We established secure, virtual private database channels for remote access and enforced strict conditional access rules restricting file viewing to registered, company-authorized devices only.',
    results: [
      'Replaced physical on-premise document storage with a secure, highly-available cloud repository.',
      'Implemented device identity verification rules to eliminate unauthorized file downloads.',
      'Provided smooth remote file access speeds, reducing case preparation latency.',
      'Deployed encrypted email exchange suites to prevent legal document intercept risk.'
    ],
    metrics: [
      { value: '0', label: 'Remote File Access Disconnects' },
      { value: '100%', label: 'Attorneys Secured in Field' },
      { value: '< 1 sec', label: 'Secure Document Load Time' }
    ],
    servicesUsed: [
      { title: 'Cloud Solutions', id: 'cloud-solutions' },
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' },
      { title: 'Backup & Recovery Planning', id: 'backup-recovery' }
    ],
    quote: {
      text: "Our attorneys need secure, instant access to case documents. Moving to a managed cloud model has made remote work incredibly fast and secure.",
      author: 'Arlene Montgomery',
      role: 'Operations Director, Vanguard Legal'
    },
    iconName: 'Briefcase',
    duration: '2 Weeks Implementation'
  },
  {
    id: 'beacon-dental-care',
    title: 'Secure Local Infrastructure and HIPAA Baseline Hardening for Beacon Dental',
    client: 'Beacon Dental Care',
    industry: 'Healthcare & Wellness',
    location: 'Brandon, FL',
    challenge: 'Beacon Dental was operating on a slow, vulnerable physical network. Reception computers, patient treatment rooms, and medical x-ray machines were on a single unsegmented network, risking patient privacy and exposing the office to potential HIPAA penalties. Furthermore, they had no remote support to fix sudden front-desk computer crashes.',
    solution: 'We structured a segmented network architecture, isolating physical treatment equipment and digital health records from guest Wi-Fi and admin machines. We deployed secure, encrypted office computers, enabled automated local security monitoring, and set up our rapid remote support desk to provide instant diagnostic assistance.',
    results: [
      'Isolated internal dental workstations on an encrypted local area network (LAN).',
      'Secured clinical charting platforms and established custom user permissions.',
      'Connected their administrative desk to our rapid remote help desk support system.',
      'Hardened wireless firewalls and automated critical workstation security patches.'
    ],
    metrics: [
      { value: 'HIPAA', label: 'Aligned Security Baselines' },
      { value: '< 15 min', label: 'Average Support Response' },
      { value: '3 Networks', label: 'Securely Segmented LAN' }
    ],
    servicesUsed: [
      { title: 'Network & Infrastructure', id: 'network-infrastructure' },
      { title: 'Managed IT Support', id: 'managed-it' },
      { title: 'Backup & Recovery Planning', id: 'backup-recovery' }
    ],
    quote: {
      text: "The remote help desk from HIYA has been a lifesaver. Any time we have an issue, a technician resolves it within minutes, keeping our patients on schedule.",
      author: 'Dr. Emily Carter',
      role: 'Lead Dentist, Beacon Dental Care'
    },
    iconName: 'Heart',
    duration: '5 Business Days'
  },
  {
    id: 'gulfside-distributors',
    title: 'Disaster Recovery and Business Continuity Overhaul for Gulfside Distributors',
    client: 'Gulfside Distributors',
    industry: 'Supply Chain & Operations',
    location: 'St. Petersburg, FL',
    challenge: 'Operating in coastal Florida, Gulfside Distributors suffered from frequent power outages and severe weather events. Their on-site inventory database sat on a single, local server rack. If the server went offline, physical warehouse operations came to a halt. They lacked any real disaster recovery plan or redundant backup systems.',
    solution: 'We designed a cloud-hybrid redundant replication architecture. We cloned their on-site inventory databases to secure cloud environments in real-time. We also set up an automatic failover switch and secondary cellular backup internet connections, so if power or cable lines went offline, warehouse devices instantly re-routed.',
    results: [
      'Established real-time on-site to cloud database backup synchronization.',
      'Configured redundant multi-carrier cellular backup routers for continuous operations.',
      'Created a clear disaster recovery checklist for physical office employees.',
      'Verified cloud failover capacity during a planned diagnostic shutdown simulation.'
    ],
    metrics: [
      { value: '0 min', label: 'Downtime During Power Outages' },
      { value: '100%', label: 'Real-Time Sync Accuracy' },
      { value: '< 5 sec', label: 'Automated Failover Switch' }
    ],
    servicesUsed: [
      { title: 'Backup & Recovery Planning', id: 'backup-recovery' },
      { title: 'Network & Infrastructure', id: 'network-infrastructure' },
      { title: 'Cloud Solutions', id: 'cloud-solutions' }
    ],
    quote: {
      text: "HIYA IT designed a fail-proof system. When our physical internet line went down last month, the cellular backup kicked in seamlessly, keeping our warehouse active.",
      author: 'Arthur Vance',
      role: 'Warehouse & Logistics Manager'
    },
    iconName: 'TrendingUp',
    duration: '10 Business Days'
  },
  {
    id: 'clara-interior-design',
    title: 'Responsive Web Platform and Automation Pipeline for Clara Interior Design',
    client: 'Clara Interior Design',
    industry: 'Creative & Architecture',
    location: 'Tampa, FL',
    challenge: 'Clara Interior Design had a slow, outdated website that failed to showcase their portfolio or load properly on mobile. Additionally, prospective clients had to fill out PDFs to request quotes. This resulted in delayed lead tracking and repetitive manual email scheduling for their design team.',
    solution: 'We designed and built a highly responsive, modern digital showcase website optimized for mobile. We integrated an interactive design inquiry form that automatically syncs contact details directly with their internal CRM and schedules introductory video consultations automatically.',
    results: [
      'Launched a stunning, high-performance portfolio website with optimized image loading.',
      'Integrated interactive discovery questionnaires to capture high-intent leads.',
      'Automated initial CRM logging and client booking sequences.',
      'Optimized site SEO and analytics to monitor traffic and inquiry rates.'
    ],
    metrics: [
      { value: '120%', label: 'Increase in Website Leads' },
      { value: '1.5s', label: 'Portfolio Page Load Time' },
      { value: '15 Hrs', label: 'Admin Time Saved per Week' }
    ],
    servicesUsed: [
      { title: 'Website & Digital Solutions', id: 'website-digital' },
      { title: 'Custom Software & Automation', id: 'custom-software' },
      { title: 'IT Consulting', id: 'it-consulting' }
    ],
    quote: {
      text: "Our new digital portfolio is incredibly fast and looks stunning. The automated intake questionnaire has converted more visitors into active design clients.",
      author: 'Clara Ross',
      role: 'Principal Architect & Owner'
    },
    iconName: 'Layers',
    duration: '3 Weeks Implementation'
  },
  {
    id: 'sarasota-manufacturing-corp',
    title: 'Security Baseline Auditing and Multi-Factor Enforcement for Sarasota Manufacturing',
    client: 'Sarasota Manufacturing Corp',
    industry: 'Supply Chain & Operations',
    location: 'Sarasota, FL',
    challenge: 'Sarasota Manufacturing faced major cyber threats, including several phishing attacks that compromised administrative emails. They had no standardized security guidelines, and staff frequently reused basic login passwords across sensitive payroll and logistics applications.',
    solution: 'We conducted an in-depth security posture audit. We deployed password managers, enforced mandatory Multi-Factor Authentication (MFA), and migrated corporate email accounts to a modern, secured Google Workspace tenant. We also implemented email spam filters and conducted live staff security training.',
    results: [
      'Conducted full-scope threat audits identifying network and password vulnerabilities.',
      'Enforced domain-wide Multi-Factor Authentication (MFA) on all office logins.',
      'Deactivated legacy unsecured email connections to prevent spoofing risks.',
      'Conducted interactive email phishing simulation training for administrative staff.'
    ],
    metrics: [
      { value: '100%', label: 'MFA Enrollment Achieved' },
      { value: '98%', label: 'Reduction in Phishing Risks' },
      { value: '0', label: 'Credential Breaches Post-Deployment' }
    ],
    servicesUsed: [
      { title: 'Cybersecurity Solutions', id: 'cybersecurity' },
      { title: 'IT Consulting', id: 'it-consulting' },
      { title: 'Cloud Solutions', id: 'cloud-solutions' }
    ],
    quote: {
      text: "HIYA IT completely secured our workplace. Their team trained our employees and provided clean security rules that eliminated phishing scares.",
      author: 'William Sterling',
      role: 'VP of Manufacturing Operations'
    },
    iconName: 'Lock',
    duration: '1 Week Implementation'
  }
];

