import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
const baseUrl = process.env.REACT_APP_API_URL || "";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const useApi = <T,>() => {
  const [response, setResponse] = useState<ApiResponse<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const sendRequest = async (
    method: HttpMethod,
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    setResponse({ data: null, loading: true, error: null });
    let response;

    try {
      const axiosConfig: AxiosRequestConfig = {
        method,
        url: `${baseUrl}${url}`,
        data,
        ...config,
      };

      const axiosResponse: AxiosResponse<T> = await axios(axiosConfig);

      setResponse({
        data: axiosResponse.data,
        loading: false,
        error: null,
      });
      response = axiosResponse.data;
    } catch (error: any) {
      setResponse({ data: null, loading: false, error });
      response = error;
    }

    return response;
  };

  return { ...response, sendRequest };
};

export default useApi;
