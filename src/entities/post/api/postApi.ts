import { baseApi } from "@/shared/api/baseApi";
import {ThreadDetails, ThreadDetailsDto} from "@/entities/post/model/types.ts";
import {ThreadMapper} from "@/entities/post/lib/thread-details.map.ts";

export const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPostsByThread: builder.query<ThreadDetails, number>({
            query: (threadId) => `/posts?threadId=${threadId}`,
            transformResponse: (response: ThreadDetailsDto) => ThreadMapper.toThreadDetails(response),
            providesTags: ["Posts"],
        }),

        createPost: builder.mutation({
            query: (body) => ({
                url: "/posts",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Posts"],
        }),
    }),
});

export const {
    useGetPostsByThreadQuery,
    useCreatePostMutation,
} = postApi;
