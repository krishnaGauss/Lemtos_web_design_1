import React from 'react';
import { motion } from 'framer-motion';

interface NeoButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "px-6 py-3 font-display font-bold text-lg border-2 border-black transition-all duration-200 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-lemtos-red text-white hover:bg-red-800 shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px]",
    secondary: "bg-lemtos-amber text-black hover:bg-yellow-500 shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px]",
    outline: "bg-transparent text-black hover:bg-gray-100 shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px]"
  };

  const disabledStyles = "bg-gray-300 text-gray-500 cursor-not-allowed opacity-80 shadow-none transform-none";

  return (
    <motion.button
      whileTap={disabled ? {} : { scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${disabled ? disabledStyles : variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default NeoButton;