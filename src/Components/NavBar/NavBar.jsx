import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import Button, { cn } from '../UI/Button';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
                scrolled
                    ? 'bg-dark-bg/80 backdrop-blur-lg border-white/10 py-4'
                    : 'bg-transparent border-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <Code2 size={24} />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        {portfolioData.personalInfo.name.split(' ')[0]}
                    </span>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {portfolioData.navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        cn(
                                            'text-sm font-medium transition-colors hover:text-primary',
                                            isActive ? 'text-primary' : 'text-gray-400'
                                        )
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant="primary"
                        className="px-6 py-2 text-sm"
                        onClick={() => window.open(portfolioData.personalInfo.socials[0].url, '_blank')}
                    >
                        Contact Me
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-bg border-b border-white/10 overflow-hidden"
                    >
                        <ul className="flex flex-col p-6 gap-4">
                            {portfolioData.navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            cn(
                                                'block text-lg font-medium transition-colors hover:text-primary py-2',
                                                isActive ? 'text-primary' : 'text-gray-400'
                                            )
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li className="pt-4">
                                <Button
                                    variant="primary"
                                    className="w-full justify-center"
                                    onClick={() => window.open(portfolioData.personalInfo.socials[0].url, '_blank')}
                                >
                                    Contact Me
                                </Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;