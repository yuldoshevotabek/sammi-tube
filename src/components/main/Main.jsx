import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const Main = () => {
	return (
		<Box>
			<Link to={'/channel'}>
				<Button>Channel</Button>
			</Link>
		</Box>
	)
}

export default Main
