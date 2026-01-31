import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import Button from '../UI/Button';
import Card from '../UI/Card';
import profileImg from '@assets/profile-pic.jpg';
import { ArrowRight, Star, Code2 } from 'lucide-react';

const Hero = () => {
  const { personalInfo, skills } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium">
            <Star size={16} className="fill-current" />
            <span>Available for work</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl lg:text-7xl font-bold leading-tight">
            Hello, I'm <br />
            <span className="text-gradient">{personalInfo.name}</span>
          </motion.h1>

          <motion.p variants={item} className="text-xl text-gray-400 max-w-xl leading-relaxed">
            {personalInfo.description}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button onClick={() => window.open(personalInfo.socials[0].url, '_blank')}>
              Contact Me <ArrowRight className="w-4 h-4" />
            </Button>
            <div className="flex gap-4 items-center px-6">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">Tech Stack</p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="p-3 flex items-center gap-3 bg-white/5 hover:bg-white/10 border-transparent">
                  <skill.icon className="text-primary" size={20} />
                  <span className="font-medium text-sm text-gray-300">{skill.name}</span>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[600px] mx-auto">
            {/* Decorative Frame */}
            <div className="absolute inset-0 border-2 border-white/10 rounded-3xl transform rotate-6 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl transform -rotate-6 -translate-x-4 -translate-y-4 blur-xl" />

            {/* Main Image Container */}
            <div className="absolute inset-0 bg-dark-card rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-50 z-10" />
              <img
                src={profileImg}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Float Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-12 z-20"
            >
              <Card className="p-4 flex items-center gap-3 !bg-dark-card/90 !backdrop-blur-xl">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Expertise</p>
                  <p className="font-bold">React Developer</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;