import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c11f1dd443054e4eb536a2e316f06029',
    },
});

export default apiClient;
