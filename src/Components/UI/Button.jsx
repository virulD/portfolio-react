import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};

const Button = ({
    children,
    variant = 'primary',
    className,
    icon: Icon,
    ...props
}) => {
    const variants = {
        primary: 'bg-primary hover:bg-primary-dark text-white',
        secondary: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm',
        outline: 'border border-primary text-primary hover:bg-primary/10',
        ghost: 'hover:bg-white/5 text-gray-300 hover:text-white',
    };

    return (
        <button
            className={cn(
                'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
            {Icon && <Icon className="w-4 h-4" />}
        </button>
    );
};

export default Button;
