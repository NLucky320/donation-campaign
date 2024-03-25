import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import DonationDetails from "../Pages/DonationDetails";
import Donation from "../Pages/Donation";

const router = createBrowserRouter([
  {
    path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error> ,
        children: [ 
       
            {
                path: '/',
                element: <Home></Home>
       },
            {
    path: '/donation',
    element: <Donation></Donation>
  },
  {
    path: '/statistics',
    element: <div>stat</div>
            },
   {
        path: "/donation-details/:id",
        element: <DonationDetails></DonationDetails>
      },
     ]
  },
  

]);
export default router;