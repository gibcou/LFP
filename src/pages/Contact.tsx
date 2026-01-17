import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
// Removed icon imports as contact info and social follow sections are removed

const Contact: React.FC = () => {
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
                Let's Create Something Amazing
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ready to bring your vision to life? Get in touch with our team and let's discuss your next project.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Removed CTA section with Email Us Directly button */}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
