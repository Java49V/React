import { IconButtonClassKey } from '@mui/material';
import { ReactNode } from 'react';

export type NavigatorProps = {
  routers: Array<RoutersProps>;
};
export type RoutersProps = {
  path: string;
  label: string;
  flAdmin: boolean;
  flAuth: boolean;
  icon?: ReactNode;
};