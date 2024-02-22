import { ProtectedRoute } from "Components/Atoms/ProtectedRoute";
import { AboutYou } from "Components/Pages/AboutYou";
import { AdminDashboard } from "Components/Pages/AdminDashboard";
import { Brands } from "Components/Pages/Brands";
import { ChallengePreview } from "Components/Pages/ChallengePreview";
import { CreateChallenge } from "Components/Pages/CreateChallenge";
import { Creators } from "Components/Pages/Creators";
import { Dashboard } from "Components/Pages/Dashboard";
import { ForgetPassword } from "Components/Pages/ForgetPassword";
import { Home } from "Components/Pages/Home";
import { Login } from "Components/Pages/Login";
import { Register } from "Components/Pages/Register";
import { RegisterSocials } from "Components/Pages/RegisterSocials";
import { SetUpChallenge } from "Components/Pages/SetUpChallenge";
import { EditBrandProfile, ManageSocials, PersonalInfo } from "Components/Pages/Settings";
import { SignUp } from "Components/Pages/SignUp";
import { SettingsTemplate } from "Components/Templates/SettingsTemplate";
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
      <Route
        path="about-you"
        element={
          <ProtectedRoute>
            <AboutYou />
          </ProtectedRoute>
        }
      />
      <Route
        path="register"
        element={
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        }
      />
      <Route path="register-socials" element={<RegisterSocials />} />
      <Route path="login" element={<Login />} />
      <Route path="forget-password" element={<ForgetPassword />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="create-a-challenge" element={<CreateChallenge />} />
      <Route path="setup-challenge" element={<SetUpChallenge />} />
      <Route path="challenge-preview" element={<ChallengePreview />} />
      <Route path="admin-dashboard" element={<AdminDashboard />} />
      <Route path="settings" element={<SettingsTemplate />}>
        <Route path="" element={<PersonalInfo />} />
        <Route path="personal-info" element={<PersonalInfo />} />
        <Route path="manage-socials" element={<ManageSocials />} />
        <Route path="edit-brand-profile" element={<EditBrandProfile />} />
      </Route>
    </>
  )
);

export default Router;
