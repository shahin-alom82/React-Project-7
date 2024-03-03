import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import DonationDetails from "../DonationDetails/DonationDetails";
import DonationDone from "../DonationDone/DonationDone";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/donation.json"),
            },
            {
                path: "/donation/:id",
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch("/donation.json"),
            },
            {
                path: "/donationDone",
                element: <DonationDone></DonationDone>,
                loader: () => fetch("/donation.json")

            }
        ]
    },
]);
export default router;