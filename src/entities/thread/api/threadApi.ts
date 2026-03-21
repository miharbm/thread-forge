import { baseApi } from "@/shared/api/baseApi";
import {Thread, ThreadDTO} from "@/entities/thread/model/types.ts";
import {threadMap} from "@/entities/thread/lib/thread.map.ts";

export const threadApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getThreads: builder.query<Thread[], void>({
            query: () => "/thread-titles",
            transformResponse: (data: ThreadDTO[]) => data.map(threadMap),
            providesTags: ["Threads"],
        }),

        getThreadById: builder.query<Thread, number>({
            query: (id) => `/threads/${id}`,
            transformResponse: threadMap,
        }),

        createThread: builder.mutation({
            query: (body) => ({
                url: "/threads",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Threads"],
        }),
    }),
});

export const {
    useGetThreadsQuery,
    useGetThreadByIdQuery,
    useCreateThreadMutation,
} = threadApi;
