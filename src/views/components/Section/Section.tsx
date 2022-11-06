import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'

const ItemCard = () => {
	return (
		<Card variant='outlined'>
			<CardContent>
				<Typography> word of the day</Typography>
			</CardContent>
		</Card>
	)
}

const MainSection = () => {
	return (
		<Box sx={{ width: '50%', minHeight: '500px', backgroundColor: '#B9E0FF' }}>
			<ItemCard />
		</Box>
	)
}

const SecondarySection = () => {
	return (
		<Box
			sx={{
				width: '50%',
				minHeight: '500px',
				backgroundColor: 'rgb(141, 158, 255)',
			}}
		>
			<Typography> Secondary Section</Typography>
		</Box>
	)
}

export type SectionProps = {
	sectionId: string
}

export const Section = (props: SectionProps) => {
	const { sectionId } = props
	return (
		<Box id={sectionId} sx={{ display: 'flex', flexDirection: 'row' }}>
			<MainSection />
			<SecondarySection />
		</Box>
	)
}
