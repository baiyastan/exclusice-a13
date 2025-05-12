import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";

const myRouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "wishlist",
                element: <Wishlist/>
            }
        ]
    }
])

export default myRouter