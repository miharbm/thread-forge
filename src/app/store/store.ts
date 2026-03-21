import { configureStore } from "@reduxjs/toolkit";
import { threadApi } from "@/entities/thread/api/threadApi";

export const store = configureStore({
    reducer: {
        [threadApi.reducerPath]: threadApi.reducer,
    },
    middleware: (gDM) =>
        gDM().concat(threadApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
