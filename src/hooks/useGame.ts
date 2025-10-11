import ms from 'ms';
import { useQuery } from '@tanstack/react-query';
import { type Game } from './useGames';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => {
    return useQuery({
        queryKey: ['game', slug],
        queryFn: () => apiClient.get(slug),
        staleTime: ms('1d'),
    });
};

export default useGame;
