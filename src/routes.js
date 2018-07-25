import React from 'react';
import { Test } from './views/Test/test';
import { Schedule } from './views/Schedule/schedule';
export default [
  {
    path: '/',
    exact: true,
    main: () => <Test />,
  },
  {
    path: '/schedule',
    main: () => <Schedule />,
  },
];
