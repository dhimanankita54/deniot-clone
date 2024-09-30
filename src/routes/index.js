import HomeLayout from "../common/layout/HomeLayout";
import Home from "../container/Home";

const { useRoutes } = require("react-router")


const Router = () => {

    return useRoutes([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                { path: "", element: <Home /> }
            ]
        }
    ])
}

export default Router;