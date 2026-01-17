import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import { motion } from 'framer-motion';
import { useProjects } from '../hooks/useProjects';

const Home: React.FC = () => {
  const { projects, loading, error } = useProjects();

  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main>
        <Hero 
          title="Longhorn Film Productions"
          subtitle="Crafting Cinematic Stories That Captivate Audiences"
          ctaText="View Our Work"
        />
        
        <section id="projects" className="bg-stone-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover our latest productions that showcase our commitment to cinematic excellence and storytelling innovation.
                </p>
              </motion.div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-red-500 text-lg">Error loading projects: {error}</p>
              </div>
            ) : (
              <ProjectGrid projects={featuredProjects} />
            )}
          </div>
        </section>

        <section className="bg-black py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div className="p-8">
                <div className="text-4xl font-bold text-red-500 mb-4">50+</div>
                <div className="text-xl text-white mb-2">Projects Completed</div>
                <div className="text-gray-400">From commercials to feature films</div>
              </div>
              
              <div className="p-8">
                <div className="text-4xl font-bold text-red-500 mb-4">15</div>
                <div className="text-xl text-white mb-2">Years of Experience</div>
                <div className="text-gray-400">Established in 2009</div>
              </div>
              
              <div className="p-8">
                <div className="text-4xl font-bold text-red-500 mb-4">25+</div>
                <div className="text-xl text-white mb-2">Industry Awards</div>
                <div className="text-gray-400">Recognition for excellence</div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;