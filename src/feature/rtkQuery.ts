import Namespace from '@/store/namespace';
import { getAuth } from '@/store/serverData/serverDataSlice';
import { getToken, saveToken } from '@/utils/token';
import { OrderType } from '@/utils/types';
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const PizzaAPI = createApi({
  reducerPath: Namespace.queryData,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pizza.vue.htmlacademy.pro',
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

    //get
    getDough: builder.query<void, void>({
      query: () => '/dough'
    }),
    getIngredients: builder.query<void, void>({
      query: () => '/ingredients'
    }),
    getAddresses: builder.query<void, void>({
      query: () => '/addresses'
    }),
    getWhoAmI: builder.query<void, void>({
      query: () => '/whoAmI'
    }),
    getMisc: builder.query<void, void>({
      query: () => '/misc'
    }),
    getOrders: builder.query<void, void>({
      query: () => '/orders'
    }),
    getSauces: builder.query<void, void>({
      query: () => '/sauces'
    }),
    getSizes: builder.query<void, void>({
      query: () => '/sizes'
    }),

    //delete
    deleteOrder: builder.mutation<void, {id: string}>({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE'
    })}),
    deleteAddress: builder.mutation<void, {id: string}>({
      query: (id) => ({
        url: `/addresses/${id}`,
        method: 'DELETE'
      })
    }),
    deleteLogin: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'DELETE'
      })
    }),

    //post
    postOrder: builder.mutation<void, OrderType>({
      query: (order : OrderType) => ({
        url: `/orders`,
        method: 'POST',
        body: order
      })
    }),
    postLogin: builder.mutation<
      {id: number; email: string; token: string},
      {id : string , name: string, email: string, avatar: string, phone: string, password: string}>({
      query: ({id, name, email, avatar, phone, password}) => ({
        url: '/login',
        method: 'POST',
        body: {id, name, email, avatar, phone, password}
      }),
      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
          const {data: {token}} = await queryFulfilled;
          saveToken(token);
          dispatch(getAuth('AUTH'));
          //dispatch(getUserInfo)\
      },
    }),

//     id	string
// name*	string
// email*	string
// avatar	string
// phone*	string
// password*	string


    postAddresses: builder.mutation<
      void, 
      {name : string, userId: string,street : string, building : string, flat: string,comment: string}>({
      query: ({name, userId ,street, building, flat, comment}) => ({
        url: '/addresses',
        method: 'POST',
        body: {name, userId ,street, building, flat, comment}
      })
    }),
    putAddresses: builder.mutation<
      string, 
      {name : string, userId: string,street : string, building : string, flat: string,comment: string}  
      >({
      query: ({name, userId,street, building, flat,comment}) => ({
        url: `/addresses/${userId}`,
        method: 'PUT',
        body: {name, userId,street, building, flat,comment} 
      }),
    }),
    })
  })
export default PizzaAPI;
export const {
  useGetDoughQuery,
  useDeleteAddressMutation,
  useDeleteLoginMutation,
  useDeleteOrderMutation,
  useGetAddressesQuery,
  useGetIngredientsQuery,
  useGetMiscQuery,
  useGetOrdersQuery,
  useGetSaucesQuery,
  useGetSizesQuery,
  useGetWhoAmIQuery,
  useLazyGetAddressesQuery,
  useLazyGetDoughQuery,
  useLazyGetIngredientsQuery,
  usePostAddressesMutation,
  usePostLoginMutation,
  usePostOrderMutation,
  usePutAddressesMutation
} = PizzaAPI;
