import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { formatUrlSearchParams } from "../utils/requestUtils";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  paramsSerializer: (params) => formatUrlSearchParams(params).toString(),
});

export class ServiceConfig {
  private async request<T, R = AxiosResponse<T>>(
    method: "get" | "post" | "put" | "delete" | "patch",
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    try {
      const response = await api.request<T, R>({ method, url, ...config });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return Promise.reject(error);
      } else {
        return Promise.reject(new Error("An unknown error occurred"));
      }
    }
  }

  public get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.request<T, R>("get", url, config);
  }

  public post<T, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.request<T, R>("post", url, { ...config, data });
  }

  public put<T, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.request<T, R>("put", url, { ...config, data });
  }

  public delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.request<T, R>("delete", url, config);
  }

  public patch<T, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.request<T, R>("patch", url, { ...config, data });
  }
}
