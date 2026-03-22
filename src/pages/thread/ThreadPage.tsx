import { useParams } from "react-router-dom";
import { ThreadMessages } from "@/widgets/thread-messages/ui/ThreadMessages";
import { MessageCircle } from "lucide-react";

export const ThreadPage = () => {
    const { id } = useParams();

    if (!id) {
        return (
            <div className="relative md:max-w-2xl flex flex-col h-svh md:h-[calc(100svh-6rem)] border border-gray-200 overflow-hidden">
                <ThreadNotSelected />
            </div>
        );
    }

    return (
        // <div className="relative max-w-2xl mx-auto flex flex-col h-[calc(100svh-4rem)] md:h-[calc(100svh-6rem)] border border-gray-200 rounded-xl overflow-hidden">
        <div className="relative md:max-w-2xl flex flex-col h-svh md:h-[calc(100svh-6rem)] border border-gray-200 overflow-hidden">

            {/*<div className="flex-1 overflow-y-auto pb-24">*/}
            <div className="flex-1">
                <ThreadMessages id={id} />
            </div>
        </div>
    );
};


export const ThreadNotSelected = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <MessageCircle className="w-12 h-12 mb-3 text-gray-300" />
            <div className="text-sm font-medium">Тред не выбран</div>
            <div className="text-xs text-gray-400 mt-1">
                Выберите тред слева
            </div>
        </div>
    );
};
