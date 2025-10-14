import ms from 'ms';
import { useQuery } from '@tanstack/react-query';

import APIClient from '../services/api-client';
import { type Screenshot } from '../entities/Screenshot';

const useScreenshots = (gameId: number) => {
    const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ['screenshots', gameId],
        queryFn: apiClient.getAll,
        staleTime: ms('1d'),
    });
};

export default useScreenshots;
