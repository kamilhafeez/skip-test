import React from 'react';
import classNames from 'classnames';

import { StepItem } from '@app/components/stepbar/step-item';

export interface Step {
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

interface StepBarProps {
  steps: Step[];
  activeIndex: number;
  className?: string;
}

export const StepBar: React.FC<StepBarProps> = ({ steps, activeIndex = 0, className }) => {
  return (
    <nav
      className={classNames('flex gap-4 items-center justify-between overflow-x-auto', className)}
      aria-label="Progress"
    >
      {steps.map((step, index) => {
        const active = index <= activeIndex;

        return (
          <>
            <div className="flex-1">
              <StepItem key={step.label} step={step} active={active} />
            </div>
            {steps.length > 1 && index < steps.length - 1 ? (
              <div className="flex-1 h-0.5 bg-gray-500"></div>
            ) : null}
          </>
        );
      })}
    </nav>
  );
};
