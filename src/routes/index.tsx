import { RouteObject } from 'react-router-dom';
import Index from '@/pages/index';
import Form from '@/pages/form';

export default [
  {
    path: '/',
    children: [{ index: true, element: <Index /> }],
  },
  {
    path: '/form',
    children: [{ index: true, element: <Form /> }],
  },
] as RouteObject[];
