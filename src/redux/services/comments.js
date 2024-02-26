import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65a8288b94c2c5762da862cc.mockapi.io',
  }),
  tagTypes: ['comments'],
  endpoints: builder => ({
    getComments: builder.query({
      query: () => `/api/comments`,
      providesTags: ['comments'],
    }),
    deleteComment: builder.mutation({
      query: id => ({
        url: `/api/comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['comments'],
    }),
    createComment: builder.mutation({
      query: newComment => ({
        url: `/api/comments`,
        method: 'POST',
        body: { comment: newComment },
      }),
      invalidatesTags: ['comments'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useDeleteCommentMutation,
  useCreateCommentMutation,
} = commentsApi;
