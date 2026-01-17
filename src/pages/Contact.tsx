import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin } from 'lucide-react';

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                
                <div className="space-y-6 mb-8">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <MapPin className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-medium text-white">Studio Address</div>
                      <div>123 Film Production Way</div>
                      <div>Austin, TX 78701</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <Phone className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-medium text-white">Phone</div>
                      <div>(512) 555-0123</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <Mail className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <div>hello@longhornfilm.com</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-gray-300"
                  >
                    <Clock className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="font-medium text-white">Business Hours</div>
                      <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                      <div>Saturday: 10:00 AM - 4:00 PM</div>
                      <div>Sunday: By appointment only</div>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="bg-stone-800 hover:bg-red-600 p-3 rounded-lg transition-colors duration-200"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="bg-stone-800 hover:bg-red-600 p-3 rounded-lg transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <section className="bg-stone-950 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Your Next Project?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Whether it's a commercial, documentary, or narrative film, we're here to bring your vision to life with professional expertise and creative excellence.
                </p>
                <motion.a
                  href="mailto:hello@longhornfilm.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us Directly
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;