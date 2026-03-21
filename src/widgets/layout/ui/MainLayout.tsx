import {Outlet, useLocation} from "react-router-dom";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export const MainLayout = () => {
    const location = useLocation();
    const isThreadsPage = location.pathname.startsWith('/thread');

    return (
        <div className="h-svh flex flex-col bg-zinc-100">
            {/*<div className={`${isThreadsPage ? "hidden md:block" : "block"}`}>*/}
            <div className={`${isThreadsPage ? "hidden md:block" : "md:block"}`}>
                <Header />
            </div>

            <div className="flex-1 overflow-y-auto ">
                <div className="max-w-6xl mx-auto flex gap-6 md:p-4 relative ">
                    <Sidebar />

                    <main className="flex-1 min-h-0">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};
