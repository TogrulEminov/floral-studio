import About from "../Pages/About/About";
import AddForm from "../Pages/Add/AddForm";
import Home from "../Pages/Home/Home";
import MainRoot from "../Pages/MainRoot";
import NotFound from "../Pages/NotFound/NotFound";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Pricing from "../Pages/Pricing/Pricing";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "add",
                element: <AddForm />
            },
            {
                path: "pricing",
                element: <Pricing />
            },
            {
                path: "portfolio",
                element: <Portfolio />
            },

            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]