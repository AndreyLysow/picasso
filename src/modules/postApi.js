import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page = 1) => `posts?_page=${page}&_limit=100`, 
    }),
    getPostById: builder.query({
      query: (postId) => `posts/${postId}`, 
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;