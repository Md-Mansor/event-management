import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Details from "../Components/Details/Details";
import LogIn from "../Components/LogIn/LogIn";
import Register from "../Components/Register/Register";
import Error from "../Components/Error/Error";
import Private from "../Components/Private/Private";
import History from "../Components/Purches/History";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
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
                path: '/history',
                element: <Private> <History></History> </Private>
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
                element: <Private> <Details></Details> </Private>,
                loader: () => fetch('/Api.json')
            }
        ]

    }
])

export default Router;