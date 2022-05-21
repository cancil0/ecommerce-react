import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import useToken from "../hooks/useToken";
//import Redirect from './Redirect';

const Home = lazy(() => import("./home/Home"));
const Login = lazy(() => import("./login/Login"));
const ForgotPassword = lazy(() => import("./forgotpassword/ForgotPassword"));
const Product = lazy(() => import("./product/Product"));
const Option = lazy(() => import("./option/Option"));

export const Pages = () => {
  const [,setToken] = useToken();

  /*if(!token){
    return (
      <Login setToken={setToken} />
    );
  }*/

  return (
    <Routes>
      {/* <Route path="/" element={<Redirect token={token} />} /> */}
      <Route path="/" element={<Home />} />

      <Route path="/options" element={<Option />} />

      <Route path="/login" element={<Login setToken={setToken} />}>
        <Route path="forgotpassword" element={<ForgotPassword />} />
      </Route>
      
      <Route path="/home" element={<Home />}>
        <Route path=":categoryId" element={<Home />} />
      </Route>
      
      <Route path="/products/:productId" element={<Product />} />
    </Routes>
  );
};
