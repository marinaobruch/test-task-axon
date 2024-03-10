import axios from 'axios'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { ButtonMain } from './../shared/button'

interface IProps {
	id: string
	setIsModalDelete: (arg: boolean) => void
}

export const ModalDelete: FC<IProps> = ({ id, setIsModalDelete }) => {
	const navigate = useNavigate()
	const backToMain = () => {
		navigate('/main')
	}
	const handleDeleteAd = () => {
		axios.delete(`http://localhost:8081/productTypes/${id}`)

		setIsModalDelete(false)
		backToMain()
	}

	return (
		<div
			onClick={() => setIsModalDelete(false)}
			className='w-full h-full fixed left-0 top-0 bg-gray-800/75 z-10 flex flex-col items-center justify-center'
		>
			<div
				className='w-96 h-60 bg-slate-200 rounded-2xl flex-col items-center justify-evenly'
				onClick={(e) => e.stopPropagation()}
			>
				<h1 className='text-2xl p-8'>Вы действительно хотите удалить пост?</h1>
				<div className='flex items-center justify-center gap-4'>
					<ButtonMain
						text='Да'
						width='w-32'
						onClick={handleDeleteAd}
						type='submit'
					/>
					<ButtonMain
						text='Нет'
						width='w-32'
						onClick={() => setIsModalDelete(false)}
						type='submit'
					/>
				</div>
			</div>
		</div>
	)
}
