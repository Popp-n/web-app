import { AboutYou } from "Components/Pages/AboutYou";
import { Brands } from "Components/Pages/Brands";
import { Creators } from "Components/Pages/Creators";
import { ForgetPassword } from "Components/Pages/ForgetPassword";
import { Home } from "Components/Pages/Home";
import { Login } from "Components/Pages/Login";
import { Register } from "Components/Pages/Register";
import { RegisterSocials } from "Components/Pages/RegisterSocials";
import { SignUp } from "Components/Pages/SignUp";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Component
const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={<Home />}
        errorElement={<h2>Can't find this page</h2>}
      />

      <Route path="creators" element={<Creators />} />
      <Route path="brands" element={<Brands />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="about-you" element={<AboutYou />} />
      <Route path="register" element={<Register />} />
      <Route path="register-socials" element={<RegisterSocials />} />
      <Route path="login" element={<Login />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="dashboard" element={<DashboardTemplate />} />
    </>
  )
);

export default Router;
