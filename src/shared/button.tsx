import { FC, HTMLProps } from 'react'

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
	text: string | undefined
	type: 'button' | 'reset' | 'submit'
	width?: string | number
	onClick?: React.MouseEventHandler
}

export const ButtonMain: FC<IButtonProps> = ({
	text,
	width,
	onClick,
	type,
}) => (
	<button
		onClick={onClick}
		className={`border border-gray-400 text-black rounded-lg text-base h-12 ${width} p-2 text-white bg-yellow-300 font-robotoLight hover:bg-yellow-500 active:bg-yellow-700`}
		type={type}
	>
		{text}
	</button>
)
