import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ExternalLink } from 'lucide-react';
import { Project } from '../lib/supabase';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-black">
        <div className="relative min-h-[420px] flex items-center justify-center bg-black">
          <img
            src={project.thumbnail_url}
            alt={project.title}
            className="max-h-[560px] max-w-full h-auto w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/20 backdrop-blur-sm rounded-full p-4"
              >
                <PlayCircle className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-stone-900">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-red-500 uppercase tracking-wide">Film</span>
            <span className="text-sm text-gray-400">{project.year}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Client: {project.client}</span>
            <div className="flex items-center gap-3">
              {project.trailer_url && (
                <motion.a
                  href={project.trailer_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-red-500 hover:text-red-400"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Open Trailer"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
