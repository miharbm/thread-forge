import { createBrowserRouter } from "react-router-dom";
import { ThreadsPage } from "@/pages/threads/ThreadsPage";
import { ThreadPage } from "@/pages/thread/ThreadPage";
import {MainLayout} from "@/widgets/layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <ThreadsPage /> },
            { path: "thread/:id", element: <ThreadPage /> },
        ],
    },
]);
