import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';

export const NavBar = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography>Test</Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};