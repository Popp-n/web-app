import App from "App";
import { GlobalStyle } from "Styles/GlobalStyles";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Component
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <GlobalStyle />
          <App />
        </>
      }
    ></Route>
  )
);

export default Router;
