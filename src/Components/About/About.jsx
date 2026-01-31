import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import { User, Sparkles } from 'lucide-react';

const About = () => {
  const { about } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen pt-24 pb-12 px-6 bg-dark-bg relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6">
              <User className="text-primary w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              {about.title} <span className="text-primary">.</span>
            </h1>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Content */}
          <motion.div variants={item} className="glass-panel p-8 md:p-12 rounded-3xl space-y-6 text-lg text-gray-300 leading-relaxed">
            <div className="absolute -top-6 -right-6 text-primary/20 rotate-12">
              <Sparkles size={100} />
            </div>

            {about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;