export const BASE_URL: string = 'http://localhost:3000';

// Axios
export const AXIOS_CREATE: { [props: string]: any } = {
    // export const AXIOS_CREATE: { baseURL?: string; timeout?: number; headers?: object } = {
  baseURL: BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};
// export default AXIOS_CREATE;
