import Layouts from "../components/Layouts/Layouts";
import Home from "../pages/Home/Home";

const privetRouter = [
    {
        element: <Layouts />,
        children: [
            {
                path: "/feed",
                element: <Home />,
            },
        ],
    },
];
export default privetRouter;
