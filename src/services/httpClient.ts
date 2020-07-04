import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Model
import * as configuration from '@/models/constant';

export class HttpClient {
    [props: string]: any;

    public constructor(config?: AxiosRequestConfig) {
        const http = axios.create({
            ...configuration.AXIOS_CREATE,
            ...config,
        });

        http.interceptors.request.use((conf) => {
            // conf.headers.Authorization = 'Bearer';
            const method = conf.method?.toUpperCase();
            if (method !== 'OPTIONS' && method !== 'GET') {
                conf.headers = {
                    ...conf.headers,
                    'X-CSRF-TOKEN': localStorage.csrf,
                };
            }

            return conf;
        }, (error) => {
            return Promise.reject(error);
        });

        http.interceptors.response.use((response) => {
            return response;
        }, (err) => {
            if ( err.response && err.response.config && err.response.status === 401 ) {
                return http.post('/refresh', {}, { headers: {'X-CSRF-TOKEN': localStorage.csrf }})
                .then((response) => {
                    localStorage.csrf = response.data.csrf;
                    localStorage.signedIn = true;

                    const retryConfig = err.response.config;
                    retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf;
                    return http.request(retryConfig);
                }).catch((error) => {
                    delete localStorage.csrf;
                    delete localStorage.signedIn;

                    localStorage.replace('/');
                    return Promise.reject(error);
                });
            } else {
                return Promise.reject(err);
            }
        });

        this.api = http;

        this.get = this.get.bind(this);
        this.delete = this.delete.bind(this);
        this.post = this.post.bind(this);
        this.put = this.put.bind(this);
    }

    public get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.get(url, config);
    }

    public post<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.api.post(url, data, config);
    }

    public put<T, B, R = AxiosResponse<T>>(url: string, data?: B, config?: AxiosRequestConfig): Promise<R> {
        return this.api.put(url, data, config);
    }

    public delete<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.delete(url, config);
    }

    public success<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    public error<T>(error: AxiosError<T>): T {
        throw error.response;
    }
}
