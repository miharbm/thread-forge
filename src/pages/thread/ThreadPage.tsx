import { useParams, Link } from "react-router-dom";
import {Send} from "lucide-react";
import { ThreadMessages } from "@/widgets/thread-messages/ui/ThreadMessages";

export const ThreadPage = () => {
    const { id } = useParams();

    return (
        <div className="relative max-w-2xl mx-auto flex flex-col h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] border border-gray-200 rounded-xl overflow-hidden">

            <div className="flex-1 mt-2 overflow-y-auto pb-24">
                <ThreadMessages id={Number(id)} />
            </div>

            <Link
                to={`/thread/${id}/reply`}
                aria-label="Ответить в обсуждение"
                className="absolute bottom-6 right-6
                           flex items-center gap-2
                           bg-orange-500/80 hover:bg-orange-500
                           backdrop-blur-sm
                           text-white font-semibold
                           p-4
                           rounded-2xl shadow-xl shadow-orange-200
                           transition-all duration-200 active:scale-95
                           z-10"
            >
                <Send size={24}  />
            </Link>
        </div>
    );
};
