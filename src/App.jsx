import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";

const router = createBrowserRouter([    //createBrowserRouter is used to create a router object with the routes
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,   //errorElement is used to render the ErrorPage component when the route is not found
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;
