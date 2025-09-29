import { useEffect, useState } from 'react';
import { CanceledError } from 'axios';
import apiClient from '../services/api-client';

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface GenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();
        apiClient
            .get<GenresResponse>('/genres', { signal: controller.signal })
            .then(res => {
                console.log(res.data.results);
                setGenres(res.data.results);
                setIsLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });
    }, []);
    return { genres, error, isLoading };
};

export default useGenres;
