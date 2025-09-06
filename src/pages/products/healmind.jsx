import React from 'react';
import { motion } from 'framer-motion';
import { FiMic, FiHeart, FiFileText, FiGlobe } from 'react-icons/fi';


const HealMind = () => {
  const handleTryNow = (e) => {

    // console.log('=== BUTTON CLICKED ===');
    // console.log('Event:', e);
    // console.log('Event type:', e.type);
    // console.log('Target:', e.target);
    
    // Show alert to confirm button is working
    // alert('Button clickeddirecting to HealMind...');
    
    // Simple redirect - try the most basic approach first
    const url = 'https://healmind.neuralyn.health/';
    console.log('Redirecting to:', url);

    // window.location.href = url;
    // 
    // Try window.open first
    try {
      window.open(url, '_blank');
      console.log('window.open successful');
    } catch (error) {
      console.log('window.open failed, trying location.href:', error);
      window.location.href = url;
    }

  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-20 relative overflow-hidden">

      {/* Film grain overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'repeating-linear-gradient(0deg, #222 0px, #222 2px, transparent 2px, transparent 4px)', opacity: 0.07 }} />
      
      {/* Unique geometric animated shapes for products pages */}
      <motion.div
        className="absolute -top-1/4 left-1/4 w-[65vw] h-[60vh] z-0 pointer-events-none"
        initial={{ scale: 1, opacity: 0.16 }}
        animate={{ scale: [1, 1.13, 1], opacity: [0.16, 0.26, 0.16] }}
        transition={{ duration: 19, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(ellipse 60% 40% at 60% 40%, #ffb347 0%, #2de0fc 60%, transparent 100%)', filter: 'blur(110px)' }}
      />
      <motion.div
        className="absolute bottom-[-12vh] right-[-12vw] w-[45vw] h-[45vh] z-0 pointer-events-none"
        initial={{ scale: 1, opacity: 0.13 }}
        animate={{ scale: [1, 1.11, 1], opacity: [0.13, 0.21, 0.13] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(ellipse 50% 30% at 50% 50%, #b16cff 0%, #ffb347 60%, transparent 100%)', filter: 'blur(90px)' }}
      />
      
      {/* Subtle grid lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.03 }}>
        <defs>
          <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold mb-16 text-center relative"
        >
          HealMind_AI
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-4"
          />
        </motion.h1>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Panel - Brain Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl rounded-3xl p-12 border border-cyan-300/20 shadow-[0_8px_32px_0_rgba(45,224,252,0.15)]">
              {/* Animated Brain Logo */}
              <motion.svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
                animate={{ 
                  scale: [1, 1.05, 1],
                  filter: [
                    'drop-shadow(0 0 20px #2de0fc)',
                    'drop-shadow(0 0 40px #2de0fc)',
                    'drop-shadow(0 0 20px #2de0fc)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Brain shape */}
                <path 
                  d="M60,90 Q40,40 90,30 Q110,10 130,30 Q180,40 160,90 Q200,120 150,150 Q130,170 110,150 Q90,170 70,150 Q20,120 60,90 Z" 
                  fill="url(#brainGradient)" 
                  stroke="#2de0fc" 
                  strokeWidth="3"
                />
                {/* Neural pathways */}
                <path d="M90,30 Q100,60 110,150" stroke="#2de0fc" strokeWidth="2" fill="none" opacity="0.7"/>
                <path d="M130,30 Q120,60 110,150" stroke="#2de0fc" strokeWidth="2" fill="none" opacity="0.7"/>
                <path d="M60,90 Q80,110 110,150" stroke="#2de0fc" strokeWidth="2" fill="none" opacity="0.7"/>
                <path d="M160,90 Q140,110 110,150" stroke="#2de0fc" strokeWidth="2" fill="none" opacity="0.7"/>
                
                {/* Animated neural sparks */}
                <motion.circle
                  cx="90" cy="30" r="4" fill="#fff"
                  animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                />
                <motion.circle
                  cx="130" cy="30" r="4" fill="#fff"
                  animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: 0.7 }}
                />
                <motion.circle
                  cx="110" cy="150" r="4" fill="#fff"
                  animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity, delay: 1 }}
                />
                
                <defs>
                  <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2de0fc" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#0a223a" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#1e293b" stopOpacity="0.9"/>
                  </linearGradient>
                </defs>
              </motion.svg>
            </div>
          </motion.div>

          {/* Right Panel - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Voice Analysis Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-300/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-gray-400 text-2xl">
                  <FiMic />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Voice Analysis</h3>
                  <p className="text-white/70">Advanced AI analyzes your voice patterns to understand emotional states and provide personalized support.</p>
                </div>
              </div>
            </motion.div>

            {/* Emotional Intelligence Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-300/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-pink-400 text-2xl">
                  <FiHeart />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emotional Intelligence</h3>
                  <p className="text-white/70">Our AI understands and responds to your emotional needs with empathy and care.</p>
                </div>
              </div>
            </motion.div>

            {/* Personalized Plans Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-300/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-amber-400 text-2xl">
                  <FiFileText />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
                  <p className="text-white/70">Get customized wellness plans based on your unique needs and goals.</p>
                </div>
              </div>
            </motion.div>

            {/* 24/7 Support Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-300/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-blue-400 text-2xl">
                  <FiGlobe />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-white/70">Access mental health support whenever you need it, from anywhere in the world.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
       
        {/* Call to Action Button */}
        <div className="text-center mt-16 relative z-50">
          <button
            onClick={handleTryNow}
            onMouseDown={() => console.log('Button mouse down')}
            onMouseUp={() => console.log('Button mouse up')}
            onMouseEnter={() => console.log('Button mouse enter')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer relative z-50"
            style={{ 
              pointerEvents: 'auto',
              position: 'relative',
              zIndex: 9999,
              border: 'none',
              outline: 'none',
              display: 'inline-block',
              minWidth: '200px',
              minHeight: '50px'
            }}
            type="button"
          >
            Try HealMind_AI Now
          </button>

          {/* <button onClick={handleTryNow}>
            click now
          </button> */}
          
        </div>
      </div>
    </div>
  );
};

export default HealMind; 