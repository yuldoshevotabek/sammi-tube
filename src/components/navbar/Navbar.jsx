import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'
import { SearchBar } from '../'
import { colors } from '../../constants/colors'
import { logo } from '../../constants/logo'

const Navbar = () => {
	return (
		<Stack
			direction={'row'}
			justifyContent={'space-between'}
			alignItems={'center'}
			p={2}
			sx={{
				position: 'sticky',
				top: 0,
				background: colors.primary,
				zIndex: 999,
			}}
		>
			<Link to={'/'}>
				<img src={logo} alt='logo' width={120} />
			</Link>
			<SearchBar />
			<Box />
		</Stack>
	)
}

export default Navbar
