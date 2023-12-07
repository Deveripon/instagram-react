import Layouts from "../components/Layouts/Layouts";
import Auth from "../pages/Auth/Auth";

const publicRouter = [
    {
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Auth />,
            },
        ],
    },
];
export default publicRouter;
