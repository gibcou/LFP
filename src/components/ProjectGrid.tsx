import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../lib/supabase';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'commercial', 'narrative', 'documentary'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse collection of film productions spanning commercial, narrative, and documentary work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-stone-800 text-gray-300 hover:bg-stone-700 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => {
                  if (project.trailer_url) {
                    window.open(project.trailer_url, '_blank');
                  }
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;