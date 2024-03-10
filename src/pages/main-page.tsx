import axios from 'axios'
import { Table } from 'components/table'
import { IProduct } from 'interface/interface-server'
import { useEffect, useState } from 'react'
import { Puff } from 'react-loader-spinner'
import { useNavigate } from 'react-router'
import { ModalDelete } from './../modal/modal-delete'

export const MainPage = () => {
	const [products, setProducts] = useState<IProduct[]>()
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [errors, setErrors] = useState<string>('')
	const [isModalDelete, setIsModalDelete] = useState(false)
	const [deleteId, setDeleteId] = useState('')
	const navigate = useNavigate()

	const fetchData = () => {
		axios
			.get('http://localhost:8081/productTypes')
			.then((res) => {
				if (res.status === 200) {
					const getArray = [...res.data]
					const sortedArray = getArray.sort(
						(a: IProduct, b: IProduct) =>
							//@ts-ignore correct date in request
							new Date(b.createdAt) - new Date(a.createdAt)
					)
					setProducts(sortedArray)
					setIsLoading(false)
				}
			})
			.catch(function (error) {
				console.debug(error.response.status)
				setErrors(error.response.data.message)
			})
	}

	useEffect(() => {
		setErrors('')
		fetchData()
	}, [isModalDelete])

	const moveToCreateProduct = () => {
		navigate('/create-product')
	}

	return (
		<div className='py-10 px-24 font-montserrat'>
			{isModalDelete && (
				<ModalDelete id={deleteId} setIsModalDelete={setIsModalDelete} />
			)}
			<div className='reg-flex-btw'>
				<h1 className='text-2xl font-montserrat'>
					Список выпускаемой продукции
				</h1>
				<button
					onClick={() => moveToCreateProduct()}
					className='text-lg bg-yellow-300 text-black border border-gray-500 py-3 px-6 rounded-xl hover:bg-yellow-400'
				>
					Создать тип продукции
				</button>
			</div>
			{errors.length > 0 && (
				<div className='flex justify-center text-lg text-red-500'>
					Произошла ошибка: {errors}. Попробуйте повторить позже
				</div>
			)}
			{isLoading ? (
				<div className='flex justify-center items-center'>
					<Puff
						visible={true}
						height='80'
						width='80'
						color='#fde047'
						ariaLabel='puff-loading'
						wrapperStyle={{}}
						wrapperClass=''
					/>
				</div>
			) : (
				<div className='reg-flex mt-10'>
					<Table
						products={products}
						setIsModalDelete={setIsModalDelete}
						setDeleteId={setDeleteId}
					/>
				</div>
			)}
		</div>
	)
}
