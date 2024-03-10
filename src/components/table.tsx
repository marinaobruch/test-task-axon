import { IconButton, Tooltip } from '@mui/material'
import { IProduct } from 'interface/interface-server'
import { FC } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import { FiInfo } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router'
import { setProduct } from 'store/product.slice'
import { createDate } from 'utils/create-data'
import { useAppDispatch } from './../hook/api'

interface IProps {
	products: IProduct[] | undefined
	setIsModalDelete: (arg: boolean) => void
	setDeleteId: (arg: string) => void
}

export const Table: FC<IProps> = ({
	products,
	setIsModalDelete,
	setDeleteId,
}) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleDelete = (id: string) => {
		setIsModalDelete(true)
		setDeleteId(id)
	}

	const handleChange = (item: IProduct) => {
		navigate(`/product/${item.id}`)
		dispatch(setProduct(item))
	}

	return (
		<table className='border-collapse border border-slate-400 w-full'>
			<thead>
				<tr>
					<th className='table-text'>№</th>
					<th className='table-text'>Кол-во пачек</th>
					<th className='table-text'>Тип упаковки</th>
					<th className='table-text'>Дата создания</th>
					<th className='table-text'>Статус</th>
					<th className='table-text'></th>
					<th className='table-text'></th>
				</tr>
			</thead>
			<tbody className='border border-slate-300'>
				{products?.map((item, index) => (
					<tr key={item.id} className='border border-slate-300'>
						<td className='table-text'>{index + 1}</td>
						<td className='table-text'>{item.packsNumber}</td>
						<td className='table-text'>{item.packageType}</td>
						<td className='table-text'>{createDate(item.createdAt)}</td>
						<td className='table-text'>
							{item.isArchived ? 'Архив' : 'Активно'}
						</td>
						<td className='cursor-pointer table-text'>
							<Tooltip title={item.description}>
								<IconButton>
									<FiInfo />
								</IconButton>
							</Tooltip>
						</td>
						<td className='flex justify-evenly py-1'>
							<span
								onClick={() => handleChange(item)}
								className='cursor-pointer'
							>
								<BsFillPencilFill />
							</span>
							<span
								className='cursor-pointer'
								onClick={() => handleDelete(item.id)}
							>
								<MdDelete />
							</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
