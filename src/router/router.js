import MainPage from '../pages/mainpage/Main.page'
import LoginPage from '../pages/loginpage/login.page'
import CategoryPage from '../pages/categorypage/category.page'
import CheckoutPage from '../pages/checkoutpage/checkout.page';
import App from '../App';
import {
  createBrowserRouter
} from "react-router-dom";

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
    {
      path: "*",
      element: <App><MainPage/></App>,
    },
  
]);

export default router