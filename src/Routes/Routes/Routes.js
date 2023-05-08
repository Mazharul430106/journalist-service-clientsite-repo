import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/Add Service/AddService";
import AddReview from "../../Pages/AddReview/AddReview";
import AllServicesData from "../../Pages/AllServicesData/AllServicesData";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyReviews from "../../Pages/ServiceDetails/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/service',
                element: <PrivateRoutes><AllServicesData></AllServicesData></PrivateRoutes>,
                loader: () => fetch('https://jurnalist-service-server-site.vercel.app/services')
            },
            {
                path: '/service/:id',
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://jurnalist-service-server-site.vercel.app/services/${params.id}`)
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            {
                path: '/addreview/:id',
                element: <AddReview></AddReview>,
                loader: ({ params }) => fetch(`https://jurnalist-service-server-site.vercel.app/services/${params.id}`)
            },
            {
                path: '/updateReview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            }


        ]
    }
]);
