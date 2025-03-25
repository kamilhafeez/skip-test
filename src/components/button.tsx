import React from 'react';
import classnames from 'classnames';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className,
  children,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'px-4 py-2 rounded focus:outline-none focus:ring-2 font-semibold';
  const variantClasses =
    variant === 'primary'
      ? 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600'
      : 'bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-400';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classnames(baseClasses, variantClasses, className)}
    >
      {children}
    </button>
  );
};
