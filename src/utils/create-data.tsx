export const createDate = (data: string) => {
	const date = new Date(data)

	const formatedData = (data: number) => {
		if (data < 10) {
			return '0' + data
		} else return data
	}
	const formatMonth = (data: number) => {
		if (data === 1) {
			return '01'
		} else if (data === 2) {
			return '02'
		} else if (data === 3) {
			return '03'
		} else if (data === 4) {
			return '04'
		} else if (data === 5) {
			return '05'
		} else if (data === 6) {
			return '06'
		} else if (data === 7) {
			return '07'
		} else if (data === 8) {
			return '08'
		} else if (data === 9) {
			return '09'
		} else if (data === 10) {
			return '10'
		} else if (data === 11) {
			return '11'
		} else if (data === 12) {
			return '12'
		}
	}
	// const formatMonth = (data: number) => {
	// 	if (data === 1) {
	// 		return 'янв.'
	// 	} else if (data === 2) {
	// 		return 'фев'
	// 	} else if (data === 3) {
	// 		return 'март'
	// 	} else if (data === 4) {
	// 		return 'апр.'
	// 	} else if (data === 5) {
	// 		return 'май'
	// 	} else if (data === 6) {
	// 		return 'июнь'
	// 	} else if (data === 7) {
	// 		return 'июль'
	// 	} else if (data === 8) {
	// 		return 'авг.'
	// 	} else if (data === 9) {
	// 		return 'сент.'
	// 	} else if (data === 10) {
	// 		return 'окт.'
	// 	} else if (data === 11) {
	// 		return 'нояб.'
	// 	} else if (data === 12) {
	// 		return 'дек.'
	// 	}
	// }

	const day = formatedData(date.getDate())
	const month = formatMonth(date.getMonth() + 1)
	const year = date.getFullYear()

	const formatNearDate = () => {
		return day + '.' + month + '.' + year
	}

	const formattedDate = formatNearDate()

	return formattedDate
}
