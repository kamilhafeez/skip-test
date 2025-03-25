import { useCallback } from 'react';
import classnames from 'classnames';

import { Card } from '@app/components/card';
import { ExclamationTriangleIcon } from '@app/components/icons';
import { Tag } from '@app/components/tag';
import { Checkbox } from '@app/components/checkbox';
import { formatPrice } from '@app/utils';

interface SkipCardProps {
  skipId: number;
  yards: number;
  hirePeriodDays: number;
  priceBeforeVat: number;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
  selected?: boolean;
  onSelect: (id: number) => void;
}

export const SkipCard: React.FC<SkipCardProps> = ({
  skipId,
  yards,
  hirePeriodDays,
  priceBeforeVat,
  selected,
  allowedOnRoad,
  allowsHeavyWaste,
  onSelect,
}) => {
  const onSkipCardClick = useCallback(() => {
    onSelect(skipId);
  }, [onSelect, skipId]);

  const renderWarnings = () => {
    const warningClasses = 'inline-flex items-center gap-1 bg-black text-xs px-2 py-1 rounded-sm';
    const warnings = [];

    if (!allowedOnRoad) {
      warnings.push(
        <div key="allowedOnRoad" className={`${warningClasses} text-amber-300`}>
          <ExclamationTriangleIcon className="w-4 h-4" />
          Private Properties Only
        </div>,
      );
    }

    if (!allowsHeavyWaste) {
      warnings.push(
        <div key="allowsHeavyWaste" className={`${warningClasses} text-red-500`}>
          <ExclamationTriangleIcon className="w-4 h-4" />
          Not Suitable for Heavy Waste
        </div>,
      );
    }

    if (warnings.length) {
      return <div className="flex flex-col gap-1 absolute bottom-2 left-2">{warnings}</div>;
    }
  };

  return (
    <Card
      role="button"
      onClick={onSkipCardClick}
      className={classnames(
        'relative max-w-sm hover:scale-105 hover:shadow-xl transform transition-transform duration-300 cursor-pointer',
        {
          'scale-105 shadow-xl': selected,
        },
      )}
      disabled={!allowsHeavyWaste}
      selected={selected}
    >
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
          className="h-auto w-full"
        />
        {renderWarnings()}
      </div>

      <Checkbox
        className="absolute top-3 left-4 scale-125 pointer-events-none"
        checked={selected}
      />
      <Tag className="absolute top-3 right-4" title={`${yards} Yards`} />
      <div className="p-5">
        <div className="flex justify-between">
          <div className="text-medium text-gray-700 dark:text-white">
            {hirePeriodDays} day hire period
          </div>
          <div className="font-semibold text-green-600">{formatPrice(priceBeforeVat)} / week</div>
        </div>
      </div>
    </Card>
  );
};
