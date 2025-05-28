import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => (
  <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
    {/* Geometric accents */}
    <svg className="absolute top-8 right-8 w-32 h-32 opacity-10 z-0" viewBox="0 0 100 100" fill="none">
      <rect x="10" y="10" width="80" height="80" rx="18" stroke="#2de0fc" strokeWidth="2" />
      <line x1="20" y1="80" x2="80" y2="20" stroke="#b16cff" strokeWidth="1.5" />
    </svg>
    <svg className="absolute bottom-8 left-8 w-24 h-24 opacity-10 z-0" viewBox="0 0 80 80" fill="none">
      <circle cx="40" cy="40" r="32" stroke="#b16cff" strokeWidth="2" />
      <circle cx="40" cy="40" r="18" stroke="#2de0fc" strokeWidth="1.5" />
    </svg>
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-3xl w-full mx-auto bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-xl p-10 md:p-14 z-10"
    >
      <h1 className="text-4xl font-bold mb-10 text-left tracking-tight text-white/95">Terms of Service</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">1. Acceptance of Terms</h2>
        <p className="text-white/80 text-lg leading-relaxed">By accessing or using Neuralyn's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, please do not use our services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">2. Use of Service</h2>
        <p className="text-white/80 text-lg leading-relaxed">Neuralyn provides AI-powered healthcare solutions for informational and wellness purposes. You agree to use our services only for lawful purposes and in accordance with these terms.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">3. User Responsibilities</h2>
        <p className="text-white/80 text-lg leading-relaxed">You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree not to misuse the services or attempt unauthorized access.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">4. Intellectual Property</h2>
        <p className="text-white/80 text-lg leading-relaxed">All content, trademarks, and data on this site, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of Neuralyn or its licensors and are protected by intellectual property laws.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">5. Disclaimers</h2>
        <p className="text-white/80 text-lg leading-relaxed">Neuralyn's services are provided "as is" and "as available" without warranties of any kind. We do not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">6. Limitation of Liability</h2>
        <p className="text-white/80 text-lg leading-relaxed">To the fullest extent permitted by law, Neuralyn and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">7. Governing Law</h2>
        <p className="text-white/80 text-lg leading-relaxed">These Terms are governed by the laws of the United States and the State of Illinois, without regard to conflict of law principles.</p>
      </section>
      <section className="mb-2">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">8. Contact</h2>
        <p className="text-white/80 text-lg leading-relaxed">For questions about these Terms, contact us at <a href="mailto:info@neuralyn.health" className="text-blue-400 underline">info@neuralyn.health</a>.</p>
      </section>
    </motion.div>
  </div>
);

export default Terms; 