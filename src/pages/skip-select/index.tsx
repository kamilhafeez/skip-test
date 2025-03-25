import { useCallback, useState } from 'react';

import { MainLayout } from '@app/components/layouts/main';
import { Heading } from '@app/components/heading';
import { SkipCard } from '@app/components/skip-card';
import { SkipSelectorFooter } from '@app/pages/skip-select/footer';
import { useSkipsByLocation } from '@app/hooks/data-hooks';

export const SkipSelectPage = () => {
  // These postcode and area values would be actually coming from the url params.
  // right now I have hardcoded here because in the test it was only requried to
  // work on the skip select page
  const { data, isLoading } = useSkipsByLocation({ postcode: 'LE10', area: 'Hinckley' });
  const [selectedSkipId, setSelectedIdSkip] = useState<number>();

  const onSkipSelect = useCallback((id: number) => {
    setSelectedIdSkip(id);
  }, []);

  const selectedSkip = selectedSkipId && data?.find((item) => selectedSkipId === item.id);

  const renderContent = () => {
    if (isLoading) {
      return null;
    }

    return (
      <>
        <div className="flex flex-col gap-2 text-center my-8">
          <Heading>Choose Your Skip Size</Heading>
          <Heading size="small">Select the skip size that best suits your needs</Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          {data!.map(
            ({
              id,
              price_before_vat,
              size,
              hire_period_days,
              allowed_on_road,
              allows_heavy_waste,
            }) => {
              return (
                <SkipCard
                  key={id}
                  skipId={id}
                  priceBeforeVat={price_before_vat}
                  yards={size}
                  hirePeriodDays={hire_period_days}
                  allowedOnRoad={allowed_on_road}
                  allowsHeavyWaste={allows_heavy_waste}
                  onSelect={onSkipSelect}
                  selected={selectedSkipId === id}
                />
              );
            },
          )}
        </div>
        {selectedSkip && <SkipSelectorFooter skipItem={selectedSkip} />}
      </>
    );
  };

  return (
    <MainLayout className="pb-40" activeStepIndex={2} loading={isLoading}>
      {renderContent()}
    </MainLayout>
  );
};
