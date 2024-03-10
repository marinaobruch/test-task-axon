import axios from 'axios'
import { IFormFields, IOptions } from 'interface/interface-data'
import { SubmitHandler, useController, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import Select from 'react-select'
import { options } from './../constants/filter-options'

export const CreateProduct = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<IFormFields>()

	const navigate = useNavigate()
	const { field } = useController({ name: 'packageType', control })

	const backToMain = () => {
		navigate('/main')
	}

	const onSubmit: SubmitHandler<IFormFields> = async (data) => {
		const fetchData = () => {
			axios
				.post('http://localhost:8081/productTypes', {
					packsNumber: Number(data.packsNumber),
					packageType: data.packageType,
					isArchived: data.isArchived,
					description: data.description,
				})
				.then(function (response) {
					console.log(response)
				})
				.catch(function (error) {
					console.log(error)
				})
		}
		fetchData()
		backToMain()
		console.log(data)
	}

	return (
		<div className='py-10 px-32 font-montserrat'>
			<div className='reg-flex-btw'>
				<h1 className='text-2xl font-montserrat'>Создание типа продукции</h1>
			</div>

			<form
				className='mt-10 flex flex-col gap-7'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex justify-start gap-14 items-center'>
					<div>
						<span className='normal-text'>Кол-во пачек</span>
						<span className='text-red-500'> *</span>
					</div>
					<input
						{...register('packsNumber', {
							required: 'Поле обязательно для заполнения',
						})}
						className='normal-input'
						type='number'
					/>
				</div>
				{errors.packsNumber && (
					<div className='text-xs text-red-500'>
						{errors.packsNumber.message}
					</div>
				)}

				<div className='flex justify-start gap-14 items-center'>
					<div>
						<span className='normal-text'>Тип упаковки</span>
						<span className='text-red-500'> *</span>
					</div>
					<Select
						className='w-4/5 max-w-900'
						{...register('packageType', {
							required: 'Поле обязательно для заполнения',
						})}
						value={options.find(({ value }) => value === field.value)}
						onChange={(option: IOptions | null) => {
							field.onChange(option?.value)
						}}
						options={options}
					/>
				</div>
				{errors.packageType && (
					<div className='text-xs text-red-500'>
						{errors.packageType.message}
					</div>
				)}

				<div className='flex justify-start gap-14 items-center'>
					<span className='normal-text mr-2'>Архивировано</span>
					<input
						className='h-6 w-6'
						{...register('isArchived')}
						type='checkbox'
					/>
				</div>

				<div className='flex justify-start gap-14 items-center'>
					<span className='normal-text mr-14'>Описание</span>
					<input
						{...register('description')}
						className='border border-slate-300 px-3 rounded-md text-lg h-24 w-4/5 max-w-900'
						type='text'
					/>
				</div>

				<div className='flex justify-center gap-6 mt-5'>
					<button
						onClick={() => backToMain()}
						className='bg-black text-white py-3 px-6 rounded-xl hover:bg-gray-700'
						type='button'
					>
						Отмена
					</button>
					<button
						disabled={isSubmitting}
						className='bg-yellow-300 text-black border border-gray-500 py-3 px-6 rounded-xl hover:bg-yellow-400'
						type='submit'
					>
						{isSubmitting ? 'В процессе' : 'Создать'}
					</button>
				</div>
			</form>
		</div>
	)
}
