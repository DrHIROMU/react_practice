import React from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Mainframe from "./components/mainframe";
import Home from "./pages/home";
import VendorInfo from "./pages/vendor/info";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "app",
      element: <Mainframe />,
      children: [
        { path: "home", element: <Home /> },
        { path: "vendor/info", element: <VendorInfo /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
