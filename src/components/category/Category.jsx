import { Stack } from '@mui/material'
import React from 'react'
import { colors } from '../../constants/colors'
import { category } from '../../constants/logo'

const Category = ({ selectedHandle, selectedText }) => {
	return (
		<Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
			{category.map(item => (
				<button
					key={item.name}
					onClick={() => {
						selectedHandle(item.name)
					}}
					className='btnContent rounded-[20px] font-[bold] capitalize flex items-center justify-around cursor-pointer bg-transparent outline-none border-none py-[7px] px-[15px] transition-all duration-300 ease-linear w-30 h-10 active:scale-95'
					style={{
						borderRadius: '0',
						background: selectedText === item.name && colors.secondary,
					}}
				>
					<span
						className={`${
							selectedText === item.name ? 'text-[#fff]' : 'text-[#76323f] '
						}`}
					>
						<item.icon />
					</span>
					<span
						className={`opacity-[1px] ${
							selectedText === item.name && 'text-white'
						}`}
					>
						{item.name}
					</span>
				</button>
			))}
		</Stack>
	)
}

export default Category
