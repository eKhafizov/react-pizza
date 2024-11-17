import Namespace from '@/store/namespace';
import { getToken } from '@/utils/token';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const PizzaAPI = createApi({
  reducerPath: Namespace.queryData,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pizza.vue.htmlacademy.pro/',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('x-token', `${token}`)
      }
      return headers;
    }
  }),
  tagTypes: ['ORDER'],
  endpoints: (builder) => ({
    getDough: builder.query<void, void>({
      query: () => '/dough'
    })
  })
})
export default PizzaAPI;
export const {
  useGetDoughQuery
} = PizzaAPI;
