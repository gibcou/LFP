import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Project } from '../lib/supabase';

interface UpcomingSectionProps {
  projects: Project[];
}

const UpcomingSection: React.FC<UpcomingSectionProps> = ({ projects }) => {
  const navigate = useNavigate();
  const upcoming = projects.filter(p => (p as any).status && (p as any).status !== 'Released');
  if (upcoming.length === 0) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Upcoming</h2>
          <p className="text-gray-300">American Promise and Demons Among Us</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {upcoming.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => navigate(`/projects/${project.id}`)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingSection;
