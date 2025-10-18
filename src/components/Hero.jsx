import { motion } from 'framer-motion';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import NeuralynBrainLogo from './NeuralynBrainLogo';
import { Link } from 'react-router-dom';

const OrangeParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: ['#ff6a00', '#ffb347', '#ff914d'] },
          opacity: { value: 0.18 },
          size: { value: 80, random: { enable: true, minimumValue: 40 } },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          shape: { type: 'circle' },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'bubble' },
          },
          modes: {
            bubble: { distance: 120, size: 100, duration: 2, opacity: 0.3 },
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

const Hero = ({ triggerIntro }) => {
  const sectionNames = [
    'About',
    'Mission',
    'Products',
    'HealMind_AI',
    'Contact',
  ];

  const specialLinks = [
    { label: 'Team', path: '/team' },
    { label: 'Investors', path: '/investors' },
    { label: 'Founder', path: '/founder' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Media/Press', path: '/media' },
    { label: 'Blog', path: '/blog' },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 bg-black">
      {/* Osmo-style animated blurred blobs */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[60vh] z-0 pointer-events-none"
        initial={{ scale: 1, opacity: 0.25 }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{ duration: 22, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #ff4d00 0%, #ffb347 60%, transparent 100%)',
          filter: 'blur(80px)',
          opacity: 0.16,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-[-20vw] w-[60vw] h-[50vh] z-0 pointer-events-none"
        initial={{ scale: 1, opacity: 0.18 }}
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{ duration: 28, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #ff4d00 0%, #ff6a00 60%, transparent 100%)',
          filter: 'blur(100px)',
          opacity: 0.11,
        }}
      />
      <motion.div
        className="absolute bottom-[-18vh] left-1/2 w-[50vw] h-[40vh] z-0 pointer-events-none"
        initial={{ scale: 1, opacity: 0.12 }}
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 32, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, #b16cff 0%, #ffb347 60%, transparent 100%)',
          filter: 'blur(120px)',
          opacity: 0.07,
        }}
      />
      {/* Minimal cross lines: top left and bottom right */}
      <svg className="absolute left-[-32px] top-[-32px] w-32 h-32 pointer-events-none z-0" style={{ opacity: 0.07 }}>
        <g stroke="#fff" strokeWidth="1.2">
          <line x1="10" y1="6" x2="54" y2="50" />
          <line x1="54" y1="6" x2="10" y2="50" />
        </g>
      </svg>
      <svg className="absolute right-0 bottom-0 w-48 h-48 pointer-events-none z-0" style={{ opacity: 0.13 }}>
        <g stroke="#fff" strokeWidth="1.2">
          <line x1="32" y1="40" x2="112" y2="120" />
          <line x1="112" y1="40" x2="32" y2="120" />
        </g>
      </svg>
      {/* Geometric accent shape (star) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g stroke="#fff" strokeWidth="2" strokeLinecap="round">
            <line x1="16" y1="4" x2="16" y2="28" />
            <line x1="4" y1="16" x2="28" y2="16" />
            <line x1="8" y1="8" x2="24" y2="24" />
            <line x1="24" y1="8" x2="8" y2="24" />
          </g>
        </svg>
      </div>
      {/* Left-side vertical section names (not clickable, animated) */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col space-y-2 text-left select-none hidden md:flex h-[220px] justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.13, delayChildren: 0.5 } },
        }}
      >
        {specialLinks.map((item, i) => (
          <motion.div
            key={item.label}
            variants={{
              hidden: { opacity: 0, x: -32 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
            }}
          >
            <Link
              to={item.path}
              className="text-white/60 hover:text-cyan-300 text-base font-medium tracking-wide transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 font-sans"
              style={{ letterSpacing: '0.01em' }}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.div>
      {/* Soft description at bottom left (animated) */}
      <motion.div
        className="absolute left-8 bottom-8 z-10 max-w-xs text-left select-none hidden md:block"
        initial={{ opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 1.3, ease: 'easeOut' }}
      >
        <span className="text-white/40 text-sm font-light leading-relaxed">
          Neuralyn is dedicated to emotionally intelligent healthcare,
          blending empathy, AI, and support for every journey.
        </span>
      </motion.div>
      {/* Existing hero content */}
      <OrangeParticles />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <NeuralynBrainLogo />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-light mb-6"
        >
          The Brain Behind
          <br />
          Better Health
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl"
        >
          Reimagining global healthcare with emotionally intelligent AI, faster, smarter, and deeply personal.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.04, 1], boxShadow: [
            '0 0 0px 0px #fff0',
            '0 0 12px 2px #fff2',
            '0 0 0px 0px #fff0'
          ] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.6 },
            y: { duration: 0.8, delay: 0.6 },
            scale: { duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
            boxShadow: { duration: 2.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
          }}
          whileHover={{ scale: 1.07, boxShadow: '0 0 16px 2px #fff3' }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-orange-400/30 hover:bg-orange-500/30 transition-colors duration-300 shadow-lg"
          onClick={() => {
            if (triggerIntro) {
              triggerIntro();
            } else {
              window.dispatchEvent(new Event('triggerNeuralynIntro'));
            }
          }}
        >
          Enter
        </motion.button>
      </div>
    </div>
  );
};

export default Hero; 