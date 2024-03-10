import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login/login";
import Signup from "./Components/Signup/signup";
import Error from "./Components/error";
import Logout from "./Components/logout";
import Create from "./Components/Create/create";
import Delete from "./Components/delete";
import Edit from "./Components/Edit/edit";

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
        },
        {
            path: '/create',
            element: <Create/>,
            errorElement: <Error />,
        },
        {
            path: '/delete/:blogid',
            element: <Delete/>,
            errorElement: <Error />,
        },
        {
            path: '/edit/:blogid',
            element: <Edit/>,
            errorElement: <Error />,
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}