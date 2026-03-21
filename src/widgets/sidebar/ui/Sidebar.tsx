
import { Home, Flame } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
        <aside className="w-64 hidden md:block sticky">
            <div className="bg-white/70 p-4 shadow-sm">
                <nav className="flex flex-col gap-2">
                    <Link
                        to="/"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-100"
                    >
                        <Home size={18} />
                        Главная
                    </Link>

                    <Link
                        to="/popular"
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-100"
                    >
                        <Flame size={18} />
                        Популярное
                    </Link>

                    {/*<Link*/}
                    {/*    to="/create"*/}
                    {/*    className="flex items-center gap-2 p-2 rounded-lg hover:bg-zinc-100"*/}
                    {/*>*/}
                    {/*    <PlusSquare size={18} />*/}
                    {/*    Create Post*/}
                    {/*</Link>*/}
                </nav>
            </div>
        </aside>
    );
};
