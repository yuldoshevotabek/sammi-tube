import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'
import { colors } from '../../constants/colors'

const SearchBar = () => {
	return (
		<Paper
			component={'form'}
			sx={{ border: `solid 1px ${colors.secondary}`, pl: 2, boxShadow: 'none' }}
		>
			<input
				type='text'
				placeholder='Search...'
				className='border-none outline-none w-[350px] font-[500]'
			/>
			<IconButton>
				<Search />
			</IconButton>
		</Paper>
	)
}

export default SearchBar
