import { useState } from 'react';
import { FAQS_DATA } from '../data';
import { Link } from '../components/Router';
import LucideIcon from '../components/LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  key?: any;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className={`border border-brand-border/60 bg-brand-card/40 hover:bg-brand-card/75 rounded-xl transition-all duration-300 relative overflow-hidden ${isOpen ? 'border-brand-primary/30 shadow-md shadow-brand-primary/5' : ''}`}>
      {/* Slide line indicators */}
      {isOpen && (
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand-primary" />
      )}
      
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-medium text-base text-white focus:outline-none focus-visible:bg-white/5"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <div className={`w-6 h-6 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-primary/10 text-brand-primary border-brand-primary/20' : ''}`}>
          <LucideIcon name="ChevronDown" size={14} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 text-sm md:text-base font-sans text-gray-300 leading-relaxed border-t border-brand-border/30">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="relative bg-brand-dark pt-28 pb-24 overflow-hidden">
      {/* Backdrop elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12">
        
        {/* Page Header */}
        <div className="text-left flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
            <Link to="/" className="hover:text-brand-primary transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-brand-primary">FAQ</span>
          </div>
          
          <span className="font-mono text-xs tracking-widest text-brand-secondary font-bold uppercase mt-2">
            FREQUENTLY ASKED INQUIRIES
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Common Inquiries & <br />
            <span className="bg-gradient-to-r from-brand-primary via-white to-brand-secondary bg-clip-text text-transparent text-glow-cyan">
              Technical Clarifications
            </span>
          </h1>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mt-1">
            We believe in honest, direct information. Browse our answers to common questions regarding support models, custom configurations, billing frameworks, and Tampa area scheduling logistics.
          </p>
        </div>

        {/* Collapsible Accordions Block */}
        <div className="flex flex-col gap-4 text-left">
          {FAQS_DATA.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>

        {/* Custom inquiry card */}
        <div className="border border-brand-border/60 bg-brand-card/30 p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left mt-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-display font-semibold text-lg text-white">
              Have a Different Technical Question?
            </h3>
            <p className="text-gray-400 text-sm font-sans leading-relaxed">
              We are ready to provide custom, direct answers to your unique technical needs. Contact us direct.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-brand-primary text-brand-dark rounded font-mono text-xs font-bold tracking-widest uppercase hover:bg-brand-primary/95 hover:glow-cyan transition-all shrink-0"
          >
            Ask a Representative
          </Link>
        </div>

      </div>
    </div>
  );
}
