import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/SearchPage";
import AboutPage from "../pages/AboutPage";
import ArticlesPage from "../pages/ArticlesPage";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPagePage/>
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