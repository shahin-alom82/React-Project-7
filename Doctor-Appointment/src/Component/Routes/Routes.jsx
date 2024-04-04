import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorElement from "../ErrorElement/ErrorElement";
import Home from "../Home/Home";
import Login from "../Login/Login";
import About from "../About/About";
import Register from "../Register/Register";
import DetailsCart from "../DetailsCart/DetailsCart";
import PrivateRoute from "../Provider/PraivateRoute/PraivateRoute";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,

        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/service.json"),
            },
            {
                path: "/about",
                element: <PrivateRoute><About></About></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registation",
                element: <Register></Register>,
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><DetailsCart></DetailsCart></PrivateRoute>,
                loader: () => fetch("/service.json"),
            },
        ]
    }
])



export default router;