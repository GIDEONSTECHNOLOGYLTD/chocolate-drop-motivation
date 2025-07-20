import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  target
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition duration-300 rounded-md';
  
  const variantClasses = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-white text-purple-900 hover:bg-purple-100',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
    text: 'text-purple-600 hover:text-purple-800 underline-offset-4 hover:underline'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} target={target} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={buttonClasses}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
