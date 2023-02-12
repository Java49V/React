import { NavigatorProps } from './NavigatorProps';

export const productsConfig: NavigatorProps = {
  cssClassName: 'product-list',
  routeItems: [
    { routPath: '/products/dairy', label: 'Dairy Products' },
    { routPath: '/products/bread', label: 'Bread Products' },
  ],
};
