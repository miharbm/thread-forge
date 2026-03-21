import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export const MainLayout = () => {
    return (
        <div className="h-svh flex flex-col bg-zinc-100">
            <Header />

            {/* ВАЖНО: этот блок отвечает за scrollbar */}
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
