import { Box } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router'
import { Channel, Main, Navbar, Search, VideoDetail } from '../'

const App = () => {
	return (
		<Box>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/channel/:id' element={<Channel />} />
				<Route path='/search/:id' element={<Search />} />
				<Route path='/video/:id' element={<VideoDetail />} />
			</Routes>
		</Box>
	)
}

export default App
