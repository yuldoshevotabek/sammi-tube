import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Category, Videos } from '../'
import { colors } from '../../constants/colors'
import { ApiServis } from '../../service/api.service'

const Main = () => {
	const [selectedText, setSelectedText] = useState('New')
	const [videos, setVideos] = useState([])
	const selectedHandle = category => setSelectedText(category)

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await ApiServis.fetching(
					`search?part=snippet&q=${selectedText}`
				)
				setVideos(data.items)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [selectedText])

	return (
		<Stack>
			<Category selectedHandle={selectedHandle} selectedText={selectedText} />
			<Box p={2} sx={{ height: '90vh' }}>
				<Container maxWidth={'90%'}>
					<Typography variant='h4' fontWeight={'bold'} mb={2}>
						{selectedText}
						<span style={{ color: colors.secondary }}> videos</span>
					</Typography>
					<Videos videos={videos} />
				</Container>
			</Box>
		</Stack>
	)
}

export default Main
