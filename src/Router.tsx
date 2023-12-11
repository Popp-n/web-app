import { Brands } from "Components/Pages/Brands";
import { Creators } from "Components/Pages/Creators";
import { Home } from "Components/Pages/Home";
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
    </>
  )
);

export default Router;
