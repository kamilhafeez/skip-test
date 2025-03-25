import React from 'react';
import classNames from 'classnames';

import { Step } from '@app/components/stepbar';

export interface StepItemProps {
  step: Step;
  active?: boolean;
}

export const StepItem: React.FC<StepItemProps> = ({ step, active }) => {
  const baseCircle = 'flex items-center justify-center rounded-full border-2 transition-colors';
  const circleClasses = classNames(baseCircle, 'w-6 h-6 lg:w-8 lg:h-8', {
    'border-blue-500 bg-blue-500 text-white': active,
    'border-gray-300 text-gray-500': !active,
  });

  const baseLabel = 'hidden lg:inline text-sm font-medium';
  const labelClasses = classNames(baseLabel, {
    'text-blue-600': active,
    'text-gray-500': !active,
  });

  return (
    <div
      role="button"
      className="flex items-center space-x-1 lg:space-x-2 cursor-pointer whitespace-nowrap"
      onClick={step.onClick}
    >
      <div className={circleClasses}>{step.icon}</div>
      <span className={labelClasses}>{step.label}</span>
    </div>
  );
};
