import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    budget_range: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        project_type: '',
        budget_range: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-stone-900 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-lg flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-green-400">Thank you! We'll get back to you soon.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-600/20 border border-red-500 rounded-lg">
          <span className="text-red-400">Something went wrong. Please try again.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="(555) 123-4567"
            />
          </div>
          
          <div>
            <label htmlFor="project_type" className="block text-sm font-medium text-gray-300 mb-2">
              Project Type
            </label>
            <select
              id="project_type"
              name="project_type"
              value={formData.project_type}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Select Project Type</option>
              <option value="commercial">Commercial</option>
              <option value="narrative">Narrative Film</option>
              <option value="documentary">Documentary</option>
              <option value="music-video">Music Video</option>
              <option value="corporate">Corporate Video</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="budget_range" className="block text-sm font-medium text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            id="budget_range"
            name="budget_range"
            value={formData.budget_range}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          >
            <option value="">Select Budget Range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
            <option value="discuss">Let's Discuss</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-800 border border-stone-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project vision, timeline, and any specific requirements..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;