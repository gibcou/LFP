import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMemberCard from '../components/TeamMemberCard';
import { motion } from 'framer-motion';
import { useTeamMembers } from '../hooks/useTeamMembers';

const About: React.FC = () => {
  const { teamMembers, loading, error } = useTeamMembers();

  const equipment = [
    'RED Komodo 6K Cinema Camera',
    'Canon C70 Cinema Camera',
    'DJI Ronin 4D 4-Axis Gimbal',
    'ARRI SkyPanel S60-C LED',
    'Aputure 600D LED Light',
    'Sennheiser MKH 416 Shotgun Mic',
    'Zoom F8n Pro Field Recorder',
    'Adobe Premiere Pro & After Effects',
    'DaVinci Resolve Studio',
    'Final Cut Pro X'
  ];

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
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Longhorn Film Productions
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Since 2009, we've been crafting compelling visual stories that connect with audiences and drive results for our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Founded in Austin, Texas, Longhorn Film Productions began as a small team of passionate filmmakers with a vision to create impactful visual content. Over the past 15 years, we've grown into a full-service production company while maintaining our commitment to storytelling excellence.
                  </p>
                  <p>
                    Our name reflects our Texas roots and the strength, determination, and authenticity we bring to every project. We believe in the power of visual storytelling to inspire, educate, and entertain.
                  </p>
                  <p>
                    From our first commercial shoot to our latest feature film, we've remained dedicated to pushing creative boundaries and delivering exceptional results for our clients.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=film%20production%20studio%20with%20camera%20equipment%20professional%20lighting%20setup%20cinematic%20atmosphere%20dark%20background&image_size=portrait_4_3"
                  alt="Film Production Studio"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <section className="bg-stone-950 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Meet the talented professionals who bring our creative vision to life.
              </p>
            </motion.div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-red-500 text-lg">Error loading team members: {error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <TeamMemberCard member={member} />
                  </motion.div>
                ))}
              </div>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Equipment</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We use industry-standard equipment to ensure the highest quality production values.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-stone-900 p-6 rounded-lg border border-stone-800 hover:border-red-600 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-white font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
