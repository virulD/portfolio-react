import React from 'react';
import { cn } from './Button'; // Reusing cn utility, usually this should be in lib/utils

const Card = ({ children, className, hoverEffect = true, ...props }) => {
    return (
        <div
            className={cn(
                'glass-card rounded-2xl p-6 transition-all duration-300',
                hoverEffect && 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
