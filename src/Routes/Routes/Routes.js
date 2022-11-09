import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AllServicesData from "../../Pages/AllServicesData/AllServicesData";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import DisplayReviews from "../../Pages/ServiceDetails/DisplayReviews";
import MyReviews from "../../Pages/ServiceDetails/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
                path: '/service/:id',
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
            },
            
            {
                path: '/addreview/:id',
                element: <AddReview></AddReview>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }
            
        ]
    }
]);
