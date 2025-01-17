import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { itemsCart } from '@/types/cart';

const initialState: {
    items: itemsCart[];
} = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    }
})

// Action creators are generated for each case reducer function
export const { } = cartSlice.actions

export default cartSlice.reducer

export const getDataCarts = (state: RootState) => state.cart.items.length