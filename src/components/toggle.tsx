import React from 'react';
import classnames from 'classnames';

interface ToggleProps {
  checked?: boolean;
  onToggle: () => void;
  className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onToggle, className }) => {
  return (
    <div
      className={classnames(
        'relative inline-flex items-center w-9 h-5 rounded-full transition-colors duration-300 cursor-pointer',
        { 'bg-green-600': checked },
        { 'bg-neutral-500': !checked },
        className,
      )}
      onClick={onToggle}
    >
      <div
        className={classnames(
          'absolute w-3 h-3 bg-white rounded-full transform transition-all duration-300',
          { 'left-[1.25rem]': checked },
          { 'left-1': !checked },
        )}
      />
    </div>
  );
};
