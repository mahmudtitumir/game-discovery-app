import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}
interface GamesResponse {
    count: number;
    results: Game[];
}
const useUsers = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<GamesResponse>('/games', { signal: controller.signal })
            .then(res => {
                console.log(res.data.results);
                setGames(res.data.results);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
    }, []);
    return { games, error };
};

export default useUsers;
