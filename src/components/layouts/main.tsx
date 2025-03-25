import classnames from 'classnames';

import { ThemeSwitch } from '@app/components/theme-switch';
import {
  CalendarIcon,
  CreditCardIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TrashIcon,
  TruckIcon,
} from '@app/components/icons';
import { StepBar, Step } from '@app/components/stepbar';
import { LoadingIndicator } from '@app/components/loading-indicator';

const stepIconClasses = 'w-4 h-4 dark:fill-white';

export const STEPS: Step[] = [
  {
    label: 'Postcode',
    icon: <MapPinIcon className={stepIconClasses} />,
  },
  {
    label: 'Waste Type',
    icon: <TrashIcon className={stepIconClasses} />,
  },
  {
    label: 'Select Skip',
    icon: <TruckIcon className={stepIconClasses} />,
  },
  {
    label: 'Permit Check',
    icon: <ShieldCheckIcon className={stepIconClasses} />,
  },
  {
    label: 'Choose Date',
    icon: <CalendarIcon className={stepIconClasses} />,
  },
  {
    label: 'Payment',
    icon: <CreditCardIcon className={stepIconClasses} />,
  },
];

interface MainLayoutProps {
  children: React.ReactNode;
  activeStepIndex: number;
  loading?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activeStepIndex,
  loading,
  className,
}) => {
  return (
    <div className={classnames(className, 'max-w-7xl mx-auto pt-8 p-4')}>
      <div className="p-4">
        <StepBar steps={STEPS} activeIndex={activeStepIndex} />
      </div>
      {loading ? <LoadingIndicator /> : children}
      <ThemeSwitch />
    </div>
  );
};
