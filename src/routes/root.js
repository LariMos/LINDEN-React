import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import AboutPage from "../pages/AboutPage";
import ArticlesPage from "../pages/ArticlesPage";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>
    }  
    {
      path: "/search",
      element: <SearchPage/>
    },
    {
        path: "/about",
        element: <AboutPage/>
    },
    {
      path: "/articles",
      element: <ArticlesPage/>
    }

  ]);
  export default router;