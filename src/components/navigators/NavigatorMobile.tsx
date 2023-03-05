import { Box } from '@mui/material';
import React from 'react';
import { NavigatorProps } from '../../models/NavigatorProps';
import { TemporaryDraw } from '../common/TemporaryDrower';
import { Outlet } from 'react-router-dom';

export const NavigatorMobile: React.FC<NavigatorProps> = ({ routers }) => {
  return (
    <Box sx={{ marginTop: { xs: '15vh', sm: '20vh' } }}>
      <TemporaryDraw routes={routers} />
      <Outlet></Outlet>
    </Box>
  );
};