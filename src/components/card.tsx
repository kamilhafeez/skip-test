import classnames from 'classnames';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  selected?: boolean;
  role?: string;
  disabled?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  selected,
  onClick,
  role,
  className,
  disabled,
}) => {
  return (
    <div
      role={role}
      onClick={onClick}
      className={classnames(
        className,
        'relative rounded-xl overflow-auto bg-white dark:bg-neutral-700 shadow-md',
        {
          'ring-2 ring-indigo-600': selected,
          'pointer-events-none': disabled,
        },
      )}
    >
      {disabled && <div className="absolute top-0 right-0 w-full h-full bg-black/50 z-10" />}
      {children}
    </div>
  );
};
