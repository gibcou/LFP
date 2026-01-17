import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';
import { Project } from '../lib/supabase';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const navigate = useNavigate();
  const films = projects.filter(project => (project as any).status === 'Released');

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Films</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Completed films from our catalog.</p>
        </div>


        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {films.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => navigate(`/projects/${project.id}`)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {films.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No completed films available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;
