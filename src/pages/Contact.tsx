import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';
import { motion } from 'motion/react';
import { ContactFormData } from '../types';

export default function Contact() {
  // Pre-select service of interest based on URL query parameters (e.g., ?interest=managed-it)
  const getInitialService = () => {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get('interest');
    if (interest) {
      const match = [
        'managed-it',
        'it-consulting',
        'cloud-solutions',
        'cybersecurity',
        'network-infrastructure',
        'custom-software',
        'website-digital',
        'backup-recovery'
      ].includes(interest);
      if (match) return interest;
    }
    return '';
  };

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceOfInterest: getInitialService(),
    contactMethod: 'email',
    timeframe: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync state if URL query changes
  useEffect(() => {
    const interest = getInitialService();
    if (interest) {
      setFormData((prev) => ({ ...prev, serviceOfInterest: interest }));
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (name === 'consent' && checked) {
        setErrors((prev) => ({ ...prev, consent: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof ContactFormData]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleRadioChange = (method: 'email' | 'phone') => {
    setFormData((prev) => ({ ...prev, contactMethod: method }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required.';
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    // Phone validation
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required.';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please provide a valid phone number.';
    }

    if (!formData.serviceOfInterest) {
      newErrors.serviceOfInterest = 'Please select a service of interest.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please input a brief summary of your needs.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the processing consent checklist.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API integration (Form submission to backend / local storage)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden">
      {/* Visual neon flows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumbs */}
        <div className="text-left flex flex-col gap-4 max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-primary">CONTACT</span>
          </div>
          
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase mt-2">
            SECURE ROUTE FOR COMMUNICATIONS
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a Consultation <br />
            <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-clip-text text-transparent text-glow-cyan">
              With Our IT Partners
            </span>
          </h1>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mt-1">
            Let us know where your systems are experiencing bottlenecks, what digital setups you are hoping to secure, or how we can help support your daily operations. Fill out our form below to book an initial plain-English review.
          </p>
        </div>

        {/* Form success layout */}
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto border border-brand-primary/40 bg-brand-card/60 backdrop-blur-md p-8 md:p-12 rounded-2xl text-center glow-cyan flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
              <LucideIcon name="Check" size={32} />
            </div>
            
            <div>
              <span className="font-mono text-xs tracking-widest text-brand-primary font-bold uppercase">
                COMMUNICATION_ESTABLISHED
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mt-1">
                Your Inquiry Was Received Successfully!
              </h2>
              <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed mt-3">
                Thank you for reaching out to **HIYA IT SOLUTIONS LLC**. A technology solutions representative (Manager: **Nuzhat Hussain**) will review your systems of interest and contact you at your preferred address within 1 business day.
              </p>
            </div>

            <div className="h-px bg-brand-border/40 w-full" />

            <div className="flex flex-col gap-2 font-mono text-xs text-gray-400 text-left w-full max-w-sm">
              <div className="flex justify-between border-b border-brand-border/30 pb-1.5">
                <span>RECIPIENT:</span>
                <span className="text-white">HIYA IT SOLUTIONS LLC</span>
              </div>
              <div className="flex justify-between border-b border-brand-border/30 pb-1.5">
                <span>ESTIMATED REVIEW:</span>
                <span className="text-brand-primary">‹ 24 BUSINESS HOURS</span>
              </div>
              <div className="flex justify-between">
                <span>SENDER NAME:</span>
                <span className="text-white">{formData.fullName.toUpperCase()}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  companyName: '',
                  email: '',
                  phone: '',
                  serviceOfInterest: '',
                  contactMethod: 'email',
                  timeframe: '',
                  message: '',
                  consent: false
                });
              }}
              className="mt-4 px-6 py-3 bg-brand-primary text-brand-dark rounded font-mono text-xs font-bold tracking-widest uppercase hover:bg-brand-primary/95 hover:glow-cyan transition-all"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left side: Contact form (8 cols) */}
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="lg:col-span-8 border border-brand-border/60 bg-brand-card/40 p-6 md:p-8 rounded-2xl text-left flex flex-col gap-6 relative"
              noValidate
            >
              {/* Laser top indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-mono text-xs font-semibold text-gray-300 tracking-wider">
                    FULL NAME *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`px-4 py-3 border rounded bg-brand-dark text-white font-sans text-sm focus:outline-none focus:border-brand-primary transition-colors ${errors.fullName ? 'border-red-500/40' : 'border-brand-border/60'}`}
                    placeholder="e.g. John Doe"
                  />
                  {errors.fullName && (
                    <span className="text-red-400 text-xs font-mono">{errors.fullName}</span>
                  )}
                </div>

                {/* Company name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="companyName" className="font-mono text-xs font-semibold text-gray-300 tracking-wider">
                    COMPANY NAME *
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={`px-4 py-3 border rounded bg-brand-dark text-white font-sans text-sm focus:outline-none focus:border-brand-primary transition-colors ${errors.companyName ? 'border-red-500/40' : 'border-brand-border/60'}`}
                    placeholder="e.g. Acme Services LLC"
                  />
                  {errors.companyName && (
                    <span className="text-red-400 text-xs font-mono">{errors.companyName}</span>
                  )}
                </div>

                {/* Business email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs font-semibold text-gray-300 tracking-wider">
                    BUSINESS EMAIL *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`px-4 py-3 border rounded bg-brand-dark text-white font-sans text-sm focus:outline-none focus:border-brand-primary transition-colors ${errors.email ? 'border-red-500/40' : 'border-brand-border/60'}`}
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs font-mono">{errors.email}</span>
                  )}
                </div>

                {/* Contact phone */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-mono text-xs font-semibold text-gray-300 tracking-wider">
                    CONTACT PHONE *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`px-4 py-3 border rounded bg-brand-dark text-white font-sans text-sm focus:outline-none focus:border-brand-primary transition-colors ${errors.phone ? 'border-red-500/40' : 'border-brand-border/60'}`}
                    placeholder="(813) 555-0199"
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-xs font-mono">{errors.phone}</span>
                  )}
                </div>

                {/* Service of Interest dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="serviceOfInterest" className="font-mono text-xs font-semibold text-gray-300 tracking-wider">
                    SERVICE OF INTEREST *
                  </label>
                  <select
                    id="serviceOfInterest"
                    name="serviceOfInterest"
                    required
                    value={formData.serviceOfInterest}
                    onChange={handleInputChange}
                    className={`px-4 py-3 border rounded bg-brand-dark text-white font-sans text-sm focus:outline-none focus:border-brand-primary transition-colors ${errors.serviceOfInterest ? 'border-red-500/40' : 'border-brand-border/60'}`}
                  >
                    <option value="">-- Please select systems of interest --</option>
                    <option value="managed-it">Managed IT Support</option>
                    <option value="it-consulting">Strategic IT Consulting</option>
                    <option value="cloud-solutions">Secure Cloud Solutions</option>
                    <option value="cybersecurity">Cybersecurity Assessments</option>
                    <option value="network-infrastructure">Network & Infrastructure</option>
                    <option value="custom-software">Custom Software & Automation</option>
                    <option value="website-digital">Website & Digital Solutions</option>
                    <option value="backup-recovery">Backup & Disaster Recovery</option>
                    <option value="consultation">General Consultation Audit</option>
                  </select>
                  {errors.serviceOfInterest && (
                    <span className="text-red-400 text-xs font-mono">{errors.serviceOfInterest}</span>
                  )}
                </div>

                {/* Approximate project timeframe */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="timeframe" className="font-mono text-xs font-semibold text-gray-300 tracking-wider">
                    APPROXIMATE TIMEFRAME
                  </label>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-brand-border/60 rounded bg-brand-dark text-white font-sans text-sm focus:outline-none focus:border-brand-primary transition-colors"
                  >
                    <option value="">-- Optional: Project urgency --</option>
                    <option value="immediate">Immediate Attention Needed</option>
                    <option value="month">Within Next 30 Days</option>
                    <option value="quarter">Next 1 to 3 Months</option>
                    <option value="future">Strategic Discovery Planning</option>
                  </select>
                </div>

              </div>

              {/* Preferred Contact Method radio panel */}
              <div className="flex flex-col gap-3 text-left">
                <span className="font-mono text-xs font-semibold text-gray-300 tracking-wider">
                  PREFERRED CONTACT METHOD
                </span>
                <div className="flex items-center gap-6 font-sans text-sm text-gray-300">
                  <button
                    type="button"
                    onClick={() => handleRadioChange('email')}
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.contactMethod === 'email' ? 'border-brand-primary' : 'border-brand-border'}`}>
                      {formData.contactMethod === 'email' && <div className="w-2 h-2 rounded-full bg-brand-primary" />}
                    </div>
                    <span>Email Address</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRadioChange('phone')}
                    className="flex items-center gap-2 group cursor-pointer"
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.contactMethod === 'phone' ? 'border-brand-primary' : 'border-brand-border'}`}>
                      {formData.contactMethod === 'phone' && <div className="w-2 h-2 rounded-full bg-brand-primary" />}
                    </div>
                    <span>Phone Call</span>
                  </button>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs font-semibold text-gray-300 tracking-wider">
                  BRIEF MESSAGE / SYSTEM CHALLENGES *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`px-4 py-3 border rounded bg-brand-dark text-white font-sans text-sm focus:outline-none focus:border-brand-primary transition-colors ${errors.message ? 'border-red-500/40' : 'border-brand-border/60'}`}
                  placeholder="Tell us what is slowing your business down, what systems you are planning next, or where you need dependable support..."
                />
                {errors.message && (
                  <span className="text-red-400 text-xs font-mono">{errors.message}</span>
                )}
              </div>

              {/* Consent check */}
              <div className="flex flex-col gap-2 text-left">
                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 cursor-pointer accent-brand-primary"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-400 font-sans leading-relaxed cursor-pointer select-none">
                    I consent to having **HIYA IT SOLUTIONS LLC** collect and process my input details to arrange this technical consultation in accordance with their Privacy Policy guidelines. *
                  </label>
                </div>
                {errors.consent && (
                  <span className="text-red-400 text-xs font-mono mt-1">{errors.consent}</span>
                )}
              </div>

              <div className="h-px bg-brand-border/40 my-2" />

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-brand-primary text-brand-dark rounded font-mono text-sm tracking-widest font-bold uppercase shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/95 hover:glow-cyan transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <LucideIcon name="Clock" size={16} className="animate-spin" />
                    <span>Establishing Connection...</span>
                  </>
                ) : (
                  <>
                    <LucideIcon name="ShieldCheck" size={16} />
                    <span>Submit Consultation Request</span>
                  </>
                )}
              </button>
            </form>

            {/* Right side: Contact Details panel (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-8 text-left">
              
              {/* Primary info card */}
              <div className="border border-brand-border/60 bg-brand-card/30 p-6 rounded-xl flex flex-col gap-4">
                <h3 className="font-display font-semibold text-white text-base">
                  Corporate Offices
                </h3>
                
                <div className="flex flex-col gap-3 font-sans text-sm text-gray-400">
                  <div className="flex items-start gap-3">
                    <LucideIcon name="MapPin" size={16} className="text-brand-secondary mt-0.5 shrink-0" />
                    <span>
                      HIYA IT SOLUTIONS LLC<br />
                      12902 National Dr, Apt C<br />
                      Tampa, FL 33617
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <LucideIcon name="Mail" size={16} className="text-brand-secondary shrink-0" />
                    <span>nuzhat@hiyait.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <LucideIcon name="Phone" size={16} className="text-brand-secondary shrink-0" />
                    <span>(850) 601-1657</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <LucideIcon name="Clock" size={16} className="text-brand-primary shrink-0" />
                    <span>Available by appointment</span>
                  </div>
                </div>
              </div>

              {/* Security info card */}
              <div className="border border-brand-border/60 bg-brand-card/30 p-6 rounded-xl flex flex-col gap-3 relative">
                <div className="absolute top-0 right-0 w-12 h-12 bg-brand-secondary/5 rounded-full blur-md" />
                <div className="flex items-center gap-2 text-brand-secondary font-mono text-[10px] tracking-widest uppercase font-semibold">
                  <LucideIcon name="Lock" size={12} />
                  <span>Encrypted Channel</span>
                </div>
                <h4 className="font-display font-semibold text-white text-sm">
                  Responsible Data Handling
                </h4>
                <p className="text-gray-400 text-xs font-sans leading-relaxed">
                  All communications sent via this portal are transmitted securely over SSL. We never sell, share, or publish customer emails, phone records, or company profiles to third-party providers.
                </p>
              </div>

              {/* Local Business Profile Card */}
              <div className="border border-brand-border/60 bg-brand-card/30 p-6 rounded-xl flex flex-col gap-3">
                <div className="flex items-center gap-2 text-brand-primary font-mono text-[10px] tracking-widest uppercase font-semibold">
                  <LucideIcon name="Check" size={12} />
                  <span>Florida Business Entity</span>
                </div>
                <h4 className="font-display font-semibold text-white text-sm">
                  HIYA IT SOLUTIONS LLC
                </h4>
                <div className="flex flex-col gap-1 text-xs text-gray-400 font-mono">
                  <div>ESTABLISHED: 2023</div>
                  <div>MANAGER: Nuzhat Hussain</div>
                  <div>DISTRICT: Tampa, FL</div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
