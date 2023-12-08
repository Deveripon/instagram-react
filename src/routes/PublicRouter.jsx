import Layouts from "../components/Layouts/Layouts";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login";
import ResetPassword from "../pages/Auth/ResetPassword";
import SignUp from "../pages/Auth/SignUp";

const publicRouter = [
    {
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Auth />,
            },
            {
                path: "/accounts/sign-up",
                element: <SignUp />,
            },
            {
                path: "/accounts/login",
                element: <Login />,
            },
            {
                path: "/accounts/password/reset/",
                element: <ResetPassword />,
            },
        ],
    },
];
export default publicRouter;
