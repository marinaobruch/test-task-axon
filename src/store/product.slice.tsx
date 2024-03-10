import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProduct } from 'interface/interface-server'

const initialState: IProduct = {
	createdAt: '',
	description: '',
	id: '',
	isArchived: false,
	packageType: '',
	packsNumber: 0,
}

export const productSlice = createSlice({
	name: 'product',
	initialState: initialState,
	reducers: {
		setProduct(state, action: PayloadAction<IProduct>) {
			const payload = action.payload

			state.createdAt = payload.createdAt
			state.description = payload.description
			state.id = payload.id
			state.isArchived = payload.isArchived
			state.packageType = payload.packageType
			state.packsNumber = payload.packsNumber
		},
	},
})

export const { setProduct } = productSlice.actions
