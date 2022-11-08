import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServicesData from "../../Pages/AllServicesData/AllServicesData";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

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
                element: <AllServicesData></AllServicesData>,
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
]);
