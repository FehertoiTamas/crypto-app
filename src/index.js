import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Cryptocurrencies from './pages/Cryptocurrencies';
import About from './pages/About';
import ShowCoin from './pages/ShowCoin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cryptocurrencies",
        element: <Cryptocurrencies />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/SingleCoin/:id",
        element: <ShowCoin />
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);