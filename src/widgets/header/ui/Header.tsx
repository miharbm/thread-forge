import {Bell} from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="bg-white border-b border-zinc-200 h-16">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-4 h-full">
                <Link to="/" className="text-xl font-bold text-orange-500">
                    ThreadForge
                </Link>

                {/*<div className="flex-1 relative">*/}
                {/*    <input*/}
                {/*        className="w-full bg-zinc-100 rounded-full px-4 py-2 pl-10 outline-none"*/}
                {/*        placeholder="Search..."*/}
                {/*    />*/}
                {/*    <Search*/}
                {/*        size={18}*/}
                {/*        className="absolute left-3 top-2.5 text-zinc-500"*/}
                {/*    />*/}
                {/*</div>*/}

                <div className={"flex items-center gap-4"}>
                    <Bell className="text-zinc-600" />
                    <div className="w-8 h-8 bg-zinc-300 rounded-full" />
                </div>
            </div>
        </header>
    );
};
