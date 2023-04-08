import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './components/navbar/Navbar.component';
import MainPage from './pages/mainpage/Main.page'
import LoginPage from './pages/loginpage/login.page'
import CategoryPage from './pages/categorypage/category.page'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import store from './redux/store'
import { Provider } from 'react-redux'
import CheckoutPage from './pages/checkoutpage/checkout.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><MainPage /></App>,
  },
  {
    path: "/login",
    element: <App><LoginPage /></App>,
  },
  {
    path: "/checkout",
    element: <App><CheckoutPage /></App>,
  },
  {
    path: "shop/:category",
    element: <App><CategoryPage/></App>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
