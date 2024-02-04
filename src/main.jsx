import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/About.jsx";
import Layout from "./components/layout/layout.jsx";
import Product from "./pages/product/Product.jsx";
import Service from "./pages/services/Service.jsx";
import Home from "./pages/home/Home.jsx";
import ProductDetail from "./pages/product/ProductDetail.jsx";
import SignUp from "./pages/auth/SignUp.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import CartItems from "./pages/cartItem/CartItems.jsx";

// create router DOM
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "app",
        element: <App />,
      },
      {
        path: "/cart-items",
        element: <CartItems />,
      },
      {
        path: "/detail",
        element: <ProductDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Sharing store all in application our react */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
