import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "font-bold py-2 px-4 rounded text-center transition-all duration-200 focus:outline-none transform hover:scale-105 active:scale-95";
  
  const variantStyles = {
    primary: "bg-pink-200 text-purple-900 hover:bg-pink-300",
    secondary: "bg-purple-300 text-purple-900 hover:bg-purple-400"
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };