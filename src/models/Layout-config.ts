import { NavigatorProps } from './NavigatorProps';

export const LayoutConfig: NavigatorProps = {
  cssClassName: 'layout-list',
  routeItems: [
    { routPath: '/', label: 'Home' },
    { routPath: '/customers', label: 'Customers' },
    { routPath: '/orders', label: 'Orders' },
    { routPath: '/products', label: 'Products' },
  ],
};
