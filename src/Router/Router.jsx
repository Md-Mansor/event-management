import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Features from "../Components/Features/Features";
import Details from "../Components/Details/Details";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Api.json')

            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: () => fetch('Api.json')
            }
        ]

    }
])

export default Router;