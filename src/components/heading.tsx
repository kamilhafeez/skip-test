interface HeadingProps {
  size?: 'large' | 'medium' | 'small';
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ size = 'medium', children, className = '' }) => {
  const sizeClasses: Record<'large' | 'medium' | 'small', string> = {
    large: 'font-bold text-4xl',
    medium: 'font-bold text-2xl',
    small: 'font-semibold text-xl',
  };

  const baseStyles = 'text-gray-900 dark:text-white';

  return <h1 className={`${baseStyles} ${sizeClasses[size]} ${className}`}>{children}</h1>;
};
