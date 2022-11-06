import { Typography, Container } from '@mui/material';
import React from 'react';
import { NavBar } from '../../components/NavBar/NavBar';
import { Section } from '../../components/Section/Section';

export const Home: React.FC = () => {
	return (
		<Container
			maxWidth={false}
			sx={{
				display: 'flex',
				minHeight: '100vh',
				flexDirection: 'column',
				padding: '0px !important',
			}}
		>
			<NavBar />
			<Container>
        <Section sectionId={'primera-seccion'} />
			</Container>
		</Container>
	);
};
