import { useEffect, useState } from 'react';
import { CanceledError, type AxiosRequestConfig } from 'axios';
import apiClient from '../services/api-client';

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: unknown[]
) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    useEffect(
        () => {
            setIsLoading(true);
            const controller = new AbortController();
            apiClient
                .get<FetchResponse<T>>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then(res => {
                    console.log(res.data.results);
                    setData(res.data.results);
                    setIsLoading(false);
                })
                .catch(err => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setIsLoading(false);
                });
        },
        deps ? [...deps] : []
    );
    return { data, error, isLoading };
};

export default useData;
