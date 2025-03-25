import { useQuery } from '@tanstack/react-query';

import { axiosClient } from '@app/axios-client';
import { SkipType } from '../types/skip-type';

export const useSkipsByLocation = ({ postcode, area }: { postcode: string; area: string }) => {
  return useQuery({
    queryKey: ['skip-by-location'],
    queryFn: ({ signal }): Promise<SkipType[]> =>
      axiosClient
        .get('/skips/by-location', { params: { postcode, area }, signal })
        .then((response) => response.data),
  });
};
