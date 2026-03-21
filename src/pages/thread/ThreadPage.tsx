import { useParams } from "react-router-dom";
import { ThreadMessages } from "@/widgets/thread-messages/ui/ThreadMessages";

export const ThreadPage = () => {
    const { id } = useParams();

    return (
        // <div className="relative max-w-2xl mx-auto flex flex-col h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] border border-gray-200 rounded-xl overflow-hidden">
        <div className="relative md:max-w-2xl flex flex-col h-svh md:h-[calc(100svh-6rem)] border border-gray-200 overflow-hidden">

            {/*<div className="flex-1 overflow-y-auto pb-24">*/}
            <div className="flex-1">
                <ThreadMessages id={Number(id)} />
            </div>
        </div>
    );
};
