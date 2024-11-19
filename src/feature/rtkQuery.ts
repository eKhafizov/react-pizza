import Namespace from '@/store/namespace';
import { getAuth } from '@/store/serverData/serverDataSlice';
import { getToken, saveToken } from '@/utils/token';
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const PizzaAPI = createApi({
  reducerPath: Namespace.queryData,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pizza.vue.htmlacademy.pro',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('authentication', `Bearer ${token}`);
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
    getIngredients: builder.query<{Id: number, image: string; name: string, price: number}[], void>({
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
    postOrder: builder.mutation<
      void, {
  "userId": "string",
  "phone": "+7 999-999-99-99",
  "address": {
    "street": "string",
    "building": "string",
    "flat": "string",
    "comment": "string"
  },
  "pizzas": [
    {
      "name": "string",
      "sauceId": 0,
      "doughId": 0,
      "sizeId": 0,
      "quantity": 0,
      "ingredients": [
        {
          "ingredientId": 0,
          "quantity": 0
        }
      ]
    }
  ],
  "misc": [
    {
      "miscId": 0,
      "quantity": 0
    }
  ]
}>({
      query: (order : 
        {
          "userId": "string",
          "phone": "+7 999-999-99-99",
          "address": {
            "street": "string",
            "building": "string",
            "flat": "string",
            "comment": "string"
          },
          "pizzas": [
            {
              "name": "string",
              "sauceId": 0,
              "doughId": 0,
              "sizeId": 0,
              "quantity": 0,
              "ingredients": [
                {
                  "ingredientId": 0,
                  "quantity": 0
                }
              ]
            }
          ],
          "misc": [
            {
              "miscId": 0,
              "quantity": 0
            }
          ]
        }) => ({
        url: `/orders`,
        method: 'POST',
        body: order
      })
    }),
    postLogin: builder.mutation<
      {id: number; email: string; token: string},
      {email: string,password: string}>({
      query: ({email, password}) => ({
        url: '/login',
        method: 'POST',
        body: {email, password}
      }),
      async onQueryStarted({email, password}, {dispatch, queryFulfilled}) {
          const {data: {token}} = await queryFulfilled;
          saveToken(token);
          dispatch(getAuth('AUTH'));
          console.log('auth is ', email, password)
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
