import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import DetailsCart from "../DetailsCart/DetailsCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/job.json")
      },
      {
        path: "/details/:id",
        element: <DetailsCart></DetailsCart>,
        loader: () => fetch("/job.json")
      },
      {
        path: "/AppliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/job.json')
      },
    ]
  },
]);
export default router