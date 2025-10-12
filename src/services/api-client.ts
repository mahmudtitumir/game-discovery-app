import axios, { type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c11f1dd443054e4eb536a2e316f06029',
    },
});

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    };
    get = (id: string | number) => {
        console.log(id);
        return axiosInstance.get<T>(this.endpoint + '/' + id).then(res => {
            console.log(res.data);
            return res.data;
        });
    };
}

export default APIClient;
