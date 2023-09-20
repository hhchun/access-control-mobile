import axios from "axios";
import adapter from "./adapter";

import type {
  AxiosHeaders,
  Method,
  RawAxiosRequestHeaders,
} from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const timeout = 10000;

const instance = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  adapter: adapter,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => {
    return error;
  }
);

export interface ResultType<D = any> {
  code: number;
  message: string;
  data?: D;
}

export interface RequestConfig<D = any> {
  url: string;
  method?: Method;
  data?: D;
  params?: any;
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
}

export default function <R = any>(config: RequestConfig) {
  return instance<ResultType<R>>(config);
}

export { instance };
