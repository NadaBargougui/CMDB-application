import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux"; ///////////
import { store } from "./store/store"; ///////////
import { createBrowserRouter, RouterProvider } from "react-router-dom"; ///////////

import Landing from "./pages/landing/landing";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Notfound from "./pages/notfound/notfound";
import Home from "./pages/home/home";
import DashboardPage from "./pages/dashboard/dashboard"; 

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "*", element: <Notfound /> },
  { path: "/home", element: <Home /> },
  { path: "/dashboard/:region/:name", element: <DashboardPage /> }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
