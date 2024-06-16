import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Shedules from "./pages/Shedules";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path:"/",
          element:<Dashboard />
        },
        {
          path:"/shedules",
          element:<Shedules />
        }
      ]
    },
  ]);