import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login/login";
import Signup from "./Components/Signup/signup";
import Error from "./Components/error";
import Logout from "./Components/logout";

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <Error />
        },
        {
            path: '/login',
            element: <Login />,
            errorElement: <Error />
        },
        {
            path: '/signup',
            element: <Signup />,
            errorElement: <Error />
        },
        {
            path: '/logout',
            element: <Logout />,
            errorElement: <Error />
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}