import { lazy } from 'react';

export const mainRoutes = [
  {
    name: 'Library',
    exact: false,
    path: '/library',
    component: lazy(() => import('../pages/LibraryPage')),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: 'Training',
    exact: false,
    path: '/training',
    component: lazy(() => import('../pages/TrainingPage')),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: 'Register',
    exact: false,
    path: '/register',
    component: lazy(() => import('../pages/AuthPages/RegisterPage')),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: 'Login',
    exact: false,
    path: '/login',
    component: lazy(() => import('../pages/AuthPages/LoginPage')),
    isPrivate: false,
    isRestricted: true,
  },
];
