import { baseApi } from "@/shared/api/baseApi";
import {ThreadDetails, ThreadDetailsDto} from "@/entities/post/model/types.ts";
import {ThreadMapper} from "@/entities/post/lib/thread-details.map.ts";

export const postApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPostsByThread: builder.query<ThreadDetails, string>({
            query: (threadId) => `/threads/${encodeURI(String(threadId))}`,
            transformResponse: (response: ThreadDetailsDto) => ThreadMapper.toThreadDetails(response),
            providesTags: ["Posts"],
        }),

    }),
});

export const {
    useGetPostsByThreadQuery,
} = postApi;
