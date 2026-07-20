/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, useRouter } from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './components/ServiceDetail';
import Industries from './pages/Industries';
import Process from './pages/Process';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';
import { motion, AnimatePresence } from 'motion/react';

function AppContent() {
  const { currentPath } = useRouter();

  // Route Dispatcher Function
  const renderPage = () => {
    // Exact matching first
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/industries':
        return <Industries />;
      case '/process':
        return <Process />;
      case '/faq':
        return <FAQ />;
      case '/contact':
        return <Contact />;
      case '/case-studies':
        return <CaseStudies />;
      case '/privacy':
      case '/terms':
      case '/accessibility':
      case '/security-disclosure':
      case '/cookie-policy':
        return <Legal path={currentPath} />;
    }

    // Dynamic service detail route matching
    if (currentPath.startsWith('/services/')) {
      const serviceId = currentPath.substring('/services/'.length);
      return <ServiceDetail serviceId={serviceId} />;
    }

    // Dynamic case studies detail route matching
    if (currentPath.startsWith('/case-studies/')) {
      const studyId = currentPath.substring('/case-studies/'.length);
      return <CaseStudyDetail studyId={studyId} />;
    }

    // Fallback to NotFound
    return <NotFound />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-gray-200">
      {/* Dynamic Sticky Header */}
      <Header />

      {/* Main Content Area with fluid motion-based route shifts */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full flex flex-col min-h-[70vh]"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Structured Site Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

