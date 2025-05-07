import { Box, Button } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router'

const Channel = () => {
	const parse = useParams()
	console.log(parse)

	return (
		<Box>
			<Link to={'/'}>
				<Button>Main</Button>
			</Link>
		</Box>
	)
}

export default Channel
