import { AxiosError, AxiosRequestConfig } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import {axiosMainApi} from "@/services/api/axiosMainApi.ts";



export const axiosMainBaseQuery = (): BaseQueryFn<
  {
    url: string
    method?: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
  },
  unknown,
  unknown
> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosMainApi({ url, method, data, params, headers });
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
