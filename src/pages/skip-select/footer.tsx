import { useCallback } from 'react';

import { Button } from '@app/components/button';
import { SkipType } from '@app/types/skip-type';
import { formatPrice } from '@app/utils';

interface SkipSelectorFooterProps {
  skipItem: SkipType;
}

export const SkipSelectorFooter: React.FC<SkipSelectorFooterProps> = ({ skipItem }) => {
  const onBackClick = useCallback(() => console.log('Back Pressed'), []);
  const onCheckoutClick = useCallback(() => console.log('Checkout Pressed'), []);

  return (
    <div className="flex items-center px-6 fixed bottom-0 left-0 w-full h-28 bg-white z-20 border-t border-t-gray-100 dark:bg-neutral-700">
      <div className="flex flex-col md:flex-row  justify-between max-w-7xl mx-auto w-full">
        <div className="flex w-full justify-between items-center md:flex-col md:items-start">
          <span className="text-sm text-gray-500 dark:text-white ">{skipItem.size} Yards</span>
          <span className="text-lg md:text-2xl font-semibold text-green-600 text-right md:text-left">
            {formatPrice(skipItem.price_before_vat)} / week
          </span>
        </div>
        <div className="flex w-full md:w-auto gap-2 mt-2 md:mt-0 items-center justify-between md:justify-end">
          <Button onClick={onBackClick} variant="secondary" className="flex-1 md:flex-none">
            Back
          </Button>
          <Button onClick={onCheckoutClick} variant="primary" className="flex-1 md:flex-none">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};
