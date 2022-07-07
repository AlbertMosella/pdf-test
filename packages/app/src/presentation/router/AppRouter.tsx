import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Machines} from '../pages/Machines';
import {Products} from '../pages/Products';
import {MACHINES_ROUTE, PRODUCTS_ROUTE} from './routes';
import React from 'react';
import {PageNotFound} from '../pages/PageNotFound';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MACHINES_ROUTE} element={<Machines />} />
        <Route path="/" element={<Machines />} />
        <Route path={PRODUCTS_ROUTE} element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
