import { lazy } from 'react';

export const Button = lazy(() => import('../components/Button'));
export const CoffeeListItem = lazy(() => import('../components/CoffeeListItem'));
export const Header = lazy(() => import('../components/Header'));
export const Footer = lazy(() => import('../components/Footer'));
export const Layout = lazy(() => import('../components/Layout'));

export const MainPage = lazy(() => import('../pages/MainPage'));
export const DetailPage = lazy(() => import('../pages/DetailPage'));
export const FavoritePage = lazy(() => import('../pages/FavoritePage'));
