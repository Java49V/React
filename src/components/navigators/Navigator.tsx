import { NavigatorProps } from '../../model/NavigatorProps';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppBar, Box, Tab, Tabs } from '@mui/material';

export const Navigator: React.FC<NavigatorProps> = ({ routers }) => {
  const [tabNumber, setTabNumber] = React.useState(0);
  function changeTabNumber(event: any, newNumber: number) {
    setTabNumber(newNumber);
  }
  return (
    <Box sx={{ marginTop: '5vh' }}>
      <AppBar sx={{ backgroundColor: 'lightblue' }}>
        <Tabs value={tabNumber} onChange={changeTabNumber}>
          {routers.map((router, index) => (
            <Tab
              component={Link}
              to={'/' + router.path}
              label={router.label}
              key={index}
            ></Tab>
          ))}
        </Tabs>
      </AppBar>
      <Outlet></Outlet>
    </Box>
  );
};
