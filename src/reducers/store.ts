import { combineReducers } from "redux";
import { reducer as accountsReducer } from "reducers/accounts_reducer";

import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({ accounts: accountsReducer });

export const store = configureStore({ reducer });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
