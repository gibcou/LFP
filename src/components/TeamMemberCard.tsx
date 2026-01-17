import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { TeamMember } from '../lib/supabase';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="bg-stone-900 rounded-lg overflow-hidden">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={member.headshot_url}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              {member.linkedin_url && (
                <motion.a
                  href={member.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
            {member.name}
          </h3>
          
          <p className="text-red-500 font-medium mb-3">
            {member.role}
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;