import { useGetThreadsQuery } from "@/entities/thread/api/threadApi";
import { ThreadCard } from "@/entities/thread/ui/ThreadCard";

export const ThreadsPage = () => {
    const { data, isLoading } = useGetThreadsQuery();

    if (isLoading) return <div>Loading...</div>;

    return (
        // <div className="max-w-2xl mx-auto mt-6 flex flex-col divide-y divide-gray-200">
        <div className="max-w-2xl  flex flex-col divide-y divide-gray-200">
            {data?.map((thread) => (
                <div key={thread.id} className="">
                    <ThreadCard thread={thread} />
                </div>
            ))}
        </div>
    );
};
