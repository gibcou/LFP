import React from 'react';
import Header from '../components/Header';
import ProjectGrid from '../components/ProjectGrid';
import { motion } from 'framer-motion';
import { useProjects } from '../hooks/useProjects';

const Projects: React.FC = () => {
  const { projects, loading, error } = useProjects();

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-16">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Complete Collection
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our full range of handcrafted film productions, from daily commercials to seasonal specialties
              </p>
            </div>
          </div>
        </motion.section>
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">Error loading projects: {error}</p>
          </div>
        ) : (
          <ProjectGrid projects={projects} />
        )}
      </main>
    </div>
  );
};

export default Projects;