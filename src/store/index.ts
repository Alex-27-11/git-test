import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { githubApi } from "./github/github.api";

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
	},
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat(githubApi.middleware)
	},
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>