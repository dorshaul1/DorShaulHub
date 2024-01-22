import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.example.com";

const handleSuccess = <T>(response: AxiosResponse<T>): T => response.data;

const handleError = (error: AxiosError): never => {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;
    console.error(`Request failed with status ${status}:`, data);
  } else if (error.request) {
    console.error("No response received from the server.");
  } else {
    console.error("Error setting up the request:", error.message);
  }
  throw error;
};

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axios.get<T>(`${BASE_URL}${url}`, config);
    return handleSuccess(response);
  } catch (error: AxiosError) {
    handleError(error);
  }
};

export const post = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axios.post<T>(`${BASE_URL}${url}`, data, config);
    return handleSuccess(response);
  } catch (error: AxiosError) {
    handleError(error);
  }
};

export const put = async <T>(
  url: string,
  data: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axios.put<T>(`${BASE_URL}${url}`, data, config);
    return handleSuccess(response);
  } catch (error: AxiosError) {
    handleError(error);
  }
};

export const del = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response = await axios.delete<T>(`${BASE_URL}${url}`, config);
    return handleSuccess(response);
  } catch (error: any) {
    handleError(error);
  }
};
