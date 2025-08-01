import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import RedirectHandler from "@/pages/RedirectHandler";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:redirectlink",
    element: <RedirectHandler />,
  },
  {
    path: "/not-found",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
