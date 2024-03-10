import { Route, Routes } from 'react-router'
import { CreateProduct } from './pages/create-product'
import { MainPage } from './pages/main-page'
import { ProductPage } from './pages/product-page'

export const AppRouter = () => (
	<Routes>
		<Route element={<MainPage />} path='/main' />
		<Route element={<CreateProduct />} path='/create-product' />
		<Route element={<ProductPage />} path='/product/:id' />
	</Routes>
)
