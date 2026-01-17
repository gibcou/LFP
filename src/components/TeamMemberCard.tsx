import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, X } from 'lucide-react';
import { TeamMember } from '../lib/supabase';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      transition={{ duration: 0.2 }}
      className="group cursor-pointer"
      onClick={() => setOpen(true)}
    >
      <div className="bg-stone-900 rounded-lg overflow-hidden">
        <div className="aspect-square relative overflow-hidden">
          <img
            src={member.headshot_url}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
            {member.name}
          </h3>
          
          <p className="text-red-500 font-medium mb-3">
            {member.role}
          </p>
          
          {member.name !== 'Julie Campbell' && (
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
              {member.bio}
            </p>
          )}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl mx-4 rounded-2xl bg-stone-900/95 border border-stone-800 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-[380px_1fr]">
              <div className="bg-black flex items-center justify-center p-6">
                <img
                  src={member.headshot_url}
                  alt={member.name}
                  className="max-h-[520px] max-w-full h-auto w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="p-6 border-b border-stone-800">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-red-500 font-medium mt-1">{member.role}</p>
                </div>
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 whitespace-pre-line text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  {member.linkedin_url && (
                    <a
                      href={member.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-gray-300 hover:text-white underline"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-stone-800/80 hover:bg-stone-700 text-white rounded-full p-2"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default TeamMemberCard;
