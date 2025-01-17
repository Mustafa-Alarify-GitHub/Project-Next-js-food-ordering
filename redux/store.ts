import { Environments } from '@/lib/prisma';
import { configureStore } from '@reduxjs/toolkit'
import cart from './features/cartSlice';

export const store = configureStore({
  reducer: {
    cart
  },
  devTools: process.env.NODE_ENV === Environments.DEV,

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

