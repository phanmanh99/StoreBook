import { AxiosError, AxiosRequestConfig } from 'axios'
// import { client } from '../api/config'
// import { handleServiceError } from './apiError'

// export const getApi = async <TResponse>(path: string, config?: AxiosRequestConfig): Promise<TResponse> => {
//   try {
//     const response = await client.get<TResponse>(path, config)
//     return response.data
//   } catch (error) {
//     return handleServiceError(error as AxiosError) as TResponse
//   }
// }

// export const postApi = async <TRequest, TResponse>(
//   path: string,
//   payload: TRequest,
//   config?: AxiosRequestConfig
// ): Promise<TResponse> => {
//   try {
//     const response = await client.post<TResponse>(path, payload, config)
//     return response.data
//   } catch (error) {
//     return handleServiceError(error as AxiosError) as TResponse
//   }
// }

// export const putApi = async <TRequest, TResponse>(
//   path: string,
//   payload: TRequest,
//   config?: AxiosRequestConfig
// ): Promise<TResponse> => {
//   try {
//     const response = await client.put<TResponse>(path, payload, config)
//     return response.data
//   } catch (error) {
//     return handleServiceError(error as AxiosError) as TResponse
//   }
// }

// export const deleteApi = async <TResponse>(path: string): Promise<TResponse> => {
//   try {
//     const response = await client.delete<TResponse>(path)
//     return response.data
//   } catch (error) {
//     return handleServiceError(error as AxiosError) as TResponse
//   }
// }