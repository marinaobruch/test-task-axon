import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './product.slice'

export const store = configureStore({
	reducer: {
		product: productSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
