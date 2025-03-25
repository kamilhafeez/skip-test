import React from 'react';
import classnames from 'classnames';

import { CheckIcon } from '@app/components/icons';

interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange, className }) => {
  return (
    <div className={classnames('flex items-center', className)}>
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onClick={onChange}
        onKeyDown={onChange}
        className="w-5 h-5 border-2 bg-white border-gray-300 rounded flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600"
      >
        {checked && <CheckIcon className="w-4 h-4 text-indigo-600" />}
      </div>
    </div>
  );
};
