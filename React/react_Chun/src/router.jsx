import { createBrowserRouter } from "react-router-dom";
//import HomeProduct from "./product/HomeProduct";
import ProductDetail from "./product/ProductDetail";
import Login from "./Login";
import Admin from "./product/Admin";
import Home from "./pages/Home";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/product/:productId",
        element: <ProductDetail/>,
        children: [
            // {
            //     path: "/posts/9",
            //     element: <PostDetail/>,
            // },
        ],
    },
        {
        path: "/admin",
        element: <Admin isAdmin={false}/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);
export {router};