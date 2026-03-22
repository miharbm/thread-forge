import { useGetThreadsQuery } from "@/entities/thread/api/threadApi";
import { ThreadCard } from "@/entities/thread/ui/ThreadCard";
import {ThreadCardSkeleton} from "@/entities/thread/ui/ThreadCardSkeleton.tsx";
import {ThreadNoData} from "@/entities/thread/ui/ThreadNoData.tsx";

export const ThreadsPage = () => {
    const { data: threadTitles, isLoading } = useGetThreadsQuery();

    if (isLoading) {
        return (
            <div className="md:max-w-2xl flex flex-col divide-y divide-gray-200">
                {Array.from({ length: 6 }).map((_, i) => (
                    <ThreadCardSkeleton key={i} />
                ))}
            </div>
        )
    }

    if (!threadTitles || threadTitles.length === 0) {
        return <ThreadNoData/>
    }


    return (
        // <div className="max-w-2xl mx-auto mt-6 flex flex-col divide-y divide-gray-200">
        <div className="md:max-w-2xl flex flex-col divide-y divide-gray-200">
            {threadTitles.map((threadTitle) => (
                <div key={threadTitle.id} className="">
                    <ThreadCard thread={threadTitle} />
                </div>
            ))}
        </div>
    );
};
