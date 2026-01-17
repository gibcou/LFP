import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title = "Longhorn Film Productions", 
  subtitle = "Crafting Cinematic Stories That Captivate Audiences", 
  ctaText = "View Our Work",
  backgroundImage = "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=cinematic%20film%20production%20studio%20dark%20background%20with%20camera%20equipment%20and%20lighting%20professional%20movie%20set%20atmosphere&image_size=landscape_16_9"
}) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="pt-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {ctaText}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;