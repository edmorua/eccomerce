import React from 'react';
import { Box, Typography } from '@mui/material';

const MainSection = () => {
	return (
		<Box>
			<Typography>Main Section</Typography>
		</Box>
	);
};

const SecondarySection = () => {
  return (
    <Box>
      <Typography> Secondary Section</Typography>
    </Box>
  )
}

export type SectionProps = {
  sectionId: string;
};

export const Section = (props: SectionProps) => {
  const { sectionId } = props;
	return (
		<Box id={sectionId}>
			<MainSection />
			<SecondarySection />
		</Box>
	);
};
